import React from 'react';
import Header from '@/components/Header';

const BlogServicePage = () => {
    return (
        <services>
            <Header/>
            <div className="bg-gray-100">
            
            <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-900">Blog Services</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        We offer a variety of blog services to help you grow your online presence and reach your target audience.
                    </p>
                    <ul className="mt-8 space-y-6">
                        <li className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <span className="ml-3 text-lg text-gray-500">
                                Custom blog design and development
                            </span>
                        </li>
                        <li className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                                </svg>
                            </div>
                            <span className="ml-3 text-lg text-gray-500">
                                Blog content creation and management
                            </span>
                        </li>
                        <li className="flex">
                            <div className="flex-shrink-0">
                                <svg className="h-6 w-6 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 1 21 12.79z"></path>
                                </svg>
                            </div>
                            <span className="ml-3 text-lg text-gray-500">
                                SEO optimization for blog posts
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </services>
        
    );
};

export default BlogServicePage;
