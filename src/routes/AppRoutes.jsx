import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  HomeLayout,
  Error,
  HomePage,
  AboutPage,
  ProjectsPage,
  ClientsPage,
  ContactPage,
} from '../pages';
import {
  ProjectOne,
  ProjectTwo,
  ProjectThree,
  ProjectFour,
  ProjectFive,
} from '../pages/AllProjects';
import {
  ContactForm,
  ContactSelectForm,
  JoinCrewForm,
  SiteVisitForm,
} from '../layout/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: '/projects/proj1', element: <ProjectOne /> },
      { path: '/projects/proj2', element: <ProjectTwo /> },
      { path: '/projects/proj3', element: <ProjectThree /> },
      {
        path: '/projects/proj4',
        element: <ProjectFour />,
      },
      { path: '/projects/proj5', element: <ProjectFive /> },
      { path: 'clients', element: <ClientsPage /> },
      {
        path: 'contact',
        element: <ContactPage />,
        children: [
          {
            index: true,
            element: <ContactSelectForm />,
          },
          {
            path: '/contact/Contact-Us',
            element: <ContactForm />,
          },

          {
            path: '/contact/site-visit',
            element: <SiteVisitForm />,
          },
          {
            path: '/contact/join-us',
            element: <JoinCrewForm />,
          },
        ],
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
export default AppRoutes;
