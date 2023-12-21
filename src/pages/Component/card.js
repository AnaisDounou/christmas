function Card(props) {
    return <div className="md:flex md:flex-col md:items-center">
        <img className="rounded-2xl h-[165px]" alt="gift for anais" src={props.img} />
        <span className="text-[20px] px-1 font-semibold">{props.text}</span>
    </div>;
  }
  
  export default Card;