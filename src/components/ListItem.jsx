import React, { useContext } from 'react'
import TransactionsContext from '../context/TransactionContext'

const ListItem = ({transaction}) => {

  const {deleteTransaction, editTransaction} = useContext(TransactionsContext)



  return (
   <li className={transaction.amount > 0  ? 'list-group-item my-2 p-4 rounded-0 bg-secondary' : 'list-group-item my-2 p-4 rounded-0 bg-danger'}>
    <h1 className='display-4 text-light '>
     {transaction.text} : {transaction.amount}
        <span className='float-end '>
            <button className='btn btn-warning rounded-0 text-dark' 
           onClick={() => editTransaction(transaction)}
            >Edit</button>
            <button className='btn btn-info rounded-0 text-dark mx-1' onClick={() => deleteTransaction(transaction.id)} >Delete</button>
        </span>
    </h1>
   </li>
  )
}

export default ListItem
