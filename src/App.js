import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog/Blog";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import Quiz from "./components/Quiz/Quiz";
import Statistics from "./components/Statistics/Statistics";
import Team from "./components/Team/Team";
import Topics from "./components/Topics/Topics";
import Main from "./Layout/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/topics",
          element: <Topics />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/quiz/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.id}`
            );
          },
          element: <Quiz />,
        },
        {
          path: "/team",
          element: <Team />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
