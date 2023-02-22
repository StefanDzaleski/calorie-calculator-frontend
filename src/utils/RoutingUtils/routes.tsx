import { createBrowserRouter, Route } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import PersistLogin from "../../Components/PersistLogin/PersistLogin";
import IngredientForm from "../../Forms/IngredientForm/IngredientForm";
import MealForm from "../../Forms/MealForm/MealForm";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import ProtectedRoute from "./ProtectedRoute";

export const routes: any[] = [
  {
    path: "/login",
    element: <Login />,
    title: "Login",
    auth: false,
  },
  {
    path: "/signup",
    element: <Signup />,
    title: "Signup",
    auth: false,
  },
  {
    element: <PersistLogin />,
    children: [
      {
        // To be considered for the sidemenu, maybe separate functions/lists are a better solution
        element: <Layout index={2} />,
        children: [
          {
            path: "/new-meal",
            element: (
              <ProtectedRoute roles={[]}>
                <MealForm />,
              </ProtectedRoute>
            ),
            title: "New meal",
            auth: true,
          },
          {
            path: "/new-ingredient",
            element: (
              <ProtectedRoute roles={[]}>
                <IngredientForm />
              </ProtectedRoute>
            ),
            title: "New ingredient",
            auth: true,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <div>Not found</div>,
  },
];

export const router = createBrowserRouter(routes);

// Custom function to render routes, it is now replaced by createBrowserRouter above
export function renderRoutes(routes: any) {
  return routes.map((route: any, index: number) => {
    if (route.children) {
      return (
        <Route key={index} element={route.element}>
          {renderRoutes(route.children)}
        </Route>
      );
    }
    return <Route key={route.path} element={route.element} path={route.path} />;
  });
}
