import React from 'react'

const Expensecard = ({ dark , setdark, currentBalance, totalIncome, totalExpense, balance, setbalance }) => {
    
    return (
        <div>
            <div className="balance-brd py-4 flex flex-col  md: flex-row gap-5 justify-evenly">
                <div className={dark ? 'w-full h-[160px] border border-zinc-400 bg-black rounded-2xl md:w-[250px] h-[150px] ': 'w-full h-[160px] border border-zinc-400 bg-taupe-100 rounded-2xl md:w-[250px] h-[150px] '}>
                    <h1 className='text-sm font-bold text-blue-600 text-center py-4 md: text-xl' >Current Balance</h1>
                    <h2 className={dark ?' text-sm text-white text-center font-bold  md:text-3xl':'text-sm text-center font-bold  md:text-3xl'}>₹ {currentBalance}</h2>
                    <h4 className='text-zinc-600 font-bold text-center py-2 text-sm'>Your total balance</h4>
                </div>
                <div className={dark ? 'w-full h-[160px] border border-zinc-400 bg-black rounded-2xl md:w-[250px] h-[150px]':'w-full h-[160px] border border-zinc-400 bg-taupe-100 rounded-2xl md:w-[250px] h-[150px] '}>
                    <h1 className='text-sm font-bold text-green-600 text-center py-4 md: text-xl' >Total Income</h1>
                    <h2 className={dark ? 'text-sm text-white text-center font-bold  md:text-3xl': 'text-sm text-center font-bold  md:text-3xl'}>₹{totalIncome}</h2>
                    <h4 className='text-zinc-600 font-bold text-center py-2 text-sm'>Your total Income</h4>
                </div>
                <div className={dark ? 'w-full h-[160px] border border-zinc-400 bg-black rounded-2xl md:w-[250px] h-[150px] ':'w-full h-[160px] border border-zinc-400 bg-taupe-100 rounded-2xl md:w-[250px] h-[150px] '}>
                    <h1 className='text-sm font-bold text-red-600 text-center py-4 md: text-xl' >Current Expenses</h1>
                    <h2 className={dark ?'text-sm text-white text-center font-bold  md:text-3xl':'text-sm text-center font-bold  md:text-3xl'}>₹ {totalExpense}</h2>
                    <h4 className='text-zinc-600 font-bold text-center py-2 text-sm'>Your total expense</h4>
                </div>


            </div>
        </div>
    )
}

export default Expensecard
