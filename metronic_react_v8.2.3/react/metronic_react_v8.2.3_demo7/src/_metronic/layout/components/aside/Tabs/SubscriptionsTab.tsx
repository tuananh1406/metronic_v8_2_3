import {useIllustrationsPath} from '../../../../helpers'


const SubscriptionsTab = () => (
  <div className='mx-5'>
    {/*begin::Container*/}
    <div className='text-center pt-10 mb-20'>
      {/*begin::Title*/}
      <h2 className='fs-2 fw-bolder mb-7'>My Subscription</h2>
      {/*end::Title*/}

      {/*begin::Description*/}
      <p className='text-gray-500 fs-4 fw-bold mb-10'>
        There are no customers added yet.
        <br />
        Kickstart your CRM by adding a your first customer
      </p>
      {/*end::Description*/}

      {/*begin::Action*/}
      <a href='#' className='btn btn-primary'>
        Upgrade Plan
      </a>
      {/*end::Action*/}
    </div>
    {/*end::Container*/}

    {/*begin::Illustration*/}
    <div className='text-center px-4'>
      <img src={useIllustrationsPath('18.png')} alt='' className='mw-100 mh-300px' />
    </div>
    {/*end::Illustration*/}
  </div>
)

export {SubscriptionsTab}
