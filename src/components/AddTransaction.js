import React, {useState} from 'react' 

export default function AddTransaction() {
    const [description, setDescription] = useState('')
    const [TransactionAmount , setTransactionAmount] = useState('0')
  return (
    <div>
        <h2>AddTransaction</h2>
        <form>
            <div>
                <label>Description</label>
                <input type= 'text' id='description' value={description} onChange={(e)=>setDescription(e.target.value)}/>
            </div>
            <div>
            <label htmlFor='TransactionAmount'>Transaction Amount</label>
            <input type='number' id='TransactionAmount' value={TransactionAmount} onChange={(e)=>setTransactionAmount(e.target.value)}/>
            </div>
            <button> Add Transaction</button>
        </form>
    </div>
  )
}