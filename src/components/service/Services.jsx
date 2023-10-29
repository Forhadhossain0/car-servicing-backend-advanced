import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Services = () => {


const [services,setServices] = useState([])
useEffect(()=> {
    fetch('http://localhost:5000/services')
    .then(res=> res.json())
    .then(data=> setServices(data))
},[])

  return (

    <div className=" md:mt-0 mt-80">
      <div className="services my-20">
        <div className="container header-content mx-auto mb-10 ">
          <h3 className="text-xl font-bold text-[#ff3811]">Service</h3>
          <h1 className="text-5xl font-bold py-2">Our Service Area</h1>
          <p className="mx-auto py-2 md:w-[60%]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable.
          </p>
        </div>

        {/* ------------ */}
        <div className="grid md:grid-cols-3 ">

      {  services.map(card =>
        <div className="content m-5 rounded-lg border hover:shadow-2xl " key={card._id}>
        <div className="content p-5 text-left space-y-3  ">
          <img className="rounded-xl h-[225px]" src={card.img}  alt=""  />
          <h2 className="text-2xl font-bold">{card.title}</h2>
          <div className="flex justify-between text-[#ff3811] font-bold ">
            <p>Price : {card.price}</p>{" "}

            <Link  to={`/bookmark/${card._id}`}>       
            <p className="text-3xl hover:text-black cursor-pointer -mt-2 font-extrabold">  &rarr; </p>
            </Link>
          </div>
        </div>
      </div>
         
      )}
        </div>
        <button className="border-[#ff3811] mx-auto border py-3 px-5 mt-8 text-[#ff3811] font-semibold rounded hover:bg-[#ff3811] hover:text-white transition-all">
          More Services
        </button>
      </div>



      {/* phone call section */}

<div className="grid md:grid-cols-3 bg-black p-10 mb-20 rounded-lg">

  <div className="content m-5 rounded-lg  " >
    <div className="content flex items-center space-x-5  text-left  ">
       <img className="rounded-xl " alt="" src="../../../src/assets/icons/001-timetable.svg" />
       <div className="justify-between text-white space-y-1 ">
           <p>We are open monday-friday</p>
           <p className="text-xl  cursor-pointer -mt-2 font-extrabold"> 7:00 am - 9:00 pm </p>
       </div>
     </div>

</div>

  <div className="content m-5 rounded-lg " >
    <div className="content flex items-center space-x-5  text-left ">
       <img className="rounded-xl " alt="" src="../../../src/assets/icons/Group 34.svg" />
       <div className="justify-between text-white space-y-1">
           <p>Have a question?</p>
           <p className="text-xl  cursor-pointer -mt-2 font-extrabold"> +2546 251 2658</p>
       </div>
     </div>

</div>

  <div className="content m-5 rounded-lg  " >
    <div className="content flex items-center space-x-5  text-left ">
       <img className="rounded-xl " alt="" src="../../../src/assets/icons/Group 35.svg" />
       <div className="justify-between text-white space-y-1 ">
           <p>Need a repair? our address</p>
           <p className="text-xl cursor-pointer -mt-2 font-extrabold"> Liza Street, New York </p>
       </div>
     </div>

</div>
   
  </div>

    </div>
  );
};

export default Services;
