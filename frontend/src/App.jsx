import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { useState } from "react";
import { PublicRoutes } from "./routes";

function App() {

  return (
    <>
      <Router>
        <div>
          <Routes>
            {PublicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = route.layout;
              return (
                <Route key={index} path={route.path} element={<Layout>
                  <Page />
                </Layout>} />
              )
            }
            )}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
