import React from 'react'
import lightmode  from '../assets/mode/lightmode.svg'
import darkmode from '../assets/mode/darkmode.svg'
const Navbar = ({dark, setdark}) => {
    return (
        <div>
            <div className="nav flex justify-between py-3 items-center  ">
                <div className="logo text-3xl font-bold">Expense Tracker</div>
                <div className="darkmd ">
                    <button className='mr-6' onClick={()=>setdark(!dark)}>

                        {
                            dark ? <img src={lightmode} alt="" />
                            :
                            <img src={darkmode} alt="" />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
