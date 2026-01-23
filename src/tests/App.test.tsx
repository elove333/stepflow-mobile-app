import React from 'react';
import {render} from '@react-test-renderer';
import App from '../../App';

describe('App', () => {
  it('should render without crashing', () => {
    const component = render(<App />);
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
  });
});
