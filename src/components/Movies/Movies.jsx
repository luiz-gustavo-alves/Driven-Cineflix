import { MovieContainer } from "./style"
import { Link } from "react-router-dom"

export default function Movies(props) {

    const { movie } = props;

    return (
        <MovieContainer>
            <Link to={`/sessoes/${movie.id}`}> <img src={movie.posterURL} alt={movie.title} title={movie.title}/> </Link>
        </MovieContainer>
    );
}