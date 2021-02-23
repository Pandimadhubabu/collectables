import { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
// import { ThemeProvider } from "my-ui-lib"

type Props = {
  children?: ReactElement;
};

const Providers: FC<Props> = ({ children }: ReactElement | any) => {
  return children;
  // return (
  //   <ThemeProvider theme="light">
  //     {children}
  //   </ThemeProvider>
  // )
};

const customRender = (ui: ReactElement, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
