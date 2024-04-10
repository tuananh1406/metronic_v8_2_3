import {Link} from 'react-router-dom'
import {KTIcon} from '../../../../helpers'

const tasks: ReadonlyArray<{icon: string; color: string; title: string; description: string}> = [
  {
    icon: 'abstract-26',
    color: 'success',
    title: 'Project Briefing',
    description: 'Project Manager',
  },

  {
    icon: 'pencil',
    color: 'warning',
    title: 'Concept Design',
    description: 'Art Director',
  },

  {
    icon: 'message-text-2',
    color: 'primary',
    title: 'Functional Logics',
    description: 'Lead Developer',
  },

  {
    icon: 'disconnect',
    color: 'danger',
    title: 'Development',
    description: 'DevOps',
  },

  {
    icon: 'security-user',
    color: 'info',
    title: 'Testing',
    description: 'QA Managers',
  },

  {
    icon: 'briefcase',
    color: 'success',
    title: 'HTML, CSS Coding',
    description: 'Art Director',
  },

  {
    icon: 'chart-pie-4',
    color: 'danger',
    title: 'ReactJS Developer',
    description: 'Web, UI/UX Design',
  },
]

const TasksTab = () => (
  <div className='mx-5'>
    {/*begin::Header*/}
    <h3 className='fw-bolder text-gray-900 mb-10 mx-0'>Tasks Overview</h3>
    {/*end::Header*/}

    {/*begin::Body*/}
    <div className='mb-12'>
      {tasks.map((t) => (
        <div className='d-flex align-items-center mb-7' key={t.title}>
          {/*begin::Symbol*/}
          <div className='symbol symbol-50px me-5'>
            <span className={`symbol-label bg-light-${t.color}`}>
              <KTIcon iconName={t.icon} className={`fs-2x text-${t.color}`} />
            </span>
          </div>
          {/*end::Symbol*/}

          {/*begin::Text*/}
          <div className='d-flex flex-column'>
            <Link
              to='/crafted/pages/profile/overview'
              className='text-gray-800 text-hover-primary fs-6 fw-bold'
            >
              {t.title}
            </Link>

            <span className='text-muted fw-bold'>{t.description}</span>
          </div>
          {/*end::Text*/}
        </div>
      ))}
    </div>
    {/*end::Body*/}
  </div>
)

export {TasksTab}
