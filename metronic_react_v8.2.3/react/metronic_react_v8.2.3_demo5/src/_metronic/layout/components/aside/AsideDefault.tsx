

import React, {FC} from 'react'
import clsx from 'clsx'
import {useLayout} from '../../core'
import {Link, NavLink} from 'react-router-dom'

const AsideDefault: FC = () => {
  const {config, classes} = useLayout()
  const {aside} = config

  return (
    <div
      id='kt_aside'
      className={clsx('aside', classes.aside.join(' '), {'d-none': !aside.display})}
      data-kt-drawer='true'
      data-kt-drawer-name='aside'
      data-kt-drawer-activate='{default: true, lg: false}'
      data-kt-drawer-overlay='true'
      data-kt-drawer-width="{default:'200px', '300px': '225px'}"
      data-kt-drawer-direction='start'
      data-kt-drawer-toggle='#kt_aside_toggle'
    >
      <div
        className='hover-scroll-overlay-y my-5 my-lg-5 w-100 ps-4 ps-lg-0 pe-4 me-1'
        id='kt_aside_menu_wrapper'
        data-kt-scroll='true'
        data-kt-scroll-activate='{default: false, lg: true}'
        data-kt-scroll-height='auto'
        data-kt-scroll-dependencies='#kt_header'
        data-kt-scroll-wrappers='#kt_aside'
        data-kt-scroll-offset='5px'
      >
        <div
          className='menu menu-column menu-active-bg menu-hover-bg menu-title-gray-700 fs-6 menu-rounded w-100'
          id='#kt_aside_menu'
          data-kt-menu='true'
        >
          <div className='menu-item'>
            <div className='menu-content pb-2'>
              <span className='menu-section text-muted text-uppercase fs-7 fw-bolder'>Public</span>
            </div>
          </div>

          <div className='menu-item'>
            <NavLink to='/dashboard' className='menu-link'>
              <span className='menu-title'>All Questions</span>
              <span className='menu-badge'>6,234</span>
            </NavLink>
          </div>

          <div className='menu-item'>
            <NavLink to='/apps/devs/search' className='menu-link'>
              <span className='menu-title'>Search</span>
            </NavLink>
          </div>

          <div className='menu-item'>
            <NavLink to='/apps/devs/tag' className='menu-link'>
              <span className='menu-title'>Tags</span>
            </NavLink>
          </div>

          <div className='menu-item'>
            <NavLink to='/apps/devs/ask' className='menu-link'>
              <span className='menu-title'>Ask Question</span>
            </NavLink>
          </div>

          <div className='menu-item pt-5'>
            <div className='menu-content pb-2'>
              <span className='menu-section text-muted text-uppercase fs-7 fw-bolder'>
                My Activity
              </span>
            </div>
          </div>

          <div className='menu-item'>
            <Link to='/apps/devs/question' className='menu-link'>
              <span className='menu-title'>My Questions</span>
              <span className='menu-badge'>24</span>
            </Link>
          </div>

          <div className='menu-item'>
            <Link to='/' className='menu-link'>
              <span className='menu-title'>Resolved</span>
              <span className='menu-badge'>120</span>
            </Link>
          </div>

          <div className='menu-item'>
            <Link to='/' className='menu-link'>
              <span className='menu-title'>Enrolled</span>
              <span className='menu-badge'>10</span>
            </Link>
          </div>

          <div className='menu-item'>
            <Link to='/' className='menu-link'>
              <span className='menu-title'>Saved</span>
              <span className='menu-badge'>6</span>
            </Link>
          </div>

          <div className='menu-item pt-5'>
            <div className='menu-content pb-2'>
              <span className='menu-section text-muted text-uppercase fs-7 fw-bolder'>
                Categories
              </span>
            </div>
          </div>

          <div className='menu-item'>
            <Link to='/' className='menu-link'>
              <span className='menu-title'>Metronic Admin</span>
              <span className='menu-badge'>1,400</span>
            </Link>
          </div>

          <div className='menu-item'>
            <Link to='/' className='menu-link'>
              <span className='menu-title'>Backend Integration</span>
              <span className='menu-badge'>235</span>
            </Link>
          </div>

          <div className='menu-item'>
            <Link to='/' className='menu-link'>
              <span className='menu-title'>Suggestions</span>
              <span className='menu-badge'>25</span>
            </Link>
          </div>

          <div className='menu-item'>
            <Link to='/' className='menu-link'>
              <span className='menu-title'>Pre-sale Questions</span>
              <span className='menu-badge'>145</span>
            </Link>
          </div>

          <div className='menu-item'>
            <Link to='/' className='menu-link'>
              <span className='menu-title'>Laravel Starter Kit</span>
              <span className='menu-badge'>750</span>
            </Link>
          </div>

          <div className='collapse' id='kt_aside_categories_more'>
            <div className='menu-item'>
              <Link to='/' className='menu-link'>
                <span className='menu-title'>Blazor Integration</span>
                <span className='menu-badge'>100</span>
              </Link>
            </div>

            <div className='menu-item'>
              <Link to='/' className='menu-link'>
                <span className='menu-title'>Django Dashboard</span>
                <span className='menu-badge'>90</span>
              </Link>
            </div>

            <div className='menu-item'>
              <Link to='/' className='menu-link'>
                <span className='menu-title'>Rails CRUD</span>
                <span className='menu-badge'>14</span>
              </Link>
            </div>

            <div className='menu-item'>
              <Link to='/' className='menu-link'>
                <span className='menu-title'>.NET Starter Kit</span>
                <span className='menu-badge'>30</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {AsideDefault}
