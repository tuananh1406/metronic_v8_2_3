

import React, {useState} from 'react'
import {KTIcon} from '../../../../../_metronic/helpers'
import {TextFormatting} from './partials/TextFormatting'
import {EnableSidebar} from '../../../../../_metronic/layout/core'
import {Replies} from './partials/Replies'
import { Toolbar } from '../../../../../_metronic/layout/components/toolbar/Toolbar'
import { Content } from '../../../../../_metronic/layout/components/Content'

const Question: React.FC = () => {
  const [textFormatting, setTextFormatting] = useState<boolean>(false)

  return (
    <>
      <Toolbar />
      <Content>
        <EnableSidebar>
          <div className='mb-0'>
            <div className='d-flex align-items-center mb-9'>
              <h1 className='fs-2x fw-bolder text-gray-900 mb-0 me-1'>
                How to use Metronic with Laravel Framework ?
              </h1>

              <div className='d-flex align-items-center'>
                <span className='ms-1' data-bs-toggle='tooltip' title='User replied'>
                  <KTIcon iconName='check-circle' className='text-success fs-1' />
                </span>
              </div>
            </div>

            <div className='fs-4 fw-normal text-gray-800 mb-10'>
              <p>Hi Keenthemes,</p>

              <p>
                I’ve been doing some ajax request, to populate a inside drawer, the content of that
                drawer has a sub menu, that you are using in list and all card toolbar.
              </p>

              <p>
                But they are not displaying, since it is an ajax, I tried “KTApp.init();” but didn’t
                work (worked for Tooltips sure, but not Menu).
              </p>

              <p>Anyway to Re-init those https://ibb.co/gysPGpx Menu. ?</p>

              <p>Thank you.</p>
            </div>

            <div className='d-flex flex-stack flex-wrap'>
              <div className='d-flex align-items-center py-1'>
                <div className='symbol symbol-35px me-2'>
                  <div className='symbol-label bg-light-success fs-3 fw-bold text-success text-uppercase'>
                    j
                  </div>
                </div>

                <div className='d-flex flex-column align-items-start justify-content-center'>
                  <span className='text-gray-800 fs-7 fw-bold lh-1 mb-2'>James Hunt</span>
                  <span className='text-muted fs-8 fw-bold lh-1'>24 minutes ago</span>
                </div>
              </div>

              <div className='d-flex align-items-center py-1'>
                <a
                  href='#answers'
                  data-kt-scroll-toggle='true'
                  className='btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2'
                >
                  12 Answers
                </a>

                <a
                  href="<?php echo Theme::getPageUrl('apps/devs/tag')?>"
                  className='btn btn-sm btn-light px-4 me-2'
                >
                  Laravel
                </a>

                <a
                  href="<?php echo Theme::getPageUrl('apps/devs/tag')?>"
                  className='btn btn-sm btn-light px-4 me-2'
                >
                  Metronic
                </a>

                <a
                  href='#'
                  className='btn btn-sm btn-icon btn-light me-2'
                  data-bs-toggle='tooltip'
                  title='Save for your future reference'
                  data-bs-dismiss='click'
                >
                  <KTIcon iconName='save-2' className='fs-2' />
                </a>

                <a
                  href='#'
                  className='btn btn-sm btn-flex btn-light px-4'
                  data-bs-toggle='tooltip'
                  title='Upvote this question'
                  data-bs-dismiss='click'
                >
                  23
                  <KTIcon iconName='black-right' className='fs-7 ms-1 me-1' />
                </a>
              </div>
            </div>
          </div>

          <div className='separator separator-dashed border-gray-300 mt-8 mb-10'></div>

          <form id='kt_devs_reply_form' className='form mb-10'>
            <div className='form-group mb-2'>
              <textarea
                name='comment'
                className='form-control'
                rows={6}
                placeholder='Your reply here..'
                maxLength={1000}
                data-kt-autosize='true'
              />
            </div>

            <div className='d-flex align-items-center justify-content-between py-2 mb-5'>
              <div
                onClick={() => {
                  setTextFormatting(!textFormatting)
                }}
                className='text-primary fs-base fw-bold cursor-pointer'
              >
                Text formatting options
              </div>

              <button className='btn btn-primary fw-bolder' data-kt-action='submit'>
                Submit
              </button>
            </div>

            {textFormatting && <TextFormatting />}
          </form>
          <Replies />
        </EnableSidebar>
      </Content>
    </>
    
  )
}

export {Question}
