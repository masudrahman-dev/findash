import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PreferencesForm from "../components/organisms/preferences-form/PreferencesForm";
import SecurityForm from "../components/organisms/security-form/SecurityForm";
import PersonalInfoForm from "../components/organisms/personal-info-form/PersonalInfoForm";

// Define routes with handle and crumb properties
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "admin/",
        element: <App />,
        handle: {
          crumb: (pathname: string) => pathname,
        },
      },
      {
        path: "admin/personal-information/*",
        element: <PersonalInfoForm />,
        handle: {
          crumb: (pathname: string) => pathname,
        },
      },
      {
        path: "admin/preferences/*",
        element: <PreferencesForm />,
        handle: {
          crumb: (pathname: string) => pathname,
        },
      },
      {
        path: "admin/security/*",
        element: <SecurityForm />,
        handle: {
          crumb: (pathname: string) => pathname,
        },
      },
    ],
  },
]);

export default router;
