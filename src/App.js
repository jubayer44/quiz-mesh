import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Header/>
        },
        {
          path: '/topics',
          element: <Topics/>
        },
        {
          path: '/statistics',
          element: <Statistics/>
        },
        {
          path: '/blog',
          element: <Blog/>
        },
      ]
    }
  ]);

  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
