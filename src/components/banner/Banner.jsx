

const Banner = () => {
    return (
<div>

    <div className="carousel w-full md:h-[530px] h-[420px] mb-24 ">

    <div id="slide1" className="carousel-item relative  w-full">
    <img src="../../../src/assets/images/banner/5.jpg" className="w-full" />

    <div className="absolute  bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)] h-full w-full flex  items-center justify-between ">
      <div className="text-left justify-start my-auto  text-white px-5">
        <div className="px-2 md:px-36">
         <div className="md:w-[50%]">
          <h1 className="md:text-6xl text-4xl leading-40 font-bold">Affordable Price For Car  Servicing</h1>
          <p className="py-6 ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
          </div>
          <div className="flex">
          <button className="btn border-orange-600 text-white rounded-none hover:bg-black hover:border-black bg-orange-600">Discover More</button>
          <button className="btn ml-4  btn-outline border-white text-white rounded-none">Latest Project</button>
          </div>
        </div>

        <div className="justify-end  space-x-5  md:flex  mt-10 md:mt-0  items-end">
           <a href="#slide4" className="btn hover:bg-orange-500 hover:border-orange-500 hover:text-white btn-circle">❮</a> 
           <a href="#slide2" className="btn hover:bg-orange-500 hover:border-orange-500 hover:text-white btn-circle">❯</a> 
        </div>
      </div>
     </div>
    </div> 

  <div id="slide2" className="carousel-item relative   w-full">
    <img src="../../../src/assets/images/banner/1.jpg" className="w-full" />
    <div className="absolute   bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]   h-full w-full flex items-center justify-between ">
        
      <div className="text-left justify-start my-auto  text-white px-5">
      <div className="px-2 md:px-36">
       <div className="md:w-[50%]">
          <h1 className="md:text-6xl text-4xl leading-40 font-bold">Affordable Price For Car  Servicing</h1>
          <p className="py-6 ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="flex">
        <button className="btn border-orange-600 text-white rounded-none bg-orange-600">Discover More</button>
        <button className="btn ml-4  btn-outline border-white text-white rounded-none">Latest Project</button>
       </div>
       </div>

      <div className="justify-end pt-5 space-x-5  md:flex    items-end">
           <a href="#slide1" className="btn hover:bg-orange-500 hover:border-orange-500 hover:text-white btn-circle">❮</a> 
           <a href="#slide3" className="btn hover:bg-orange-500 hover:border-orange-500 hover:text-white btn-circle">❯</a> 
      </div>
      </div>
    </div>
  </div>
 


  <div id="slide3" className="carousel-item relative  w-full">
    <img src="../../../src/assets/images/banner/2.jpg" className="w-full" />
    <div className="absolute    bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]  h-full w-full flex  items-center justify-between ">
        
      <div className="text-left justify-start my-auto  text-white px-5">
      <div className="px-2 md:px-36">
       <div className="md:w-[50%]">
          <h1 className="md:text-6xl text-4xl leading-40 font-bold">Affordable Price For Car  Servicing</h1>
          <p className="py-6 ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="flex">
        <button className="btn border-orange-600 text-white rounded-none bg-orange-600">Discover More</button>
        <button className="btn ml-4  btn-outline border-white text-white rounded-none">Latest Project</button>
       </div>
       </div>

      <div className="justify-end pt-5 space-x-5  md:flex    items-end">
           <a href="#slide2" className="btn hover:bg-orange-500 hover:border-orange-500 hover:text-white btn-circle">❮</a> 
           <a href="#slide4" className="btn hover:bg-orange-500 hover:border-orange-500 hover:text-white btn-circle">❯</a> 
      </div>
      </div>
    </div>
  </div>


  <div id="slide4" className="carousel-item relative    w-full">
    <img src="../../../src/assets/images/banner/3.jpg" className="w-full" />
    <div className="absolute    bg-gradient-to-r  from-[#151515] to-[rgba(21,21,21,0)]   h-full w-full flex  items-center justify-between ">
        
      <div className="text-left justify-start my-auto  text-white px-5">
      <div className="px-2 md:px-36">
       <div className="md:w-[50%]">
          <h1 className="md:text-6xl text-4xl leading-40 font-bold">Affordable Price For Car  Servicing</h1>
          <p className="py-6 ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        </div>
        <div className="flex">
        <button className="btn border-orange-600 text-white rounded-none bg-orange-600">Discover More</button>
        <button className="btn ml-4  btn-outline border-white text-white rounded-none">Latest Project</button>
       </div>
       </div>

      <div className="justify-end pt-5 space-x-5  md:flex    items-end">
           <a href="#slide3" className="btn hover:bg-orange-500 hover:border-orange-500 hover:text-white btn-circle">❮</a> 
           <a href="#slide1" className="btn hover:bg-orange-500 hover:border-orange-500 hover:text-white btn-circle">❯</a> 
      </div>
      </div>
    </div>
  </div>

</div>


{/* aboute section start */}
<div id="about ">
    <div className="row">
        <div className=" grid md:grid-cols-2 w-full h-[600px]  ">
            <div className="main-img-container w-full h-full  relative ">
                <div className="box-img w-[70%] h-[80%] ">
                    <img src="../../../src/assets/images/about_us/person.jpg" alt="" className="h-[480px] w-full" />
                    <img className="absolute h-[300px] w-1/2 md:bottom-16 bottom-0  right-0 md:right-20 border-[10px] border-white rounded-lg" src="../../../src/assets/images/about_us/parts.jpg" alt=""  />
                </div>
            </div>
        <div className="content space-y-5 md:w-[70%] text-left md:ml-10">
                    <h3 className="font-bold text-orange-600 text-xl">About Us</h3>
                    <h1 className="md:text-5xl font-bold leading-50">We are qualified & of experience in this field</h1>
                    <p className="leading-8">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <p className="leading-8">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                    <button className="btn border-orange-600 hover:text-black text-white rounded-none bg-[#FF3811]">Get More Info</button>
                </div>
        </div>
    </div>
</div>



 </div>
    );
};

export default Banner;