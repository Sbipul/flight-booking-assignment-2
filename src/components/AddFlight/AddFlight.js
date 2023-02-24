import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FLIGHT, generateActions } from '../../redux/actions/action';
const AddFlight = () => {
    const flights = useSelector(state=>state.flight.flights)
    const dispatch = useDispatch()
    const [newFlight,setNewFlight] = useState({})
    const createData = (e)=>setNewFlight({ ...newFlight,[e.target.name]: e.target.value });
    const addAFlight=(e)=>{
        e.preventDefault()
        newFlight.id = flights.length+1;
        dispatch(generateActions(ADD_FLIGHT,newFlight))
        setNewFlight({})
        e.target.reset();
    }

    return (

        <>
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
            <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
                <form onSubmit={addAFlight} className="first-hero lws-inputform">
                <div className="des-from">
                    <p>Destination From</p>
                    <div className="flex flex-row">
                    <img src="./img/icons/Frame.svg" alt="" />
                    <select onChange={createData} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                        <option value="" hidden>Please Select</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Sylet">Sylhet</option>
                        <option value="Saidpue">Saidpur</option>
                        <option value="Coxbazar">Cox's Bazar</option>
                    </select>
                    </div>
                </div>

                <div className="des-from">
                    <p>Destination To</p>
                    <div className="flex flex-row">
                    <img src="./img/icons/Frame.svg" alt="" />
                    <select onChange={createData} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                        <option value="" hidden>Please Select</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Sylet">Sylhet</option>
                        <option value="Saidpue">Saidpur</option>
                        <option value="Coxbazar">Cox's Bazar</option>
                    </select>
                    </div>
                </div>

                <div className="des-from">
                    <p>Journey Date</p>
                    <input onChange={createData} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
                </div>


                <div className="des-from">
                    <p>Guests</p>
                    <div className="flex flex-row">
                    <img src="./img/icons/Vector (1).svg" alt="" />
                    <select onChange={createData} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                        <option value="" hidden>Please Select</option>
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                    </select>
                    </div>
                </div>


                <div className="des-from !border-r-0">
                    <p>Class</p>
                    <div className="flex flex-row">
                    <img src="./img/icons/Vector (3).svg" alt="" />
                    <select onChange={createData} className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                        <option value="" hidden>Please Select</option>
                        <option value="Business">Business</option>
                        <option value="Economy">Economy</option>
                    </select>
                    </div>
                </div>

                <button disabled={flights.length >= 3 ? true : false} className="addCity" type="submit" id="lws-addCity">
                    <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className="text-sm">Book</span>
                </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default AddFlight;