import {
  PricedProduct,
  PricedVariant,
} from "@medusajs/medusa/dist/types/pricing"
import { clx } from "@medusajs/ui"

import { getProductPrice } from "@lib/util/get-product-price"
import { RegionInfo } from "types/global"

function getTotalPrice(str:string,quantity:number) {
  if (str.length === 0) return { firstChar: '', newStr: '' };

  let currency = str.charAt(0); 
  let price = parseFloat(str.substring(1))*quantity;
  
  return '' + `${currency} ${price}`;
}

export default function ProductPrice({
  product,
  variant,
  region,
  quantity=1
}: {
  product: PricedProduct
  variant?: PricedVariant
  region: RegionInfo,
  quantity:number
}) {
  const { cheapestPrice, variantPrice } = getProductPrice({
    product,
    variantId: variant?.id,
    region,
  })

  const selectedPrice = variant ? variantPrice : cheapestPrice


  if (!selectedPrice) {
    return <div className="block w-32 h-9 bg-gray-100 animate-pulse" />
  }

  const calculatedPrice=getTotalPrice(selectedPrice.calculated_price,quantity)
  const originalPrice=getTotalPrice(selectedPrice.original_price,quantity)
  

  return (
    <div className="flex flex-col text-ui-fg-base">
      <span
        className={clx("text-xl-semi", {
          "text-ui-fg-interactive": selectedPrice.price_type === "sale",
        })}
      >
        {!variant && "From "}
        <span
          data-testid="product-price"
          data-value={calculatedPrice}
        >
          {calculatedPrice}
        </span>
      </span>
      {selectedPrice.price_type === "sale" && (
        <>
          <p>
            <span className="text-ui-fg-subtle">Original: </span>
            <span
              className="line-through"
              data-testid="original-product-price"
              data-value={originalPrice}
            >
              {originalPrice}
            </span>
          </p>
          <span className="text-ui-fg-interactive">
            -{selectedPrice.percentage_diff}%
          </span>
        </>
      )}
    </div>
  )
}
