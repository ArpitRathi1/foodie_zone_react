import { useEffect, useState } from "react"

function DarkMode(){

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
    const element = document.documentElement;

    useEffect(() => {
        if(theme === "dark"){
            element.classList.add("dark")
            localStorage.setItem("theme", "dark")
        }else{
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    },[theme])

    function handleThemeChange(){
        if (theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }

    return(
        <div>
            <div className="relative">
                <img 
                onClick={handleThemeChange}
                src="./src/assets/website/dark-mode-button.png" 
                className={`${theme !== "dark" ? "opacity-0" : "opacity-100"} w-12 absolute right-0 z-10 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300`}></img>
                <img 
                onClick={handleThemeChange}
                src="./src/assets/website/light-mode-button.png" 
                className={`w-12 drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300`}></img>
            </div>    
        </div>
    )
}

export default DarkMode 