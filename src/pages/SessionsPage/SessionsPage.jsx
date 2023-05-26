/* Import Styled Components and Dependencies */
import { PageContainer, FooterContainer } from "./style";
import { Loading } from "../../style/Loading";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

/* Import Components */
import SessionInfo from "../../components/SessionInfo/SessionInfo";

/* Import locally images */
import loading from "/loading.gif";

export default function SessionsPage(props) {

    const { setError } = props;
    const { idFilme } = useParams();
    const [session, setSession] = useState(null);

    useEffect(() => {

        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`;

        axios.get(URL)
        .then(res => setSession(res.data))
        .catch(err => setError({isTrue: true, message: err.message}));

    }, [idFilme, setError]);

    if (session === null) {
        return (<Loading> <img src={loading} /> </Loading>);
    }

    return (
        <PageContainer>
            Selecione o horário
            
            <SessionInfo sessionInfo={session.days}/>

            <FooterContainer>
                <div>
                    <img src={session.posterURL} alt={session.title} title={session.title} />
                </div>
                <div>
                    <p>{session.title}</p>
                </div>
            </FooterContainer>

        </PageContainer>
    )
}