import { Link, NavLink } from "react-router-dom";
import '../../index.css'
import { AuthContext } from "../provider/Authprovider";
import { useContext } from "react";



const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

  const hanleLogOUt = () => {
    logOut()
    .then(() => console.log('user succesfully logout '))
    .catch((err)=>console.log('user can not logout '+ err))
  }


const links = <>
      <NavLink to={'/'}>         <li className="font-bold uppercase md:mr-10">Home      </li></NavLink>
      <NavLink to={'/About'}>    <li className="font-bold uppercase md:mr-10">About     </li></NavLink>
      <NavLink to={'/Blog'}>     <li className="font-bold uppercase md:mr-10">Blog      </li></NavLink>
      {/* <NavLink to={'/Contact'}>  <li className="font-bold uppercase md:mx-8">Contact   </li></NavLink> */}
      {
        user&& user ? <>
                      <NavLink to={'/markedservices'}><li className="font-bold uppercase text-lime-400 cursor-pointer md:mr-10">  My Booked  </li> </NavLink>
                      <li onClick={hanleLogOUt} className="font-bold uppercase text-lime-400 cursor-pointer md:mr-10">Sing Out</li> 
                      </>
                    : <NavLink to={'/login'}>    <li className="font-bold uppercase md:mr-8">login or register </li></NavLink>
      } 
</>
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          links
        }
      </ul>
    </div>
    {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
     <Link to={'/'}>  <img className="image-full w-20 h-10 md:h-20 " src="../../../src/assets/logo.svg" alt="" /> </Link>
  </div>
  <div className="navbar-center lg:mt-5 hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end lg:mt-3">

    {
      user && user ?   <><img className="rounded-full   w-[50px] h-[50px]" src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" /></>
                      : ''
    }


    <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
    </button>
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>

    <button className="btn rounded-md px-5 capitalize bg-white text-[#FF3811] border-[#FF3811] ">Appoinment</button>

  </div>
</div>
        </div>
    );
};

export default Navbar;