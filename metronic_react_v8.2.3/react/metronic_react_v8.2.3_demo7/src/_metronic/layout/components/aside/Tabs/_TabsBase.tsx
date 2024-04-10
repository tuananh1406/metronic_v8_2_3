
import {FC} from 'react'
import {KTIcon} from '../../../../helpers'
import {AuthorsTab} from './AuthorsTab'
import {MenuTab} from './MenuTab'
import {NotificationsTab} from './NotificationsTab'
import {ProjectsTab} from './ProjectsTab'
import {SubscriptionsTab} from './SubscriptionsTab'
import {TasksTab} from './TasksTab'

type Props = {
  link: string
}

const SelectedTab: FC<Props> = ({link}) => {
  switch (link) {
    case 'projects':
      return <ProjectsTab />
    case 'menu':
      return <MenuTab />
    case 'subscription':
      return <SubscriptionsTab />
    case 'tasks':
      return <TasksTab />
    case 'notifications':
      return <NotificationsTab />
    case 'authors':
      return <AuthorsTab />
    default:
      return <ProjectsTab />
  }
}

const TabsBase: FC<Props> = ({link}) => {
  return (
    <div className='d-flex h-100 flex-column'>
      {/* begin::Wrapper */}
      <div
        className='flex-column-fluid hover-scroll-y'
        data-kt-scroll='true'
        data-kt-scroll-activate='true'
        data-kt-scroll-height='auto'
        data-kt-scroll-wrappers='#kt_aside_wordspace'
        data-kt-scroll-dependencies='#kt_aside_secondary_footer'
        data-kt-scroll-offset='0px'
      >
        {/* begin::Tab content */}
        <div className='tab-content'>
          <div
            className='tab-pane fade active show'
            id={`kt_aside_nav_tab_${link}`}
            role='tabpanel'
          >
            <SelectedTab link={link} />
          </div>
        </div>
        {/* end::Tab content */}
      </div>
      {/* end::Wrapper */}
      {/* begin::Footer */}
      <div className='flex-column-auto pt-10 px-5' id='kt_aside_secondary_footer'>
        <a
          href={import.meta.env.VITE_APP_PREVIEW_DOCS_URL + '/changelog'}
          target='_blank'
          className='btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100'
          data-bs-toggle='tooltip'
          data-bs-custom-class='tooltip-dark'
          data-bs-trigger='hover'
          data-bs-offset='0,5'
          data-bs-dismiss-='click'
        >
          <span className='btn-label'>Docs & Components</span>
          <KTIcon iconName='document' className='btn-icon fs-4 ms-2' />
        </a>
      </div>
      {/* end::Footer */}
    </div>
  )
}

export {TabsBase}
