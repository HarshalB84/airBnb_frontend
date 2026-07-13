import HotelCard from "./components/HotelCard";
import HotelCardSkeleton from "./components/HotelCardSkeleton";

const Hotels = ({isLoading, data, error}) => {
  if(isLoading) return (
    <div className="space-y-4">
      <HotelCardSkeleton />
      <HotelCardSkeleton />
    </div>
  );

  return (
    <div className="space-y-4">
      <HotelCardSkeleton />
      {data.map((hotel) => (
        <HotelCard key={hotel.id} {...hotel} />
      ))}
    </div>
  );
}


export default Hotels;