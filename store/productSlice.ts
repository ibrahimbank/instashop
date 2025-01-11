import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProductState {
    products: { id: number; title: string; price: number }[];
}

const initialState: ProductState = {
    products: [],
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts(state, action: PayloadAction<{ id: number; title: string; price: number }[]>) {
            state.products = action.payload;
        },
        addProduct(state, action: PayloadAction<{ id: number; title: string; price: number }>) {
            state.products.push(action.payload);
        },
    },
});

export const { setProducts, addProduct } = productSlice.actions;
export default productSlice.reducer;
