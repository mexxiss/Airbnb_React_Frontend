import { Outlet } from "react-router-dom";
import Header from "../Components/BookingHeader/Header.tsx";
import Footer from "../Components/Footer/Footer.tsx";

const BookingLayout = () => {
    return (
        <div className="max-w-[1900px] mx-auto">
            <Header />
            <main className="mt-[-50px] ">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default BookingLayout;
