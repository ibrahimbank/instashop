import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const [input, setInput] = useState('');
    const router = useRouter();

    const handleContinue = () => {
        if (!input) return alert('Please enter your phone or email');
        router.push('/auth/profile');
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-secondary  relative px-4">
            <div className="max-w-md w-full flex flex-col ">

                <div className={'flex flex-col gap-2 py-10'}>
                    <h2 className={'flex  gap-2 items-center mb-4 font-semibold cursor-pointer'}>
                        <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="#6a7384"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="currentColor" stroke-linecap="round"
                                  stroke-linejoin="round" fill={"#6a7384"}/>
                        </svg>

                        Get started
                    </h2>
                    <ol className="flex items-center w-full gap-1">
                        <li className="flex w-full after:rounded-lg items-center text-primary after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-4 after:inline-block">

                        </li>
                        <li className="flex w-full items-center after:rounded-lg after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">

                        </li>
                        <li className="flex w-full items-center after:rounded-lg after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">

                        </li>

                    </ol>
                    <h1 className="text-2xl font-semibold text-textColor mb-2">Enter your phone number <br/> or email to
                        get started</h1>
                    <p className="text-gray-600 mb-4">
                        We’ll send you a verification code for <br/> confirmation.
                    </p>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter phone number or email"
                        className="w-full rounded-xl p-3 border border-gray-300 bg-inherit mb-4"
                    />
                </div>


            </div>
            <div className={'items-end absolute justify-center bottom-10 flex w-full sm:w-[40%] lg:w-[30%] px-8'}>

                <button
                    onClick={handleContinue}
                    className="w-full bg-primary rounded-full text-white py-3 shadow-lg shadow-[#ffe6ea] font-semibold"
                >
                    Continue
                </button>

            </div>
        </div>
    );
};

export default Login;
