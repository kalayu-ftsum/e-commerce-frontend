import { Region } from "@medusajs/medusa"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"
import { ProductCollectionWithPreviews } from "types/global"

export default function ProductRail({
  collection,
  region,
}: {
  collection: ProductCollectionWithPreviews
  region: Region
}) {
  const { products } = collection

  if (!products) {
    return null
  }

  return (

      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <div className="flex justify-between mb-12">
      <h2 className="text-4xl font-extrabold text-gray-800 ">{collection.title}</h2>
      <InteractiveLink href={`/collections/${collection.handle}`}>
          View all
        </InteractiveLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
        {products &&
          products.map((product) => (
            <div
            key={product.id}
            className="">
              <ProductPreview
                productPreview={product}
                region={region}
                isFeatured
              />
            </div>
          ))}
    </div>
    </div>
  )
}
