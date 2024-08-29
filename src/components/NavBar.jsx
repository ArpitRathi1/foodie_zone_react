import { FaCartArrowDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

function NavBar(){
    return(
        <div>
            <div className="shadow-md">
                <div className="container py-3 mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <a href="#" className="flex items-center gap-2 text-2xl md:text-3xl font-bold">
                                <img src="../src/assets/food-logo.png" className="w-10"/>
                                <p>Foodie Zone</p>
                            </a>
                        </div>
                        <div className="flex items-center gap-4">
                            <div>
                                <DarkMode></DarkMode>
                            </div>
                            <ul className="hidden md:flex gap-4">
                                <li>
                                    <a href="#"
                                    className="inline-block py-4 px-4 hover:text-primary"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                    className="inline-block py-4 px-4 hover:text-primary"
                                    >
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a href="#"
                                    className="inline-block py-4 px-4 hover:text-primary"
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                            <button 
                            className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300 flex gap-2 items-center">
                                <p>Order</p>
                                <FaCartArrowDown className="inline-block ml-2 text-xl text-white drop-shadow-sm"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar