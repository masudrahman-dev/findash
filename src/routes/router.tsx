import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PreferencesForm from "../components/organisms/preferences-form/PreferencesForm";
import SecurityForm from "../components/organisms/security-form/SecurityForm";
import PersonalInfoForm from "../components/organisms/personal-info-form/PersonalInfoForm";
import Settings from "../pages/settings/Settings";
import Dashboard from "../pages/dashboard/Dashboard";

// Define routes with handle and crumb properties
const router = createBrowserRouter([
  {
    path: "/a/*",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "settings/*",
        element: <Settings />,
        children: [
          {
            path: "personal-information",
            element: <PersonalInfoForm />,
          },
          {
            path: "preferences/*",
            element: <PreferencesForm />,
          },
          {
            path: "security/*",
            element: <SecurityForm />,
          },
        ],
      },
      {
        path: "dashboard/*",
        element: <Dashboard />,
        children: [
          {
            path: "overview/*",
            element: <Dashboard />,
          },
          {
            path: "preferences/*",
            element: <PreferencesForm />,
          },
          {
            path: "security/*",
            element: <SecurityForm />,
          },
        ],
      },
    ],
  },
]);

export default router;
