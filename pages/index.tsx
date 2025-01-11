import React from 'react';
import Link from 'next/link';

const Welcome = () => {
  return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        <div className="text-center flex flex-col gap-4">
          <img src="/assets/welcome-illustration.svg" alt="Welcome" className=""/>
          <div>

            <h1 className="text-3xl font-bold text-textColor mb-4 ">Welcome</h1>
            <p className="text-textColor mb-6">
              The safest platform to shop from social <br/> media vendors.
            </p>
          </div>
          <ul className="flex flex-col gap-4 text-left mb-6 border-primary border p-4 bg-secondaryBg rounded-2xl">
            {
              ["Reach Millions of Shoppers", "Easy Product Listing", "Secure and Fast Payments", "Boost Your Visibility"].map((item, i) => (
                  <li key={i} className={"flex items-center gap-2 text-sm w-full text-textColor font-medium"}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M5.25002 9.0026L7.75002 11.5026L12.75 6.5026M17.3334 9.0026C17.3334 13.605 13.6024 17.3359 9.00002 17.3359C4.39765 17.3359 0.666687 13.605 0.666687 9.0026C0.666687 4.40023 4.39765 0.669266 9.00002 0.669266C13.6024 0.669266 17.3334 4.40023 17.3334 9.0026Z"
                          stroke="#8A226F" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    {item}</li>
              ))
            }

          </ul>
          <Link href="/auth/login">
            <button className="bg-primary text-white px-6 py-3 rounded-full w-full shadow-lg shadow-[#ffe6ea] font-semibold mt-14">
              Get started
            </button>
          </Link>
        </div>
      </div>
  );
};

export default Welcome;
