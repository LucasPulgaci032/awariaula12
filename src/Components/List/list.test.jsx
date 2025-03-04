import { render, screen } from '@testing-library/react';
import List from './List';
import userEvent from '@testing-library/user-event';

const mockedItem = {
    id: 1,
    name: 'bulbasaur',
    sprites: {
        other: {
            'official-artwork': {
                front_default: ''
            }
        }
    }
};

const mockedItems = [
    mockedItem,
    {
        id: 2,
        name: 'ivysaur',
        sprites: {
            other: {
                'official-artwork': {
                    front_default: ''
                }
            }
        }
    }
];

const mockedFavorites = [1];

describe('List Component', () => {
    it('should render correctly', () => {
        render(<List />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
    });

    it('should render items correctly', () => {
        render(<List items={mockedItems} />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
        expect(screen.getByTestId('list-item-1')).toBeInTheDocument();
        expect(screen.getByTestId('list-item-2')).toBeInTheDocument();
    });

    it('should call onAddItem correctly', async () => {
        const onAddItem = jest.fn();
        render(<List items={mockedItems} onAddItem={onAddItem} />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('heart'));
        expect(onAddItem).toBeenCalledTimes(1);
        expect(onAddItem).toBeenCalledWith(mockedItem);
    });

    it('should call onRemoveItem correctly', async () => {
        const onRemoveItem = jest.fn();
        render(<List favorites={mockedFavorites} items={mockedItems} onRemoveItem={onRemoveItem} />);
        expect(screen.getByTestId('list')).toBeInTheDocument();
        await userEvent.click(screen.getByTestId('heart'));
        expect(onRemoveItem).toBeenCalledTimes(1);
        expect(onRemoveItem).toBeenCalledWith(mockedItem);
    });
});
