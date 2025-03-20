'use client'
import { removeReservation } from "@/redux/features/cartSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch, UseDispatch } from "react-redux"

export default function ReservationCart(){
    const carItems = useAppSelector((state)=> state.cartSlice.carItems)
    const dispatch = useDispatch<AppDispatch>()
    return(
        <>
        {
            carItems.map((reservationItem)=>(
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2" key={reservationItem.carId}>
                    <div className="text-xl">{reservationItem.carModel}</div>
                    <div className="text-xl">Pick-up {reservationItem.pickupDate} from {reservationItem.pickupLocation}</div>
                    <div className="text-xl">Return {reservationItem.returnDate} to {reservationItem.returnLocation}</div>
                    <div className="text-md">Duration: {reservationItem.numOfDays}</div>
                    <button className="block rounded-md bg-sky-400 hover:bg-indigo-600 px-3 py-2 text-white shadow-md"
                    onClick={()=>dispatch(removeReservation(reservationItem))}> 
                        Remove from cart
                    </button>
                </div>
            ))
        }
        </>
    )
}