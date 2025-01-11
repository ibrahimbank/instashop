import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from "next/image";

const StoreCreation = () => {
    const [storeData, setStoreData] = useState({
        storeName: '',
        tagline: '',
        phoneNumber: '',
        category: '',
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setStoreData((prev) => ({ ...prev, [name]: value }));
    };

    const handleContinue = () => {
        const { storeName, tagline, phoneNumber, category } = storeData;

        if (!storeName || !tagline || !phoneNumber || !category) {
            return alert('Please fill out all fields');
        }

        router.push('/store/product/create');
    };

    return (
        <div className="min-h-screen flex flex-col items-center bg-secondary relative px-4">
            <div className="max-w-md w-full flex flex-col py-8">

                <h2 className={'flex  gap-2 items-center mb-4 font-semibold cursor-pointer'}>
                    <svg width="20px" height="20px" stroke-width="1.5" viewBox="0 0 24 24" fill="#6a7384"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="currentColor" stroke-linecap="round"
                              stroke-linejoin="round" fill={"#6a7384"}/>
                    </svg>

                    Get started
                </h2>
                <ol className="flex items-center w-full gap-1 mb-6">
                    <li className="flex w-full after:rounded-lg items-center text-primary after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-4 after:inline-block">

                    </li>
                    <li className="flex w-full items-center after:rounded-lg after:content-[''] after:w-full after:h-1 after:border-b after:border-primary  after:border-4 after:inline-block">

                    </li>
                    <li className="flex w-full items-center text-primary after:rounded-lg after:content-[''] after:w-full after:h-1 after:border-b after:border-primary after:border-4 after:inline-block">

                    </li>

                </ol>


                <div className={'flex flex-col rounded-lg border border-gray-300 items-center justify-center py-8 mb-4 gap-1'}>
                    <Image src={'/assets/uploadLogo.svg'} alt={'default upload'} width={98} height={16}/>
                    <p className={'text-sm font-normal text-gray-400'}>Upload store logo</p>
                </div>


                <input
                    type="text"
                    name="storeName"
                    value={storeData.storeName}
                    onChange={handleInputChange}
                    placeholder="Store Name"
                    className="w-full p-3 border bg-inherit border-gray-300 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="tagline"
                    value={storeData.tagline}
                    onChange={handleInputChange}
                    placeholder="Store Tagline"
                    className="w-full p-3 border bg-inherit border-gray-300 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="phoneNumber"
                    value={storeData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Store Phone Number"
                    className="w-full p-3 border bg-inherit border-gray-300 rounded-md mb-4"
                />
                <input
                    type="text"
                    name="category"
                    value={storeData.category}
                    onChange={handleInputChange}
                    placeholder="Category"
                    className="w-full p-3 border bg-inherit border-gray-300 rounded-md mb-4"
                />

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

export default StoreCreation;
