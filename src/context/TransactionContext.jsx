import { createContext, useReducer } from "react";
import { TransactionsReducer } from "./TransactionsReducer";

const TransactionsContext = createContext();



export const TransactionsProvider = ({children}) => {

    const initialState = {
        transactions : [],
        edit:{
            transaction :{},
            isEdit : false,
        },
    };

 const [state , dispatch] = useReducer(TransactionsReducer , initialState)


 const addTransation = (transaction) => {
   dispatch({
    type: "ADD_TRANSACTION" ,
    payload: transaction,
   })
 }

//  delete

 const deleteTransaction = (id) => {
    dispatch({
        type : "DELETE_TRANSACTION",
        payload : id
    })
 }

 const editTransaction = (oldTransaction) => {
    
    dispatch({
        type : "EDIT_TRANSACTION",
        payload : oldTransaction
    })



    
}

const updateTransaction = (updatedTransaction) => {
 dispatch({
    type : "UPDATE_TRANSACTION",
    payload : updatedTransaction
 })
}


 return(
    <TransactionsContext.Provider
    value={{
        transactions: state.transactions,
        edit: state.edit,
        addTransation,
        deleteTransaction,
        editTransaction,
        updateTransaction,

    }}
    >
        {children}
    </TransactionsContext.Provider>

 )

}





export default TransactionsContext;
