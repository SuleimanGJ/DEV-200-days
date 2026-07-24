import { Outlet } from "react-router";
import Navbar from "../components/Navbar";


const AuthLayout = () => {
    return (
        <>
            <Navbar />
            <h1>Authentication</h1>
            <Outlet />
        </>
    )
}
export default AuthLayout;