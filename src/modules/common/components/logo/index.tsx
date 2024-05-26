import LocalizedClientLink from "@modules/common/components/localized-client-link";
import { BuildingStorefront } from "@medusajs/icons"

const Logo = () => (
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
  )

export default Logo;