import React, { useState, useEffect, useRef } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import mockedCalendar from '@/lib/fake-api/calendar';
import { Styled } from './styles';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
import { Divider } from '@mui/material';

const initialValue = dayjs();
interface Event {
  id: number;
  title: string;
  description: string;
  day: number;
  month: number;
  year: number;
  location: string;
  startTime: string;
  endTime: string;
  link: string;
}

function ServerDay(
  props: PickersDayProps<Dayjs> & { highlightedDays?: number[] }
) {
  const { highlightedDays = [], day, outsideCurrentMonth, ...other } = props;

  const isSelected =
    !props.outsideCurrentMonth &&
    highlightedDays.indexOf(props.day.date()) >= 0;

  return (
    <Badge
      key={props.day.toString()}
      overlap="circular"
      badgeContent={isSelected ? '🔵' : undefined}
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
      />
    </Badge>
  );
}

export default function DateCalendarServerRequest() {
  const requestAbortController = useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [highlightedDays, setHighlightedDays] = useState<number[]>([]);
  const [monthEvents, setMonthEvents] = useState<Event[]>([]);
  const [selectedMonth, setSelectedMonth] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [initialValues, setInitialValues] = useState(true);

  function fakeFetch(date: any) {
    return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
      console.log(date);
      setSelectedMonth(date.$M);
      const array = mockedCalendar.filter(
        (element) => element.month.toString() == (date.$M + 1).toString()
      );
      const daysToHighlight = array.map((item) => item.day);
      resolve({ daysToHighlight });
    });
  }

  function fetchMonthsEvents(month: any, year: any) {
    return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
      const array = mockedCalendar.filter(
        (element) =>
          element.month.toString() == (month + 1).toString() &&
          element.year.toString() == year.toString()
      );
      setMonthEvents(array);
    });
  }

  useEffect(() => {
    handleMonthChange;
    fetchMonthsEvents(selectedMonth, selectedYear);
    if (initialValues) {
      setInitialValues(false);
      handleMonthChange(dayjs());
    }
  }, [selectedMonth, selectedYear]);

  const fetchHighlightedDays = (date: Dayjs, event: any) => {
    const controller = new AbortController();
    fakeFetch(date)
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  const handleMonthChange = (date: any) => {
    if (requestAbortController.current) {
      requestAbortController.current.abort();
    }
    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date, event);
    setSelectedYear(date.$y);
    setSelectedMonth(date.$M);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Styled.AbsoluteCalendarContainer>
          <Styled.CalendarContainer>
            <DateCalendar
              defaultValue={initialValue}
              loading={isLoading}
              onMonthChange={(event) => {
                handleMonthChange(event);
              }}
              renderLoading={() => <DayCalendarSkeleton />}
              slots={{
                day: ServerDay,
              }}
              slotProps={{
                day: {
                  highlightedDays,
                } as any,
              }}
            />
          </Styled.CalendarContainer>
        </Styled.AbsoluteCalendarContainer>
      </LocalizationProvider>

      <Styled.HiddenBlock />
      <Styled.CardContainer>
        {monthEvents.length == 0 ? (
          <Styled.NoEvents>
            No hay eventos para la fecha seleccionada
          </Styled.NoEvents>
        ) : (
          monthEvents.map((element, idx) => (
            <Styled.Card key={idx}>
              <Styled.Date>{element.day}</Styled.Date>
              <Styled.Content>
                <Styled.Header>
                  <Styled.Title>{element.title}</Styled.Title>
                </Styled.Header>
                <Styled.Description>
                  {element.description}
                  <Divider />

                  <Styled.LocationTime>
                    <Styled.Location>
                      Dirección: {element.location}
                    </Styled.Location>
                    <Styled.Time>
                      Horario:
                      {element.startTime}-{element.endTime}
                    </Styled.Time>
                  </Styled.LocationTime>
                </Styled.Description>
                <Styled.ButtonContainer>
                  <AddToCalendarButton
                    name={`${element.title}`}
                    startDate={`${element.year}-${element.month}-${element.day}`}
                    label="Agendar"
                    size="0"
                    startTime={`${element.startTime}`}
                    endTime={`${element.endTime}`}
                    timeZone="America/Los_Angeles"
                    location={`${element.location}`}
                    description={`${element.description}`}
                    options="'Apple','Google','iCal','Outlook.com','Yahoo'"
                    lightMode="bodyScheme"
                  ></AddToCalendarButton>
                  <Styled.LinkToEventButton>
                    <Link href={`${element.link}`}>Visitar &rarr;</Link>
                  </Styled.LinkToEventButton>
                </Styled.ButtonContainer>
              </Styled.Content>
            </Styled.Card>
          ))
        )}
      </Styled.CardContainer>
    </>
  );
}
