/* Import Styled Components and Dependencies */
import { NavContainer } from "./style/Navbar";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

/* Import Components */
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import Error from "./Error";

/* Axios token configuration */
const token = "uno6r9oP7lrt17ZaOROMIr8i";
axios.defaults.headers.common['Authorization'] = token;

export default function App() {
    
    const [error, setError] = useState({isTrue: false, message: ""});

    return (
        <BrowserRouter>
            <NavContainer>
                <Link to="/">CINEFLIX</Link>
            </NavContainer>

            {error.isTrue && <Error errorMessage={error.message} />}
            {!error.isTrue &&
                <Routes>
                    <Route path="/" element={<HomePage setError={setError} />} />
                    <Route path="/sessoes/:idFilme" element={<SessionsPage setError={setError} />} />
                    <Route path="/assentos/:idSessao" element={<SeatsPage />} />
                    <Route path="/sucesso" element={<SuccessPage />} />

                    <Route path="/404" element={<Error errorMessage={"404 Page not found"} />} />
                    <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
            }
        </BrowserRouter>
    );
}