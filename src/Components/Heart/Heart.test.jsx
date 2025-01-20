import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Heart from './Heart';
import userEvent from '@testing-library/user-event';

 describe('Heart component', () => {
   

    it('should render correctly', () => {
         render(<Heart/>);
         expect(screen.getByTestId('heart')).toBeInTheDocument();
    });

    it('should render correctly when selected', () => {
        render(<Heart selected/>);
        expect(screen.getByTestId('heart')).toBeInTheDocument();
        expect(screen.getByTestId('heart')).toHaveClass('heart-selected');
 });
 it('should call onclick correctly', async () => {

    const onClick = jest.fn();

    render(<Heart onClick={onClick}/>);
    expect(screen.getByTestId('heart')).toBeInTheDocument();
    
   await userEvent.click(screen.getByTestId('heart'));

    expect(onClick).toBeCalledTimes(1);
 });


});
