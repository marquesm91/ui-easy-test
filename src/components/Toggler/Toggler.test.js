import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import { Toggler } from '../index';

const TogglerTests = describe('with toggle', function () {
  const activeLabel = 'Toggle me! ✅';
  const inactiveLabel = 'Toggle me! ❌';

  it('click once state.active should be true and label ' + activeLabel, () => {
    const wrapper = shallow(<Toggler />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state().active).to.equal(true);
    expect(wrapper.text()).to.equal(activeLabel);
  });

  it('click twice state.active should be false and label ' + inactiveLabel, () => {
    const wrapper = shallow(<Toggler />);
    wrapper.find('button').simulate('click');
    wrapper.find('button').simulate('click');
    expect(wrapper.state().active).to.equal(false);
    expect(wrapper.text()).to.equal(inactiveLabel);
  });
});

export default TogglerTests;
