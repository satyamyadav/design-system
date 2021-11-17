import { getTomorrowDate, get3DaysLaterDate, get1WeekLaterDate, get30DaysLaterDate } from '../utilities';

test('calls getTomorrowDate', () => {
  expect(getTomorrowDate());
});
test('calls get3DaysLaterDate', () => {
  expect(get3DaysLaterDate());
});
test('calls get1WeekLaterDate', () => {
  expect(get1WeekLaterDate());
});
test('calls get30DaysLaterDate', () => {
  expect(get30DaysLaterDate());
});
