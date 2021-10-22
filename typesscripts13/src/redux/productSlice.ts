import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { v4 as uuidv4 } from 'uuid';
import { ProductState } from '../types';

type initialStateType = {
  productList: ProductState[];
};

const productList: ProductState[] = [
  {
    id: uuidv4(),
    title: 'Meo Meo ',
    imageUrl: 'https://bit.ly/2Z4KKcF',
    name: 'Product 1',
    price: 1234567,
    quantity: 222,
  },
  {
    id: uuidv4(),
    title: "Harry Potter and the Philosopher's Stone",
    imageUrl: 'https://bit.ly/2Z4KKcF',
    name: 'Product 2',
    price: 1234567,
    quantity: 222,
  },
  {
    id: uuidv4(),
    title: 'The Lord of the Rings',
    imageUrl: 'https://bit.ly/2Z4KKcF',
    name: 'Product 3',
    price: 1234567,
    quantity: 222,
  },
];

const initialState: initialStateType = {
  productList,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addNewProduct: (state, action: PayloadAction<ProductState>) => {
      state.productList.push(action.payload);
    },
    updateProduct: (state, action: PayloadAction<ProductState>) => {
      const {
        payload: { title, id, imageUrl, name, price, quantity },
      } = action;

      state.productList = state.productList.map((product) =>
        product.id === id ? { ...product, imageUrl, title, name, price, quantity } : product
      );
    },
    deleteProduct: (state, action: PayloadAction<{ id: string }>) => {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const { addNewProduct, updateProduct, deleteProduct } = productSlice.actions;

export const selectProductList = (state: RootState) => state.product.productList;

export default productSlice.reducer;
