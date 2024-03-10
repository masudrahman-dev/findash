import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import PersonalInfoForm from "../components/organisms/personal-info-form/PersonalInfoForm";

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
    ],
  },
]);

export default router;
