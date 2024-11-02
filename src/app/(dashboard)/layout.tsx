/* eslint-disable padding-line-between-statements */
// Type Imports
import type { ChildrenType } from '@core/types'

// Layout Imports
import LayoutWrapper from '@layouts/LayoutWrapper'
import VerticalLayout from '@layouts/VerticalLayout'

// Component Imports
import Providers from '@components/Providers'
import Navigation from '@components/layout/vertical/Navigation'
import Navbar from '@components/layout/vertical/Navbar'
import VerticalFooter from '@components/layout/vertical/Footer'

const Layout = async ({ children }: ChildrenType) => {
  // Vars
  const direction = 'ltr'

  // 
  // eslint-disable-next-line newline-before-return
  return (
    <Providers direction={direction}>
      <LayoutWrapper verticalLayout={<VerticalLayout>{children}</VerticalLayout>} />
    </Providers>
  )
}

export default Layout

