import React from 'react'

const Addtransaction = ({ dark, setdark, title,settitle,amount,setamount,category,setcategory,type,settype,date,setdate,handleAddTransaction}) => {
    return (
        <div>
            {/* { ADD Transaction} */}
            <div className={dark ? "w-full md:max-w-[1000px] mt-10 border border-zinc-400 bg-black rounded-2xl mx-auto p-5": "w-full md:max-w-[1000px] mt-10 border border-zinc-400 bg-taupe-100 rounded-2xl mx-auto p-5"}>

                <h1 className={dark ? "text-white font-bold text-xl mb-5": "text-black font-bold text-xl mb-5"}>
                    Add New Transaction
                </h1>

                <div className="flex flex-col md:flex-row md:flex-wrap gap-5">
                    <div className="flex flex-col">
                        <label className={dark ? "text-white font-bold mb-2": "text-black font-bold mb-2"}>
                            Title
                        </label>
                        <input
                            className={ dark ? " text-white w-full md:w-[220px] border border-zinc-400 rounded-md px-4 py-2 outline-none":"w-full md:w-[220px] border border-zinc-400 rounded-md px-4 py-2 outline-none"}
                            type="text"
                            placeholder="Enter title"
                            value={title}
                            onChange={(e) => settitle(e.target.value)}

                        />
                    </div>
                    <div className="flex flex-col">
                        <label className={dark ? "text-white font-bold mb-2":"text-black font-bold mb-2"}>
                            Amount
                        </label>

                        <input
                            className={dark ? "w-full text-white  md:w-[220px] border border-zinc-400 rounded-md px-4 py-2 outline-none": "w-full md:w-[220px] border border-zinc-400 rounded-md px-4 py-2 outline-none"}
                            type="number"
                            value={amount}
                            placeholder="Enter Amount"
                            onChange={(e) => setamount(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="text-black font-bold mb-2">
                            Type
                        </label>

                        <div className="flex gap-3">

                            <label className="flex items-center gap-2 border border-green-500 rounded-lg bg-green-200 px-3 py-2 cursor-pointer">
                                <input  type="radio" name="type" value="Income" checked={type === "Income"} onChange={(e) => settype(e.target.value)} />
                                <span className={dark ? 'font-bold text-black':'text-black font-bold'} >Income</span>
                            </label>

                            <label className="flex items-center gap-2 border border-red-500 rounded-lg bg-red-200 px-3 py-2 cursor-pointer">
                                <input type="radio" name="type" value="Expense" checked={type === "Expense"} onChange={(e) => settype(e.target.value)} />
                                <span className={dark ? 'font-bold text-black':'text-black font-bold'}>Expense</span>
                            </label>

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <label className={dark ? "text-white font-bold mb-2":"text-black font-bold mb-2"}>
                            Category
                        </label>

                        <select className={dark ? " text-white w-full md:w-[250px] border border-gray-300 rounded-lg px-4 py-2 outline-none ":"w-full md:w-[250px] border border-gray-300 rounded-lg px-4 py-2 outline-none"} value={category} onChange={(e) => setcategory(e.target.value)}>
                            <option className={dark ? 'text-black':'text-black'}>Select Category</option>
                            <option className={dark ? 'text-black':'text-black'}>Salary</option>
                            <option className={dark ? 'text-black':'text-black'}>Freelance</option>
                            <option className={dark ? 'text-black':'text-black'}>Gift</option>
                            <option className={dark ? 'text-black':'text-black'}>Bonus</option>
                            <option className={dark ? 'text-black':'text-black'}>Investment</option>
                            <option className={dark ? 'text-black':'text-black'}>Food</option>
                            <option className={dark ? 'text-black':'text-black'}>Shopping</option>
                            <option className={dark ? 'text-black':'text-black'}>Transport</option>
                            <option className={dark ? 'text-black':'text-black'}>Bills</option>
                            <option className={dark ? 'text-black':'text-black'}>Rent</option>
                            <option className={dark ? 'text-black':'text-black'}>Entertainment</option>
                            <option className={dark ? 'text-black':'text-black'}>Healthcare</option>
                            <option className={dark ? 'text-black':'text-black'}>Education</option>
                            <option className={dark ? 'text-black':'text-black'}>Travel</option>
                            <option className={dark ? 'text-black':'text-black'}>Mobile / Internet</option>
                            <option className={dark ? 'text-black':'text-black'}>Other</option>
                        </select>
                    </div>

                    {/* Date */}
                    <div className="flex flex-col">
                        <label className={dark ? "text-white font-bold mb-2":"text-black font-bold mb-2"}>
                            Date
                        </label>

                        <input
                            type="date" value={date} onChange={(e) => setdate(e.target.value)}
                            className={dark ? 'w-full text-white md:w-[220px] border border-gray-300 rounded-lg px-4 py-2 outline-none': 'w-full md:w-[220px] border border-gray-300 rounded-lg px-4 py-2 outline-none'}
                        />
                    </div>

                    {/* Button */}
                    <div className="flex items-end">
                        <button onClick={handleAddTransaction} className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-black font-semibold px-6 py-2 rounded-lg transition">
                            Add Transaction
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Addtransaction
