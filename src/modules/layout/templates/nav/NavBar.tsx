import React, { Suspense } from 'react';

import LocalizedClientLink from "@modules/common/components/localized-client-link";
import {
    User,
    Heart,
    MagnifyingGlass,
    BuildingStorefront,
    BarsThree,
    XMark,
  } from "@medusajs/icons"
  
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import DropdownMenuCustom from "./DropDownMenuCustom"

import Logo from '@modules/common/components/logo'

function NavLinks({
  navItems
}: {
  navItems:
    {
      name: string
      href: string
      subItems: { name?: string; href?: string }[] | []
    }[]
}) {
  return (
    <>
      <li className="mb-6 hidden max-lg:block">
        <LocalizedClientLink
          className="hover:text-ui-fg-base"
          href="/"
          scroll={false}
          data-testid="nav-home-link"
        >
          <div className="flex flex-row gap-y-2">
            <BuildingStorefront />
            DressUp
          </div>
        </LocalizedClientLink>
      </li>
      {navItems.map(({ name, href, subItems }) => {
        return (
          <li className="py-3 text-[#333] text-sm cursor-pointer" key={name}>
            {subItems.length > 0 ? (
              <DropdownMenuCustom name={name} items={subItems}  />
            ) : (
              <LocalizedClientLink
                href={href}
                className="py-3 px-6 hover:text-blue-600/100 text-sm cursor-pointer max-lg:text-white max-lg:pl-2"
                data-testid={`${name.toLowerCase()}-link`}
              >
                {name}
              </LocalizedClientLink>
            )}
          </li>
        )
      })}
    </>
  )
}

export default function NavBar({
    navItems,
    regions,
  }: {
    navItems: 
      {
        name: string
        href: string
        subItems: { name?: string; href?: string }[] | []
      }[],
    regions:any
  }) {
  return (
    <header className="flex bg-white border-b py-4 sm:px-8 px-6 font-[sans-serif] min-h-[80px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center lg:gap-y-2 gap-4 w-full">
        <Logo />
        <div
          id="collapseMenu"
          className="flex grow justify-center max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <ul className="lg:flex lg:gap-x-3 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <NavLinks navItems={navItems} />
          </ul>
        </div>

        <div className="flex gap-x-6 gap-y-4 ml-auto">
          <div className="flex items-center space-x-8">
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/search"
              scroll={false}
              data-testid="nav-search-link"
            >
              <MagnifyingGlass />
            </LocalizedClientLink>
          </div>
          <div className="flex items-center space-x-8">
            <span className="relative">
              <Heart />
              <span className="absolute left-auto ml-3 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                0
              </span>
            </span>

            <Suspense
              fallback={
                <LocalizedClientLink
                  className="hover:text-ui-fg-base flex gap-2"
                  href="/cart"
                  data-testid="nav-cart-link"
                >
                  <span className="relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      className="cursor-pointer fill-[#333] inline"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                        data-original="#000000"
                      ></path>
                    </svg>
                    <span className="absolute left-auto -ml-1 top-0 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                      0
                    </span>
                  </span>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
            <LocalizedClientLink
              className="hover:text-ui-fg-base"
              href="/account"
              data-testid="nav-account-link"
            >
              <User />
            </LocalizedClientLink>

            <button id="toggleOpen" className="lg:hidden">
              <SideMenu regions={regions} >
                <NavLinks navItems={navItems}  />
              </SideMenu>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}