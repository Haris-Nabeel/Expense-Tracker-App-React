import React, { useState, useContext ,useReducer} from 'react';
import  {transactionContext}  from './TransContext.js';

function Child() {
    
       // let {transactions,addTransaction} = useContext(transactionContext);
        const { transactions, addTransaction, deleteTransaction } = useContext(transactionContext);
        
        
        let [newAmount,setNewAmount] = useState(0);
        let [newDesc,setNewDesc] = useState("");

        const handleAddition=(eve)=>{
            
            
            eve.preventDefault();
            addTransaction({amount:Number (newAmount),desc:newDesc});
            setNewDesc('');
            setNewAmount(0);
           
        }

        const handleDel=(id)=>{

        
           deleteTransaction(transactions,id.target.id);
           
        }

        const getIncome=()=>{
            var income = 0;
            for (let index = 0; index < transactions.length; index++) {
                if(transactions[index].amount>0){
                income += transactions[index].amount;
                }
                
            }
           
            return income;
         }

         const getExpense=()=>{
             var expense =0;
             for (let index = 0; index < transactions.length; index++) {
                if(transactions[index].amount<0){
                expense += transactions[index].amount;
                }
                
            }
            return expense;
         }

        
            

      
            
   
 return (
        <div className="container">
            <h1 className="text-alignn">Expense Tracker</h1>
            <div className="total">
            <h3>Your balance <br /><br/> ${getIncome()+getExpense()} </h3>
            </div>
            
            

            <div className="total-expense-container">
                <h3 className="income">Income <br /> <br/>${getIncome()}</h3>
                <h3 className="expense">Expense <br /><br/> ${getExpense()}</h3>
            </div>

            <h4>History</h4>
            <hr />

            <ul className="expense-list">
                {transactions.map((transaction, ind) => {
                  
                 // console.log(ind);
                    return (
                        <li key={ind} className={transaction.amount>0 ? "income":"expense"}>
                            <span> {transaction.desc} </span>
                            <span> ${transaction.amount} </span>
                            <span><button id={ind} onClick={handleDel}>Delete Record</button></span>
                        </li>
                    )
                })}
            </ul>

            <h4>Add New Transaction</h4>
            <hr />

            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Description: <br />
                    <input type="text"  mplaceholder="Enter Description" value={newDesc} required id="dess" onChange={(eve)=>{setNewDesc(eve.target.value)}} />
                </label>

                <br />

                <label>
                    Enter Amount: <br />
                    <input type="number" value={newAmount} placeholder="Enter amount" required id="amm" onChange={(eve)=>{setNewAmount(eve.target.value)}}/>
                </label>

                <br /> <br />

                <input type="submit" value="Add Transaction" />

            </form>
        </div>
    );
}

export default Child;





















// const { transactions, addTransaction } = useContext(TransactionContext);

// // let [transactions, setTransaction] = useState(transactions);
// let [newDesc, setNewDesc] = useState('');
// let [newAmount, setNewAmount] = useState(0);

// const handleSubmit = (event) => {
//     event.preventDefault();
//     addTransaction({ amount: Number(newAmount), desc: newDesc })
// }

// const getIncome = () => {
//     let income = 0;
//     for (var i = 0; i < transactions.length; i++) {
//         if (transactions[i].amount > 0)
//             income += transactions[i].amount
//     }
//     return income;
// }

// const getExpense = () => {
//     let expense = 0;
//     for (var i = 0; i < transactions.length; i++) {
//         if (transactions[i].amount < 0)
//             expense += transactions[i].amount
//     }
//     return expense;
// }