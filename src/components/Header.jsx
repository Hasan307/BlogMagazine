import Link from "next/link";

function Navbar() {
  return (
    <nav className=" shadow-md flex justify-between py-1  sm:px-6 lg:px-8 text-black font-sans ">
      <div className=" py-2 flex">
        <div className=" rounded-sm  p-2 m-2  hover:bg-violet-600 transition ease-in-out  duration-500   ">
          <Link href="/">Home</Link>
        </div>
        <div className=" rounded-sm  p-2 m-2 hover:bg-violet-600 transition ease-in-out  duration-500  ">
          <Link href="/blog">Blog</Link>
        </div>
        <div className=" rounded-sm  p-2 m-2 hover:bg-violet-600 transition ease-in-out  duration-500  ">
          <Link href="/contact">Contact Us</Link>
        </div>
        <div className=" rounded-sm  p-2 m-2 hover:bg-violet-600 transition ease-in-out  duration-500  ">
          <Link href="/services">Services</Link>
        </div>
        <div className=" rounded-sm  p-2 m-2 hover:bg-violet-600 transition ease-in-out  duration-500  ">
          <Link href="/about">About us</Link>
        </div>
      </div>

      <div className=" py-2 flex">
        <div className="rounded-sm  p-2 m-2 hover:bg-violet-600 transition ease-in-out  duration-500  ">
          <Link href="/login"> Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
