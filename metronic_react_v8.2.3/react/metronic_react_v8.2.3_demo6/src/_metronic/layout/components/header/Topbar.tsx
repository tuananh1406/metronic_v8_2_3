import {FC} from 'react'
import clsx from 'clsx'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {
  HeaderNotificationsMenu,
  HeaderUserMenu,
  QuickLinks,
  Search,
  ThemeModeSwitcher,
} from '../../../partials'
import {useLayout} from '../../core'

const itemClass = 'ms-1 ms-lg-3',
  btnClass = 'btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px',
  userAvatarClass = 'symbol-30px symbol-md-40px'

const Topbar: FC = () => {
  const {config} = useLayout()

  return (
    <div className='d-flex align-items-stretch flex-shrink-0'>
      {/* Search */}
      <div className={clsx('d-flex align-items-stretch', itemClass)}>
        <Search />
      </div>

      {/* Activities */}
      <div className={clsx('d-flex align-items-center', itemClass)}>
        {/* begin::Drawer toggle */}
        <div className={btnClass} id='kt_activities_toggle'>
          <i className='bi bi-bell fs-2' />
        </div>
        {/* end::Drawer toggle */}
      </div>

      {/* Quick links */}
      <div className={clsx('d-flex align-items-center', itemClass)}>
        {/* begin::Menu wrapper */}
        <div
          className={btnClass}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <i className='bi bi-clipboard-check fs-2' />
        </div>
        <QuickLinks />
        {/* end::Menu wrapper */}
      </div>

      {/* CHAT */}
      <div className={clsx('d-flex align-items-center', itemClass)}>
        {/* begin::Menu wrapper */}
        <div
          className={clsx(
            'btn btn-icon btn-active-light-primary btn-custom position-relative',
            btnClass,
            'pulse pulse-success'
          )}
          id='kt_drawer_chat_toggle'
        >
          <i className='bi bi-app-indicator fs-2' />
          <span className='pulse-ring w-45px h-45px' />
        </div>
        {/* end::Menu wrapper */}
      </div>

      {/* NOTIFICATIONS */}
      <div className={clsx('d-flex align-items-center', itemClass)}>
        {/* begin::Menu- wrapper */}
        <div
          className={clsx(btnClass, 'position-relative')}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <i className='bi bi-grid fs-2' />
        </div>
        <HeaderNotificationsMenu />
        {/* end::Menu wrapper */}
      </div>

      {/* begin::Theme mode */}
      <div className={clsx('d-flex align-items-center', itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={btnClass} />
      </div>
      {/* end::Theme mode */}

      {/* begin::User */}
      <div className={clsx('d-flex align-items-center', itemClass)} id='kt_header_user_menu_toggle'>
        {/* begin::Toggle */}
        <div
          className={clsx('cursor-pointer symbol', userAvatarClass)}
          data-kt-menu-trigger='click'
          data-kt-menu-attach='parent'
          data-kt-menu-placement='bottom-end'
        >
          <img src={toAbsoluteUrl('media/avatars/300-1.jpg')} alt='metronic' />
        </div>
        <HeaderUserMenu />
        {/* end::Toggle */}
      </div>
      {/* end::User */}

      {/* begin::Aside Toggler */}
      {config.header.left === 'menu' && (
        <div className='d-flex align-items-center d-lg-none ms-2' title='Show header menu'>
          <div
            className='btn btn-icon btn-active-color-primary w-30px h-30px w-md-40px h-md-40px'
            id='kt_header_menu_mobile_toggle'
          >
            <KTIcon iconName='text-align-left' className='fs-1' />
          </div>
        </div>
      )}
    </div>
  )
}

export {Topbar}
