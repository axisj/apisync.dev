import React from "react";
import { matchPath, Route, Routes, useLocation } from "react-router-dom";
import { useAppStore, usePageTabStore, useUserStore } from "stores";
import { ROUTES, ROUTES_LIST } from "./Routes";

const FrameDefault = React.lazy(() => import("pageFrame/FrameDefault"));
const FrameProgram = React.lazy(() => import("pageFrame/FrameProgram"));

const Home = React.lazy(() => import("pages/home/App"));
const Error404 = React.lazy(() => import("pages/error/Error404"));

/* ##IMPORT_COMPONENT_POSITION## */

function PageRoute() {
  const location = useLocation();

  return (
    <React.Suspense fallback={<></>}>
      <Routes>
        <Route element={<FrameProgram />}>
          <Route path={ROUTES.HOME.path} element={<Home />} />
        </Route>
        <Route path={"*"} element={<Error404 />} />
      </Routes>
    </React.Suspense>
  );
}

export default PageRoute;
