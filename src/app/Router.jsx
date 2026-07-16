import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Header from "@/components/layouts/Header.Layout";
import Footer from "@/components/layouts/Footer.Layout";
import HotelDetails from "./hotel-details";
import { SignInPage, SignUpPage } from "./auth";
import SearchPage from "./search/SearchPage";
import { PATHS } from "@/config/path.config";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path={PATHS.SEARCH} element={<SearchPage />} />
                    <Route path={PATHS.HOTEL} element={<HotelDetails />} />
                    <Route path={PATHS.SIGN_IN} element={<SignInPage />} />
                    <Route path={PATHS.SIGN_UP} element={<SignUpPage />} />

                </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;