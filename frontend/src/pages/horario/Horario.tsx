import { useEffect, useState } from "react";
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Horario.css';
import { Dayjs } from "dayjs";
import * as dayjs from "dayjs";
import { Grid } from "@mui/material";

export const Horario = () => {
    const [selectedTimes, setSelectedTimes] = useState<Dayjs[]>([]);
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

    const isRestrictedTime = (value: Dayjs) => {
        // Verifica si el tiempo NO es el deseado
        console.log(value.format('MM-DD HH:mm'));
        return !selectedTimes.some((selectedTime) => value.isSame(selectedTime, 'minute'));
    };

    const handleDateChange = (date: Dayjs | null) => {
        setSelectedTimes([
            dayjs().hour(15).minute(10),
            dayjs().hour(17).minute(40),
        ]);

        setSelectedDate(date);
        setSelectedTime(null);
    };

    const handleTimeChange = (time: Dayjs | null) => {
        // Combina la fecha seleccionada con la hora seleccionada
        if (time && selectedDate) {
            const dateTime = selectedDate.hour(time.hour()).minute(time.minute());
            setSelectedTime(dateTime);
        } else {
            setSelectedTime(time);
        }
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
                            <h4>{dayjs(selectedDate).format('DD/MM/YYYY')}</h4>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <StaticTimePicker
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
    );
};
