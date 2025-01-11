import React, { useState } from 'react';
import { useRouter } from 'next/router';

const EditProduct = () => {
    const [productData, setProductData] = useState({
        title: 'Sample Product',
        description: 'This is a sample product description.',
        price: '100',
        oldPrice: '120',
        collection: 'Sample Collection',
        inventory: '50',
        selfShipping: true,
        multiShipping: false,
        images: [] as File[],
    });

    const router = useRouter();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;

        setProductData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? target.checked : value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setProductData((prev) => ({
                ...prev,
                images: Array.from(e.target.files as FileList),
            }));
        }
    };

    const handleSave = () => {
        alert('Product details updated successfully!');
        router.push('/store/product/view');
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary p-4 relative">
            <div className="max-w-lg w-full">
                <div className={'flex items-center justify-between w-full '}>

                    <div className="flex  gap-2 items-center mb-4 font-semibold cursor-pointer text-textColor" onClick={()=>{
                        router.push('/store/product/view');
                    }}>
                        <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="#666666"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="#666666" stroke-linecap="round"
                                  stroke-linejoin="round" fill={"#666666"}/>
                        </svg>
                        <h2>Product details</h2>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dots-vertical"
                         width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#666666" fill="none"
                         stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="12" r="1"/>
                        <circle cx="12" cy="19" r="1"/>
                        <circle cx="12" cy="5" r="1"/>
                    </svg>

                </div>


                <div className={'flex items-center justify-between mb-4'}>

                    <p className={'flex items-center gap-1 text-[#666666] border border-gray-300 rounded-full py-[2px] px-4'}>
                        Draft <svg width={'15px'} height={'15px'} clip-rule="evenodd" fill-rule="evenodd"
                                   stroke-linejoin="round" stroke-miterlimit="2"
                                   viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path d="m-512-64h1280v800h-1280z" fill="none"/>
                        <path
                            d="m56.103 16.824-33.296 33.297-14.781-14.78 2.767-2.767 11.952 11.952 30.53-30.53c.943.943 1.886 1.886 2.828 2.828z"
                            fill-rule="nonzero" fill={'#666666'}/>
                    </svg>
                    </p>
                    <p className={'flex items-center gap-1 text-primary'}>
                        Preview product
                    </p>
                </div>


                <hr className={'mb-8'}/>

                <div className={'flex items-center justify-between mb-4'}>
                    <h2 className={'text-textColor text-lg font-semibold'}>Basic details</h2>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z"
                            fill="#666666"/>
                    </svg>

                </div>
                <input
                    type="text"
                    name="title"
                    value={productData.title}
                    onChange={handleInputChange}
                    placeholder="Product Title"
                    className="w-full p-3 bg-inherit border border-gray-300 rounded-xl mb-4"
                />
                <textarea
                    name="description"
                    value={productData.description}
                    onChange={handleInputChange}
                    placeholder="Product Description"
                    className="w-full p-3 bg-inherit  border border-gray-300 rounded-xl mb-4"
                />
                <div className={'flex items-center gap-4'}>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleInputChange}
                        placeholder="Price"
                        className="w-full p-3 bg-inherit  border border-gray-300 rounded-xl mb-4"
                    />
                    <input
                        type="number"
                        name="oldPrice"
                        value={productData.oldPrice}
                        onChange={handleInputChange}
                        placeholder="Old Price (Optional)"
                        className="w-full p-3 bg-inherit  border border-gray-300 rounded-xl mb-4"
                    />
                </div>
                <input
                    type="text"
                    name="collection"
                    value={productData.collection}
                    onChange={handleInputChange}
                    placeholder="Product Collection"
                    className="w-full p-3 bg-inherit  border border-gray-300 rounded-xl mb-4"
                />
                <input
                    type="number"
                    name="inventory"
                    value={productData.inventory}
                    onChange={handleInputChange}
                    placeholder="Inventory Stocks"
                    className="w-full p-3 bg-inherit  border border-gray-300 rounded-xl mb-4"
                />

                <hr className={'mb-8'}/>


                {/* Product Images */}
                <div className="mt-6">

                    <div className={'flex items-center justify-between mb-4'}>
                        <h2 className={'text-textColor text-lg font-semibold'}>Product images</h2>


                        <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z"
                                fill="#666666"/>
                        </svg>

                    </div>
                    <div className="mt-4 space-y-4">
                        {[1, 2, 3, 4].map((_, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between p-2 rounded"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src="/assets/sample-product.svg"
                                        alt="Placeholder"
                                        className="w-12 h-12 rounded"
                                    />
                                    <span className="text-sm">logo.img</span>
                                </div>
                                <label className="inline-flex items-center cursor-pointer gap-2">

                                    <svg
                                        enableBackground="new 0 0 92 92"
                                        height="25"
                                        viewBox="0 0 92 92"
                                        width="25"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="m21 53c-1.8 0-3.7-.8-5-2.1s-2-3.1-2-4.9.8-3.6 2-5c1.3-1.3 3.1-2 5-2 1.8 0 3.6.8 4.9 2 1.3 1.3 2.1 3.1 2.1 5 0 1.8-.8 3.6-2.1 4.9s-3.1 2.1-4.9 2.1zm29.9-2.1c1.3-1.3 2.1-3.1 2.1-4.9s-.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2s-3.7.8-5 2c-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1zm25 0c1.3-1.3 2.1-3.1 2.1-4.9s-.8-3.6-2.1-5c-1.3-1.3-3.1-2-4.9-2s-3.7.8-5 2c-1.3 1.3-2 3.1-2 5 0 1.8.8 3.6 2 4.9 1.3 1.3 3.1 2.1 5 2.1 1.8 0 3.6-.8 4.9-2.1z"/>
                                    </svg>

                                    <input type="checkbox" value="" className="sr-only peer"/>

                                    <div
                                        className="relative w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#8A0561] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#8A0561]"
                                    ></div>
                                </label>

                            </div>
                        ))}
                        <div className={'flex items-center justify-center w-full mb-4 py-6'}>
                            <button className="flex items-center justify-center font-semibold gap-2 mt-2 text-primary text-sm bg-[#dfdfdf] p-2 rounded-full w-full">
                                Add image <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.74992 1.4974H4.83325C3.43312 1.4974 2.73305 1.4974 2.19828 1.76988C1.72787 2.00956 1.34542 2.39201 1.10574 2.86242C0.833252 3.3972 0.833252 4.09726 0.833252 5.4974V12.4974C0.833252 13.8975 0.833252 14.5976 1.10574 15.1324C1.34542 15.6028 1.72787 15.9852 2.19828 16.2249C2.73305 16.4974 3.43312 16.4974 4.83325 16.4974H12.4999C13.2749 16.4974 13.6624 16.4974 13.9803 16.4122C14.843 16.181 15.5169 15.5072 15.7481 14.6444C15.8333 14.3265 15.8333 13.939 15.8333 13.1641M14.1666 5.66406V0.664062M11.6666 3.16406H16.6666M7.08325 6.08073C7.08325 7.0012 6.33706 7.7474 5.41659 7.7474C4.49611 7.7474 3.74992 7.0012 3.74992 6.08073C3.74992 5.16025 4.49611 4.41406 5.41659 4.41406C6.33706 4.41406 7.08325 5.16025 7.08325 6.08073ZM10.8249 8.92918L3.77588 15.3374C3.37939 15.6979 3.18114 15.8781 3.16361 16.0342C3.14841 16.1695 3.2003 16.3038 3.30257 16.3937C3.42057 16.4974 3.68849 16.4974 4.22432 16.4974H12.0466C13.2459 16.4974 13.8455 16.4974 14.3165 16.2959C14.9078 16.043 15.3788 15.5719 15.6318 14.9807C15.8333 14.5097 15.8333 13.91 15.8333 12.7107C15.8333 12.3072 15.8333 12.1054 15.7891 11.9175C15.7337 11.6814 15.6274 11.4602 15.4776 11.2694C15.3585 11.1176 15.2009 10.9915 14.8858 10.7394L12.5548 8.87461C12.2394 8.62232 12.0817 8.49617 11.9081 8.45165C11.755 8.41242 11.594 8.4175 11.4437 8.4663C11.2732 8.52168 11.1238 8.65752 10.8249 8.92918Z"
                                    stroke="#8A226F" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                            </button>
                        </div>
                    </div>
                </div>

                {/* Inventory Variations */}
                <div className="mt-6">
                    <h2 className={'text-textColor text-lg font-semibold'}>Inventory variations</h2>
                    <div className="mt-4 space-y-4">
                        <div>
                            <label className="flex items-center space-x-2 mb-4 p-4">
                                <input
                                    type="checkbox"
                                    name="selfShipping"
                                    checked={productData.selfShipping}
                                    onChange={handleInputChange}
                                />
                                <span>This product is variable; has different colors, sizes, weight, materials, etc.</span>
                            </label>
                        </div>
                        {["Color", "Size", "Size"].map((option, index) => (
                            <div key={index} className="space-y-2 border border-gray-300 rounded-xl p-6">
                                <label className="text-xs font-medium">{`Option ${index + 1} ${option}`}</label>
                                <p>Color</p>
                                <input
                                    type="text"
                                    placeholder="Enter values"
                                    className="w-full  bg-inherit rounded px-4 py-2 text-sm mt-1"
                                />
                            </div>
                        ))}

                        <div className={'flex items-center justify-center w-full mb-4 py-6'}>
                            <button
                                className="text-primary font-semibold text-sm bg-[#dfdfdf] p-2 rounded-full w-full ">+
                                Add new option
                            </button>
                        </div>

                    </div>
                </div>


                {/*<input*/}
                {/*    type="file"*/}
                {/*    multiple*/}
                {/*    onChange={handleFileChange}*/}
                {/*    className="w-full p-3 bg-inherit  border border-gray-300 rounded-xl mb-4"*/}
                {/*/>*/}

                <hr className={'mb-8'}/>


                <div className={'flex items-center justify-between mb-4'}>
                    <h2 className={'text-textColor text-lg font-semibold'}>Shipping</h2>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z"
                            fill="#666666"/>
                    </svg>
                </div>

                <label className="flex items-center justify-between space-x-2 mb-4">
                    <span>Self Shipping</span>
                    <input
                        type="checkbox"
                        name="selfShipping"
                        checked={productData.selfShipping}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#8A0561] border-gray-300 rounded focus:ring-[#8A0561] peer-focus:ring-[#8A0561] accent-[#8A0561] "
                    />


                </label>
                <label className="flex items-center justify-between space-x-2 mb-4">
                    <span>InstaShop shipping</span>
                    <input
                        type="checkbox"
                        name="multiShipping"
                        checked={productData.multiShipping}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-[#8A0561] border-gray-300 rounded focus:ring-[#8A0561] peer-focus:ring-[#8A0561] accent-[#8A0561] "
                    />
                </label>


            </div>

            <div
                className={'items-end  justify-center bottom-10 gap-4 mt-8 mb-8 flex w-full sm:w-[40%] lg:w-[30%] px-8'}>

                <button
                    onClick={handleSave}
                    className="w-full bg-inherit border border-primary rounded-full text-primary py-3 font-semibold"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSave}
                    className="w-full bg-primary rounded-full text-white py-3 shadow-lg shadow-[#ffe6ea] font-semibold"
                >
                    Save
                </button>

            </div>
        </div>
    );
};

export default EditProduct;
