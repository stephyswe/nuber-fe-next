import clsx from 'clsx';

import { Link } from '@/components';

import { Spacer } from '@/ui';
import { SvgLogin } from '@/ui/icons';

export const LinkLogin = ({
  href,
  className,
  title,
  plain,
  textHidden,
  size = 'normal',
}: any) => (
  <Link
    size={size}
    variant='linkBase1'
    href={href}
    className={
      className ? className : 'bg-[#eee] hover:bg-[#ccc] active:bg-[#ddd]'
    }
  >
    {plain ? null : (
      <>
        {size === 'small' ? (
          <div className={`${size === 'small' ? '' : ''}`}>
            <SvgLogin size={size} />
          </div>
        ) : (
          <SvgLogin size={size} />
        )}

        <Spacer className='md:w-1' />
      </>
    )}

    <div
      className={clsx(
        textHidden ? 'hidden md:block' : 'md:block',
        size === 'small' ? 'text-sm' : 'text-base'
      )}
    >
      {title ? title : 'Sign in'}
    </div>
  </Link>
);

/* type LinkSignupProps = {
  title: string;
  className?: string;
  size?: LinkPropSize;
};
 */
export const LinkSignup = ({
  href,
  title,
  className,
  size = 'normal',
}: any) => (
  <Link
    size={size}
    href={href}
    variant='linkBase1'
    className={
      className ? className : 'bg-[#eee] hover:bg-[#e2e2e2] active:bg-[#ddd]'
    }
  >
    <div
      className={clsx('md:block', size === 'small' ? 'text-sm' : 'text-base')}
    >
      {' '}
      {title ? title : 'Sign up'}
    </div>
  </Link>
);
