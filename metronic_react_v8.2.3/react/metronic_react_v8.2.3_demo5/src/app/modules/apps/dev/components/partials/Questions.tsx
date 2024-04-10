

import {FC, Fragment} from 'react'
import {Link} from 'react-router-dom'
import {KTIcon, toAbsoluteUrl} from '../../../../../../_metronic/helpers'

const Questions: FC = () => {
  const questions = [
    {
      title: 'How to use Metronic with Django Framework ?',
      summary:
        'I’ve been doing some ajax request, to populate a inside drawer, the content of that drawer has a sub menu, that you are using in list and all card toolbar.',
      author: 'James Hunt',
      date: '24 minutes ago',

      answers: '16',
      upvotes: '23',
      icons: [
        {
          path: 'information-5',
          class: 'text-primary',
          tooltip: 'New question',
        },
        {
          path: 'sms',
          class: 'text-danger',
          tooltip: 'User replied',
        },
      ],
      tags: ['Metronic'],
    },
    {
      title: 'When to expect new version of Laravel ?',
      summary:
        'When approx. is the next update for the Laravel version planned? Waiting for the CRUD, 2nd factor etc. features before starting my project. Also can we expect the Laravel + Vue version in the next update ?',
      author: 'Sandra Piquet',
      date: '1 day ago',
      avatar: 'media/avatars/300-2.jpg',
      answers: '2',
      upvotes: '4',
      icons: [
        {
          path: 'information-5',
          class: 'text-warning',
          tooltip: 'In-process',
        },
      ],
      tags: ['Pre-sale'],
    },
    {
      title: 'Could not get Demo 7 working',
      summary:
        'could not get demo7 working from latest metronic version. Had a lot of issues installing, I had to downgrade my npm to 6.14.4 as someone else recommended here in the comments, this goot it to compile but when I ran it, the browser showed errors TypeErr..',
      author: 'Niko Roseberg',
      date: '2 days ago',

      answers: '4',
      upvotes: '',
      icons: [
        {
          path: 'information-5',
          class: 'text-warning',
          tooltip: 'In-process',
        },
      ],
      tags: ['Angular'],
    },
    {
      title: 'I want to get refund',
      summary:
        'Your Metronic theme is so good but the reactjs version is typescript only. The description did not write any warn about it. Since I only know javascript, I can not do anything with your theme. I want to refund.',
      author: 'Alex Bold',
      date: '1 day ago',
      avatar: 'media/avatars/300-23.jpg',
      answers: '22',
      upvotes: '11',
      icons: [
        {
          path: 'check-circle',
          class: 'text-success',
          tooltip: 'Resolved',
        },
      ],
      tags: ['React', 'Demo 1'],
    },
    {
      title: 'How to integrate Metronic with Blazor Server Side ?',
      summary:
        'could not get demo7 working from latest metronic version. Had a lot of issues installing, I had to downgrade my npm to 6.14.4 as someone else recommended here in the comments, this goot it to compile but when I ran it, the browser showed errors TypeErr..',
      author: 'Tim Nilson',
      date: '3 days ago',

      answers: '44',
      upvotes: '3',
      icons: [
        {
          path: 'check-circle',
          class: 'text-success',
          tooltip: 'In-process',
        },
      ],
      tags: ['Blazor'],
    },
    {
      title: 'Using Metronic with .NET multi tenant application',
      summary:
        'When approx. is the next update for the Laravel version planned? Waiting for the CRUD, 2nd factor etc. features before starting my project. Also can we expect the Laravel + Vue version in the next update ?',
      author: 'Ana Quil',
      date: '5 days ago',
      avatar: 'media/avatars/300-10.jpg',
      answers: '2',
      upvotes: '4',
      icons: [
        {
          path: 'check-circle',
          class: 'text-success',
          tooltip: 'Resolved',
        },
      ],
      tags: ['Aspdotnet'],
    },
  ]

  return (
    <>
      <div className='mb-10'>
        {questions.map((item, i) => {
          return (
            <Fragment key={`question_${i}`}>
              <div className='mb-0'>
                <div className='d-flex align-items-center mb-4'>
                  <Link
                    to='/apps/devs/question'
                    className='fs-2 fw-bolder text-gray-900 text-hover-primary me-1'
                  >
                    {item.title}
                  </Link>

                  <div className='d-flex align-items-center'>
                    {item.icons.map((icon, j) => {
                      return (
                        <span className='ms-1' key={`icons_${j}`}>
                          <KTIcon className={`fs-1 ${icon.class}`} iconName={icon.path} />
                        </span>
                      )
                    })}
                  </div>
                </div>

                <div className='fs-base fw-normal text-gray-700 mb-4'>{item.summary}</div>

                <div className='d-flex flex-stack flex-wrap'>
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
                      <span className='text-gray-900 fs-7 fw-bold lh-1 mb-2'>{item.author}</span>
                      <span className='text-muted fs-8 fw-bold lh-1'>{item.date}</span>
                    </div>
                  </div>

                  <div className='d-flex align-items-center py-1'>
                    <Link
                      to='/apps/devs/question'
                      className='btn btn-sm btn-outline btn-outline-dashed btn-outline-default px-4 me-2'
                    >
                      {item.answers} Answers
                    </Link>

                    {item.tags.map((tag, j) => {
                      return (
                        <Link
                          to='/apps/devs/tag'
                          className='btn btn-sm btn-light px-4 me-2'
                          key={`link_${j}`}
                        >
                          {tag}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>{' '}
              <div className='separator separator-dashed border-gray-300 my-8'></div>
            </Fragment>
          )
        })}
      </div>

      <div className='d-flex flex-center mb-0'>
        <a
          href='#'
          className='btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2'
        >
          1
        </a>
        <a
          href='#'
          className='btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2 active'
        >
          2
        </a>
        <a
          href='#'
          className='btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2'
        >
          3
        </a>
        <a
          href='#'
          className='btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2'
        >
          4
        </a>
        <a
          href='#'
          className='btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2'
        >
          5
        </a>
        <span className='text-muted fw-bold fs-6 mx-2'>..</span>
        <a
          href='#'
          className='btn btn-icon btn-light btn-active-light-primary h-30px w-30px fw-bold fs-6 mx-2'
        >
          19
        </a>
      </div>
    </>
  )
}

export {Questions}
