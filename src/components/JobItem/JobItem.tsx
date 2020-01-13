import React, { memo } from 'react';
import { Box, Button } from 'welcome-ui';

type JobItemProps = {
  name: string;
  contractType: string | null;
  office: string;
  onOpen: () => void;
}

export const JobItem: React.FC<JobItemProps> = memo(({ name, contractType, office, onOpen }) => {
  return <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    backgroundColor="primary.100"
    margin="0 0 10px 0"
    padding="15px"
  >
    <header>
      <h1>{name}</h1>
      <h2>{contractType} - {office}</h2>
    </header>
    <Button onClick={onOpen}>See more</Button>
  </Box>
});