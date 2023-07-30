import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './components/Home';

const router = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
