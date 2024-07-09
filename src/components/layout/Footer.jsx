const Footer = () => {
    return (
        <div className="bg-[#032541] w-full p-12">
            <div className="flex justify-center text-white gap-x-10">
                <div className="font-semibold text-5xl my-auto">
                    <h1>Andra</h1>
                    <p>Cinema</p>
                </div>
                <div className="ml-14 flex flex-col">
                    <a href="#" className="text-xl font-semibold text-white hover:text-slate-300 duration-300 ease-in-out">The Basics</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">About Us</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">Contact Us</a>
                </div>
                <div className="flex flex-col">
                    <a href="#" className="text-xl font-semibold text-white hover:text-slate-300 duration-300 ease-in-out">Social Media Links</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">Instagram</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">Twitter</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">Facebook</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">Youtube</a>
                </div>
                <div className="flex flex-col">
                    <a href="#" className="text-xl font-semibold text-white hover:text-slate-300 duration-300 ease-in-out">Customer Service</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">Privacy Policy</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">Terms of Service</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">FAQ</a>
                    <a href="#" className="text-base font-medium text-slate-400 hover:text-slate-500 duration-300 ease-in-out">Cookies</a>
                </div>
            </div>
            <div className="text-center mt-10 text-white">
                <h2 className="font-semibold text-base">© 2024 Kevin Andra</h2>
                <p className="text-slate-400 text-xs">All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer