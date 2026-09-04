// import './App.css'
// import styles from "./style.module.css"

import { RouterProvider } from "react-router-dom"
import { useState } from 'react';
import MenuSuperior from "./componentes/MenuSuperior";
import ListaBicicletas from "./componentes/ListaBicicletas";
import Cadastro from "./componentes/Cadastro"
import { routes } from './routes';

function App() {

    return (

        <RouterProvider router={routes} />

    );
}


export default App;