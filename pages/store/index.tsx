import React from 'react';
import Link from 'next/link';

interface Product {
    id: number;
    title: string;
    price: number;
}

interface StorePageProps {
    products: Product[];
}

const StorePage: React.FC<StorePageProps> = ({ products }) => {
    return (
        <div className="min-h-screen bg-secondary px-6 py-10">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h1 className="text-2xl font-bold text-primary mb-6">Store Products</h1>
                {products.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="p-4 border border-gray-300 rounded-md bg-gray-50 shadow-sm"
                            >
                                <h2 className="text-lg font-semibold text-primary">{product.title}</h2>
                                <p className="text-gray-600 mb-4">Price: ${product.price}</p>
                                <Link href={`/store/product/view?id=${product.id}`}>
                                    <a className="text-white bg-primary py-2 px-4 rounded-md inline-block">
                                        View Product
                                    </a>
                                </Link>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600">No products available.</p>
                )}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const products = [
        { id: 1, title: 'Gucci Bag', price: 120 },
        { id: 2, title: 'Nike Sneakers', price: 95 },
    ];

    return { props: { products } };
}

export default StorePage;
