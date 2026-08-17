import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Card from '../Components/Card'
import Expensecard from '../Components/Expensecard'
import Addtransaction from '../Components/Addtransaction'
import SearchButton from '../Components/SearchButton'
import Transactions from '../Components/Transactions'
const Home = () => {
    const [title, settitle] = useState('')
    const [amount, setamount] = useState('')
    const [type, settype] = useState('')
    const [category, setcategory] = useState('')
    const [date, setdate] = useState('')
    const [edit, setedit] = useState(null)
    const [search, setsearch] = useState('')
    const [typesearch, settypesearch] = useState('')
    const [sorttype, setsorttype] = useState('')
    const [balance, setbalance] = useState('')
    const [dark, setdark] = useState(false)
    const [transaction, settransaction] = useState(() => {
        const data = localStorage.getItem("transaction")

        if (data !== null) {
            return JSON.parse(data)
        }

        return []
    })



    const handleAddTransaction = () => {
        if (edit !== null) {

            const updatedTransaction = [...transaction]

            updatedTransaction[edit] = newTransaction

            settransaction(updatedTransaction)

            setedit(null)

        } else {

            settransaction([...transaction, newTransaction])
            settitle('')
            setamount('')
            settype('')
            setcategory('')
            setdate('')

        }
    }

    const totalIncome = transaction.reduce((total, element) => {
        if (element.type === "Income") {
            return total + Number(element.amount)
        }
        else {
            return total
        }
    }, 0)
    
    const totalExpense = transaction.reduce((total, element) => {
        if (element.type === "Expense") {
            return total + Number(element.amount)
        }
        else {
            return total
        }
    }, 0)

    const currentBalance = totalIncome - totalExpense

    const handleDelete = (Index) => {
        const newFiltered = transaction.filter((element, current) => {
            return current !== Index
        })
        settransaction(newFiltered)
    }
    const handleEdit = (Index) => {
        const selected = transaction[Index]
        settitle(selected.title)
        setamount(selected.amount)
        settype(selected.type)
        setcategory(selected.category)
        setdate(selected.date)
        setedit(Index)

    }

    const searched = transaction.filter((element) => {
        return element.title.toLowerCase().includes(search.toLowerCase())
    })

    // type search
    const typesearchdata = transaction.filter((element) => {
        if (typesearch === "All") {
            return true

        }
        else {
            return element.type === typesearch
        }
    })

    const newTransaction = {
        title: title,
        amount: amount,
        category: category,
        type: type,
        date: date
    }
    useEffect(() => {
        localStorage.setItem("transaction", JSON.stringify(transaction))
    }, [transaction])
    return (
        <div>
            <div className={dark ?'container mx-auto border-2 bg-black text-white  border-zinc-500 min-h-screen w-full':'container mx-auto border-2  border-zinc-500 min-h-screen w-full'}>
                <Navbar dark={dark} setdark={setdark} />
                <div className='bg-zinc-400 h-[0.5px] w-full'></div>
                <Expensecard  dark={dark} setdark={setdark} currentBalance={currentBalance} totalExpense={totalExpense} totalIncome={totalIncome} balance={balance} setbalance={setbalance} />
                <Addtransaction dark={dark} setdark={setdark} title={title} settitle={settitle} amount={amount} setamount={setamount} category={category} setcategory={setcategory} type={type} settype={settype} date={date} setdate={setdate} handleAddTransaction={handleAddTransaction} />
                <SearchButton  dark={dark} setdark={setdark} sorttype={sorttype} setsorttype={setsorttype} typesearch={typesearch} settypesearch={settypesearch} search={search} setsearch={setsearch} />
                {/* {Transactions} */}
                <Transactions  dark={dark} setdark={setdark} sorttype={sorttype} setsorttype={setsorttype} typesearch={typesearch} typesearchdata={typesearchdata} transaction={transaction} searched={searched} settransaction={settransaction} handleDelete={handleDelete} handleEdit={handleEdit} />
            </div>
        </div>
    )
}

export default Home
