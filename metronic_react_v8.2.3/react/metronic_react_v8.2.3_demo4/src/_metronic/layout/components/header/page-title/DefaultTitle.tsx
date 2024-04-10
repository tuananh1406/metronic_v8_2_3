import {FC} from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLayout} from '../../../core/LayoutProvider'
import {usePageData} from '../../../core/PageData'

const DefaultTitle: FC = () => {
  const {pageTitle, pageDescription, pageBreadcrumbs} = usePageData()
  const {config} = useLayout()
  return (
    <div
      data-kt-swapper='true'
      data-kt-swapper-mode='prepend'
      data-kt-swapper-parent="{default: '#kt_content_container', lg: '#kt_header_wrapper'}"
      className='page-title d-flex flex-column align-items-start justify-content-center flex-wrap me-lg-20 pb-2 pb-lg-0'
    >
      {/* begin::Heading */}
      {pageTitle && (
        <h1 className='text-gray-900 fw-bolder my-1 fs-3 lh-1'>
          {pageTitle}
          {pageDescription && config.pageTitle && config.pageTitle.description && (
            <small className='text-muted fs-6 fw-normal ms-1'>{pageDescription}</small>
          )}
        </h1>
      )}
      {/* end::Heading */}

      {pageBreadcrumbs &&
        pageBreadcrumbs.length > 0 &&
        config.pageTitle &&
        config.pageTitle.breadCrumbs && (
          <ul className='breadcrumb fw-bold fs-8 my-1'>
            {Array.from(pageBreadcrumbs)
              .filter((l) => !l.isSeparator)
              .map((item, index) => (
                <li
                  className={clsx('breadcrumb-item', {
                    'text-muted': !item.isSeparator && !item.isActive,
                  })}
                  key={`${item.path}${index}`}
                >
                  <Link className='text-muted' to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
            <li className='breadcrumb-item text-muted'>{pageTitle}</li>
          </ul>
        )}
    </div>
  )
}

export {DefaultTitle}
