import {useEffect} from 'react'
import {useIntl} from 'react-intl'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  ListsWidget4,
  ListsWidget5,
  TablesWidget10,
  MixedWidget8,
  MixedWidget5,
  MixedWidget3,
} from '../../../_metronic/partials/widgets'
import { Toolbar } from '../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../_metronic/layout/components/Content'

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById('kt_layout_toolbar')?.classList.remove('d-none')
    return () => {
      document.getElementById('kt_layout_toolbar')?.classList.add('d-none')
    }
  }, [])

  return (
    <>
      <Toolbar />
      <Content>
        {/* begin::Row  */}
        <div className='row g-5 g-xl-8'>
          {/* begin::Col  */}
          <div className='col-xxl-4'>
            <MixedWidget8 className='card-xxl-stretch' chartColor='warning' chartHeight='150px' />
          </div>
          {/* end::Col  */}
          {/* begin::Col  */}
          <div className='col-xxl-8'>
            <TablesWidget10 className='card-xxl-stretch mb-5 mb-xl-8' />
          </div>
          {/* end::Col  */}
        </div>
        {/* end::Row  */}

        {/* begin::Row  */}
        <div className='row gy-5 g-xl-8'>
          {/* begin::Col  */}
          <div className='col-xl-4'>
            <ListsWidget5 className='card-xl-stretch mb-xl-8' />
          </div>
          {/* end::Col  */}
          {/* begin::Col  */}
          <div className='col-xl-4'>
            <MixedWidget3
              className='card-xl-stretch mb-5 mb-xl-8'
              chartColor='primary'
              chartHeight='225px'
            />
          </div>
          {/* end::Col  */}
          {/* begin::Col  */}
          <div className='col-xl-4'>
            <ListsWidget4 className='card-xl-stretch mb-5 mb-xl-8' items={6} />
          </div>
          {/* end::Col  */}
        </div>
        {/* end::Row  */}

        {/* begin::Row */}
        <div className='row gy-0 gx-5 gx-xl-8'>
          {/* begin::Col */}
          <div className='col-xl-4'>
            <MixedWidget5
              className='card-xl-stretch mb-5 mb-xl-0'
              image='/media/svg/brand-logos/plurk.svg'
              time='7 hours ago'
              title='PitStop - Multiple Email Generator'
              description='
                  Pitstop creates quick email campaigns.<br/>
                  We help to strengthen your brand.
              '
            />
          </div>
          {/* end::Col */}

          {/* begin::Col */}
          <div className='col-xl-4'>
            <MixedWidget5
              className='card-xl-stretch mb-5 mb-xl-0'
              image='/media/svg/brand-logos/telegram.svg'
              time='10 days ago'
              title='ReactJS Admin Theme'
              description='
              Keenthemes uses the latest and greatest<br/>
              frameworks for complete modernization.
              '
            />
          </div>
          {/* end::Col */}

          {/* begin::Col */}
          <div className='col-xl-4'>
            <MixedWidget5
              className='card-xl-stretch mb-5 mb-xl-0'
              image='/media/svg/brand-logos/vimeo.svg'
              time='2 weeks ago'
              title='KT.com - High Quality Templates'
              description='
              Easy to use, incredibly flexible and secure<br/>
              with in-depth documentation that outlines.
              '
            />
          </div>
          {/* end::Col */}
        </div>
        {/* end::Row */}
      </Content>  
    </>
  )
}

const DashboardWrapper = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
