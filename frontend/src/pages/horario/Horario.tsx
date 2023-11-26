import { useEffect, useState } from "react";
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Horario.css';
import { Dayjs } from "dayjs";
import * as dayjs from "dayjs";
import { Grid } from "@mui/material";

export const Horario = () => {
    
    const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

    const setDates = (fechas: string[]) => {
        const newDates = fechas.map(date => dayjs(date));
        setSelectedDates(newDates);
    };

    const isRestrictedDate = (date: Dayjs) => {
        // Verifica si la fecha NO está en la lista de fechas seleccionadas
        return !selectedDates.some((selectedDate) => date.isSame(selectedDate, 'day'));
    };

    const isRestrictedTime = (date: Dayjs) => {
        // Verifica si la hora NO es la deseada
        return selectedTime ? !date.isSame(selectedTime, 'hour') : false;
    };

    const handleDateChange = (date: Dayjs | null) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (time: Dayjs | null) => {
        setSelectedTime(time);
    };

    useEffect(() => {
        const fechas = ["2023-11-27", "2023-11-29", "2023-11-30"];
        setDates(fechas);

        // Establece la hora deseada
        setSelectedTime(dayjs().hour(16).minute(0)); // Cambia esto a la hora que desees habilitar
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="row mb-4">
                <div className="col-12">
                    <p style={{ color: '#ffffff' }}> Seleccionar Horario</p>
                </div>
                <div className="col-12">
                    <Grid container justifyContent="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <StaticDatePicker
                                orientation="landscape"
                                minDate={dayjs()}
                                maxDate={dayjs().add(2, 'month')}
                                views={['year', 'month', 'day']}
                                shouldDisableDate={isRestrictedDate}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StaticTimePicker
                                minutesStep={30}
                                shouldDisableTime={isRestrictedTime}
                                ampm={false}
                                value={selectedTime}
                                onChange={handleTimeChange}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </LocalizationProvider>
    )
}
