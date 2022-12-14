import { Accordion, AccordionTopSec } from '@/ui/accordion';

import { ModalBuy, ModalDetail, ModalImage } from './item';

export * from './item';

export const DishModal = (props: any) => {
  const { photo, name, price, id, closeModal, options } = props;
  return (
    <div className='relative bg-white md:w-[676px]'>
      {photo && <ModalImage photo={photo} name={name} />}
      <ModalDetail price={price} name={name} />
      <ul>
        {options.map((item: any, index: any) => (
          <li key={index}>
            <Accordion data={item} dishId={id} />
          </li>
        ))}
      </ul>
      <div className='block sm:mb-8 md:hidden'>
        <AccordionTopSec />
        <div className='bg-white p-[24px_16px]'>
          <input
            placeholder='Add a note'
            type='input'
            className=' absolute outline-none'
          />
        </div>
      </div>
      <ModalBuy closeModal={closeModal} id={id} />
    </div>
  );
};
