import * as React from 'react';
import Input from '../Input';
import Label from '@/components/atoms/label';
import { action } from '@storybook/addon-actions';

export const requiredInputWithLabel = () => {

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
        <div style={{ height: '72px' }}>
          <Label required={true} withInput={true}>Full Name</Label>
          <Input
            name="input"
            value="Value"
            onChange={action('on-change')}
            onClear={action('on-change')}
            required={true}
          />
        </div>
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
