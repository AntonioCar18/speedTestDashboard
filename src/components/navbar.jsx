import logo from '../assets/logo_app.png'

const NavBar = () => {
    return (
        <div className = 'w-full h-16 bg-gray-800 flex items-center justify-between px-8'>
            <a href="" className="text-white font-bold" >
                <img src={logo} alt="Logo" className="h-4 md:h-6 w-auto" >
                </img>
            </a>
            <div className="hidden md:flex items-center justify-between gap-8">
                <a href="" className="text-white font-bold">Home</a>
                <a href="#" className="text-white font-bold">Help</a>
                <a href="#" className="text-white font-bold">Contact</a>
            </div>
        </div>
    )
}
        

export default NavBar