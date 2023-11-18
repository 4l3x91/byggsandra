import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="kontakt"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ContactPage />
              </Suspense>
            }
          />
          <Route
            path="om-mig"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
