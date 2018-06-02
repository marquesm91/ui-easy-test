import React from 'react';

import { storiesOf } from '@storybook/react';
import { specs, describe, it } from 'storybook-addon-specifications';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Toggler } from '../components';

storiesOf('Toggler', module)
  .add('with toggle', () => {
    const story = <Toggler />;

    specs(() => describe('with toggle', function () {
      it('toggle button once and have to be active', () => {
        const wrapper = shallow(<Toggler />);
        wrapper.find('button').simulate('click');
        expect(wrapper.state().active).to.equal(true);
      });

      it('toggle button twice and have to be inactive', () => {
        const wrapper = shallow(<Toggler />);
        wrapper.find('button').simulate('click');
        wrapper.find('button').simulate('click');
        expect(wrapper.state().active).to.equal(true);
      });
    }));

    return story;
  });
