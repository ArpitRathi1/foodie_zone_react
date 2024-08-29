import AppStoreImg from "/src/assets/app_store.png"
import PlayStoreImg from "/src/assets/play_store.png"
import Gif from "/src/assets/mobile_bike.gif"

function AppStore(){
    return(
        <div className="bg-gray-100 dark:bg-gray-800 py-14">
            <div className="container">
                <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
                    <div
                    data-aos="fade-up"
                    data-aos-duration="300"
                    >
                        <h1 className="text-2xl text-center md:text-left md:text-4xl font-semibold dark:text-gray-400 text-gray-700">Foodly is Availible for Android and IOS</h1>
                        <div className="flex flex-wrap flex-col justify-center md:items-start items-center">
                            <a href="#">
                                <img src={PlayStoreImg} 
                                className="max-w-[150px] md:max-w-[200px]" />
                            </a>
                            <a href="#">
                                <img src={AppStoreImg} 
                                className="max-w-[150px] md:max-w-[200px]" />
                            </a>
                        </div>
                    </div>
                    <div 
                    data-aos="zoom-in"
                    data-aos-duration="300"
                    >
                        <img src={Gif} className="max-w-[300px] mx-auto" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AppStore