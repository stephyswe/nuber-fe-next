import { NextImage } from '@/components';
export type { BreadCrumbItemProps } from './breadcrumb';
export { BreadCrumb } from './breadcrumb';
export { Cart, CartDelivery, CartSearch, CartToggler } from './cart';
export { Container } from './container';
export { DynamicHero, Hero } from './hero';
export { Toggler } from './toggler';

/* maps */
export * from './loading';
export { HomeMap, MapButton } from './maps';

type SpacerProps = {
  length?: number;
  index?: number;
} & React.ComponentPropsWithRef<'div'>;

export const Spacer = ({ length, index, ...rest }: SpacerProps) => {
  if (length && index) if (length === index + 1) return null;
  return <div {...rest}></div>;
};

export const NewLogo = () => (
  <NextImage
    alt='Startsida för Uber&nbsp;Eats'
    src='/images/logo.svg'
    width='146'
    height='24'
    className='block h-6 w-auto'
  />
);

export const Separator = () => (
  <hr className='my-8 h-[1px] border-none bg-[#e2e2e2]' />
);
