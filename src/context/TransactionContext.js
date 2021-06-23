import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

const initialArray = {
  transactions: [
    {
      id: 1,
      text: 'Svirka',
      amount: 600,
    },
    {
      id: 2,
      text: 'Dom',
      amount: -400,
    },
  ],
};

const TransactionContext = createContext(initialArray);

const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialArray);

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <TransactionContext.Provider
      value={{ transactions: state.transactions, addTransaction }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export { TransactionContext, TransactionProvider };
