import React, { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "./assets/css/dev-style.css";
import "./assets/css/spacer.css";
import "./assets/css/style.css";
import Loader from "./layouts/Loader";
import Spinner from "./layouts/Spinner";
import { ThemeProvider } from "@mui/material/styles";
import { AppRouting } from "./shared/AppRouting";
import portalTheme from "./themes/App.theme";
import { env } from "./env";
const App: React.FC = () => (
  <>
    {console.log(env.REACT_APP_PATH_PREFIX)}
    <Suspense fallback={<Spinner />}>
      <ToastContainer limit={3} className="toaster" hideProgressBar={true} />
      <Loader />
      <ThemeProvider theme={portalTheme}>
        {/* <ErrorBoundary> */}
        <AppRouting />
        {/* </ErrorBoundary> */}
      </ThemeProvider>
    </Suspense>
  </>
);

export default App;
