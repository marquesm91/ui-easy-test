import React from 'react';

import { storiesOf } from '@storybook/react';
import { specs } from 'storybook-addon-specifications';

import { Toggler } from '../components';
import TogglerTests from '../components/Toggler/Toggler.test';

storiesOf('Toggler', module)
  .add('with toggle', () => {
    specs(() => TogglerTests);
    return <Toggler />;
  });
