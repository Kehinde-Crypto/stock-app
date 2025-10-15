'use client';
import { NAV_ITEMS } from  '../../lib/constant'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavItems = () => {
  const Pathname = usePathname();
  const isActive = (href:string) => {
    if (href === '/') return Pathname === '/';
    return Pathname.startsWith(href);
    } 
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
     {NAV_ITEMS.map(({href , label}) => (
      <li key={href}>
        <Link href={href} className={`hover:text-blue-400 transition-colors ${isActive(href) ? 'text-blue-400' : ''}`}>
        </Link>
      </li>  
     ))}
    </ul>
  )
}

export default NavItems