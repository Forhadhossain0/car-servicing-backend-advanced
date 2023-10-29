import { useContext } from "react";
import { AuthContext } from "../provider/Authprovider";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

  const {singIn} = useContext(AuthContext);
  const navigate = useNavigate();

 const handleSubmit = e =>{

     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
  

     singIn(email,password)
     .then(result => {
       console.log(result.user)
       navigate('/')
      })
      .catch((err) => console.log(err,'login site has some truble to continue'))
      
    }


    
    return (
        <div>
            <div className="hero md:h-[520px] mb-32">
  <div className="hero-content flex-col lg:flex-row-reverse  ">
  
    <div className="card flex-shrink-0 md:w-[440px] h-[520px] pb-5 border rounded-md ">
        <h2 className="text-[#444] text-3xl pt-4 font-bold">Login</h2>

      <form onSubmit={handleSubmit} className="card-body w-full px-20 mx-auto">
        <div className="form-control">
          <label className="label">  <span className="label-text font-bold">Email</span> </label>
          <input name="email" type="email" placeholder="email" className="input rounded-md input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">  <span className="label-text font-bold">Password</span> </label>
          <input name="password" type="password" placeholder="password" className="input rounded-md input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#ff3811] rounded-md text-white hover:bg-slate-600">Sign In</button>
        </div>
      </form>

        <p>Or Sign In with</p>
      <div className="flex justify-center py-5 space-x-3">
        <button className="text-[#ff3811] bg-slate-200 text-lg w-10 h-10 font-bold rounded-full hover:bg-black hover:text-white transition-all">G</button>
        <button className="text-[#3317b1] bg-slate-200 text-lg w-10 h-10 font-bold rounded-full hover:bg-black hover:text-white transition-all">f</button>
        <button className="text-[#4c24ff] bg-slate-200 text-lg w-10 h-10 font-bold rounded-full hover:bg-black hover:text-white transition-all">in</button>
      </div>

      <p>dont have an account ? <Link to={'/register'} className="text-[#ff3811] " > please Register</Link></p>

    </div>

    <div className=" flex items-center justify-center ">
        <img className="w-[70%] h-[70%]" src="../../../src/assets/images/login/login.svg" alt="" />
    </div>


  </div>
</div>
        </div>
    );
};

export default Login;