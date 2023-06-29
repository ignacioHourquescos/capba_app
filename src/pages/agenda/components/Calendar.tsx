import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Badge from '@mui/material/Badge';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import mockedCalendar from '@/lib/fake-api/calendar';

/**
 * Mimic fetch with abort controller https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort
 * ⚠️ No IE11 support
 */
function fakeFetch(date: Dayjs) {
  return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
    // console.log('aca me llega el mes en fakeFetch', date.$M);
    // console.log('mocked calendar', mockedCalendar);
    // const array = mockedCalendar.filter(
    //   (element) => element.month.toString() == date.$M.toString()
    // );
    // const daysToHighlight = array.map((item) => item.day);
    // console.log('startTimestamp', daysToHighlight);
    // resolve({ daysToHighlight });
  });
}

const initialValue = dayjs();

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
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([3, 2, 15]);

  const displaySelectedDate = (event: any) => {
    // console.table([event], ['$d', '$M']);
    // console.log(event.$d);
    // const dateString = event.$d;
    // const date = new Date(dateString);
    // const day = date.getDate();
    // const month = date.toLocaleString('default', { month: 'long' });
    // const year = date.getFullYear();
    // console.log(day); // Output: 24
    // console.log(month);
    // console.log(year);
  };

  const fetchHighlightedDays = (date: Dayjs, event: any) => {
    const controller = new AbortController();
    fakeFetch(date)
      .then(({ daysToHighlight }) => {
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== 'AbortError') {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  React.useEffect(() => {
    //fetchHighlightedDays(initialValue);
    // abort request on unmount
    //return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }
    setIsLoading(true);
    setHighlightedDays([]);
    fetchHighlightedDays(date, event);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={initialValue}
        loading={isLoading}
        onMonthChange={(event) => {
          displaySelectedDate(event);
          handleMonthChange(event);
        }}
        renderLoading={() => <DayCalendarSkeleton />}
        onChange={(event) => displaySelectedDate(event)}
        slots={{
          day: ServerDay,
        }}
        slotProps={{
          day: {
            highlightedDays,
          } as any,
        }}
      />
    </LocalizationProvider>
  );
}
