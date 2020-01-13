import React, { memo } from 'react';
import { Box, Button, Text } from 'welcome-ui';

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
    backgroundColor="info.100"
    margin="0 0 10px 0"
    padding="15px"
  >
    <header>
      <Text variant="body1">{name}</Text>
      <Text variant="body2">{contractType} - {office}</Text>
    </header>
    <Button onClick={onOpen}>See more</Button>
  </Box>
});