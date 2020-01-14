import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@xstyled/styled-components";
import { createTheme } from "@welcome-ui/core";

import { JobList } from "./JobList";

const theme = createTheme();

const ITEMS = [{
  id: 1,
  name: 'test',
  description: 'test',
  publishedAt: '1970-01-01 00:00:00',
  contractType: {
    en: ''
  },
  office: {
    name: 'office',
  },
  department: {
    name: 'department',
  },
  websites_urls: []
}];

test("renders job list component without crashing", () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <JobList
        items={ITEMS}
        onOpen={() => { }}
      /></ThemeProvider>);
  expect(container).toBeInTheDocument();
});
