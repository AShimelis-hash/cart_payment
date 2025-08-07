import React, { useReducer, useEffect, useState } from 'react';
import axios from 'axios';

// Initial State
const initialState = {
  quantity: 1,
  unitPrice: 0,
  totalPrice: 0,
};

// Reducer Function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_UNIT_PRICE':
      return {
        ...state,
        unitPrice: action.payload,
        totalPrice: action.payload * state.quantity,
      };
    case 'INCREMENT':
      return {
        ...state,
        quantity: state.quantity + 1,
        totalPrice: state.unitPrice * (state.quantity + 1),
      };
    case 'DECREMENT':
      if (state.quantity === 1) return state;
      return {
        ...state,
        quantity: state.quantity - 1,
        totalPrice: state.unitPrice * (state.quantity - 1),
      };
    default:
      return state;
  }
};

const ProductQuantityManager = ({ productId }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);

  // Fetch Unit Price from backend
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/userdb/${productId}`);
        dispatch({ type: 'SET_UNIT_PRICE', payload: res.data.price }); // assuming price field
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) return <p className="text-center text-gray-500">Loading product...</p>;

  return (
    <div className="max-w-sm mx-auto border rounded-lg p-6 shadow-lg bg-white">
      <h2 className="text-xl font-semibold mb-4">Manage Quantity</h2>

      <div className="flex items-center justify-between mb-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          -
        </button>

        <span className="text-xl font-bold">{state.quantity}</span>

        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          +
        </button>
      </div>

      <p className="text-gray-700 mb-2">
        Unit Price: <span className="font-semibold">${state.unitPrice.toFixed(2)}</span>
      </p>
      <p className="text-gray-800 font-bold">
        Total: <span className="text-green-600">${state.totalPrice.toFixed(2)}</span>
      </p>
    </div>
  );
};

export default ProductQuantityManager;