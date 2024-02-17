import { render, screen } from '@testing-library/react';
import HeadTickers from './HeadTickers';

window.setImmediate = window.setTimeout;

describe('HeadTickers component', () => {
    test('renders with full items when window width is greater than 930px', () => {
        global.innerWidth = 932;

        render(<HeadTickers />);

        expect(screen.getByText('Біржа')).toBeInTheDocument();
        expect(screen.getByText('Ціна')).toBeInTheDocument();
        expect(screen.getByText('Зміна')).toBeInTheDocument();
        expect(screen.getByText('% Зміни')).toBeInTheDocument();
        expect(screen.getByText('Дивіденд')).toBeInTheDocument();
        expect(screen.getByText('Дохідність')).toBeInTheDocument();
        expect(screen.getByText('Остання угода')).toBeInTheDocument();
    });

    test('renders with two items when window width is less than', () => {
        global.innerWidth = 928;

        render(<HeadTickers />);

        expect(screen.getByText('Ціна / Зміна')).toBeInTheDocument();
        expect(screen.getByText('Див. / Дох.')).toBeInTheDocument();
    });
});