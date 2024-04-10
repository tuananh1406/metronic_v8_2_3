
import clsx from 'clsx'
import React, {FC} from 'react'
import {KTIcon} from '../../../helpers'
import {useLayout} from '../../core'
import {DefaultTitle} from '../header/page-title/DefaultTitle'

const Toolbar2: FC = () => {
  const {classes, config} = useLayout()
  const today = new Date()
  return (
    <div className='toolbar py-2' id='kt_toolbar'>
      {/* begin::Container */}
      <div
        id='kt_toolbar_container'
        className={clsx(classes.toolbarContainer.join(' '), 'd-flex align-items-center')}
      >
        {config.pageTitle?.display && <DefaultTitle />}

        <div className='flex-grow-1 flex-shrink-0 me-5'></div>

        {/* begin::Actions */}
        <div
          className={
            config.pageTitle?.display
              ? 'd-flex align-items-center flex-wrap'
              : 'd-flex flex-stack flex-grow-1 flex-wrap'
          }
        >
          {/* begin::Wrapper */}
          <div className='flex-shrink-0 me-2'>
            <ul className='nav'>
              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light active fw-bold fs-7 px-4 me-1'
                  data-bs-toggle='tab'
                  href='#'
                >
                  Day
                </a>
              </li>

              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-bold fs-7 px-4 me-1'
                  data-bs-toggle='tab'
                  href=''
                >
                  Week
                </a>
              </li>

              <li className='nav-item'>
                <a
                  className='nav-link btn btn-sm btn-color-muted btn-active-color-primary btn-active-light fw-bold fs-7 px-4'
                  data-bs-toggle='tab'
                  href='#'
                >
                  Year
                </a>
              </li>
            </ul>
          </div>
          {/* end::Wrapper */}

          {/* begin::Wrapper */}
          <div className='d-flex align-items-center'>
            {/* begin::Daterangepicker */}
            <a
              href='#'
              className='btn btn-sm btn-bg-light btn-color-gray-500 btn-active-color-primary me-2'
              id='kt_dashboard_daterangepicker'
              data-bs-toggle='tooltip'
              data-bs-dismiss='click'
              data-bs-trigger='hover'
              title='Select dashboard daterange'
            >
              {/* <span className='fw-bold me-1' id='kt_dashboard_daterangepicker_title'>
                Range:
              </span> */}
              <span className='fw-bolder' id='kt_dashboard_daterangepicker_date'>
                {/* <?php echo date('F j')?> */}
                Today: {today.getDate()} {today.toLocaleString('default', {month: 'long'})}
              </span>
            </a>
            {/* end::Daterangepicker */}

            {/* begin::Actions */}
            <div className='d-flex align-items-center'>
              <button
                type='button'
                className='btn btn-sm btn-icon btn-color-primary btn-active-light btn-active-color-primary'
                data-bs-toggle='modal'
                data-bs-target='#kt_modal_create_app'
                id='kt_toolbar_primary_button'
              >
                <KTIcon iconName='add-files' className='fs-2x' />
              </button>
            </div>
            {/* end::Actions */}
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Actions */}
      </div>
      {/* end::Container */}
    </div>
  )
}

export {Toolbar2}
