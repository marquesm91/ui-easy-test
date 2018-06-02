import { configure } from '@storybook/react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
Enzyme.configure({ adapter: new Adapter() });
