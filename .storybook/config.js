import { configure } from '@storybook/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { describe, it } from 'storybook-addon-specifications';

global.describe = describe;
global.it = it;

Enzyme.configure({ adapter: new Adapter() });

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
