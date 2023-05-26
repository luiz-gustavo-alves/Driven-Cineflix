import { SeatsContainer, SeatItem } from "./style";

export default function Seats(props) {

    const { seats, reservedSeats, updateReservedSeats } = props;

    const seatCondition = (id) => {

        for (let i = 0; i < reservedSeats.length; i++) {
            if (id === reservedSeats[i]) {
                return {isReserved: true, index: i};
            }
        }
        return {isReserved: false, index: -1};
    }

    const getSeatStatus = (seat) => {

        if (!seat.isAvailable) {
            return {status: "Indisponível", borderColor: "#F7C52B", backgroundColor: "#FBE192"};
        }

        const { isReserved } = seatCondition(seat.id);

        if (!isReserved) {
            return {status: "Disponível", borderColor: "#7B8B99", backgroundColor: "#C3CFD9"};
        }

        return {status: "Selecionado", borderColor: "#0E7D71", backgroundColor: "#1AAE9E"};
    }

    const selectSeat = (seat) => {

        if (!seat.isAvailable) {
            alert("Esse assento não está disponível");
        } else {

            let newReservedSeats;
            const { isReserved, index } = seatCondition(seat.id);

            if (!isReserved) {
                newReservedSeats = [...reservedSeats, seat.id];
            } else {
                reservedSeats.splice(index, 1);
                newReservedSeats = [...reservedSeats];
            }
            updateReservedSeats({ids: newReservedSeats});
        }
    }

    return (
        <SeatsContainer>
            {seats.map(seat => {
                const { status, borderColor, backgroundColor } = getSeatStatus(seat);
                return (
                    <SeatItem
                        key={seat.id}
                        borderColor={borderColor}
                        backgroundColor={backgroundColor}
                        title={status}
                        onClick={() => selectSeat(seat)}
                    >{seat.name}</SeatItem>
                );
            })}
        </SeatsContainer>
    );
}