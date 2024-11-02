"use client"

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {

  const pathname = usePathname();

  return (
      <ul className='md:flex-between flex w-full flex-col md:flex-row items-start gap-5'>
      {
        headerLinks.map((link) => {

          const isActive = pathname === link.route;

          return (
            <li className={`${isActive && 'text-primary-500'} flex-center p-medium-16 whitespace-nowrap`}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          )
        })
          }
    </ul>
  )
}

export default NavItems