import React from "react";

export default function AppReducer(state, action) {
    switch (action.type) {
          case "ADD_TRANSACCION":
            return {
                ...state,
                transactions: [...state.transactions, action.payload],
            }
        default:
            return state;
    }
}