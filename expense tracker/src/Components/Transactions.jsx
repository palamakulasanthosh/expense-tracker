import React from 'react'
import Card from './Card'
const Transactions = ({ dark, setdark, sorttype, setsorttype, typesearch, typesearchdata, searched, transaction, settransaction, card, handleDelete, handleEdit }) => {
    const displayData = typesearch !== "" && typesearch !== "All"
        ? typesearchdata
        : searched;
    const sorted_Data = [...displayData]
    sorted_Data.sort((a, b) => {
        if (sorttype === "low") {
            return a.amount - b.amount
        }
        else if (sorttype === "high") {
            return b.amount - a.amount
        }
        else if (sorttype === "newest") {
            return new Date(b.date) - new Date(a.date)
        }
        else if (sorttype === "oldest") {
            return new Date(a.date) - new Date(b.date)
        }
        else {
            return 0
        }
    })
    return(
        <div>
            <div className={dark ? 'w-full md:max-w-[1120px] mx-auto mt-10 border border-zinc-400 bg-black rounded-2xl p-5':"max-w-full md:w-[1120px] mx-auto mt-10 border border-zinc-400 bg-white rounded-2xl p-5"}>

                <h1 className={dark ? "text-3xl font-bold mb-8 text-white": "text-3xl font-bold mb-8 text-black"}>
                    Transactions
                </h1>

                <div className="space-y-5">
                    {sorted_Data.length === 0 ? (
                        <p className={dark ? "text-white": "text-black"}>No transactions are done</p>
                    ) : (
                        sorted_Data.map((card, Index) => (
                            <Card dark={dark} setdark={setdark} key={Index} card={card} Index={Index} handleDelete={handleDelete} handleEdit={handleEdit} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default Transactions
