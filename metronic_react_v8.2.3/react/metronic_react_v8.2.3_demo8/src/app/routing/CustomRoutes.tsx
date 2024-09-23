/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import {FC} from 'react'
import {Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import {CustomLayout} from '../modules/custom/CustomLayout'
import {CustomApp} from '../CustomApp'

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const {BASE_URL} = import.meta.env

const CustomAppRoutes: FC = () => {
  return (
    <BrowserRouter basename={BASE_URL}>
      <Routes>
        <Route element={<CustomApp />}>
          <Route path='custom' element={<CustomLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {CustomAppRoutes}
