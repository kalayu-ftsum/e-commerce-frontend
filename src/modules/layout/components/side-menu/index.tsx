"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, XMark, BarsThree } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { Text, clx, useToggleState } from "@medusajs/ui"
import React, { Fragment, ReactElement, Children, cloneElement } from "react"

import CountrySelect from "../country-select"

const SideMenu = ({
  regions,
  children,
}: {
  regions: Region[] | null
  children: React.ReactNode
}) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button
                  data-testid="nav-menu-button"
                  className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base"
                >
                  <BarsThree />
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel className="flex flex-col fixed w-full pr-4 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-screen z-30 inset-x-0 inset-y-0 text-sm text-ui-fg-on-color  bg-white">
                  <div
                    data-testid="nav-menu-popup"
                    className="flex flex-col h-full bg-[rgba(3,7,18,0.5)] justify-between p-6"
                  >
                    <div className="flex justify-end" id="xmark">
                      <button data-testid="close-menu-button" onClick={close}>
                        <XMark />
                      </button>
                    </div>
                    <ul className="flex flex-col gap-6 items-start justify-start">
                      {Children.map(children, (child) => {
                        // Ensure the child is a valid React element and clone it to add the triggerAlert prop
                        if (React.isValidElement(child)) {
                          const clonedChild = cloneElement(
                            child as React.ReactElement<any>,
                            {
                              onClick: (event: React.MouseEvent) => {
                                if (
                                  child.key &&
                                  (child.key == "Categories" ||
                                    child.key == "Collections")
                                ) {
                                  console.log(child.key)
                                  const target = event.target as HTMLElement
                                  const currentTarget =
                                    event.currentTarget as HTMLElement
                                  if (
                                    target !== currentTarget &&
                                    !(
                                      target.matches("ul > li") ||
                                      target.matches("ul > li >*")
                                    )
                                  ) {
                                    return
                                  }
                                }
                                close()
                              },
                            }
                          )

                          return clonedChild
                        }
                        return child
                      })}
                    </ul>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : ""
                          )}
                        />
                      </div>
                      <Text className="flex justify-between txt-compact-small">
                        © {new Date().getFullYear()} DressUP. All rights
                        reserved.
                      </Text>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
