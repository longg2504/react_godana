import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const ContactList = Loadable(lazy(() => import('views/utilities/ContactList')));
const PlaceManager = Loadable(lazy(() => import('views/utilities/PlaceManager')));
const PlaceCreate = Loadable(lazy(() => import('views/utilities/PlaceCreate')));
const PostList = Loadable(lazy(() => import('views/utilities/PostList')));
const UserList = Loadable(lazy(() => import('views/utilities/UserList')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'contact',
      children: [
        {
          path: 'contact-list',
          element: <ContactList />
        }
      ]
    },
    {
      path: 'place',
      children: [
        {
          path: 'place-list',
          element: <PlaceManager />
        },
        {
          path: 'create-place',
          element: <PlaceCreate />
        }
      ]
    },
    {
      path: 'user',
      children: [
        {
          path: 'user-list',
          element: <UserList />
        }
      ]
    },
    {
      path: 'post',
      children: [
        {
          path: 'post-list',
          element: <PostList />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
