import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <Link to={"/"}  className={`w-full h-[10vh] flex justify-between items-center bg-[#032541] duration-500 ease-in-out`}>
                <div className="ms-[5%]">
                    <h2 className={`text-2xl text-white hover:text-slate-300 font-semibold duration-300 ease-in-out`}>AndraCinema</h2>
                </div>
                <div className="me-[5%] flex gap-x-8">
                    <Link to={"/movie"}>
                        <p className="text-white hover:text-slate-300 font-semibold duration-300 ease-in-out">Movie</p>
                    </Link>
                    <Link to={"/tv-shows"}>
                        <p className="text-white hover:text-slate-300 font-semibold duration-300 ease-in-out">TV Shows</p>
                    </Link>
                </div>
            </Link>
        </>
    )
}

export default Navbar