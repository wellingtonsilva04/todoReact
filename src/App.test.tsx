import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  render(<App />);
  // render(<App />);
  // unmountComponentAtNode(div);
});
