import React from 'react';
import { useRouter } from 'next/router';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/store";
import {addProduct} from "@/store/productSlice";



const ProductPreview = () => {
    const router = useRouter();
    const products = useSelector((state: RootState) => state.product.products);
    const dispatch = useDispatch();

    const handlePublish = () => {
        alert('Product has been published!');
        dispatch(addProduct({ id: 3, title: 'Adidas Shoes', price: 110 }));
        router.push('/store');
    };

    return (
        <div className="min-h-screen bg-secondary px-6 py-10">
            <div className="max-w-4xl mx-auto  p-6">
                <div className={'flex items-center justify-between w-full '}>

                    <div className="flex  gap-2 items-center mb-4 font-semibold cursor-pointer text-textColor px-4">
                        <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="#666666"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5 12H6M6 12L12 6M6 12L12 18" stroke="#666666" stroke-linecap="round"
                                  stroke-linejoin="round" fill={"#666666"}/>
                        </svg>
                        <h2>Product preview</h2>
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
                <div className="flex flex-col gap-6">
                    <div className="flex-1">
                        <img
                            src="/assets/sample-product.svg"
                            alt="Product"
                            className="w-full bg-cover bg-center bg-no-repeat rounded-md"
                        />
                    </div>
                    <div className="flex-1">
                        <div className={'flex items-center justify-between w-full '}>
                            <h1 className="text-xl font-bold text-textColor mb-4">
                                Gucci bag – the epitome of luxury <br/> and sophistication
                            </h1>

                            <div className={'flex items-center gap-4'}>
                                <div className={'flex items-center justify-center rounded-full bg-[#e4e4e4] w-fit p-2'}>
                                    <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="m2.47 13.11c1.55-3.09 3.8-5.26 6.57-6.5.44-.2 1.23-.48 1.96-.7v-3.91l7.89 7-7.89 7v-3.87c-1.75.34-3.42 1.06-4.98 2.12-2.99 2.03-4.39 4.29-4.39 4.29s-.25-3.26.84-5.43zm2.83.42c1.62-1.13 3.74-2.13 6.7-2.61v2.71l5.36-4.63-5.36-4.75v2.55c-.29.06-1.14.22-2.33.69-2.88 1.16-5.09 3.47-6.18 5.59-.31.62-.81 1.79-1 2.92.79-.95 1.91-1.85 2.81-2.47z"/>
                                    </svg>

                                </div>
                                <div className={'flex items-center justify-center rounded-full bg-[#e4e4e4] w-fit p-2'}>
                                    <svg fill="none" height="20" viewBox="0 0 48 48" width="20"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path clip-rule="evenodd"
                                              d="m10.3446 11.9881c-1.45997 1.8579-2.3446 4.3963-2.3446 7.0464 0 5.9408 3.9647 10.9276 8.1509 14.5166 2.0726 1.777 4.1501 3.1681 5.7116 4.1155.7796.473 1.4279.8337 1.8788 1.0751.0899.0481.1719.0914.2455.1299.0755-.0416.1598-.0886.2525-.1409.452-.2549 1.1014-.6344 1.8824-1.1284 1.5639-.9893 3.6447-2.431 5.7207-4.2431 4.2013-3.667 8.1576-8.6529 8.1576-14.3247 0-2.6497-.8845-5.1881-2.3444-7.0461-1.4551-1.8519-3.4422-2.9884-5.6868-2.9884-3.1028 0-5.5094 2.0208-7.0712 5.2018l-.8976 1.8283-.8976-1.8283c-1.5619-3.1812-3.9685-5.2018-7.0712-5.2018-2.2444 0-4.2315 1.1363-5.6866 2.9881zm13.6554 28.0119c-.4338.901-.4345.9007-.4345.9007l-.0045-.0022-.0114-.0056-.0409-.02c-.0352-.0174-.086-.0427-.1514-.0758-.1309-.0663-.3202-.1639-.5596-.292-.4787-.2562-1.1586-.6347-1.9727-1.1286-1.626-.9866-3.7985-2.4403-5.9759-4.307-4.3138-3.6984-8.8491-9.1943-8.8491-16.035 0-3.0753 1.02123-6.0541 2.77202-8.2821 1.75558-2.23417 4.28408-3.7524 7.25918-3.7524 3.5036 0 6.1679 1.96337 7.9688 4.7338 1.8008-2.7703 4.4651-4.7338 7.9688-4.7338 2.9754 0 5.5039 1.5185 7.2594 3.7527 1.7507 2.2282 2.7718 5.207 2.7718 8.2818 0 6.5825-4.5437 12.0794-8.8424 15.8315-2.174 1.8975-4.3432 3.3995-5.9668 4.4265-.8128.5142-1.4915.911-1.9691 1.1803-.2389.1347-.4277.2377-.5581.3076-.0651.035-.1157.0617-.1507.08l-.0405.0211-.0113.0058-.0033.0018-.0011.0005s-.0007.0004-.4567-.8896zm0 0 .4567.8896-.4428.2269-.4484-.2158z"
                                              fill="#333" fill-rule="evenodd"/>
                                    </svg>

                                </div>
                            </div>
                        </div>

                        <div className={'flex flex-col md:flex-row items-center justify-between w-full '}>

                            <div className="mt-2 flex items-center justify-center space-x-2">
                                <span className="text-lg font-bold text-gray-800">₦18.0</span>
                                <span className="text-gray-500 text-sm">₦28.0</span>
                                <span className="bg-primary text-white text-sm px-4 py-1 rounded-full">
                                    25% OFF
                                </span>
                            </div>
                            <div className="mt-2 flex items-center justify-center space-x-1 text-yellow-500">
                                <span>★★★★★</span>
                                <span className="text-gray-600 text-sm">(5 sold)</span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <h2 className="text-xl font-medium">Select variants</h2>
                            <div className="mt-2">
                                <p className="text-xs text-gray-400 font-medium">Size: SMALL</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {["Filter", "Filter", "Filter", "Filter", "Filter", "Filter", "Filter", "Filter"].map((item, index) => (
                                        <button
                                            key={index}
                                            className={`px-3 py-1 border rounded-full ${index === 0 ? 'text-white' : 'text-textColor'} ${index === 0 ? 'bg-textColor' : ' bg-[#e4e4e4]'}`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="mt-4">
                                <p className="text-xs text-gray-400 font-medium">Color: White</p>
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {["Filter", "Filter", "Filter"].map((item, index) => (
                                        <button
                                            key={index}
                                            className={`px-3 py-1 border rounded-full text-textColor ${index === 0 ? 'text-white' : 'text-textColor'} ${index === 0 ? 'bg-textColor' : ' bg-[#e4e4e4]'}`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <hr className={'mb-8 mt-8'}/>

                        <div className="mt-6">
                            <div className={'flex items-center justify-between mb-4'}>
                                <h2 className={'text-textColor text-lg font-semibold'}>Product description</h2>
                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z"
                                        fill="#666666"/>
                                </svg>
                            </div>

                            <p className="mt-2 text-sm text-gray-600">
                                Wholesale and drop shipping are both welcomed. For wholesale, we will
                                offer discount or free express shipping which only takes 3–7 days to
                                arrive...
                                <span className="text-primary cursor-pointer"> Read more</span>
                            </p>
                        </div>

                        <hr className={'mb-8 mt-8'}/>

                        <div className="mt-6">
                            <div className={'flex items-center justify-between mb-4'}>
                                <h2 className={'text-textColor text-lg font-semibold'}>Shipping</h2>
                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="m11.9995 16.8001c-.7 0-1.4-.27-1.93-.8l-6.51997-6.51996c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l6.51997 6.51996c.48.48 1.26.48 1.74 0l6.52-6.51996c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-6.52 6.51996c-.53.53-1.23.8-1.93.8z"
                                        fill="#666666"/>
                                </svg>
                            </div>

                            <div className="mt-4 flex items-center">
                                <img
                                    src="/assets/uploadLogo.svg"
                                    alt="Vendor"
                                    className="w-12 h-12 rounded-full"
                                />
                                <div className="ml-4">
                                    <h3 className="text-sm font-medium">Gucci Store</h3>
                                    <p className="text-xs text-gray-500">Fashion • ★ 5.4 • 100k</p>
                                </div>
                                <button className="ml-auto text-primary text-sm">Follow</button>
                            </div>
                            <p className="mt-4 text-sm text-gray-600">
                                Vendor description: You can track your parcel on the following
                                website using your tracking number: www.17track...
                            </p>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {["Quality goods", "Nice designs", "Quality goods"].map(
                                    (tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 border rounded-full text-xs text-gray-800"
                                        >
                {tag}
              </span>
                                    )
                                )}
                            </div>
                        </div>

                        <hr className={'mb-8 mt-8'}/>

                    </div>
                </div>

                <div
                    className={'items-end  justify-center bottom-10 gap-4 mt-8 mb-8 flex w-full sm:w-[40%] lg:w-[50%] px-8'}>
                    <button
                        onClick={handlePublish}
                        className="w-full bg-primary text-white py-3 rounded-full font-semibold mt-6 shadow-lg shadow-[#ffe6ea]"
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    )
        ;
};

export async function getServerSideProps(context: { query: { productId: string; }; }) {
    const {productId} = context.query;

    // Fetch product details dynamically from API or database
    const product = {
        id: productId ?? 1,
        title: 'Gucci Bag',
        description: 'An elegant and stylish bag...',
        price: 120,
        oldPrice: 150,
        variants: {color: ['Red', 'Black', 'White'], size: ['Small', 'Medium', 'Large']},
    };

    return {props: {product}};
}


export default ProductPreview;
