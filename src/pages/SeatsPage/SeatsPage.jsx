/* Import Styled Components and Dependencies */
import { PageContainer, CaptionContainer, CaptionCircle, CaptionItem, FormContainer, FooterContainer } from "./style";
import { Loading } from "../../style/Loading";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

/* Import Components */
import Seats from "../../components/Seats/Seats";

/* Import locally images */
import loading from "/loading.gif";

export default function SeatsPage(props) {

    const { setUserData, setError } = props;
    const { idSessao } = useParams();
    const navigate = useNavigate();

    const [movieData, setMovieData] = useState(null);
    const [seatInfo, setseatInfo] = useState({ids: [], numbers: [], name: "", cpf: ""});

    const updateseatInfo = (newData) => {

        setseatInfo(previousInfo => ({
            ...previousInfo,
            ...newData,
        }));
    }

    const parseSpecialChar = (word) => {
        return word.normalize("NFD").replace(/\p{Diacritic}/gu, "");
    }

    const registerSeat = (event) => {

        event.preventDefault();

        const isValidRequest = (ids, name, cpf) => {

            /* Check seats (If request contains at least one seat) */
            if (ids.length <= 0) {
                return {validRequest: false, message: "Por favor, selecione um assento."};
            }

            /* Check name (If request only contains letters and not only whitespaces) */
            if (/[^a-zA-Z\s]+/.test(name) || !name.trim()) {
                return {validRequest: false, message: "Nome invalido."};
            }

            /* Check CPF (If request only contains numbers and length is greater than 11) */
            if (/[^0-9]/.test(cpf) || cpf.length <= 10) {
                return {validRequest: false, message: "CPF invalido."};
            }

            /* Successful Request */
            return {validRequest: true, message: "Successful registration."};
        }

        const { validRequest, message } = isValidRequest(seatInfo.ids, parseSpecialChar(seatInfo.name), seatInfo.cpf);

        if (validRequest) {

            const URL = "https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many";
            axios.post(URL, {ids: seatInfo.ids, name: seatInfo.name, cpf: seatInfo.cpf})
            .then(() => {
                setUserData({
                    title: movieData.movie.title,
                    date: day.date,
                    time: movieData.name,
                    seatsNumber: seatInfo.numbers.sort(),
                    name: seatInfo.name,
                    cpf: seatInfo.cpf
                });
                navigate("/sucesso");
            })
            .catch(err => setError({isTrue: true, message: err.message}));

        } else {
            alert(message);
        }
    }

    useEffect(() => {

        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`;

        axios.get(URL)
        .then(res => {setMovieData(res.data)})
        .catch(err => setError({isTrue: true, message: err.message}));

    }, [idSessao, setError]);

    if (movieData === null) {
        return (<Loading> <img src={loading} /> </Loading>);
    }

    const { day, movie, seats } = movieData;

    return (
        <PageContainer>
            Selecione o(s) assento(s)

            <Seats 
                seats={seats} 
                reservedSeats={seatInfo.ids} 
                seatsNumber={seatInfo.numbers}
                updateseatInfo={updateseatInfo} 
            />

            <CaptionContainer>

                <CaptionItem>
                    <CaptionCircle 
                        borderColor={"#0E7D71"} 
                        backgroundColor={"#1AAE9E"} 
                    />
                    Selecionado
                </CaptionItem>

                <CaptionItem>
                    <CaptionCircle 
                        borderColor={"#7B8B99"} 
                        backgroundColor={"#C3CFD9"} 
                    />
                    Disponível
                </CaptionItem>

                <CaptionItem>
                    <CaptionCircle 
                        borderColor={"#F7C52B"} 
                        backgroundColor={"#FBE192"} 
                    />
                    Indisponível
                </CaptionItem>

            </CaptionContainer>

            <FormContainer onSubmit={registerSeat}>
                <label htmlFor="name">Nome do Comprador:</label>
                <input type="text" data-test="client-name"
                    required
                    maxLength="100"
                    id="name"
                    value={seatInfo.name}
                    onChange={(e) => updateseatInfo({name: e.target.value})}
                    placeholder="Digite seu nome..."
                />

                <label htmlFor="cpf">CPF do Comprador:</label>
                <input type="text" data-test="client-cpf"
                    required
                    maxLength="11"
                    id="cpf"
                    value={seatInfo.cpf}
                    onChange={(e) => updateseatInfo({cpf: e.target.value})}
                    placeholder="Digite seu CPF..."
                />

                <button type="submit" data-test="book-seat-btn">Reservar Assento(s)</button>
            </FormContainer>

            <FooterContainer data-test="footer">
                <div>
                    <img src={movie.posterURL} alt={movie.title} title={movie.title} />
                </div>
                <div>
                    <p>{movie.title}</p>
                    <p>{day.weekday} - {movieData.name}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    );
}