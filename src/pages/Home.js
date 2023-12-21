import Title from "./Component/PageTitle";
import Countdown from "./Component/Countdown";
import Menu from "./Component/Menu";
import Heading from "./Component/Heading";
import Footer from "./Component/Footer";

function Home() {
  return (
    <div>
      <Title title="Home"/>
      <img className="w-[350px] m-auto" src="./image/merry.png" alt="merry christmas"/>
      <Countdown/>
      <div className="fixed bottom-0 left-0 right-0">
        <Menu/>
      </div>
      <Heading heading="Bienvenue dans mon Univers de Noël Chaleureux! 🌟 " />
      
      <p className="text-[20px] p-5 text-center font-semibold">Entrez dans un monde de lumière, de chaleur et de la magie de Noël. Ici, la neige peut ne pas recouvrir les toits, mais l'esprit de Noël brille de mille feux, illuminant chaque coin de mon cœur.</p>

      <img className="w-[350px] m-auto" src="./image/gift.png" alt="merry christmas"/>
      
      <p className="text-[20px] p-5 text-center font-semibold">Noël, c'est bien plus qu'une saison de fêtes. C'est une période où l'amour, la compassion et la paix se répandent comme des lumières scintillantes dans l'obscurité. Pour moi, cette saison évoque la naissance de Jésus-Christ, un moment empreint de foi, d'espoir et de lumière.</p>

      <img className="w-[350px] m-auto" src="./image/jesus.png" alt="merry christmas"/>
      
      <p className="text-[20px] p-5 text-center font-semibold">Les moments partagés en famille, la bienveillance envers autrui et le rappel de l'importance des valeurs spirituelles sont au cœur de mon Noël.</p>

      <img className="w-[350px] m-auto" src="./image/love.png" alt="merry christmas"/>
      <Footer/>
    </div>
  );
}
export default Home;