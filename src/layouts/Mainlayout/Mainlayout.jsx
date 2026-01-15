import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

function Mainlayout() {
    return (
        <div>
            <Header />
                <main>
                <Outlet></Outlet>
                </main>
            <Footer />
        </div>
    )
}

export default Mainlayout;