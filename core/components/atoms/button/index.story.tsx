import * as React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from './Button';

// CSF format story
export const all = () => {
  const appearance = select(
    'appearance',
    ['basic', 'primary', 'success', 'alert', 'transparent'],
    undefined
  );

  const size = select(
    'size',
    ['tiny', 'regular', 'large'],
    undefined
  );

  const disabled = boolean(
    'disabled',
    false
  );

  const expanded = boolean(
    'expanded',
    false
  );

  const loading = boolean(
    'loading',
    false
  );

  const icon = text(
    'icon',
    ''
  );

  const iconAlign = select(
    'iconAlign',
    ['left', 'right'],
    undefined
  );

  const children = text(
    'children',
    'Button'
  );

  return (
    <Button
      onClick={action('button-clicked')}
      onMouseEnter={action('mouse-enter')}
      onMouseLeave={action('mouse-leave')}
      appearance={appearance}
      size={size}
      expanded={expanded}
      disabled={disabled}
      loading={loading}
      icon={icon}
      iconAlign={iconAlign}
    >
      {children}
    </Button>
  );
};

// Required for CSF format story
// https://medium.com/storybookjs/component-story-format-66f4c32366df
export default { title: 'Button' };
