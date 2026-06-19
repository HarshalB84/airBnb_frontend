import React from "react";

const Header = () => {
    return(
        <header className="bg-brand py-2">
            <div className="container flex justify-between items-center">
                <div id="logo-wrapper">
                <a href="#" aria-label="Go to Booking.com">
                    <img width={144} height={24} src="/assets/booking.com.svg" alt="Logo for Booking.com" />
                </a>
                </div>
                <div id="auth">

                </div>
            </div>
        </header>
    )
}

export default Header;