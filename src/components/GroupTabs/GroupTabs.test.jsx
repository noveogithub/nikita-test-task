import React from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "@xstyled/styled-components";
import { createTheme } from "@welcome-ui/core";


import { GroupTabs } from "./GroupTabs";

const theme = createTheme();

const GROUPS = {
  'All Groups': [{
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
  }]
}

test("renders group tabs component without crashing", () => {
  const { container } = render(
    <ThemeProvider theme={theme}>
      <GroupTabs
        groups={GROUPS}
        preview={() => { }}
      /></ThemeProvider>);
  expect(container).toBeInTheDocument();
});
