import {Link} from 'react-router-dom'
import {KTIcon} from '../../../../helpers'

const notifications: ReadonlyArray<{
  color: string
  icon: string
  title: string
  text: string
  number: string
}> = [
  {
    color: 'warning',
    icon: 'abstract-26',
    title: 'Group lunch celebration',
    text: 'Due in 29 Days',
    number: '+28%',
  },

  {
    color: 'success',
    icon: 'file-added',
    title: 'Navigation optimization',
    text: 'Due in 2 Days',
    number: '+50%',
  },

  {
    color: 'danger',
    icon: 'message-text-2',
    title: 'Humbert Bresnen',
    text: 'Due in 5 Days',
    number: '-27%',
  },

  {
    color: 'info',
    icon: 'chart',
    title: 'Air B & B - Real Estate',
    text: 'Due in 8 Days',
    number: '+21%',
  },

  {
    color: 'primary',
    icon: 'arrows-loop',
    title: 'B & Q - Food Company',
    text: 'Due in 6 Days',
    number: '+12%',
  },

  {
    color: 'danger',
    icon: 'pencil',
    title: 'Nexa - Next generation',
    text: 'Due in 4 Days',
    number: '+34%',
  },
]

const NotificationsTab = () => (
  <div className='mx-5'>
    {/*begin::Header*/}
    <h3 className='fw-bolder text-gray-900 mb-10 mx-0'>Notifications</h3>
    {/*end::Header*/}

    {/*begin::Body*/}
    <div className='mb-12'>
      {notifications.map((n) => (
        <div
          key={n.text}
          className={`d-flex align-items-center bg-light-${n.color} rounded p-5 mb-7`}
        >
          <KTIcon iconName={n.icon} className={`-${n.color} me-5 fs-1 text-${n.color}`} />

          {/*begin::Title*/}
          <div className='flex-grow-1 me-2'>
            <Link
              to='/crafted/widgets/lists'
              className='fw-bolder text-gray-800 text-hover-primary fs-6'
            >
              {n.title}
            </Link>

            <span className='text-muted fw-bold d-block'>{n.text}</span>
          </div>
          {/*end::Title*/}

          {/*begin::Lable*/}
          <span className={`fw-bolder text-${n.color} py-1`}>{n.number}</span>
          {/*end::Lable*/}
        </div>
      ))}
    </div>
    {/*end::Body*/}
  </div>
)

export {NotificationsTab}
