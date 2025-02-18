import { Outlet } from "react-router";

function HomePage() {
    return (
        <>
                <p>Home</p>
                <Outlet />
        </>

    )
}

export default HomePage;