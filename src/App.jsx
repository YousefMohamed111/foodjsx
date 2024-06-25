import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter, createHashRouter, RouterProvider, } from "react-router-dom";
import Layout from './layout/layout'
import Home from './Home/Home'
import Details from './Details/Details'
import Meal from './Meal/Meal';
import Delivery from './Deliverly/Deliverly';
import Company from './company/company';
import Restaurnet from './restuarant/restuarant';
import Pizza from './pizza/pizza';
import Sweet from './dessert/dessert';
import SignupForm from './sign in/sign in';
import LoginForm from './Login/LoginForm';
const routes = createHashRouter([
  {
    path: "/LL",
    element: <LoginForm />
  },
  {
    path: "/",
    element: <SignupForm />
  },
  {
    path: "/login",
    element: <SignupForm />
  },
  {
    path: "/sweet",
    element: <Sweet />
  },

  {
    path: "L/pizza",
    element: <Pizza />
  },

  {
    path: "L/re",
    element: <Restaurnet />
  },
  {
    path: "L/pizza/re",
    element: <Restaurnet />
  },
  {
    path: "L/company",
    element: <Company />
  },
  {
    path: "L/product",
    element: <Meal />
  },
  {
    path: "L/Delivery",
    element: <Delivery />
  },

  {
    path: "/details/:mealid",
    element: <Details />
  },
  {
    path: "/L",
    element: <Layout />,

    children: [
      {
        path: "/L",
        element: <Home />,
      },

    ]
  }
])
function App() {
  return <RouterProvider router={routes} />
}

export default App
