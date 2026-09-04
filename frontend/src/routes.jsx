import { createBrowserRouter } from "react-router-dom";
import ListaBicicletas from "./componentes/ListaBicicletas"; 
import Cadastro from "./componentes/Cadastro";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <ListaBicicletas />, 
    },
    {
        path: "/cadastro",
        element: <Cadastro />,
    },
]);