import { useEffect, useState } from "react";
import { LocalizationProvider, StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import './Horario.css';
import { Dayjs } from "dayjs";
import * as dayjs from "dayjs";
import { Grid } from "@mui/material";
import { getHorario, getHoras } from "../../api/horario";
import { Card } from "react-bootstrap";

export const Horario = ({data , onDataFromPage}) => {
    const [selectedTimes, setSelectedTimes] = useState<String[]>([]);
    const [selectedDates, setSelectedDates] = useState<Dayjs[]>([]);
    const [selectedTime, setSelectedTime] = useState<Dayjs | null>(null);
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [selectedButton, setSelectedButton] = useState(null);
    const [sendData, setSendData] = useState({});
    

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
            getHoras(data.id_profesional, formattedDate.slice(0,10)).then(function(response){
                const times = [];
                for(var time of response.data){
                    times.push(time.hora_ini.slice(0,5));
                };
                setSelectedTimes(times);
            });

            const nuevoDato = {
                state:false,
                id_prestacion: data.id_prestacion,
                nombre_prestacion: data.nombre_prestacion,
                id_profesional: data.id_profesional,
                nombre_profesional: data.nombre_profesional
            }
            setSendData(nuevoDato);
            onDataFromPage(nuevoDato); 

        }
        setSelectedTime(null);
    };

    const handleButtonClick = (time) => {
        setSelectedButton(time === selectedButton ? null : time);
        setSelectedTime(time);
        const nuevoDato = {
            state: true,
            id_prestacion: data.id_prestacion,
            nombre_prestacion: data.nombre_prestacion,
            id_profesional: data.id_profesional,
            nombre_profesional: data.nombre_profesional,
            id_horario: "1",
            fecha: selectedDate.toDate().toISOString().slice(0,10),
            hora: time
        }
        setSendData(nuevoDato);
        onDataFromPage(nuevoDato); 
      };

    useEffect(() => {
        //console.log(data)
        getHorario(data.id_profesional).then(function(response){
            const fechas = [];
            var first = true;
            for(var info of response.data){
                if(first){
                    setSelectedDate(dayjs(info.fecha.slice(0,10)));
                    
                    first = false;
                }
                fechas.push(info.fecha.slice(0,10));
            };
            setDates(fechas);
        }); 
        //setSelectedDate()

        const nuevoDato = {
            state:false,
            id_prestacion: data.id_prestacion,
            nombre_prestacion: data.nombre_prestacion,
            id_profesional: data.id_profesional,
            nombre_profesional: data.nombre_profesional
        }
        setSendData(nuevoDato);
        onDataFromPage(nuevoDato);  

        

    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="row mb-4">
                <div className="col-12">
                    <p style={{ color: '#ffffff' }}> Seleccionar Horario</p>
                </div>
                <div className="col-12">
                    <Grid container justifyContent="center" alignItems="center" spacing={2} marginBottom={"10px"}>
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
                        </Grid>
                    </Grid>
                    <Card style={{ width: "49.5%", height:"auto", maxHeight: "300px", overflowY: selectedTimes.length * 50 > 300 ? "auto" : "hidden", margin: "auto"}}>
                        <div className="col-12" style={{ marginBottom: "10px"}}>
                            <p> Seleccionar tu hora</p>
                            {selectedDate === null && <p style={{ color: 'grey' }}> Selecciona una fecha primero</p>}
                        </div>
                        <Grid container spacing={2} justifyContent="center" marginBottom="10px">
                            {selectedTimes.map((time, index) => (
                                <Grid item xs={3} key={index} margin={1}>
                                <button
                                    type="button"
                                    className={`button_horas ${time === selectedButton ? 'selected' : ''}`}
                                    onClick={() => handleButtonClick(time)}
                                >
                                    {time}
                                </button>
                                </Grid>
                            ))}
                        </Grid>
                     </Card>
                </div>
            </div>
        </LocalizationProvider>
    );
};
