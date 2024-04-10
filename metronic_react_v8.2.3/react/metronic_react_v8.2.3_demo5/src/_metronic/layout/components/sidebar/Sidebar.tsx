import React from 'react'
import clsx from 'clsx'
import {SidebarSearch} from './SidebarSearch'
import {SidebarPopularQuestions} from './SidebarPopularQuestions'
import {SidebarLatestTutorials} from './SidebarLatestTutorials'
import {useLayout} from '../../core'

export function Sidebar() {
  const {classes} = useLayout()
  const sidebarCSSClass = classes.sidebar

  return (
    <div
      id='kt_sidebar'
      className={clsx('sidebar p-5 px-lg-0 py-lg-11', sidebarCSSClass.join(' '))}
      data-kt-drawer='true'
      data-kt-drawer-name='sidebar'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width='275px'
      data-kt-drawer-direction='end'
      data-kt-drawer-toggle='#kt_sidebar_toggle'
    >
      <SidebarSearch />
      <SidebarPopularQuestions />
      <SidebarLatestTutorials />
    </div>
  )
}
