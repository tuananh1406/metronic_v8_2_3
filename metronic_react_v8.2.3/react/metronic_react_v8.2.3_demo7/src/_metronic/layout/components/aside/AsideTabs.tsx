import clsx from 'clsx'
import {Dispatch, FC, SetStateAction} from 'react'
import {KTIcon} from '../../../helpers'

const tabs: ReadonlyArray<{link: string; icon: string; tooltip: string}> = [
  {
    link: 'projects',
    icon: 'element-11',
    tooltip: 'Projects',
  },
  {
    link: 'menu',
    icon: 'briefcase',
    tooltip: 'Menu',
  },
  {
    link: 'subscription',
    icon: 'chart-simple',
    tooltip: 'Subscription',
  },
  {
    link: 'tasks',
    icon: 'shield-tick',
    tooltip: 'Tasks',
  },
  {
    link: 'notifications',
    icon: 'abstract-26',
    tooltip: 'Notifications',
  },
  {
    link: 'authors',
    icon: 'add-files',
    tooltip: 'Authors',
  },
]

type Props = {
  link: string
  setLink: Dispatch<SetStateAction<string>>
}

const AsideTabs: FC<Props> = ({link, setLink}) => (
  <div
    className='hover-scroll-y mb-10'
    data-kt-scroll='true'
    data-kt-scroll-activate='{default: false, lg: true}'
    data-kt-scroll-height='auto'
    data-kt-scroll-wrappers='#kt_aside_nav'
    data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
    data-kt-scroll-offset='0px'
  >
    {/* begin::Nav */}
    <ul className='nav flex-column' id='kt_aside_nav_tabs'>
      {/* begin::Nav item */}
      {tabs.map((t) => (
        <li key={t.link}>
          {/* begin::Nav link */}
          <a
            className={clsx(
              'nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light',
              {active: t.link === link}
            )}
            onClick={() => setLink(t.link)}
          >
            <KTIcon iconName={t.icon} className='fs-2x' />
          </a>
          {/* end::Nav link */}
        </li>
      ))}
      {/* end::Nav link */}
    </ul>
    {/* end::Tabs */}
  </div>
)

export {AsideTabs}
