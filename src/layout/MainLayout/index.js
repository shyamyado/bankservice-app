import { Outlet } from "react-router-dom";
import Header from "../../Views/Header";

const MainLayout = () => {

    return (
        <>
            <div class="container-fluid">
                <Header />
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;
