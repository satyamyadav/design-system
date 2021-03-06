import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import Pills, { Appearance } from '../../Pills';
import Text from '@/components/atoms/text';

// CSF format story
export const appearance = () => {
  const subtle = false;
  const weight = 'strong';

  const children = text('children', 'Pills');

  const appearances: Appearance[] = ['primary', 'secondary', 'alert', 'warning', 'success', 'accent1', 'accent2', 'accent3', 'accent4'];

  const style = {
    display: 'flex',
  };

  const innerStyle = {
    marginRight: '5%',
  };

  return (
    <div style={style}>
      {
        appearances.map((appear, ind) => {
          return (
            <div key={ind} style={innerStyle}>
              <Pills
                appearance={appear}
                subtle={subtle}
              >
                {children}
              </Pills>
              <br />
              <Text weight={weight}>{appear.charAt(0).toUpperCase() + appear.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>
  );
};

export default {
  title: 'Atoms|Pills/Variants',
  component: Pills,
  parameters: {
    docs: {
      docPage: {
        title: 'Pills'
      }
    }
  }
};
