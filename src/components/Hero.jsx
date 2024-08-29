import bgImg from "/src/assets/vector3.png"
import food1 from "/src/assets/biryani2.png"
import food2 from "/src/assets/biryani3.png"
import food3 from "/src/assets/biryani5.png"
import { useState } from "react"

const imageList = [
    {
        id : 1,
        img : food1
    },
    {
        id : 2,
        img : food2
    },
    {
        id : 3,
        img : food3
    }
]

const bgImage = {
    backgroundImage : `url(${bgImg})`,
    backgroundPosition : "center",
    backgroundSize : "cover",
    backgroundRepeat : "no-repeat",
    window : "100%",
    height : "100%"
}

function Hero(){
    let [imageId, setImageId] = useState(food1)
    return(
        <div style={bgImage} 
        className="min-h-[550px] md:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-300 flex justify-center items-center">
            <div className="container pb-8 md:pb-0">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    {/* left section */}
                    <div
                    data-aos="zoom-out"
                    data-aos-duration="400"
                    data-aos-once="true" 
                    className="flex flex-col justify-center gap-4 pt-12 md:pt-0 text-center md:text-left order-2 md:order-1">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                            Welcome To The Foodie Zone
                        </h1>
                        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio mollitia labore ipsum molestias nulla corporis ratione iusto cum reprehenderit.</p>
                        <div>
                            <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full hover:scale-105 duration-300" >Order Now</button>
                        </div>
                    </div>
                    {/* image section */}
                    <div className="order-1 md:order-2 min-h-[450px] md:min-h-[450px]: flex justify-center items-center relative">
                        {/* Main image section */}
                        <div className="flex justify-center items-center h-[300px] md:h-[450px] overflow-hidden">
                            <img src={imageId} 
                            data-aos="zoom-in"
                            data-aos-duration="300"
                            data-aos-once="true"
                            className="w-[250px] md:w-[450px] mx-auto spin"/>
                        </div>
                        {/* Image list section */}
                        <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 bg-white/30 rounded-full p-4">
                            {
                                imageList.map((item) => {
                                    return <img 
                                    data-aos="zoom-in"
                                    data-aos-duration="400"
                                    data-aos-once="true"
                                    key={item.id}
                                    onClick={() => setImageId(item.img)}
                                    src={item.img}
                                    className="w-[60px] h-[60px] object-cover cursor-pointer hover:scale-105 duration-200"
                                    ></img>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero