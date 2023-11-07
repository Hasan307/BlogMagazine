
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footers = () => {
    return (
        <footer className="bg-gray-800 py-8">
            <div className="container mx-auto flex justify-between items-center px-4">
                <div className="text-gray-400 text-sm">
                    &copy; 2021 BlogMagazine. All rights reserved.
                </div>
                <div className="flex items-center">
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition duration-150 ease-in-out"
                    >
                        <FaFacebook className="h-6 w-6" />
                    </a>
                    <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-gray-400 hover:text-white transition duration-150 ease-in-out"
                    >
                        <FaTwitter className="h-6 w-6" />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-gray-400 hover:text-white transition duration-150 ease-in-out"
                    >
                        <FaInstagram className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footers;
