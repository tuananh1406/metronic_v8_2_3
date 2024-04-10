import {FC, Fragment} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLayout} from '../../../core/LayoutProvider'
import {usePageData} from '../../../core/PageData'

const DefaultTitle: FC = () => {
  const {pageTitle, pageDescription, pageBreadcrumbs} = usePageData()
  const {config, classes} = useLayout()
  return (
    <div
      data-kt-swapper='true'
      data-kt-swapper-mode='prepend'
      data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
      className={clsx(
        'page-title d-flex align-items-center flex-wrap me-3',
        classes.pageTitle.join(' ')
      )}
    >
      {/* begin::Title */}
      {pageTitle && (
        <h1 className='d-flex align-items-center text-gray-900 fw-bolder my-1 fs-3'>
          {pageTitle}
          {pageDescription && config.pageTitle && config.pageTitle.description && (
            <>
              {/* begin::Separator */}
              <span className='h-20px border-gray-200 border-start ms-3 mx-2'></span>
              {/* end::Separator */}

              <small className='text-muted fs-7 fw-bold my-1 ms-1'>{pageDescription}</small>
            </>
          )}
        </h1>
      )}
      {/* end::Title */}

      {pageBreadcrumbs &&
        pageBreadcrumbs.length > 0 &&
        config.pageTitle &&
        config.pageTitle.breadCrumbs && (
          <>
            {/* begin::Separator */}
            <span className='h-20px border-gray-200 border-start mx-3'></span>
            {/* end::Separator */}
            <ul className='breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1'>
              {Array.from(pageBreadcrumbs).map((item, index) => (
                <Fragment key={`${item.path}${index}`}>
                  {item.isSeparator ? (
                    <li className='breadcrumb-item'>
                      <span className='bullet bg-gray-500 w-5px h-2px'></span>
                    </li>
                  ) : (
                    <>
                      {item.isActive ? (
                        <li className='breadcrumb-item text-gray-900'>{item.title}</li>
                      ) : (
                        <li className='breadcrumb-item text-muted'>
                          <Link to={item.path} className='text-muted text-hover-primary'>
                            {item.title}
                          </Link>
                        </li>
                      )}
                    </>
                  )}
                </Fragment>
              ))}
              <li className='breadcrumb-item text-gray-900'>{pageTitle}</li>
            </ul>
          </>
        )}
    </div>
  )
}

export {DefaultTitle}
