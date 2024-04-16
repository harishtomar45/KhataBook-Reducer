import React, { useContext } from 'react'
import TransactionsContext from '../context/TransactionContext';

const BalanceSection = () => {
  

    const {transactions} = useContext(TransactionsContext);


    const balance = transactions.reduce((p,c)=>{
        return p + c.amount;

    },0)

    const income = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((p,c) => {
        return p + c.amount;
    },0)

    const expance = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((p,c) => {
        return p + c.amount;
    },0)

  return (
     <div className="main my-3 rounded-0 row ">

        <div className="col-sm-12 col-lg-4 col-md-12">
            <div className="card p-2  bg-success rounded-0">
            <h1 className=' display-6 text-light '>Income :</h1>
            <h2 className=' display-6  text-light'>{income}</h2>
            </div>
        </div>
 
        <div className="col-sm-12 col-lg-4 col-md-12 ">
        <div className="card p-2 bg-secondary rounded-0">
            <h1 className=' display-6 text-light '>Expense :</h1>
            <h2 className=' display-6  text-light'>{expance}</h2>
        </div>
        </div>
        
        <div className="col-sm-12 col-lg-4 col-md-12 ">
        <div className="card p-2 bg-danger rounded-0">
            <h1 className=' display-6 text-light '>Balance :</h1>
            <h2 className=' display-6  text-light'>{balance}</h2>
        </div>
        </div>











     </div>
  )
}

export default BalanceSection;
