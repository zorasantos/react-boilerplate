import { screen, render } from '@testing-library/react';
import { Main } from './index';

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <main>
        <h1>
          React Avançado
        </h1>
      </main>
    `);
  });
});
