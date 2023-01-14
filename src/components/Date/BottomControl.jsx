import React from 'react'
import moment from 'moment'

export default function BottomControl({datePicker, handleCancel, handleApply}) {

  const {startDate, endDate, error} = datePicker

  const startDateObj = moment(startDate).toObject()
  const endDateObj = moment(endDate).toObject()

  return (
    <>
      <div className='flex justify-between py-3 px-8'>
        {
          datePicker.isCustom ? 
          <div className='flex gap-2 items-center'>
            <p className="w-28 h-10 rounded-lg border border-[#D0D5DD] flex justify-center items-center">
              {startDate ? `${MONTHS[startDateObj.months].slice(0, 3)},${startDateObj.date} ${startDateObj.years}`: ""}
            </p>
            <hr className="w-2 h-[2px] bg-[#667085]" />
            <p className="w-28 h-10 rounded-lg border border-[#D0D5DD] flex justify-center items-center">
            {endDate ? `${MONTHS[endDateObj.months].slice(0,3)},${endDateObj.date} ${endDateObj.years}` : ""}
            </p>
          </div> :
          <div></div>
        }
        
        <div className='flex gap-2'>
          <button onClick={() => handleCancel && handleCancel()} className='w-24 h-10 rounded-lg text-sm border border-[#D0D5DD] bg-white'>Cancel</button>
          <button onClick={() => handleApply && handleApply(datePicker)} className='w-24 h-10 rounded-lg text-white text-sm bg-[#0048D3]'>Apply</button>
        </div>
      </div>
      <p className='text-center text-red-500 text-sm'>{error}</p>
    </>
  )
}

const MONTHS = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
