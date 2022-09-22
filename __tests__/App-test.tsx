/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App/App';
import Buttons from '../App/Screens/Buttons';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

describe('TestCase for checking functionality of buttons', () => {
  const tree = renderer.create(<Buttons />);
  console.log(tree, 'ayuhs');
});
