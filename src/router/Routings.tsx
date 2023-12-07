import React, { Suspense } from "react";

import { Routes, Route } from "react-router-dom";

import { AuthGuard } from "~/components/auth/AuthGuard";

const Home = React.lazy(() => import("../pages/home"));
const Employer = React.lazy(() => import("../pages/employer"));
const Page404 = React.lazy(() => import("../pages/404"));

const Routings: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<AuthGuard component={Home} />} />
        <Route path="/employer" element={<AuthGuard component={Employer} />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default Routings;
