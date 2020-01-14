import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@xstyled/styled-components";
import { createTheme } from "@welcome-ui/core";


import { JobItem } from "./JobItem";

const theme = createTheme();

test("renders job item component without crashing", () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <JobItem
        id={1}
        name="name"
        profile="profile"
        description="description"
        contractType="type"
        office="office"
        onOpen={() => { }}
      /></ThemeProvider>);
  expect(container).toBeInTheDocument();
});
