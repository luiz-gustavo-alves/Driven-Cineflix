import { SessionContainer, ButtonsContainer } from "./style"
import { Link } from "react-router-dom";

export default function SessionInfo(props) {

    const { sessionInfo } = props;

    return (
        <div>
            {sessionInfo.map(info =>
                <SessionContainer key={info.id}>

                    {info.weekday} - {info.date}

                    <ButtonsContainer>
                        {info.showtimes.map(showtime => 
                            <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                                <button>
                                    {showtime.name}
                                </button>
                            </Link>
                        )}
                    </ButtonsContainer>

                </SessionContainer>
            )}
        </div>
    );
}