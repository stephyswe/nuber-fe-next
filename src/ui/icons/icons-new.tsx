export function SvgIcon({ size, color, type }: any) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 16 16'
      width={iconSize(size)}
      height={iconSize(size)}
      fill={color}
      className='flex-none'
    >
      <path fillRule='evenodd' clipRule='evenodd' d={iconType(type)}></path>
    </svg>
  );
}

export function SvgIconCartWindow({ size, color }: any) {
  return (
    <svg
      aria-hidden='true'
      focusable='false'
      viewBox='0 0 16 16'
      width={iconSize(size)}
      height={iconSize(size)}
      fill={color}
      className='flex-none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z'
      ></path>
    </svg>
  );
}

function iconType(type: string) {
  switch (type) {
    case 'cart-window':
      return 'M3.666 11.333h10.333l1.334-8h-11l-.267-2h-3.4v2h1.667l1.333 8zm1.333 3.334A1.333 1.333 0 105 12a1.333 1.333 0 000 2.667zm9.334-1.334a1.333 1.333 0 11-2.667 0 1.333 1.333 0 012.667 0z';

    default:
      break;
  }
}

function iconSize(size: string) {
  let setSize = '16';
  if (size === 'small') setSize = '14';
  if (size === 'lg') setSize = '44';
  return setSize;
}
