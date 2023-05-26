/* Import Styled Components and Dependencies */
import { PageContainer, TextContainer } from "./style";
import { Link } from "react-router-dom";

/* Import Components */
import Error from "../Error/Error";

export default function SuccessPage(props) {

    const { userData, setUserData} = props;

    if (userData === null) {
        return (<Error errorMessage={"401 Unauthorized"} />);
    }

    const formatCPF = (cpf) => {

        let formatedCPF = ""
        for (let i = 0; i < cpf.length - 2; i++) {

            formatedCPF += `${cpf[i]}`;
            if (i % 3 === 2 && i < cpf.length - 3) {
                formatedCPF += ".";
            }
        }

        formatedCPF += `-${cpf[9]}${cpf[10]}`;
        return formatedCPF;
    }

    return (
        <PageContainer>
            <h1>Pedido feito <br /> com sucesso!</h1>

            <TextContainer>
                <strong><p>Filme e sessão</p></strong>
                <p>{userData.title}</p>
                <p>{userData.date} - {userData.time}</p>
            </TextContainer>

            <TextContainer>
                <strong><p>Ingressos</p></strong>
                {userData.seatsNumber.map(seat => {
                    return (<p key={seat}>Assento {seat}</p>);
                })}
            </TextContainer>

            <TextContainer>
                <strong><p>Comprador</p></strong>
                <p>Nome: {userData.name}</p>
                <p>CPF: {formatCPF(userData.cpf)}</p>
            </TextContainer>
            
            <Link to="/">
                <button onClick={() => setUserData(null)}>Voltar para Home</button>
            </Link>
        </PageContainer>
    );
}