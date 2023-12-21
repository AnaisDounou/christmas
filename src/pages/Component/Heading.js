function Heading(props) {
    return <div>
        <h2 className="m-1 my-5 text-center text-[25px] p-2 rounded-xl font-bold ">
            {props.heading}
        </h2>
    </div>;
  }
  
  export default Heading;