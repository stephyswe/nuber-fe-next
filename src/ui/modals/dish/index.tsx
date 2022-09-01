import { Accordion } from '@/ui/accordion';

import { ModalBuy, ModalDetail, ModalImage } from './item';

export * from './item';

export function DishModal(props: any) {
  const { photo, name, price, id, closeModal, options } = props;
  return (
    <div className='relative w-[676px]'>
      {photo && <ModalImage photo={photo} name={name} />}
      <ModalDetail price={price} name={name} />
      <ul>
        {options.map((item: any, index: any) => (
          <li key={index}>
            {/*   {console.log('ac-data', item)} */}
            <Accordion data={item} dishId={id} />
          </li>
        ))}
      </ul>
      <ModalBuy closeModal={closeModal} id={id} />
    </div>
  );
}
