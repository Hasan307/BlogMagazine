import Link from "next/link";

function Navbar() {
    return (
        <nav className="flex items-center py-2 bg-black">
            <div className="flex items-center py-1 bg-white rounded-xl p-2">
                <div ><a href="#">Home</a></div>             
            </div>
            <div className="py-1 bg-white rounded-xl p-2">
                <Link href="/services">
                Services
                </Link>
      
            </div>
            
        </nav>

    );
}

export default Navbar;
