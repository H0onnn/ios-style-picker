import { DatePickerValueFormater } from '../components/types';

const ko: Record<'year' | 'month' | 'day' | 'hour' | 'minute', DatePickerValueFormater> = {
  year: value => `${value}년`,
  month: value => `${value}월`,
  day: value => `${value}일`,
  hour: value => `${value}시`,
  minute: value => `${value}분`,
};

export default ko;
