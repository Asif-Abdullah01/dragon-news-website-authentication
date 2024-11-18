import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LayoutComponent/LeftNavbar";
import RightNavbar from "../components/LayoutComponent/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <div>
            <header className="font-Poppins">
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>

            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
            <aside className="left col-span-3"><LeftNavbar></LeftNavbar></aside>
            <section className="middle col-span-6">
                <Outlet></Outlet>
            </section>
            <aside className="right col-span-3"><RightNavbar></RightNavbar></aside>
            </main>
        </div>
    );
};

export default HomeLayout;