import React from "react";
import PropertyViewCarousel from "./PropertyViewCarousel";
import HotelMetaDetails from "./HotelMetaDetails";
import HotelRoomsPicker from "./HotelRoomsPicker";
import HotelPolicy from "./HotelPolicy";
import HotelCheckoutCard from "./HotelCheckOutCard";

const HotelDetails = () => {
    return(
        <div className="container mt-6 mb-12">
            <PropertyViewCarousel />
            <div className="flex gap-6 mt-6">
                <div className="flex-1 space-y-8">
                    <HotelMetaDetails />
                    <HotelRoomsPicker />
                    <HotelPolicy />
                </div>
                <aside className="w-[340px] shrink-0 p-4 border border-border shadow-md rounded-xl">
                     <HotelCheckoutCard />
                </aside>
            </div>
        </div>
    )
}

export default HotelDetails;