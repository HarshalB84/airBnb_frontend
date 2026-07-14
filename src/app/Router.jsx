import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Header from "@/components/layouts/Header.Layout";
import Footer from "@/components/layouts/Footer.Layout";
import HotelDetails from "./hotel-details";
import { SignInPage, SignUpPage } from "./auth";
import SearchPage from "./search/SearchPage";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/hotel/:id" element={<HotelDetails />} />
                    <Route path="/signin" element={<SignInPage />} />
                    <Route path="/signup" element={<SignUpPage />} />

                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;