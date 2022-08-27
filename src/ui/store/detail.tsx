import { Link, NextImage, Typography } from '@/components';
import { LinkIcon } from '@/components/links/LinkIcon';

import { Spacer } from '@/ui';
import { SvgPersonAdd, SvgSchedule } from '@/ui/icons';

const storeDetailData = {
  store: 'McDonalds Avenyn',
  address: 'Kungsportsavenyen 32, Gothenburg, Västra Götalands län 411 36',
  timeCost: '10–20 min • 59.00SEK i avgift',
  moreInfo: 'Tryck för att se öppettider, adress med mera',
  rating: '4.3 (100+ omdömen) • Hamburgare • $',
};

export const StoreDetail = () => {
  const { store, address, timeCost, moreInfo, rating } = storeDetailData;
  return (
    <div className='pt-6'>
      <div>
        <Typography as='h2' variant='4xl' className='leading-[36px]'>
          {store}
        </Typography>
        <div className='h-2'></div>
        <div className='flex'>
          <div>
            <StoreDetailRating rating={rating} />
            <Spacer className='h-[2px]' />
            <Typography as='p' variant='small' className='text-gray-400'>
              {address}
            </Typography>
            <Spacer className='h-[2px]' />
            <Typography as='p' variant='small' className='text-gray-400'>
              {timeCost}
            </Typography>
            <Spacer className='h-[2px]' />
            <Link href='placeholder'>
              <Typography as='p' variant='small' className='text-gray-400'>
                {moreInfo}
              </Typography>
            </Link>
          </div>
        </div>
        <div className='flex min-h-[56px] items-end'>
          <div className='relative inline-block'>
            <div className='relative z-0'>
              <LinkIcon
                href='placeholder'
                svg={<SvgPersonAdd />}
                title='Gruppbeställning'
              />
            </div>
          </div>
          <div className='w-2'></div>
          <LinkIcon
            href='placeholder'
            svg={<SvgSchedule />}
            title='Schemalägg'
          />
        </div>
      </div>
    </div>
  );
};

const StoreDetailRating = ({ rating }: any) => (
  <div className='flex'>
    <Link href='placeholder'>
      <div className='flex items-center gap-x-1'>
        <NextImage
          alt='something'
          src='/images/Star_Black_Eats_3.png'
          width='14'
          height='14'
        />
        <span className='text-sm font-medium leading-4'>{rating}</span>
      </div>
    </Link>
    <span className='inline-flex items-center text-sm font-medium leading-4 text-black'>
      &nbsp;&nbsp;•&nbsp;&nbsp;
    </span>
    <Link
      rel='nofollow'
      className='cursor-pointer text-sm font-medium leading-4 text-black underline'
      href='placeholder'
    >
      Mer information
    </Link>
  </div>
);
