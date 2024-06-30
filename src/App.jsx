import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/public/router";

function App() {
  return (
    <div id="app" className=" text-rebel_text_color relative">
      <div className="w-full h-full bg-rebel_bg absolute -z-50"></div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
