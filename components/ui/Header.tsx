import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import NavItems from '../ui/NavItems';
import UserDropDown from './UserDropDown';
const Header = () => {
  return (
    <header className='sticky top-0 header'>
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image src="/assets/icon/logo.svg" alt='Signalist logo' width={140} height={32} className='h-8 w-auto cursor-pointer' />
        </Link>
        <nav className='hidden sm:block'>
          <NavItems/>
          <UserDropDown/>
        </nav>
      </div>
    </header>
  );
}

export default Header;
