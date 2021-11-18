import * as React from 'react';
import { DatePicker } from '@/index';

const customCode = `() => {
  const [date, setDate] = React.useState(new Date());
  const [selectedChip, setSelectedChip] = React.useState('today');

  const renderChildren = () => {
    return (
      <div className="pt-6 px-5" style={{ borderRight: 'var(--border)', borderColor: 'var(--secondary-light)' }}>
        <div className="d-flex align-items-center justify-content-between">
          <Subheading size="s" appearance="subtle">
            Date
          </Subheading>
        </div>
        <div className="pt-4">
          <Chip
            label="Today"
            clearButton={false}
            type="selection"
            className="mb-5 d-block"
            selected={selectedChip === 'today'}
            name="rangePicker"
            onClick={() => {
              setDate(new Date)
              setSelectedChip('today')
            }}
          />
          <Chip
            label="Tomorrow"
            clearButton={false}
            type="selection"
            className="mb-5 d-block"
            selected={selectedChip === 'tomorrow'}
            name={'chip'}
            onClick={() => {
              setDate(DatePicker.utils.getTomorrowDate())
              setSelectedChip('tomorrow')
            }}
          />
          <Chip
            label="3 Days later"
            clearButton={false}
            type="selection"
            className="mb-5  d-block"
            selected={selectedChip === '3DaysLlater'}
            name="rangePicker"
            onClick={() => {
              setDate(DatePicker.utils.get3DaysLaterDate())
              setSelectedChip('3DaysLlater')
            }}
          />
          <Chip
            label="1 Week later"
            clearButton={false}
            type="selection"
            className="mb-5  d-block"
            selected={selectedChip === '1WeekLater'}
            name="rangePicker"
            onClick={() => {
              setDate(DatePicker.utils.get1WeekLaterDate())
              setSelectedChip('1WeekLater')
            }}
          />
          <Chip
            label="30 Days later"
            clearButton={false}
            type="selection"
            className="mb-5  d-block"
            selected={selectedChip === '30DaysLater'}
            name="rangePicker"
            onClick={() => {
              setDate(DatePicker.utils.get30DaysLaterDate())
              setSelectedChip('30DaysLater')
            }}
          />
        </div>
      </div>
    );
  };
  return (
    <Card className="d-inline-flex" shadow="light">
      
      <DatePicker date={date} showTodayChip={false}>
      {renderChildren()}
      </DatePicker>
    </Card>
  );
};`;
export const WithPresets = () => <></>;

export default {
  title: 'Patterns/DatePicker/With Presets',
  component: DatePicker,
  parameters: {
    docs: {
      docPage: {
        customCode,
        title: 'DatePicker',
      },
    },
  },
};
