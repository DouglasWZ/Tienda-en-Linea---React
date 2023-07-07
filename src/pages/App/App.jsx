// Paquetes
import { useRoutes, BrowserRouter } from "react-router-dom";

// Paginas
import Home from "../Home/Home";
import MyAccount from "../myAccount/MyAccount";
import MyOrder from "../MyOrder/MyOrder";
import MyOrders from "../myOrders/MyOrders";
import NotFound from "../NotFound/NotFound";
import SignIn from "../SignIn/SignIn";

// Componentes
import Navbar from "../../components/Navbar";

// Estilos
import "./App.css";

// Rutas
const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return routes;
};
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </>
  );
};

export default App;
