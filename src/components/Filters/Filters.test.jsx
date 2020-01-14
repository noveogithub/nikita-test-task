import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@xstyled/styled-components";
import { createTheme } from "@welcome-ui/core";


import { Filters } from "./Filters";

const theme = createTheme();

test("renders filters component without crashing", () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <Filters
        onChange={() => { }}
        filters={{
          search: '',
          groupBy: '',
          publishedAt: new Date(),
          contractType: '',
        }}
        contractTypes={[]}
      /></ThemeProvider>);
  expect(container).toBeInTheDocument();
});
