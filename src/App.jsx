import { NavContainer } from "./style/Navbar"

import HomePage from "./components/HomePage/HomePage"
import SeatsPage from "./components/SeatsPage/SeatsPage"
import SessionsPage from "./components/SessionsPage/SessionsPage"
import SuccessPage from "./components/SuccessPage/SuccessPage"

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