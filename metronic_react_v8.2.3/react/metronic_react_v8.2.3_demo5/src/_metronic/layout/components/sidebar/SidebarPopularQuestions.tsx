

import React, {FC} from 'react'
import {KTIcon} from '../../../helpers'
import {Link} from 'react-router-dom'

const SidebarPopularQuestions: FC = () => {
  const questions = [
    'How to use Metrponic with Django Framework ?',
    'When to expect new version of Metronic Laravel ?',
    'Could not get Metronic Demo 7 working',
    'I want to get a refund',
    'How to use Metrponic with Rails Framework ?',
  ]

  return (
    <div className='card bg-light mb-5 mb-lg-10 shadow-none border-0'>
      <div className='card-header align-items-center border-0'>
        <h3 className='card-title fw-bolder text-gray-900 fs-3'>Popular Questions</h3>
      </div>

      <div className='card-body pt-0'>
        {questions.map((item, i) => {
          return (
            <div className={`d-flex ${questions.length - 1 !== i ? 'mb-5' : ''}`} key={i}>
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

export {SidebarPopularQuestions}
