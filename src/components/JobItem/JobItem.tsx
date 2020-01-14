import React, { memo, useContext, useCallback } from "react";
import { Box, Button, Text, Tooltip } from "welcome-ui";
import Highlighter from "react-highlight-words";

import { SearchContext } from "@app/contexts/SearchContext";

type JobItemProps = {
  id: number;
  name: string;
  profile: string;
  description: string;
  contractType: string | null;
  office: string;
  onOpen: (id: number) => void;
};

const matchesSearchInside = (
  search: string,
  profile: string,
  description: string,
  contractType: string,
  office: string
) => {
  if (!search) {
    return false;
  }

  const searchWords = search.split("").map(v => v.toLowerCase());
  const content = [profile, description, contractType, office]
    .join()
    .toLowerCase();

  return searchWords.every(w => content.includes(w));
};

// Component to render single job item in list
export const JobItem: React.FC<JobItemProps> = memo(
  ({ id, name, profile, description, contractType, office, onOpen }) => {
    const search = useContext(SearchContext);

    const matches = matchesSearchInside(
      search,
      profile,
      description,
      contractType || "",
      office
    );

    const callback = useCallback(() => {
      onOpen(id);
    }, [id, onOpen]);

    return (
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="info.100"
        margin="0 0 10px 0"
        padding="15px">
        <header>
          <Text variant="body1">
            <Highlighter
              searchWords={search.split(" ")}
              textToHighlight={name}
            />
          </Text>
          <Text variant="body2">
            <Highlighter
              searchWords={search.split(" ")}
              textToHighlight={contractType || ""}
            />
            {" - "}
            <Highlighter
              searchWords={search.split(" ")}
              textToHighlight={office || ""}
            />
          </Text>
        </header>
        <Button
          onClick={callback}
          variant={matches ? "primary-warning" : "primary"}>
          {matches ? (
            <Tooltip content="Search matches inside">
              <span>See more</span>
            </Tooltip>
          ) : (
            <span>See more</span>
          )}
        </Button>
      </Box>
    );
  }
);
