import React from 'react';
import { storiesOf } from '@storybook/react';
import { DummyToggler } from '../components';

storiesOf('DummyToggler', module)
  .add('without toggle', () => <DummyToggler />);
