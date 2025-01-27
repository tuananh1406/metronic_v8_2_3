

import React from 'react'
import {toAbsoluteUrl} from '../../../../../../_metronic/helpers'

const TextFormatting: React.FC = () => {
  return (
    <div id='kt_devs_ask_formatting'>
      <div className='pt-3 mb-5 fs-6'>
        Here's a how to add some HTML formatting to your comment:
      </div>

      <ul className='list-unstyled p-0 mb-10'>
        <li className='py-1 fs-6'>
          <b>&lt;strong&gt;&lt;/strong&gt;</b>&nbsp;to make things bold
        </li>
        <li className='py-1 fs-6'>
          <b>&lt;em&gt;&lt;/em&gt;</b>&nbsp;to emphasize
        </li>
        <li className='py-1 fs-6'>
          <b>&lt;ul&gt;&lt;li&gt;</b>&nbsp;or <b>&lt;ol&gt;&lt;li&gt;</b>&nbsp; to make lists
        </li>
        <li className='py-1 fs-6'>
          <b>&lt;h3&gt;</b>&nbsp;or <b>&lt;h4&gt;</b>&nbsp;to make headings
        </li>
        <li className='py-1 fs-6'>
          <b>&lt;pre&gt;&lt;/pre&gt;</b>&nbsp;for code blocks
        </li>
        <li className='py-1 fs-6'>
          <b>&lt;code&gt;&lt;/code&gt;</b>&nbsp;for a few words of code
        </li>
        <li className='py-1 fs-6'>
          <b>&lt;a&gt;&lt;/a&gt;</b>&nbsp;for links
        </li>
        <li className='py-1 fs-6'>
          <b>&lt;img&gt;</b>&nbsp;to paste in an image
        </li>
        <li className='py-1 fs-6'>
          <b>&lt;blockquote&gt;&lt;/blockquote&gt;</b>&nbsp;to quote somebody
        </li>
        <li className='py-1 fs-6'>
          <img alt='happy' src={toAbsoluteUrl('media/smiles/happy.png')} />
          &nbsp;&nbsp;:)
        </li>
        <li className='py-1 fs-6'>
          <img alt='shocked' src={toAbsoluteUrl('media/smiles/shocked.png')} />
          &nbsp;&nbsp;:|
        </li>
        <li className='py-1 fs-6'>
          <img alt='sad' src={toAbsoluteUrl('media/smiles/sad.png')} />
          &nbsp;&nbsp;:(
        </li>
      </ul>
    </div>
  )
}

export {TextFormatting}
