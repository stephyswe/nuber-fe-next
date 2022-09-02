import { useRouter } from 'next/router';

import { groupBy } from '@/lib/helper';

import { StickyList } from '@/components/pages/';

import {
  useCreateOrderMutation,
  useFindRestaurantQuery,
} from '@/__generated__/graphql';
import { storeData } from '@/constant/pages/client/store.data';
import { useDelivery, useOrders } from '@/contexts/';
import { Breadcrumb, BreadcrumbItemProps, Container } from '@/ui';
import { BackgroundCover } from '@/ui/container/cover';
import { DishList } from '@/ui/dish/list';
import { StoreDetail } from '@/ui/store/detail';

export { getServerSideProps } from '@/constant/server/store.server';

type StorePageProps = {
  breadcrumb: BreadcrumbItemProps[];
};

export default function StorePage({ breadcrumb }: StorePageProps) {
  const { coverImage } = storeData;
  const { setComplete } = useDelivery();
  const { orderItems, setOrderItems } = useOrders();
  const router = useRouter();
  const { data, loading } = useFindRestaurantQuery({
    variables: { input: { restaurantId: 1 } },
    onCompleted: () => {
      setComplete(true);
    },
  });

  const [createOrderMutation, { loading: placingOrder }] =
    useCreateOrderMutation({
      onCompleted(data: any) {
        const {
          createOrder: { orderId },
        } = data;
        if (data.createOrder.ok) {
          router.push(`/client/order/${orderId}`);
        }
      },
    });

  const triggerCancelOrder = () => setOrderItems([]);

  const triggerConfirmOrder = () => {
    if (placingOrder) {
      return;
    }
    if (orderItems.length === 0) {
      alert("Can't place empty order");
      return;
    }

    createOrderMutation({
      variables: { input: { restaurantId: 1, items: orderItems } },
    });
  };

  if (loading) return <div>Loading</div>;

  const newData = data?.findRestaurant.results;

  if (newData) {
    const groupMenu = groupBy(newData.menu, 'type');
    const uniqueMenu = [
      ...new Set(newData?.menu.map((menuItem: any) => menuItem.type)),
    ];
    return (
      <main className='block'>
        <div>
          <Container>
            <Breadcrumb data={breadcrumb} />
          </Container>
          <BackgroundCover image={coverImage} />
          <Container>
            <StoreDetail />
          </Container>
          <Container>
            <div className='flex'>
              <StickyList menu={uniqueMenu} />
              <div className='w-full'>
                <Orders
                  confirm={triggerConfirmOrder}
                  cancel={triggerCancelOrder}
                />
                <ul className='m-0 mt-[24px] block p-0'>
                  {Object.keys(groupMenu).map((key: string) => (
                    <DishList key={key} groupMenu={groupMenu} groupKey={key} />
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </div>
      </main>
    );
  } else {
    return <div>no data found</div>;
  }
}

function Orders({ confirm, cancel }: { confirm: any; cancel: any }) {
  return (
    <div className='flex items-center'>
      <button onClick={confirm} className='mr-3 border bg-green-500'>
        Confirm Order
      </button>
      <button onClick={cancel} className='border bg-red-200'>
        Cancel Order
      </button>
    </div>
  );
}