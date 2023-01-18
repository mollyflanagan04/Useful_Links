import {render,screen,cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import ResourceList from '../ResourceList';

test('should render ResourceList component', () => { 
  render(<ResourceList/>);
  const resourceElement = screen.getByTestId('todo-1');
  expect(resourceElement).toBeInTheDocument(); 
  expect(resourceElement)
})