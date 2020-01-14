import React, { memo, useContext, useCallback } from 'react';
import { Box, Button, Text, Tooltip } from 'welcome-ui';
import Highlighter from "react-highlight-words";
import { SearchContext } from '../../contexts/SearchContext';

type JobItemProps = {
  id: number;
  name: string;
  profile: string;
  description: string;
  contractType: string | null;
  office: string;
  onOpen: (id: number) => void;
}

const matchesSearchInside = (search: string, profile: string, description: string) => {
  if (!search) {
    return false;
  }
  return [profile, description].map(v => v.toLowerCase()).some(v => v.includes(search.toString()));
}

export const JobItem: React.FC<JobItemProps> = memo(({
  id,
  name,
  profile,
  description,
  contractType,
  office,
  onOpen
}) => {
  const search = useContext(SearchContext);

  const matches = matchesSearchInside(search, profile, description);

  const callback = useCallback(() => {
    onOpen(id);
  }, [id, onOpen]);

  return <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    backgroundColor="info.100"
    margin="0 0 10px 0"
    padding="15px"
  >
    <header>
      <Text variant="body1">
        <Highlighter
          searchWords={search.split(' ')}
          textToHighlight={name}
        />
      </Text>
      <Text variant="body2">
        <Highlighter
          searchWords={search.split(' ')}
          textToHighlight={contractType || ''}
        /> - {office}
      </Text>
    </header>
    <Button onClick={callback} variant={matches ? 'primary-warning' : 'primary'}>
      {matches ? <Tooltip content="Search matches inside">
        <span>See more</span>
      </Tooltip> : <span>See more</span>}
    </Button>
  </Box>
});