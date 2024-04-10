
import clsx from 'clsx'
import {useState} from 'react'
import {KTIcon} from '../../../helpers'
import {CreateAppModal} from '../../../partials'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar1 = () => {
  const {classes} = useLayout()
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false)

  return (
    <>
      <div className='toolbar py-5 py-lg-15' id='kt_toolbar'>
        {/* begin::Container */}
        <div
          id='kt_toolbar_container'
          className={clsx(classes.toolbarContainer.join(' '), 'd-flex flex-stack')}
        >
          <DefaultTitle />

          {/* begin::Actions */}
          <div className='d-flex align-items-center py-1'>
            {/* begin::Wrapper */}
            <div className='me-4'>
              {/* begin::Menu */}
              <a
                href='#'
                className='btn btn-custom btn-active-white btn-flex btn-color-white btn-active-color-white'
                data-kt-menu-trigger='click'
                data-kt-menu-placement='bottom-end'
                data-kt-menu-flip='top-end'
              >
                <KTIcon iconName='filter' className='fs-5 me-1' />
                Filter
              </a>

              {/* end::Menu */}
            </div>
            {/* end::Wrapper */}

            {/* begin::Button */}

            <a
              className='btn bg-body btn-active-color-primary'
              id='kt_toolbar_primary_button'
              data-bs-theme='light'
              onClick={() => setShowCreateAppModal(true)}
            >
              Create
            </a>
            {/* end::Button */}
          </div>
          {/* end::Actions */}
        </div>
        {/* end::Container */}
      </div>
      <CreateAppModal show={showCreateAppModal} handleClose={() => setShowCreateAppModal(false)} />
    </>
  )
}

export {Toolbar1}
