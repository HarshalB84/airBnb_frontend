import Icon from "@/components/ui/icons";


const HotelMetaDetails = ({hotel}) => {
    console.log(hotel);
    return (
        <section className="space-y-4">
            <div className="flex">
                <div className="flex-1 space-y-1">
                    <h1 className="text-2xl font-bold/">{hotel.name}</h1>
                    <p className="text-muted-foreground">{`${hotel.contactInfo?.address}, ${hotel.city}`}</p>
                </div>
                <div>
                    <div className="flex gap-2">
                        <span>4.8</span>
                        <Icon icon="star" />
                    </div>
                    <div>
                        <span>663 Ratings</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HotelMetaDetails;