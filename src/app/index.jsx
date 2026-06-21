import Home from "./home";
import Header from "@/components/layouts/Header.Layout";
import Footer from "@/components/layouts/Footer.Layout";
import HotelDetails from "./hotel-details";

const App = () => {
    return(
        <div>
            <Header />
            {/* <Home /> */}
            <HotelDetails />
            <Footer />
        </div>
    )
}

export default App;