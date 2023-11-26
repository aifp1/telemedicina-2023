import { useState } from "react";
import { DateTimePicker, LocalizationProvider} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import './Horario.css';
import { Dayjs } from "dayjs";
import * as dayjs from "dayjs";


export const Horario = () => {

    function disableRandomDates() {
        return Math.random() > 0.7;
    };

    const isWeekend = (date: Dayjs) => {
        const day = date.day();
        return day === 0 || day === 6;
      };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="row mb-4">
            <div className="col-12">
                <p style={{ color: '#ffffff' }}> Seleccionar Horario</p>
            </div>
            <div className="col-12">
                <DateTimePicker 
                    minDate={dayjs()}
                    maxDate={dayjs("2023-11-30")}
                    views= {['year','month','day','hours','minutes']}
                    shouldDisableDate ={isWeekend}
                    label='Horario Disponible'

                />
            </div>
        </div>
    </LocalizationProvider>
  )
}
