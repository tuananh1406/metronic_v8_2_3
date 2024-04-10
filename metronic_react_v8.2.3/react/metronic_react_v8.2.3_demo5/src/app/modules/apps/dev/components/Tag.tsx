

import React from 'react'
import {Questions} from './partials/Questions'
import {EnableSidebar} from '../../../../../_metronic/layout/core'
import { Toolbar } from '../../../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../../../_metronic/layout/components/Content'

const Tag: React.FC = () => {
  return (
    <>
      <Toolbar />
      <Content>
        <EnableSidebar>
          <Questions />
        </EnableSidebar>
      </Content>
    </>
  )
}

export {Tag}
