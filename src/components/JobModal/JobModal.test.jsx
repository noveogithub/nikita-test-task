import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@xstyled/styled-components";
import { createTheme } from "@welcome-ui/core";

import { JobModal } from "./JobModal";

const theme = createTheme();

test("renders job modal component without crashing", () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <JobModal
        onClose={() => { }}
        name="name"
        description="description"
        profile="profile"
        websites_urls={[]}
      /></ThemeProvider>);
  expect(container).toBeInTheDocument();
});
