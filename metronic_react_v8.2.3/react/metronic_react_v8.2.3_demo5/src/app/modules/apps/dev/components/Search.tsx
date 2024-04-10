

import React from 'react'
import {Questions} from './partials/Questions'
import {EnableSidebar} from '../../../../../_metronic/layout/core'
import { Toolbar } from '../../../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../../../_metronic/layout/components/Content'

const Search: React.FC = () => {
  return (
    <>
      <Toolbar />
      <Content>
        <EnableSidebar>
          <form id='kt_devs_search_form' className='form mb-6'>
            <div className='d-flex'>
              <input
                type='text'
                className='form-control flex-grow-1 me-5'
                placeholder='Enter search query'
                name='query'
              />
              <button type='submit' id='kt_devs_ask_submit' className='btn btn-primary flex-shrink-0'>
                Search Again
              </button>
            </div>
          </form>

          <div className='fw-bold fw-base text-gray-600'>56 results found for keyword “Laravel”</div>

          <div className='separator separator-dashed border-gray-300 my-6'></div>

          <Questions />
        </EnableSidebar>
      </Content>
    </>
  )
}

export {Search}
