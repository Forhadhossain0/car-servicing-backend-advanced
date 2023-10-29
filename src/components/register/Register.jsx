import { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../provider/Authprovider";


const Register = () => {

  const {createUser} = useContext(AuthContext);
  const navigate = useNavigate();

    const handleSubmit = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const user = { email,password,name }
        console.log(user)

        createUser(email,password)
        .then((userCredential) => {
           console.log(userCredential.user)
           navigate('/')
        })
        .catch((error) => {
          console.log(error.message);
        });
        

    }
   

    return (
        <div>
              <div>
            <div className="hero md:h-[520px] mb-32">
  <div className="hero-content flex-col lg:flex-row-reverse  ">
  
    <div className="card flex-shrink-0 md:w-[440px] h-[520px] pb-5 border rounded-md ">
        <h2 className="text-[#444] text-3xl pt-2font-bold">Register</h2>

      <form onSubmit={handleSubmit} className="card-body w-full px-20 mx-auto">
        <div className="form-control">
          <label className="label">  <span className="label-text font-bold">Name</span> </label>
          <input name="name" type="text" placeholder="name" className="input rounded-md input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">  <span className="label-text font-bold">Email</span> </label>
          <input name="email" type="email" placeholder="email" className="input rounded-md input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">  <span className="label-text font-bold">Password</span> </label>
          <input name="password" type="password" placeholder="password" className="input rounded-md input-bordered" required />
        </div>
        {/* <div className="form-control">
          <label className="label">  <span className="label-text font-bold">Photo</span> </label>
          <input name="photo" type="text" placeholder="photo url" className="input rounded-md input-bordered" required />
        </div> */}
        <div className="form-control mt-6">
          <button className="btn bg-[#ff3811] rounded-md text-white hover:bg-slate-600">Register</button>
        </div>
      </form>

  

      <p>Already have an account? <Link to={'/login'} className="text-[#ff3811] font-bold" >Login here</Link></p>

    </div>

    <div className=" flex items-center justify-center ">
        <img className="w-[70%] h-[70%]" src="../../../src/assets/images/login/login.svg" alt="" />
    </div>


  </div>
</div>
        </div>
        </div>
    );
};

export default Register;