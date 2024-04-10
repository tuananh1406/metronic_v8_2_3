import React, {useEffect} from 'react'
import {useLocation} from 'react-router'
import {AsideMenuMain} from './AsideMenuMain'
import {DrawerComponent, ToggleComponent} from '../../../assets/ts/components'

type Props = {
  asideMenuCSSClasses: string[]
}

const AsideMenu: React.FC<Props> = () => {
  const {pathname} = useLocation()

  useEffect(() => {
    setTimeout(() => {
      DrawerComponent.reinitialization()
      ToggleComponent.reinitialization()
    }, 50)
     
  }, [pathname])

  return (
    <div
      id='kt_aside_menu_wrapper'
      className='hover-scroll-overlay-y my-2 my-lg-5 pe-lg-n1'
      data-kt-scroll='true'
      data-kt-scroll-height='auto'
      data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
      data-kt-scroll-wrappers='#kt_aside, #kt_aside_menu'
      data-kt-scroll-offset='5px'
    >
      <div
        className='menu menu-column menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold'
        id='#kt_aside_menu'
        data-kt-menu='true'
      >
        <AsideMenuMain />
      </div>
    </div>
  )
}

export {AsideMenu}
