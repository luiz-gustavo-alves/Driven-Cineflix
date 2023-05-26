/* Import Styled Components and Dependencies */
import { PageContainer, ListContainer } from "./style";
import { Loading } from "../../style/Loading";
import { useState, useEffect } from "react";
import axios from "axios";

/* Import Components */
import Movies from "../../components/Movies/Movies";

/* Import locally images */
import loading from "/loading.gif"

export default function HomePage(props) {

    const { setError } = props;
    const [movies, setMovies] = useState(null);

    useEffect(() => {

        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies";

        axios.get(URL)
        .then(res => setMovies(res.data))
        .catch(err => setError({isTrue: true, message: err.message}));

    }, [setError]);

    if (movies === null) {
        return <Loading> <img src={loading} /> </Loading>
    }

    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                {movies.map(movie =>
                    <Movies
                        key={movie.id}
                        movie={movie}
                    />
                )}
            </ListContainer>

        </PageContainer>
    )
}