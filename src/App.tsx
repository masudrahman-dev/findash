import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import Header from "./components/organisms/header/Header";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/a/dashboard/overview");
  }, []);

  return (
    <div className=" ">
      <Header />

      <div className=" mx-auto -mt-12  max-w-[1440px] px-2 lg:px-14 ">
        <Outlet />
      </div>

      <div className="h-12 "></div>
    </div>
  );
};

export default App;
