import Heading from "./Component/Heading";
import Menu from "./Component/Menu";
import Title from "./Component/PageTitle";
import Footer from "./Component/Footer";
function Messages() {
  return (
    <div>
      <Title title="Message"/>
      <Heading heading="Écrire un Message de Noël Spécial 🎅" />
      <p className="text-[20px] p-5 text-center font-semibold">La magie de Noël réside souvent dans les mots chaleureux échangés.</p>
      <img className="w-[350px] m-auto" src="./image/giveaway.png" alt="merry christmas"/>
      <p className="text-[20px] p-5 text-center font-semibold">Envoyez des messages de Noël rempli d'amour et de bonne humeur. Participez à répandre la magie des fêtes en envoyant vos vœux chaleureux. </p>
      <br/>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <span className="shadow-3xl text-[20px] p-2 text-center font-semibold rounded-xl">Joyeux Noel</span>
        <span className="shadow-3xl text-[20px] p-2 text-center font-semibold rounded-xl"> ¡Feliz Navidad!</span>
        <span className="shadow-3xl text-[20px] p-2 text-center font-semibold rounded-xl">Frohe Weihnachten!</span>
        <span className="shadow-3xl text-[20px] p-2 text-center font-semibold rounded-xl"> 圣诞快乐</span>
        <span className="shadow-3xl text-[20px] p-2 text-center font-semibold rounded-xl">  Buon Natale!</span>
        <span className="shadow-3xl text-[20px] p-2 text-center font-semibold rounded-xl">  Feliz Natal!</span>
        <span className="shadow-3xl text-[20px] p-2 text-center font-semibold rounded-xl"> Merry x-mas</span>
        <span className="shadow-3xl text-[20px] p-2 text-center font-semibold rounded-xl"> Mutlu Noeller!</span>
      </div>
      <br/>
      <img className="w-[350px] m-auto" src="./image/merry.png" alt="merry christmas"/>
      <div className="fixed bottom-0 left-0 right-0">
        <Menu/>
      </div>
      <Footer/>
    </div>
  );
}
export default Messages;