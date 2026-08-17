import React from 'react'

const SearchButton = ({dark, setdark, typesearch,settypesearch, search, setsearch,sorttype,setsorttype}) => {
    return (
        <div>
            <div className={dark ? "max-w-full md:w-[1120px] mx-auto mt-10 border border-zinc-400 bg-black rounded-2xl p-5":"max-w-full md:w-[1120px] mx-auto mt-10 border border-zinc-400 bg-taupe-100 rounded-2xl p-5"}>

                <div className="flex flex-col md:flex-row md:justify-between gap-8">

                    {/* Search */}
                    <div className="w-full md:w-[280px]">

                        <div className="relative">

                            <svg
                                className="absolute left-3 top-1/2 -translate-y-1/2"
                                xmlns="http://www.w3.org/2000/svg"
                                height="24"
                                viewBox="0 -960 960 960"
                                width="24"
                                fill="#1f1f1f"
                            >
                                <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                            </svg>

                            <input
                                type="search"
                                placeholder="Search transactions..."
                                onChange={(e)=> setsearch(e.target.value)}
                                className="w-full text-black border border-zinc-300 rounded-xl pl-10 pr-4 py-3 outline-none bg-white"
                            />

                        </div>

                    </div>

                    {/* Filter */}

                    <div className="w-full md:w-auto">

                        <h3 className={dark? "font-bold mb-3 text-white": "font-bold mb-3 text-black"}>
                            Filter by Type
                        </h3>

                        <div className="flex flex-wrap gap-3">

                            <button onClick={()=>settypesearch("All")} className="bg-blue-400 text-white px-5 py-2 rounded-xl">
                                All
                            </button>

                            <button onClick={()=>settypesearch("Income")} className="bg-green-500 text-white px-5 py-2 rounded-xl">
                                Income
                            </button>

                            <button onClick={()=>settypesearch("Expense")} className="bg-red-500 text-white px-5 py-2 rounded-xl">
                                Expense
                            </button>

                        </div>

                    </div>

                    {/* Sort */}

                    <div className="w-full md:w-auto">

                        <h3 className={dark ? " text-white font-bold mb-3":" text-black font-bold mb-3"}>
                            Sort By
                        </h3>

                        <select   value={sorttype} onChange={(e)=>setsorttype(e.target.value)} className={dark ? " text-white w-full md:w-[220px] border border-gray-300 rounded-lg px-4 py-3 outline-none":" text-black w-full md:w-[220px] border border-gray-300 rounded-lg px-4 py-3 outline-none"}>
                            <option className={dark ? 'text-black':''} value="newest">Newest First</option>
                            <option className={dark ? 'text-black':''} value="oldest">Oldest First</option>
                            <option className={dark ? 'text-black':''} value="high">Highest Amount</option>
                            <option className={dark ? 'text-black':''}s value="low">Lowest Amount</option>
                        </select>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SearchButton
