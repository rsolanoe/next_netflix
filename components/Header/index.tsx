import { useEffect, useState } from 'react';
import Link from 'next/link';

import * as styles from './styles';

import { BellIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import useIsScrolled from 'hooks/useIsScrolled';

const Header = (): JSX.Element => {
  const { isScrolled } = useIsScrolled();

  return (
    <header className={isScrolled ? 'bg-[#141414]' : ''}>
      <div className={styles.wrapper.header}>
        <img
          src='https://rb.gy/ulxxee'
          width={100}
          height={100}
          className='cursor-pointer object-contain'
        />

        <ul className='hidden gap-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV Shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My List</li>
        </ul>
      </div>

      <div className='flex items-center gap-4 text-sm font-light'>
        <MagnifyingGlassIcon className='hidden sm:inline h-6 w-6' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6' />
        <Link href='/account'>
          <img
            src='https://rb.gy/g1pwyx'
            alt='account'
            className='cursor-pointer rounded'
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
