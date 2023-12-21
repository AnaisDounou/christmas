import { Link } from "react-router-dom";

function Menu() {
    return <div>
        <div className="flex justify-around items-center p-4 border-t bg-white">
            <Link to="/">
                <span className="flex flex-col justify-center items-center mx-5 gap-[5px]  md:flex-row">
                    <img className="h-[30px]" src="./image/icon/home.png" alt="" />
                    <span className="text-center font-semibold text-[15px]">Home </span> 
                </span>
            </Link>
            <Link to="/calender">
                <span className="flex flex-col justify-center items-center mx-5 gap-[5px]  md:flex-row">
                    <img className="h-[30px]" src="./image/icon/calender.png" alt="" />
                     <span className="text-center font-semibold text-[15px]">Calender </span> 
                </span>
            </Link>
            <Link to="/gift">
                <span className="flex flex-col justify-center items-center mx-5 gap-[5px]  md:flex-row">
                    <img className="h-[30px]" src="./image/icon/gift.png" alt="" />
                    <span className="text-center font-semibold text-[15px]">Gift </span> 
                </span>
            </Link>
            <Link to="/message">
                <span className="flex flex-col justify-center items-center mx-5 gap-[5px]  md:flex-row">
                    <img className="h-[30px]" src="./image/icon/message.png" alt="" />
                     <span className="text-center font-semibold text-[15px]">Message </span> 
                </span>
            </Link>
        </div>
    </div>;
  }
  
  export default Menu;