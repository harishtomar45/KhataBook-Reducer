import React from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import BalanceSection from './components/BalanceSection'
import ListGroup from './components/ListGroup'
import { TransactionsProvider } from './context/TransactionContext'

const App = () => {
  return (
    <TransactionsProvider>
     <Navbar/>
     <div className="container my-2">
      <Form/>
      <BalanceSection/>
      <ListGroup/>
     </div>
    </TransactionsProvider>
  )
}

export default App