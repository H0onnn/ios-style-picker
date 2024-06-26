import { DatePickerValueFormater } from './types';
export declare type DatePickerProps = {
    /**
     * Callback for changing values.
     */
    onChange: (year: number, month: number, day: number, hour: number, minute: number) => void;
    /**
     * First date of date picker.
     */
    fromDate?: Date;
    /**
     * Last date of date picker. Default to 40 years later from `fromDate`.
     */
    toDate?: Date;
    /**
     * Initial date.
     */
    initDate?: Date;
    /**
     * Initial hour.
     */
    initHour?: number;
    /**
     * Initial minute.
     */
    initMinute?: number;
    /**
     * Scroll infinitely or not.
     */
    infinite?: boolean;
    /**
     * Formatter for picker.
     */
    formatters?: {
        year?: DatePickerValueFormater;
        month?: DatePickerValueFormater;
        day?: DatePickerValueFormater;
        hour?: DatePickerValueFormater;
        minute?: DatePickerValueFormater;
    };
    /**
     * Classes of container element.
     */
    className?: string;
};
declare function DatePicker({ onChange, fromDate, toDate, initDate: _initDate, infinite, formatters, className: _className, }: DatePickerProps): JSX.Element;
export default DatePicker;
