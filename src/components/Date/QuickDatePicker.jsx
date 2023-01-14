import React from 'react'
import moment from 'moment'

export default function QuickDatePicker({datePicker, setDatePicker}) {

  const {startDate, endDate, isCustom, showAll} = datePicker
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth() + 2
  const currentDate = new Date().getDate()
  const formattedCurrentDate = `${currentYear}-${currentMonth}-${currentDate}`
  const dateFormat = "YYYY-MM-DD"

  
  const month = new Date().getMonth() + 1
  const quickPicks = [
    {
      title: "Today",
      startDate: `${currentYear}-${month}-${currentDate}`,
      endDate: `${currentYear}-${month}-${currentDate}`
    },
    {
      title: "Yesterday",
      startDate: (moment().subtract(1, "days").format("YYYY-MM-DD")),
      endDate: (moment().subtract(1, "days").format("YYYY-MM-DD"))
    },
    {
      title: "This Week",
      startDate: (moment().startOf("week").format("YYYY-MM-DD")),
      endDate: (moment().endOf("week").format("YYYY-MM-DD"))
    },
    {
      title: "Last Week",
      startDate: (moment().subtract("1", "weeks").startOf("week").format("YYYY-MM-DD")),
      endDate: (moment().subtract("1", "weeks").endOf("week").format("YYYY-MM-DD"))
    },
    {
      title: "This Month",
      startDate: `${currentYear}-${month}-01`,
      endDate: `${currentYear}-${month}-${moment(`${currentYear}-${month}`, "YYYY-MM").daysInMonth()}`
    },
    {
      title: "Last Month",
      startDate: (moment().subtract("1", "months").startOf("month").format("YYYY-MM-DD")),
      endDate: (moment().subtract("1", "months").endOf("month").format("YYYY-MM-DD"))
    },
    {
      title: "Last Year",
      startDate: `${+currentYear - 1}-01-01`,
      endDate: `${+currentYear - 1}-12-31`
    },
    {
      title: "All",
      startDate: "",
      endDate: ""
    },
    {
      title: "Custom",
      startDate: "",
      endDate: ""
    },
  ]

  const getIsSelected = (pick) => {
    if(pick.title === "Custom" && isCustom) {
      return true 
    } else if(pick.title === "All" && showAll) {
      return true
    } else if (!isCustom && moment(startDate).isSame(pick.startDate) && moment(endDate).isSame(pick.endDate) ) {
      return true
    } else {
      return false
    }
  }

  const handleClick = (pick) => {
    if(pick.title === "Custom") {
      setDatePicker(prevState => ({
        ...prevState,
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        startDate: "", 
        endDate: "", 
        isCustom: true, 
        showAll: false,
        error: ""
      }))
    } else if(pick.title === "All") {
      setDatePicker(prevState => ({
        ...prevState,
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
        startDate: "", 
        endDate: "",  
        isCustom: false, 
        showAll: true,
        error: ""
      }))
    } else {
      setDatePicker(prevState => ({
        ...prevState,
        year: moment(pick.startDate, dateFormat).get("year"),
        month: moment(pick.startDate, dateFormat).get("month") + 1, 
        startDate: pick.startDate, 
        endDate: pick.endDate, 
        showAll: false, 
        isCustom: false,
        error: ""
      }))
    }
  }

  return (
    <div className='flex'>
      <div className='flex flex-col p-4'>
        {quickPicks.map(pick => {
          const isSelected = getIsSelected(pick)
          return (
            <p 
              onClick={() => handleClick(pick)}
              key={pick.title} 
              className={`pl-4 pr-10 py-2 text-sm rounded-lg ${isSelected ? "bg-[#EDF2F7] text-[#0048D3]" : ""} hover:bg-[#EDF2F7] hover:text-[#0048D3] cursor-pointer`}
            >
              {pick.title}
            </p>
          )
        })}
      </div>
      <hr className='w-[1px] h-full bg-slate-300' />
    </div>
  )
}
