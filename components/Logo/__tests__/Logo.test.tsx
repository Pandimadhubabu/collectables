import { axe } from 'jest-axe';
import { render, act } from '@utils/test-utils';
import Logo from '../Logo';

describe('Logo', () => {
  it('should match snapshot', () => {
    const { container } = render(<Logo />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <span
        class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 cursor-pointer"
      >
        <svg
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          fill="currentColor"
          height="1em"
          stroke="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"
          />
        </svg>
        <span
          class="ml-3 text-xl dark:text-white"
        >
          Collectables
        </span>
      </span>
    `);
  });

  it('should be accessibule', async () => {
    const { container } = render(<Logo />);

    await act(async () => {
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
