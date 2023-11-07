
import Header from "@/components/Header";
const ProfileAboutPage = () => {
    return (
        <about>
            <Header/>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="flex justify-center">
                  
                </div>
                <div className="px-4 py-2">
                    <h1 className="text-2xl font-bold text-gray-800">Abou Hasan</h1>
                    <p className="text-gray-600 mt-2">Web Developer</p>
                    <p className="text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam vel tincidunt ultricies, elit elit bibendum mauris, vel bibendum velit sapien vel nunc. Sed euismod, diam vel tincidunt ultricies, elit elit bibendum mauris, vel bibendum velit sapien vel nunc.</p>
                    <div className="flex justify-center mt-4">
                        <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Contact Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </about>
    );
};

export default ProfileAboutPage;
