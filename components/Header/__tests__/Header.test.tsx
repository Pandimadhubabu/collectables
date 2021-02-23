import { render, screen } from '@utils/test-utils';
import Header from '../Header';

describe('Header', () => {
  it('should render the heading', () => {
    render(<Header />);

    const heading = screen.getByText(/Collectables/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
