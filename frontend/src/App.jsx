import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css";
import { routes } from "./routes";
import AuthProvider from "./hooks/AuthProvider";
import { PrivateRoutes } from "./routes";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
        <div>
            <Routes>
              <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoutes />}>
              {routes.map((route, index) => {
              const Page = route.component;
              let Layout = route.layout;
              return (
                <Route key={index} path={route.path} element={<Layout>
                  <Page />
                </Layout>} />
              )
            }
            )}
            </Route>
          </Routes>
        </div>
        </AuthProvider>

      </Router>
    </>
  );
}

export default App;
