import * as React from 'react';
import PlaceholderParagraph, { Length } from '../../PlaceholderParagraph';
import Text from '@/components/atoms/text';

export const length = () => {
  const lengths: Length[] = ['small', 'medium', 'large'];

  return (
    <div>
      {
        lengths.map((len, ind) => {
          return (
            <div key={ind} style={{ marginBottom: '20px' }}>
              <PlaceholderParagraph length={len} />
              <Text weight="strong">{len.charAt(0).toUpperCase() + len.slice(1)}</Text>
            </div>
          );
        })
      }
    </div>

  );
};

export default {
  title: 'Atoms|Loaders/Placeholder/Paragraph/Variants',
  component: PlaceholderParagraph,
  parameters: {
    docs: {
      docPage: {
        title: 'PlaceholderParagraph'
      }
    }
  }
};
