import * as React from 'react';
import Input from '../Input';
import Caption from '@/components/atoms/caption';
import { action } from '@storybook/addon-actions';

export const inputWithHelpText = () => {

  const style = {
    display: 'flex',
    'flex-wrap': 'wrap',
  };

  const innerStyle = {
    maxWidth: '300px',
    marginRight: '5%',
    marginBottom: '20px',
  };

  return (
    <div style={style}>
      <div style={innerStyle}>
        <Input
          name="input"
          value="Value"
          type="password"
          onChange={action('on-change')}
        />
        <Caption withInput={true}>Pick a strong, unique password</Caption>
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Input',
  component: Input,
  parameters: {
    docs: {
      docPage: {
        title: 'Input'
      }
    }
  }
};
