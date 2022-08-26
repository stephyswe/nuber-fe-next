import { windowCheck } from '@/lib/apollo';

import { LinkLogin, LinkSignup } from '@/components/links/NavLink';

import { LOCALSTORAGE_TOKEN } from '@/constant/env';
import { useDelivery } from '@/contexts';
import { Spacer } from '@/ui';
import { Cart } from '@/ui/cart';
import { NavItemDelivery, NavItemSearch } from '@/ui/layout/nav/items';
import { DiningToggler } from '@/ui/toggler';

export function NavbarDiningContent() {
  let auth;
  if (windowCheck) {
    auth = localStorage.getItem(LOCALSTORAGE_TOKEN ? LOCALSTORAGE_TOKEN : '');
  }

  const { isComplete } = useDelivery();
  if (auth)
    return (
      <>
        <Spacer className='w-10' />
        {isComplete ? <DiningToggler /> : null}
        <Spacer className='w-4' />
        <NavItemDelivery />
        <Spacer className='w-16' />
        <NavItemSearch />
        <Spacer className='w-6' />
        <Cart />
      </>
    );

  return (
    <>
      <Spacer className='w-10' />
      <DiningToggler />
      <Spacer className='w-4' />
      <NavItemDelivery />
      <Spacer className='w-16' />
      <NavItemSearch />
      <Spacer className='w-4' />
      <div className='flex flex-grow-0 items-center justify-end'>
        <Spacer className='w-4' />
        <Cart size='small' />
        <Spacer className='w-4' />
        <LinkLogin title='Log in' size='small' />
        <Spacer className='w-4' />
        <LinkSignup size='small' />
      </div>
    </>
  );
}
