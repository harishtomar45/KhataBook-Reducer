import React, { useContext } from "react";
import ListItem from "./ListItem";
import TransactionsContext from "../context/TransactionContext";

const ListGroup = () => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <>
      {/* <h1 className=' display-4 text-center '> All Transaction</h1> */}
      <ul className="list-group rounded-0 my-3">
      {transactions.map((transaction) => (
          <ListItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
