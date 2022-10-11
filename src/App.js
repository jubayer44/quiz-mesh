import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Header/>
        },
        {
          path: '/home',
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
        {
          path: '/quiz/:id',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz/>
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









