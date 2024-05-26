"use client"
import React, { useState } from "react"
import { ChevronDownMini, ChevronUpMini } from "@medusajs/icons"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function DropDownMenuCustom({
  name,
  items,
  close,
}: {
  name: string
  items: { name?: string; href?: string }[] | []
  close?: () => void
}) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative font-[sans-serif] w-max mx-auto ml-3"
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onMouseEnter={() => setOpen(true)}
        onClick={() => {
          setOpen((prev) => !prev)
        }}
        className="flex justify-between gap-1 hover:text-blue-600/100 text-[#333] text-sm border-none outline-none bg-gray-50 max-lg:text-white max-lg:bg-inherit	 "
      >
        {name}
        {open ? <ChevronUpMini /> : <ChevronDownMini />}
      </button>
      <ul
        className={
          `${open ? "visible" : "invisible"}` +
          " absolute shadow-lg bg-gray-50 py-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto"
        }
      >
        {items.length > 0 &&
          items.map(({ name, href }) => (
            <li
              onClick={() => {
                setOpen(false)
                close ? close() : null
                console.log("clicked")
              }}
              className="py-3 hover:bg-gray-100 text-[#333] text-sm cursor-pointer text-left"
            >
              <LocalizedClientLink
                href={href?href:'/'}
                className="py-3 px-3 lg:pr-20 lg:pl-6 hover:bg-gray-100 text-[#333] text-sm cursor-pointer"
                data-testid={`${name?name.toLowerCase():''}-link`}
              >
                {name}
              </LocalizedClientLink>
            </li>
          ))}
      </ul>
    </div>
  )
}
