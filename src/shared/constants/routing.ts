// const PATH_PREFIX = env.REACT_APP_PATH_PREFIX;
const PATH_PREFIX = "/ca";
// const PATH_PREFIX = process.env.REACT_APP_PATH_PREFIX;

export const Routing = {
  /* Developer Routes */
  Login: `${PATH_PREFIX}/login`,
  HomePage: `/`,
  SignUp: `${PATH_PREFIX}/sign-up`,
  ForgotPassword: `${PATH_PREFIX}/forgot-password`,
  ResetPassword: `${PATH_PREFIX}/reset-password`,
  DashBoard: `${PATH_PREFIX}/dashboard`,
};
