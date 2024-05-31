import { RouterProvider } from "react-router-dom";
import "./css/main.scss";
import "./App.css";
import { routes } from "./router/routes";

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
