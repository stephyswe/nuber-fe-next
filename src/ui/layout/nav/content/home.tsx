import clsx from 'clsx';

import { useWindowSizeJs } from '@/hooks/useWindowSizeJs';

import { ButtonInput } from '@/components';
import { LinkLogin, LinkSignup } from '@/components/links/NavLink';

import { navHomeData } from '@/constant/pages/layout/nav-home.data';
import { Spacer } from '@/ui';
import { SvgMap } from '@/ui/icons';

export const NavHomeContent = ({ onScroll, change }: any) => {
  const { isMobile } = useWindowSizeJs();
  const { auth } = navHomeData;

  if (isMobile) {
    return (
      <>
        {!change ? (
          <>
            <div className={clsx('relative w-full max-w-[722px]')}></div>
            <div className='flex-1'></div>
            <AuthContent data={auth} change={change} />
          </>
        ) : (
          <div className='w-full'>
            <ButtonInput
              svg={<SvgMap />}
              placeholder='Ange leveransadress'
              className='bg-[#eee]'
              innerClassName='bg-[#eee]'
            />
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className={clsx('relative w-full max-w-[722px]')}>
        <NavButtonInput onScroll={onScroll} />
      </div>
      <div className='flex-1'></div>
      <Spacer className='w-6' />
      <AuthContent data={auth} change={change} />
    </>
  );
};

export const NavButtonInput = ({ onScroll }: any) => (
  <div
    style={{
      transformOrigin: 'left',
      transition: 'transform 500ms',
      transform: `${onScroll ? 'scaleX(1)' : 'scaleX(0)'}`,
    }}
    className='flex-1'
  >
    {onScroll ? (
      <ButtonInput
        svg={<SvgMap />}
        placeholder='Ange leveransadress'
        className='bg-[#eee]'
        innerClassName='bg-[#eee]'
      />
    ) : null}
  </div>
);

type AuthContentProps = {
  data: {
    register: { title: string; link: string };
    login: { title: string; svg: JSX.Element; link: string };
  };
  change: boolean;
};

const AuthContent = ({
  data: { login, register },
  change,
}: AuthContentProps) => (
  <>
    <LinkLogin
      textHidden
      title={login.title}
      className={clsx(
        'bg-white p-[12px_14px] text-black hover:bg-[#ccc] md:p-[auto]',
        change ? 'box-shadow-rgb-double ' : ''
      )}
    />
    <Spacer className='w-[60px] md:w-4' />
    <LinkSignup
      title={register.title}
      className={clsx(
        'bg-black text-white hover:bg-[#333]',
        change ? 'box-shadow-rgb-double ' : ''
      )}
    />
  </>
);
