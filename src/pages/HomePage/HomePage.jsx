import { PageContainer, ListContainer, MovieContainer } from "./style"

export default function HomePage() {
    
    return (
        <PageContainer>
            Selecione o filme

            <ListContainer>
                <MovieContainer>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
                </MovieContainer>

                <MovieContainer>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
                </MovieContainer>

                <MovieContainer>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
                </MovieContainer>

                <MovieContainer>
                    <img src={"https://br.web.img2.acsta.net/pictures/22/05/16/17/59/5165498.jpg"} alt="poster"/>
                </MovieContainer>
            </ListContainer>

        </PageContainer>
    )
}