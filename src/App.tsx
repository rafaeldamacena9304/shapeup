import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { GlobalStyle } from "./globalStyle";
import { DashboardPage } from "./pages/Dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path:'/dashboard',
    element: <DashboardPage />
  }
]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
