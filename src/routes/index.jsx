import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FseLayout from "../layouts/FseLayout";
import Overview from "../pages/Overview";
const Installations = lazy(() => import("../pages/Installations"));
const InstallationCounter = lazy(() =>
  import("../pages/Installations/Counter")
);
const InstallationTimes = lazy(() => import("../pages/Installations/Times"));
const InstallationZones = lazy(() => import("../pages/Installations/Zones"));
const UserAssignedInstallation = lazy(() =>
  import("../pages/UserAssignedInstallations")
);
const Scheduling = lazy(() => import("../pages/Scheduling/Schedule"));
const Refunds = lazy(() => import("../pages/Refunds"));
const NotFound = lazy(() => import("../pages/404"));

import ErrorFallback from "../components/ui/ErrorFallback";
import { TizetiGIFLogoTable } from "../utils/helpers/TizetiGIFLogoTable";

function InappPrivateRoute() {
  const isAuthed = true;
  return isAuthed ? (
    <FseLayout>
      <Outlet />
    </FseLayout>
  ) : (
    <Navigate to="/login" replace={true} />
  );
}
export default function Approute() {
  const location = useLocation();
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<InappPrivateRoute />}>
            <Route path="/" element={<Overview />} />
            <Route
              path="/installations"
              element={
                <Suspense fallback={<TizetiGIFLogoTable></TizetiGIFLogoTable>}>
                  <Installations />
                </Suspense>
              }
            />
            <Route
              path="/installations/counter"
              element={<InstallationCounter />}
            />
            <Route
              path="/installations/times"
              element={<InstallationTimes />}
            />
            <Route
              path="/assigned-installation"
              element={<UserAssignedInstallation />}
            />
            <Route
              path="/installations/zones"
              element={
                <Suspense fallback={<TizetiGIFLogoTable></TizetiGIFLogoTable>}>
                  <InstallationZones />
                </Suspense>
              }
            />
            <Route path="/scheduling" element={<Scheduling />} />
            <Route path="/refunds" element={<Refunds />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </ErrorBoundary>
  );
}
