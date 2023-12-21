import Heading from "./Component/Heading";
import Menu from "./Component/Menu";
import Title from "./Component/PageTitle";
import Footer from "./Component/Footer";
import Card from "./Component/card";

function Gift() {
  return (
    <div>
      <Title title="Gift"/>
      <Heading heading="Quelques Idées de Cadeaux Pour Moi 🎁" />
      <p className="text-[20px] px-5 text-center font-semibold">Bienvenue dans cet espace dédié à l'art de la gâterie ! Pour ceux qui se demandent ce qui pourrait m'émerveiller en cette saison de festivités, voici une sélection spéciale d'idées de cadeaux</p>
      <div className="grid grid-cols-2 gap-5 m-5 md:flex md:flex-wrap md:justify-center md:items-center">
        <Card text="Tenis / sneakers" img="./image/gift/tenis.jpg" />
        <Card text="T-shirt d'Anime" img="./image/gift/tshirt.jpg" />
        <Card text="Ecouteurs sans fil, Airport" img="./image/gift/airport.jpg" />
        <Card text="Pourquoi pas un Laptop" img="./image/gift/laptop.jpg" />
        <Card text="Massage / soin de Beauté" img="./image/gift/massage.jpg" />
        <Card text="Ou encore un Cadeau Surprise" img="./image/gift/surpris.jpg" />
      </div>
      <div className="fixed bottom-0 left-0 right-0">
        <Menu/>
      </div>

      <Footer/>

    </div>
  );
}
export default Gift;