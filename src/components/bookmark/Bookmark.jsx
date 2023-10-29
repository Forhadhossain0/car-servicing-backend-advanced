import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";


const Bookmark = () => {
    const service = useLoaderData()
    const {_id,img} = service;
    // console.log((service))
    const {user} = useContext(AuthContext);


    const handleBookMark = e => {
      e.preventDefault();
      const service = e.target.name.value;
      const servicePrice = e.target.price.value;
      const serviceDescription = e.target.description.value;
      const date = e.target.date.value;
      const userEmail = e.target.email.value;

      const order = {service,servicePrice,serviceDescription,date, serviceId: _id,  userEmail,img }
      console.log(order)


      fetch('http://localhost:5000/bookmark', {
        method:'POST',
        headers:{ 
          'content-type' : 'application/json'
        },
        body : JSON.stringify(order)
      })
      .then(result => result.json())
      .then(data => console.log(data))

    }


return (

<div className="mx-28 my-10">
    {/* <h2 className="text-center text-xl"> {service.title}</h2> */}


  <form onSubmit={handleBookMark} className="card-body bg-[#F3F3F3]  p-20">

    <div className=" f w-full grid grid-cols-2 gap-x-20 gap-y-8  ">

        <div className="form-control">
          <input type="text"  name="name" defaultValue={service.title}  className="input bg-white rounded-none " required />
        </div>

        <div className="form-control">
         <input type="date"  name="date"   className="input bg-white rounded-none " required />
        </div>

        <div className="form-control">
          <input type="text"  name="price" defaultValue={service.price} className="input bg-white rounded-none " required />
        </div>

        <div className="form-control">
          <input type="text" placeholder="email" name="email" defaultValue={user?.email} className="input bg-white rounded-none " required />
        </div>

    </div>

        <div className="form-control ">
          <textarea name="description" cols="30" rows="10"   defaultValue={service.description}  className="input  bg-white rounded-none h-56 mt-8 p-2  " ></textarea>
        </div>


        <div className="form-control mt-6">
        <button className="btn bg-[#FF3811] border-none text-white btn-primary">Order Confirm</button>
     </div>
 </form>

</div>
    );
};

export default Bookmark;