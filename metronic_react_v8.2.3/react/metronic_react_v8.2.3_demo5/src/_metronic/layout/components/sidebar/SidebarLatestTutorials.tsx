

import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import {KTIcon} from '../../../helpers'

const SidebarLatestTutorials: FC = () => {
  const tutorials = [
    "How to use customize Metronoc's SASS",
    'How to change web font globally',
    'How to setup dark mode',
    'Metronic file structure and build tools',
    'Metronic integration with Blazor server side',
  ]

  return (
    <div className='card bg-light mb-5 mb-lg-10 shadow-none border-0'>
      <div className='card-header align-items-center border-0'>
        <h3 className='card-title fw-bolder text-gray-900 fs-3'>Latest Tutorials</h3>
      </div>

      <div className='card-body pt-0'>
        {tutorials.map((item, i) => {
          return (
            <div className={`d-flex ${tutorials.length - 1 !== i ? 'mb-5' : ''}`} key={i}>
              <KTIcon iconName='right-square' className='fs-2 mt-0 me-2' />

              <Link
                to='/apps/devs/question'
                className='text-gray-700 text-hover-primary fs-6 fw-bold'
              >
                {item}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export {SidebarLatestTutorials}
