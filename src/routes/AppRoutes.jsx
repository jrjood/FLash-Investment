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
  ProjectBiskrem,
  ProjectTotal,
  ProjectPepsi,
  ProjectNissan,
  ProjectBritishPetroleum,
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
      { path: '/projects/proj1', element: <ProjectBiskrem /> },
      { path: '/projects/proj2', element: <ProjectNissan /> },
      { path: '/projects/proj3', element: <ProjectPepsi /> },
      {
        path: '/projects/proj4',
        element: <ProjectBritishPetroleum />,
      },
      { path: '/projects/proj5', element: <ProjectTotal /> },
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
