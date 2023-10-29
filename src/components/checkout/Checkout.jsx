import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData()
    console.log((service))

return (


  // /////////////////////////////////////////////////////////
  // this page anywhere not used this is a optional or additional page 
  ///////////////////////////////////////////////////////////

<div className="mx-28 my-10">
    {/* <h2> {service.title}</h2> */}


  <form className="card-body bg-[#F3F3F3]  p-20">

    <div className=" f w-full grid grid-cols-2 gap-x-20 gap-y-8  ">
        <div className="form-control">
         <input type="text" placeholder="Frist Name" name="fristname"  className="input bg-white rounded-none " required />
        </div>

        <div className="form-control">
          <input type="text" placeholder="Last Name" name="lastname"  className="input bg-white rounded-none " required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Your phone"  name="phone" className="input bg-white rounded-none " required />
        </div>

        <div className="form-control">
          <input type="text" placeholder="Your email"  name="email" className="input bg-white rounded-none " required />
        </div>

    </div>

        <div className="form-control ">
          <input type="text" placeholder="Your message" name="message"  className="input  bg-white rounded-none h-56 mt-8  "  required />
        </div>


        <div className="form-control mt-6">
        <button className="btn bg-[#FF3811] border-none text-white btn-primary">Submit</button>
     </div>
 </form>

</div>
    );
};

export default Checkout;