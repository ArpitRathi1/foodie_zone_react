import React from "react";
import Img from "/src/assets/biryani.png";
import Img2 from "/src/assets/biryani2.png";
import Img3 from "/src/assets/biryani4.png";

const ServicesData = [
    {
      id: 1,
      img: Img2,
      name: "Biryani",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet.",
    },
    {
      id: 2,
      img: Img2,
      name: "Chiken kari",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
    {
      id: 3,
      img: Img2,
      name: "Cold Cofee",
      description:
        "Lorem ipsum dolor sit amet ipsum dolor sit ametipsum dolor sit amet ipsum dolor sit amet",
    },
];

function Services(){
    return(
        <div className="py-10">
            <div
                data-aos="slide-up"
                data-aos-duration="300" 
            className="container">
                {/* Header section */}
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
                    <h1 className="text-3xl font-bold">Services</h1>
                    <p className="text-xs text-gray-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum maxime dolorum dicta doloremque illo veritatis delectus repellendus ipsam architecto excepturi.</p>
                </div>
                {/* Card section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 lg:gap-5 place-items-center">
                    {
                        ServicesData.map((item) => {
                            return (
                                <div key={item.id} 
                                className="max-w-[300px] group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white duration-300 p-4 shadow-xl">
                                    <div className="h-[100px] ">
                                        <img src={item.img} className="max-w-[200px] mx-auto block transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300" /> 
                                    </div>   
                                    <div className="p-4 text-center">
                                        <h1 className="text-xl font-bold">{item.name}</h1>
                                        <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{item.description}</p>
                                    </div>
                                </div>    
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services