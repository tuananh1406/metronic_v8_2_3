

import React, {useState} from 'react'
import {TextFormatting} from './partials/TextFormatting'
import {EnableSidebar} from '../../../../../_metronic/layout/core'
import { Toolbar } from '../../../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../../../_metronic/layout/components/Content'

const Ask: React.FC = () => {
  const [textFormatting, setTextFormatting] = useState<boolean>(false)

  return (
    <>
      <Toolbar />
      <Content>
        <EnableSidebar>
          <form className='form'>
            <div className='d-flex flex-column mb-8 fv-row'>
              <label className='d-flex align-items-center mb-2'>
                <span className='text-gray-700 fs-6 fw-bolder required'>Title</span>

                <i
                  className='fas fa-exclamation-circle ms-2 fs-7'
                  data-bs-toggle='tooltip'
                  title="Specify your question's title"
                ></i>
              </label>

              <input
                type='text'
                className='form-control'
                placeholder='Your question title'
                name='title'
              />
            </div>

            <div className='d-flex flex-column mb-8'>
              <label className='mb-2'>
                <span className='text-gray-700 fs-6 fw-bolder required'>Question</span>
              </label>

              <div className='fv-row'>
                <textarea
                  className='form-control mb-3'
                  rows={10}
                  name='question'
                  placeholder='Please specify your question'
                  data-kt-autosize='true'
                ></textarea>
              </div>

              <div
                onClick={() => {
                  setTextFormatting(!textFormatting)
                }}
                className='text-primary fs-base fw-bold cursor-pointer'
              >
                Text formatting options
              </div>

              {textFormatting && <TextFormatting />}
            </div>

            <div className='d-flex flex-column mb-8'>
              <label className='mb-2'>
                <span className='text-gray-700 fs-6 fw-bolder'>Product</span>
                <span className='text-muted fs-7'>(optional)</span>
              </label>

              <select
                className='form-select'
                data-control='select2'
                data-placeholder='Select a product'
                name='product'
              >
                <option value='1'>HTML</option>
                <option value='1'>Angular</option>
                <option value='2'>React</option>
                <option value='3'>Laravel</option>
                <option value='4'>Vue</option>
                <option value='5'>Django</option>
                <option value='5'>Aspdotnet</option>
                <option value='5'>Rails</option>
              </select>
            </div>

            <div className='d-flex flex-column mb-8 fv-row'>
              <label className='mb-2'>
                <span className='text-gray-700 fs-6 fw-bolder'>Tags</span>
                <span className='text-muted fs-7'>(optional)</span>
              </label>

              <input className='form-control' placeholder='E.g:  PHP, React, Vue' name='tags' />
            </div>

            <div className='d-flex flex-stack'>
              <label className='form-check form-switch form-check-custom form-check-solid'>
                <input className='form-check-input' type='checkbox' name='public' value='1' />
                <span className='form-check-label fs-7 fw-bolder text-gray-800'>
                  Public
                  <i
                    className='fas fa-exclamation-circle ms-2 fs-7'
                    data-bs-toggle='tooltip'
                    data-bs-dismiss='click'
                    title='Make your question public to help others with solutions'
                  />
                </span>
              </label>

              <button className='btn btn-primary'>Submit</button>
            </div>
          </form>
        </EnableSidebar>
      </Content>
    </>
  )
}

export {Ask}
