/* Import Styled Components and Dependencies */
import { NavContainer } from "./style/Navbar";
import { Routes, Route, Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

/* Import Components */
import HomePage from "./pages/HomePage/HomePage";
import SeatsPage from "./pages/SeatsPage/SeatsPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";
import SuccessPage from "./pages/SuccessPage/SuccessPage";
import Error from "./pages/Error/Error";

/* Import locally images */
import left_arrow from "/left_arrow.png";

/* Axios token configuration */
const token = "uno6r9oP7lrt17ZaOROMIr8i";
axios.defaults.headers.common['Authorization'] = token;

export default function App() {

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState({isTrue: false, message: ""});

    const navigate = useNavigate();
    let location = useLocation();

    return (
        <>
            <NavContainer>
                {location.pathname != "/" && location.pathname != "/404" && !error.isTrue &&
                    <button data-test="go-home-header-btn" onClick={() => navigate(-1)}>
                        <img src={left_arrow} alt="go-back" />
                    </button>
                }
                <Link to="/">CINEFLIX</Link>
            </NavContainer>

            {error.isTrue && <Error errorMessage={error.message} />}
            {!error.isTrue &&
                <Routes>
                    <Route path="/" element={
                        <HomePage
                            setError={setError}
                        />}
                    />
                    <Route path="/sessoes/:idFilme" element={
                        <SessionsPage
                            setError={setError}
                        />}
                    />
                    <Route path="/assentos/:idSessao" element={
                        <SeatsPage
                            setUserData={setUserData}
                            setError={setError}
                        />}
                    />
                    <Route path="/sucesso" element={
                        <SuccessPage
                            userData={userData}
                            setUserData={setUserData}
                        />}
                    />
                    <Route path="/404" element={
                        <Error
                            errorMessage={"404 Page not found"}
                        />}
                    />
                    <Route path="*" element={
                        <Navigate
                            to="/404"
                        />}
                    />
                </Routes>
            }
        </>
    );
}