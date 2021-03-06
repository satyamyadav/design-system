import * as React from 'react';
import Dropdown from '../../Dropdown';
import Text from '@/components/atoms/text';
import { storyOptions } from '../Options';

// CSF format story
export const multiOptions = () => {
  const style = {
    display: 'flex',
    'flex-direction': 'column',
    alignItems: 'center',
    marginRight: '5%',
    width: '150px'
  };

  return (
    <div style={{ display: 'flex', minHeight: '300px' }}>
      <div style={style}>
        <Text weight="strong">{'With Apply Button'}</Text><br />
        <Dropdown
          maxHeight={180}
          withCheckbox={true}
          showApplyButton={true}
          options={storyOptions}
          placeholder={'Select'}
        />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '150px' }}>
        <Text weight="strong">{'Without Apply Button'}</Text><br />
        <Dropdown withCheckbox={true} options={storyOptions} placeholder={'Select'} />
      </div>
    </div>
  );
};

export default {
  title: 'Atoms|Dropdown/Variants',
  component: Dropdown,
  parameters: {
    docs: {
      docPage: {
        title: 'Dropdown'
      }
    }
  }
};
