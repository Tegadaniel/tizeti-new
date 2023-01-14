import React,{useState} from 'react'
import DatePicker from './DatePicker'

export default function useDatePicker() {

  const [datePickerProps, setDatePickerProps] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    startDate: "",
    endDate: "",
    isCustom: false,
    showAll: true,
    error: ""
  })

  return {datePickerProps, setDatePickerProps, DatePicker}
}

// usage

// step 1: call the hook
// const {datePickerProps, setDatePickerProps, DatePicker} = useDatePicker()

// step 2: render the component and pass the props need
// <DatePicker datePickerProps={datePickerProps} setDatePickerProps={setDatePickerProps} />
