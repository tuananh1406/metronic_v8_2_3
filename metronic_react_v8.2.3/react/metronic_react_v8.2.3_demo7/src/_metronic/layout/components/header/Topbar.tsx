
import {FC} from 'react'
import {KTIcon} from '../../../helpers'
import {ThemeModeSwitcher} from '../../../partials'

const Topbar: FC = () => (
  <div className='d-flex flex-shrink-0'>
    {/* begin::Invite user */}
    <div className='d-flex ms-3'>
      <a
        href='#'
        className='btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_invite_friends'
      >
        <KTIcon iconName='plus' className='fs-2 text-primary me-0 me-md-2' />
        <span className='d-none d-md-inline'>New Member</span>
      </a>
    </div>
    {/* end::Invite user */}

    {/* begin::Create app */}
    <div className='d-flex ms-3'>
      <a
        href='#'
        className='btn btn-flex flex-center bg-body btn-color-gray-700 btn-active-color-primary w-40px w-md-auto h-40px px-0 px-md-6'
        id='kt_toolbar_primary_button'
        data-bs-toggle='modal'
        data-bs-target='#kt_modal_create_app'
      >
        <KTIcon iconName='document' className='fs-2 text-primary me-0 me-md-2' />
        <span className='d-none d-md-inline'>New App</span>
      </a>
    </div>
    {/* end::Create app */}

    {/* begin::Theme mode */}
    <div className='d-flex align-items-center  ms-3'>
      <ThemeModeSwitcher toggleBtnClass=' flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px' />
    </div>
    {/* end::Theme mode */}

    {/* CHAT */}
    <div className='d-flex align-items-center ms-3'>
      {/* begin::Menu wrapper */}
      <div
        className='btn btn-icon btn-primary w-40px h-40px pulse pulse-white'
        id='kt_drawer_chat_toggle'
      >
        <KTIcon iconName='message-text-2' className='fs-2' />
        <span className='pulse-ring' />
      </div>
      {/* end::Menu wrapper */}
    </div>
  </div>
)

export {Topbar}
