import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="lg:flex lg:flex-wrap text-gray-700  ">
        <div className=" max-w-5xl ">
            <div>
                <Image
                src="/uploads/dss.jpg"
                width={1000}
                height={1000}
                alt="Picture of the author"
                />
            </div>
            <div className="flex flex-wrap">
                <div className="p-2">
                    <div className="max-w-sm">
                        <Image 
                        src="/uploads/ds.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </div>
                    <div className="p-2">
                        <h1 className="mb-4 text-m font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white">Title</h1>
                        <h3>Short Description</h3>
                    </div>
                </div>
                <div className="p-2">
                    <div className="max-w-sm" >
                        <Image
                        src="/uploads/ds.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </div>
                    <div className="p-2">
                        <h1 className="mb-4 text-m font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white">Title</h1>
                        <h3>Short Description</h3>
                    </div>
                </div>
                <div className="p-2">
                    <div className="max-w-sm" >
                        <Image 
                        src="/uploads/ds.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </div>
                    <div className="p-2">
                        <h1 className="mb-4 text-m font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white">Title</h1>
                        <h3>Short Description</h3>
                    </div>
                </div>
                <div className="p-2">
                    <div className="max-w-sm" >
                        <Image 
                        src="/uploads/ds.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </div>
                    <div className="p-2">
                        <h1 className="mb-4 text-m font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white">Title</h1>
                        <h3>Short Description</h3>
                    </div>
                </div>
                <div className="p-2">
                    <div className="max-w-sm" >
                        <Image 
                        src="/uploads/ds.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </div>
                    <div className="p-2">
                        <h1 className="mb-4 text-m font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white">Title</h1>
                        <h3>Short Description</h3>
                    </div>
                </div>
                
                    

            </div>
            

        </div>
        <div className="max-w-xl items-center text-center  mx-auto ">
          <div>
            Latest News
            <div className="  border-t-2  border-black "></div>
          </div>
          <div className="flex items-start text-start ">
            <div className=" lg:mx-w-lg p-2 ">
              <Image
                src="/uploads/ds.jpg"
                width={150}
                height={150}
                alt="Picture of the author"
              />
            </div>
            <div>
              <h1>Title</h1>
              <h2>Short Description</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
