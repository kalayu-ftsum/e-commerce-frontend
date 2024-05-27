'use client'
import { Text, clx } from "@medusajs/ui"

import { PriceType } from "../product-actions"

export default function PreviewPrice({ price }: { price: PriceType }) {
  console.log(price,'price')
  return (
    <>
       <h4 
              className={clx("text-xl text-gray-400 font-bold mt-2", {
          "text-xl text-gray-800 font-bold mt-2": price.price_type === "sale",
        })}
        data-testid="price"
       > {price.calculated_price}
       {price.price_type === "sale" && (
             <span
             className="text-gray-400 ml-2 font-medium line-through
             "> {price.original_price}</span>
      )}
        
      </h4>
    </>
  )
}
