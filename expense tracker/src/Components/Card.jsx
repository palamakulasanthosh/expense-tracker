import { React, useState } from 'react'

const Card = ({ dark, setdark, card, Index, handleDelete, handleEdit }) => {

    return (
        <div>
            <div className="border border-zinc-300 rounded-xl p-5 flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                <div>
                    <h2 className={dark ? "text-white text-2xl font-bold":"text-black text-2xl font-bold"}>
                        {card.title}
                    </h2>
 
                    <div className=" text-black flex items-center gap-2 mt-2 flex-wrap">
                        <span className={card.type === "Income" ? "bg-green-300 px-3 py-1 rounded-full text-sm font-bold" : "bg-red-300 px-3 py-1 rounded-full text-sm font-bold"}>
                            {card.type}
                        </span>

                        <span className=" text-black text-zinc-500 text-sm font-semibold">
                            • date : {card.date}
                        </span>
                    </div>

                    <div className="flex mt-2">
                        <h5 className="font-semibold text-zinc-500">
                            Category :
                        </h5>

                        <h6 className="ml-2 text-zinc-400 font-semibold">
                            {card.category}
                        </h6>
                    </div>
                </div>

                {/* Amount */}
                <div>
                    <h2 className={card.type === 'Income' ? "text-3xl font-bold text-green-500" : "text-3xl font-bold text-red-500"}>
                        <span >{card.type === 'Income' ? '+' : '-'}</span>
                        ₹ {card.amount}
                    </h2>
                </div>

                {/* Buttons */}
                <div className={dark ? " text-white flex gap-3 flex-wrap":" text-black flex gap-3 flex-wrap"}>
                    <button onClick={()=>{handleEdit(Index)}} className={dark ?"border border-zinc-400 rounded-lg px-5 py-2":"border border-zinc-400 rounded-lg px-5 py-2 hover:bg-zinc-100"}>
                        Edit
                    </button>

                    <button onClick={()=>{handleDelete(Index)}} className={dark ?"border border-zinc-400 rounded-lg px-5 py-2":"border border-zinc-400 rounded-lg px-5 py-2 hover:bg-zinc-100"}>
                        Delete
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Card
