
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {useLayout} from '../../core'
import {Header} from './Header'
import {DefaultTitle} from './page-title/DefaultTitle'
import {Topbar} from './Topbar'

export function HeaderWrapper() {
  const {config, classes, attributes} = useLayout()
  const {header, pageTitle} = config

  return (
    <div
      id='kt_header'
      className={clsx('header', classes.header.join(' '), ' align-items-stretch')}
      {...attributes.headerMenu}
    >
      {/* begin::Container */}
      <div
        className={clsx(
          classes.headerContainer.join(' '),
          'd-flex align-items-stretch justify-content-between'
        )}
      >
        {/* begin::Aside mobile toggle */}

        <div className='d-flex align-items-center d-lg-none ms-n3 me-1' title='Show aside menu'>
          <div className='btn btn-icon btn-active-color-primary w-40px h-40px' id='kt_aside_toggle'>
            <KTIcon iconName='abstract-14' className='fs-1' />
          </div>
        </div>
        {/* end::Aside mobile toggle */}

        {/* begin::Mobile logo */}
        <div className='d-flex align-items-center flex-grow-1 flex-lg-grow-0'>
          <Link to='/dashboard' className='d-lg-none'>
            <img
              alt='Logo'
              src={toAbsoluteUrl('media/logos/demo4-mobile.svg')}
              className='h-30px'
            />
          </Link>
        </div>
        {/* end::Mobile logo */}

        {pageTitle?.display && (
          <div className='d-flex align-items-center' id='kt_header_wrapper'>
            <DefaultTitle />
          </div>
        )}

        {/* begin::Wrapper */}
        <div
          className={clsx(
            'd-flex align-items-stretch',
            `justify-content-${header.menu ? 'between' : 'end'}`,
            'flex-lg-grow-1'
          )}
        >
          {header.menu && (
            <div className='d-flex align-items-stretch' id='kt_header_nav'>
              <Header />
            </div>
          )}

          <Topbar />
        </div>
        {/* end::Wrapper */}
      </div>
      {/* end::Container */}
    </div>
  )
}
