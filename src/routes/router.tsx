import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PersonalInfoForm from "../components/organisms/personal-info-form/PersonalInfoForm";
import PreferencesForm from "../components/organisms/preferences-form/PreferencesForm";
import SecurityForm from "../components/organisms/security-form/SecurityForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>error</h1>,
    children: [
      {
        path: "admin/",
        element: <App />,
      },
      {
        path: "admin/personal-info/*",
        element: <PersonalInfoForm />,
      },
      {
        path: "admin/preferences/*",
        element: <PreferencesForm />,
      },
      {
        path: "admin/security/*",
        element: <SecurityForm />,
      },
    ],
  },
]);

export default router;
