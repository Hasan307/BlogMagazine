import React from 'react';
import Image from 'next/image';

const Latest = () => {
    return (
        <div className="flex flex-wrap">
                <div className="p-4">
                    <div className="max-w-sm">
                        <Image 
                        src="/uploads/ds.jpg"
                        width={500}
                        height={500}
                        alt="Picture of the author"
                    />
                    </div>
                    <div className="p-1">
                        <h1 className="mb-4 text-m font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-3xl dark:text-white">Title</h1>
                        <h3>Short Description</h3>
                    </div>
                </div>

            </div>
    );
};

export default Latest;