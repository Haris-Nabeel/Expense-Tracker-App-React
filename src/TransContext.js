import React,{createContext,useReducer} from 'react';
import transactionReducer from './transReducer.js';

let initialTransactions= [];

export const transactionContext = createContext(initialTransactions);





export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(transactionReducer, initialTransactions);

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD-TRANSACTION',
            payload: transaction
        })
    }

    function deleteTransaction(transaction,id) {
        transaction.splice(id,1);
        dispatch({
            type:'DELETE-TRANSACTION',
            payload:transaction
            
        })
        
    }

    return (
        <transactionContext.Provider value={
            {
                transactions: state,
                addTransaction,
                deleteTransaction
            }
        }>
            {children}
        </transactionContext.Provider>
    );


// import React, { createContext, useReducer } from 'react';
// import transactionReducer from './transReducer.js';

// const initialData = [
//     { amount: 800, desc: "Cash" },
//     { amount: 40, desc: "Book" },
//     { amount: -200, desc: "Camera" }
// ]

// export const TransactionContext = createContext(initialData);

// export const ContextProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(transactionReducer, initialData);

//     function addTransaction(transaction) {
//         dispatch({
//             type: 'ADD_TRANSACTION',
//             payload: transaction
//         })
//     }

//     return (
//         <TransactionContext.Provider value={
//             {
//                 transactions: state,
//                 addTransaction
//             }
//         }>
//             {children}
//         </TransactionContext.Provider>
//     );

}