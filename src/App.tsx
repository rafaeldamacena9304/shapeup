import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { GlobalStyle } from './globalStyle';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>
  }
])

function App() {
  return (
    <>
      <GlobalStyle/>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
