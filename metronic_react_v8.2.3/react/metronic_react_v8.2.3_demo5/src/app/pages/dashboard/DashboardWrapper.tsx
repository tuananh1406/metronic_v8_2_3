
import {FC} from 'react'
import {EnableSidebar, PageTitle} from '../../../_metronic/layout/core'
import {Questions} from '../../modules/apps/dev/components/partials/Questions'
import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../_metronic/layout/components/Content'

const DashboardWrapper: FC = () => {
  // const intl = useIntl()
  return (
    <EnableSidebar>
      <Toolbar />
      <Content>
        <PageTitle description='You’ve got 24 New Sales' breadcrumbs={[]}>
          Hello, Paul
        </PageTitle>
        <Questions />
      </Content>
    </EnableSidebar>
  )
}

export {DashboardWrapper}
