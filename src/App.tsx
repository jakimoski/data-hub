import { RouterProvider } from "react-router-dom";
import "./css/main.scss";
import "./App.css";
import { routes } from "./router/routes";

function App() {
  return (
    <RouterProvider
      router={routes}
      future={{ v7_startTransition: true }}
    ></RouterProvider>
  );
}

export default App;
