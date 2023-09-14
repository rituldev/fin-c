import React, { lazy } from "react";
import { Routing } from "./constants/routing";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/* Import lazy routes */
const PublicLayout = lazy(() => import("../layouts/PublicLayout"));
const ResetPassword = lazy(() => import("../pages/account/ResetPassword"));
const ForgotPassword = lazy(() => import("../pages/account/ForgotPassword"));
const SignUp = lazy(() => import("../pages/account/SignUp"));
const Login = lazy(() => import("../pages/account/Login"));
const DashBoard = lazy(() => import("../pages/dashboard/dashboard"));

const MainLayout = lazy(() => import("../layouts/MainLayout"));
interface IRoute {
  path: string;
  component: any;
  isPrivateRoute: boolean;
}
const routes: IRoute[] = [
  {
    path: Routing.HomePage,
    component: Login,
    isPrivateRoute: false,
  },
  {
    path: Routing.Login,
    component: Login,
    isPrivateRoute: false,
  },
  {
    path: Routing.SignUp,
    component: SignUp,
    isPrivateRoute: false,
  },
  {
    path: Routing.ResetPassword,
    component: ResetPassword,
    isPrivateRoute: false,
  },
  {
    path: Routing.ForgotPassword,
    component: ForgotPassword,
    isPrivateRoute: false,
  },
  {
    path: Routing.DashBoard,
    component: DashBoard,
    isPrivateRoute: true,
  },
];
export const AppRouting: React.FC = () => {
  return (
    <BrowserRouter>
      <Route
        path={routes
          .filter((route) => !route.isPrivateRoute)
          .map((x) => x.path)}
      >
        <PublicLayout>
          <Switch>
            {routes
              .filter((route) => !route.isPrivateRoute)
              .map(({ path, component }, key) => (
                <Route exact path={path} component={component} key={key} />
              ))}
          </Switch>
        </PublicLayout>
      </Route>
      <Route
        path={routes.filter((route) => route.isPrivateRoute).map((x) => x.path)}
      >
        <MainLayout>
          <Switch>
            {routes
              .filter((route) => route.isPrivateRoute)
              .map(({ path, component }, key) => (
                <Route exact path={path} component={component} key={key} />
              ))}
          </Switch>
        </MainLayout>
      </Route>
      {/* <Redirect to={{ pathname: Routing.Login }} /> */}
    </BrowserRouter>
  );
};
