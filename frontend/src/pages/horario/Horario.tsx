import { useEffect, useState } from "react";
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Horario.css';
import { Dayjs } from "dayjs";
import * as dayjs from "dayjs";
import { Grid } from "@mui/material";
import { getHorario, getHoras } from "../../api/horario";

export const Horario = ({data}) => {
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

    const handleDateChange = (date: Dayjs | null) => {
        setSelectedDate(date);
        if(date){
            const formattedDate = date.toDate().toISOString();
            console.log(data.id_profesional);
            getHoras(data.id_profesional, formattedDate).then(function(response){
                console.log(response.data);
            });
        }

        setSelectedTime(null);
    };


    useEffect(() => {
        console.log(data.id_profesional)
        getHorario(data.id_profesional).then(function(response){
            const fechas = [];
            for(var info of response.data){
                fechas.push(info.fecha.slice(0,10));
            };
            console.log("Response: ", fechas);
            setDates(fechas);
        });
        console.log(data);

        

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
                                minDate={dayjs('2023-11-01')}
                                maxDate={dayjs().add(2, 'month')}
                                views={['year', 'month', 'day']}
                                shouldDisableDate={isRestrictedDate}
                                value={selectedDate}
                                onChange={handleDateChange}
                            />
                            <h4>{dayjs(selectedDate).format('DD/MM/YYYY')}</h4>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </LocalizationProvider>
    );
};
