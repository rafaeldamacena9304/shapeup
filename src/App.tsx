import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { GlobalStyle } from "./globalStyle";
import { DashboardPage } from "./pages/Dashboard";
import { WorkoutConfigPage } from "./pages/WorkoutConfig";
import { DietConfigPage } from "./pages/DietConfig";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/workout",
    element: <WorkoutConfigPage />,
  },
  {
    path: "diet",
    element: <DietConfigPage />,
  },
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
