import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
import {Ask} from './components/Ask'
import {Question} from './components/Question'
import {Search} from './components/Search'
import {Tag} from './components/Tag'

const devBreadCrumbs: Array<PageLink> = [
  {
    title: 'Dev',
    path: '/apps/dev/questions',
    isSeparator: false,
    isActive: false,
  },
  {
    title: '',
    path: '',
    isSeparator: true,
    isActive: false,
  },
]

const DevPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='ask'
          element={
            <>
              <PageTitle breadcrumbs={devBreadCrumbs}>Private chat</PageTitle>
              <Ask />
            </>
          }
        />
        <Route
          path='question'
          element={
            <>
              <PageTitle breadcrumbs={devBreadCrumbs}>Group chat</PageTitle>
              <Question />
            </>
          }
        />
        <Route
          path='search'
          element={
            <>
              <PageTitle breadcrumbs={devBreadCrumbs}>Drawer chat</PageTitle>
              <Search />
            </>
          }
        />
        <Route
          path='tag'
          element={
            <>
              <PageTitle breadcrumbs={devBreadCrumbs}>Drawer chat</PageTitle>
              <Tag />
            </>
          }
        />
        <Route index element={<Navigate to='/apps/devs/question' />} />
      </Route>
    </Routes>
  )
}

export default DevPage
