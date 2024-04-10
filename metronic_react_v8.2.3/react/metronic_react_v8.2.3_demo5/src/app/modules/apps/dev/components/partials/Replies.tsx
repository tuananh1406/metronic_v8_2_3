import React from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'

const Replies: React.FC = () => {
  const replies = [
    {
      message:
        'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
      author: 'Sandra Piquet',
      date: '24 minutes ago',
      avatar: 'media/avatars/300-2.jpg',
      upvotes: '',
      indent: '',
    },
    {
      message:
        'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
      author: 'Niko Roseberg',
      date: '1 day ago',

      upvotes: '2',
      indent: 'ms-5 ms-lg-10',
    },
    {
      message:
        'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
      author: 'Sandra Piquet',
      date: '24 minutes ago',
      avatar: 'media/avatars/300-12.jpg',
      upvotes: '6',
      indent: '',
    },
    {
      message:
        'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
      author: 'Sandra Piquet',
      date: '24 minutes ago',

      upvotes: '4',
      indent: '',
    },
    {
      message:
        'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
      author: 'Niko Roseberg',
      date: '1 day ago',
      avatar: 'media/avatars/300-20.jpg',
      upvotes: '',
      indent: '',
    },
  ]

  return (
    <>
      { }
      <a href='#' data-kt-scroll-offset='{default: 100, lg: 125}'></a>
      <h2 className='fw-bolder text-gray-900 mb-10'>Replies(14)</h2>

      <div className='mb-10'>
        {replies.map((item, i) => {
          return (
            <div className={`border rounded p-2 p-lg-6 mb-10 ${item.indent}`} key={i}>
              <div className='mb-0'>
                <div className='d-flex flex-stack flex-wrap mb-5'>
                  <div className='d-flex align-items-center py-1'>
                    <div className='symbol symbol-35px me-2'>
                      {item.avatar && <img src={toAbsoluteUrl(item.avatar)} alt='user' />}
                      {!item.avatar && (
                        <div className='symbol-label bg-light-success fs-3 fw-bold text-success text-uppercase'>
                          {item.author.charAt(0)}
                        </div>
                      )}
                    </div>

                    <div className='d-flex flex-column align-items-start justify-content-center'>
                      <span className='text-gray-800 fs-7 fw-bold lh-1 mb-2'>{item.author}</span>
                      <span className='text-muted fs-8 fw-bold lh-1'>{item.date}</span>
                    </div>
                  </div>

                  <div className='d-flex align-items-center py-1'>
                    { }
                    <a
                      href='#'
                      className='btn btn-sm btn-flex btn-color-gray-500 btn-active-light me-1'
                    >
                      Reply
                    </a>
                  </div>
                </div>

                <div className='fs-5 fw-normal text-gray-800'>{item.message}</div>
              </div>

              { }
              <div className='ps-10 mb-0'></div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export {Replies}
