import { useContext, useEffect, useState } from "react";
import TransactionsContext from "../context/TransactionContext";

const Form = () => {
  const { addTransation, edit, updateTransaction } = useContext(TransactionsContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      updateTransaction(
        {
          id: edit.transaction.id,
          text : text,
          amount : parseInt(amount)
          
        }
      )
    }else{
      addTransation({
        id: crypto.randomUUID(),
        text: text,
        amount: parseInt(amount),
      });
    }
    
    setText("")
    setAmount("")
  };

  useEffect(()=>{
    setText(edit.transaction.text);
    setAmount(edit.transaction.amount);
  }, [edit]);

  return (
    <form className="my-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your text ..."
        className="form-control rounded-0 my-2"
        onChange={(e) => setText(e.target.value)}
        value={text}
        required
      />

      <input
        type="number"
        placeholder="Enter Amount"
        className="form-control rounded-0 my-2"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        required
      />

      <button className="btn btn-success text-light w-100 rounded-0 my-2">
        Save
      </button>
    </form>
  );
};

export default Form;
