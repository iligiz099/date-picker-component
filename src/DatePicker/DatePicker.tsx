import { useMemo, useState } from "react";

interface DatePickerProps {
    value: Date;
    onChange: (value: Date) => void;
    min?: Date;
    max?: Date;
}


const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',];

interface DateCellItem {
    date: number;
    month: number;
    year: number;

    isToday?: boolean;
    inSelected?: boolean;
}

const getDaysAmountInAMonth = (year: number, month: number) => {
    const nextMonthD = new Date(year, month + 1, 1);
    //mutates the date
    nextMonthD.setMinutes(-1);
    return nextMonthD.getDate;
};


const getPreviousMD = (year: number, month: number) => {
    const currentMFirstD = new Date(year, month, 1);
    const dayOfTheWeek = currentMFirstD.getDay();
    const prevMCellsAmount = dayOfTheWeek - 1;

    const daysAmountInPrevMonth = getDaysAmountInAMonth(year, month -1)

    const dateCells: DateCellItem[] = [];

    const [cellYear, cellMonth] = month === 0 ? [year - 1, 11] : [year, month -1];

    for (let i = 0; i < prevMCellsAmount; i++) {
        dateCells.push({
            year: cellYear,
            month: cellMonth,
            date:  -1, 
        });
    }
};
const VISIBLE_CELLS_AMOUNT = 7 * 6;

const getNextMD = (year: number, month: number) => {
    const currentMFirstD = new Date(year, month, 1);
    const dayOfTheWeek = currentMFirstD.getDay();
    const prevMCellsAmount = dayOfTheWeek - 1;
    const daysAmount = getDaysAmountInAMonth(year, month)

    const nextMonthDays = VISIBLE_CELLS_AMOUNT - daysAmount - prevMCellsAmount;
};

const getCurrentMD = (
    year: number,
    month: number,
    numberOfDays: number
) => {
    const dateCells: DateCellItem[] = [];

    for (let i = 1; i < numberOfDays; i++) {
        dateCells.push({
            year,
            month,
            date: i,
        });
    }
    return dateCells;
};

export const DatePicker = ({ value, onChange, min, max }: DatePickerProps) => {
    const [panelY] = useState(() => value.getFullYear());
    const [panelM] = useState(() => value.getMonth());

    const [year, month, day] = useMemo(() => {
        const currentY = value.getFullYear();
        const currentM = value.getDate();
        const currentD = months[value.getMonth()];


        return [currentY, currentM, currentD];
    }, [value]);

    const dateCells = useMemo(() => {
        const items: DateCellItem[] = [];

        const dayInAMonth = getDaysAmountInAMonth(panelY, panelM);

        return items;
    }, [panelY, panelM]);

    const onDateSelect = () => { };

    const nextY = () => { };

    const prevY = () => { };

    const nextM = () => { };

    const prevM = () => { };

    return <div>DatePicke</div>
};