import { useState } from "react";



const MarkedItems = ({marked,handleDelete,handleUpdate}) => {

    const {_id,servicePrice,date,service,img,status} = marked;

  


   
    return (
      <>
        
      <tr className="h-24"> 


        <td> 
            <button onClick={()=> handleDelete(_id)} className="btn btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button> 
        </td>
        <td> 
          <div className=" w-24 h-20">
            <img className="rounded-lg border-2 w-full h-full" src={img? img : 'https://media.istockphoto.com/id/1359876068/vector/customer-service-hotline-operators-consult-customers-with-headsets-on-computers-247-global.jpg?s=612x612&w=0&k=20&c=HcrFsPakslvox6rWnOWllH-jJ32TUNrTKusZ1J0_5oc='} alt="Avatar Tailwind CSS Component" />
          </div>
        </td>
        <td> <div className="font-bold">{service}</div> </td>
        <td> $ {servicePrice} </td>
        <td> {date} </td>
        <td>   
            {
            status === 'confirm'   ? <button  className="btn hover:bg-lime-400 bg-lime-400 border-0 px-5 capitalize text-white"> Confirmed </button>  
                                   : <button onClick={()=> handleUpdate(_id)} className="btn  bg-orange-600 border-0 px-5 capitalize text-white"> confirm </button>  
            }
        </td>
     
      </tr>
        </>
    );
};

export default MarkedItems;