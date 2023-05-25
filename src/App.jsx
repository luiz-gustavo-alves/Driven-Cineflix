import { NavContainer } from "./style/Navbar"

import HomePage from "./pages/HomePage/HomePage"
import SeatsPage from "./pages/SeatsPage/SeatsPage"
import SessionsPage from "./pages/SessionsPage/SessionsPage"
import SuccessPage from "./pages/SuccessPage/SuccessPage"

import axios from 'axios'

const token = "uno6r9oP7lrt17ZaOROMIr8i";
axios.defaults.headers.common['Authorization'] = token;

export default function App() {
    return (
        <>
           <NavContainer>CINEFLEX</NavContainer>

            {<HomePage />}
            {/* <SeatsPage /> */}
            {/* <SessionsPage /> */}
            {/* <SuccessPage /> */}
        </>
    )
}