
const Room = ({room}) => {
    return(
        <article>
            {room.type}
        </article>
    )
}

const HotelRoomsPicker = ({rooms}) => {
    return (
       <section className="space-y-4">
        <h2 className="text-xl font-bold">Choose your room</h2>
        <div className="space-y-4">
            {rooms.map((room) => <Room room={room} key={room.id} />)}
        </div>
       </section>
    )
}

export default HotelRoomsPicker;