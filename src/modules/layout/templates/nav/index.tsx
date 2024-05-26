
import { listRegions, getCategoriesList, getCollectionsList } from "@lib/data"

import NavBar from "./NavBar"


export default async function Nav() {
  const { collections } = await getCollectionsList(0, 6)
  const { product_categories } = await getCategoriesList(0, 6)
  const regions = await listRegions().then((regions) => regions)
  const navItems: 
      {
        name: string
        href: string
        subItems: { name?: string; href?: string }[] | []
      }[]
     = [
    {
      name: "Home",
      href: "/",
      subItems: [],
    },
    {
      name: "Store",
      href: "/store",
      subItems: [],
    },
    {
      name: "Categories",
      href: "/",
      subItems: product_categories.map((c) => ({
        name: c.name,
        href: `/categories/${c.handle}`,
      })),
    },
    {
      name: "Collections",
      href: "/",
      subItems: collections.map((c) => ({
        name: c.title,
        href: "/collections/" + c.handle,
      })),
    },
  ]

  return (
<NavBar navItems={navItems} regions={regions}/>
  )
}
