import Countdown from "./Component/Countdown";
import DecemberCalendar from "./Component/December";
import Footer from "./Component/Footer";
import Heading from "./Component/Heading";
import Menu from "./Component/Menu";
import Title from "./Component/PageTitle";
import { Link } from "react-router-dom";

function Calender() {
  return (
    <div className="overflow-x-hidden">
      <Title title="Calender"/>
      <div className="fixed bottom-0 left-0 right-0">
        <Menu/>
      </div>
      <div className="" >
        <DecemberCalendar/>
      </div>
      <Heading heading="Count down till Christmas Day🎄" />
      <Countdown/>
      <p className="text-[20px] p-5 text-center font-semibold" >Merci de célébrer Noël avec moi en partageant un peu de bonheur sous forme de cadeau. Cliquer ici pour avoir des idee de Cadeau</p>
      <Link to="/gift"> <button className="bg-red text-white w-fit m-auto block text-center text-[20px] p-3 rounded-xl font-semibold hover:bg-red-700">Cadeau pour Anais</button>  </Link>
      <br/>
      <img className="w-[350px] m-auto" src="./image/drive.png" alt="merry christmas"/>
      <Footer/>
    </div>
  );
}
export default Calender;