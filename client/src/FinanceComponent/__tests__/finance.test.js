import { render, screen, cleanup } from '@testing-library/react'
import FinanceComponent from '../FinanceComponent';
describe('should render finance component', () => {
    it('should render finance list', () => {
        render(<FinanceComponent />);
        expect(screen.getByText('ticker')).toBeInTheDocument();
    })
})