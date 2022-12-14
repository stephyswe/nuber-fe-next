import { Fragment } from 'react';

import { Button } from '@/components';

import { deliveryData, storeData } from '@/pages/_app/items/store';
import { deliveryContentData } from '@/pages/client/dining/delivery/components/content/data';
import {
  DeliveryContentItemProps,
  DeliveryContentProps,
  DeliveryContentSectionProps,
  DeliveryContentSectionStarterProps,
  DeliveryRestaurantListProps,
} from '@/pages/client/dining/delivery/components/content/types';
import { Headline, HeadlineArrows, Spacer } from '@/ui';
import { StoreItemDefault } from '@/ui/store/item';

/**
 * Top-level - Content Component
 * @returns The content of the page
 * @constructor
 * @param {Object} props - The props passed to the component
 */
export const DeliveryContent = () => (
  <div className='ml-0 mb-6 box-border block w-[75%] flex-none px-3'>
    <div>
      <Spacer className='h-12' />
      <div data-test='feed-desktop' className='grid grid-cols-3 gap-6'>
        {deliveryContentData.map(
          (
            { title, subtitle, type, btnText, image }: DeliveryContentProps,
            index
          ) => (
            <Fragment key={index}>
              {checkType(type, title, subtitle, btnText, image)}
            </Fragment>
          )
        )}
        {storeData.map((item, index) => (
          <div key={index} className='min-w-0'>
            <StoreItemDefault {...item} />
          </div>
        ))}
      </div>
      <div className='item-center m-4 flex justify-center'>
        <Button variant='btnLg3'>Show more</Button>
      </div>
    </div>
  </div>
);

const DeliveryContentSectionStarter = ({
  title,
  subtitle,
  btnText,
  image,
}: DeliveryContentSectionStarterProps) => (
  <DeliveryContentSection
    content={
      <>
        <Headline title={title} subtitle={subtitle} noArrow />
        {btnText && (
          <Button
            variant='btnCart'
            size='small'
            className='h-[36px] bg-black p-[8px_12px] text-white rounded-500'
          >
            {btnText}
          </Button>
        )}
      </>
    }
    image={image}
  />
);

const DeliveryContentItem = ({ title, subtitle }: DeliveryContentItemProps) => (
  <div className='col-span-full min-w-0'>
    <section>
      <Headline title={title} subtitle={subtitle} />
      <div className='scrollbar-none flex overflow-x-scroll scroll-snap-x'>
        <DeliveryRestaurantList />
        <DeliveryRestaurantList />
      </div>
    </section>
  </div>
);

const DeliveryRestaurantList = () => (
  <div className='mr-6 flex w-full flex-shrink-0 flex-grow-0 basis-full scroll-align-start'>
    {deliveryData.map((item: any, index: number) => (
      <li key={index} className='mr-6 block w-[calc(25%+-18px)] flex-none'>
        <StoreItemDefault {...item} />
      </li>
    ))}
  </div>
);

export const DeliveryContentSection = ({
  content,
  image,
}: DeliveryContentSectionProps) => (
  <div className='col-span-full min-w-0'>
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className='flex min-h-[326px] items-center justify-between'
      >
        <div className='ml-8 flex flex-col items-start'>
          <Spacer className='h-12' />
          {content}
        </div>
        <div className='mr-10 w-full max-w-[668px]'>
          <section>
            <div className='relative mb-6 flex items-center justify-between'>
              <div></div>
              <HeadlineArrows />
            </div>
            <div className='scrollbar-none flex cursor-pointer overflow-x-scroll scroll-snap-x'>
              {storeData.slice(0, 3).map((item: any, index: number) => (
                <DeliverySectionList key={index} {...item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

const DeliverySectionList = (props: DeliveryRestaurantListProps) => (
  <div className='mr-6 flex w-full flex-shrink-0 flex-grow-0 basis-full scroll-align-start'>
    <DeliverySectionItem {...props} />
    <DeliverySectionItem {...props} />
  </div>
);

const DeliverySectionItem = (props: DeliveryRestaurantListProps) => (
  <li className='mr-6 block w-[calc(50%+-12px)] flex-none'>
    <div className='max-w-[326px] bg-white p-1 box-shadow-rgb-secondary'>
      <StoreItemDefault
        {...props}
        address={null}
        category={null}
        detailClassName='px-2'
      />
    </div>
  </li>
);

function checkType(
  type: string,
  title: string,
  subtitle: string | undefined,
  btnText: undefined | string,
  image: undefined | string
) {
  if (type === 'item')
    return <DeliveryContentItem title={title} subtitle={subtitle} />;
  else if (type === 'section')
    return (
      <DeliveryContentSectionStarter
        title={title}
        subtitle={subtitle}
        btnText={btnText}
        image={image}
      />
    );
}
