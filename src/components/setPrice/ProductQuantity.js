import React, { useReducer } from "react";

// Initial product state
const initialState = {
  quantity: 1,
  unitPrice: 49.99, // example unit price in USD
  totalPrice: 49.99,
};

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      const increasedQty = state.quantity + 1;
      return {
        ...state,
        quantity: increasedQty,
        totalPrice: parseFloat((increasedQty * state.unitPrice).toFixed(2)),
      };

    case "DECREMENT":
      const decreasedQty = state.quantity > 1 ? state.quantity - 1 : 1;
      return {
        ...state,
        quantity: decreasedQty,
        totalPrice: parseFloat((decreasedQty * state.unitPrice).toFixed(2)),
      };

    default:
      return state;
  }
}

const ProductQuantity = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-center">Product Name</h2>

      <div className="flex items-center justify-between border-b pb-4 mb-4">
        <span className="text-gray-600">Unit Price:</span>
        <span className="text-lg font-bold">${state.unitPrice}</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-600">Quantity:</span>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => dispatch({ type: "DECREMENT" })}
            className="bg-red-500 text-white w-8 h-8 rounded-full text-xl leading-6 hover:bg-red-600"
          >
            -
          </button>
          <span className="text-lg font-semibold">{state.quantity}</span>
          <button
            onClick={() => dispatch({ type: "INCREMENT" })}
            className="bg-green-500 text-white w-8 h-8 rounded-full text-xl leading-6 hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-t pt-4">
        <span className="text-gray-800 font-medium">Total Price:</span>
        <span className="text-xl font-bold text-blue-600">
          ${state.totalPrice}
        </span>
      </div>
    </div>
  );
};

export default ProductQuantity;