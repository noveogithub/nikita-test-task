import React, { memo } from 'react';
import { Button, Box, Text } from 'welcome-ui';
import styled from '@xstyled/styled-components';

import { IJob } from '../../types/IJob';

type JobModalProps = IJob & {
  onClose: () => void;
}

const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  overflow: auto;
  padding: 50px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

export const JobModal: React.FC<JobModalProps> = memo(({ onClose, name, description, profile, websites_urls }) => {

  const applyUrl = websites_urls.find(url => url.website_reference === 'wttj_fr');

  const prevent = (e: Event) => {
    e.stopPropagation()
  }

  return <Overlay onClick={onClose}>
    <Box backgroundColor="light.900" padding="50px" onClick={prevent}>
      <h1>{name}</h1>
      <h2>Job Description</h2>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <h2>Profile</h2>
      <div dangerouslySetInnerHTML={{ __html: profile }} />
      <ButtonWrapper>
        <Button onClick={() => {
          if (applyUrl) {
            window.location.href = applyUrl.url
          }
        }} size="xl"><Text size="xl">APPLY</Text></Button>
      </ButtonWrapper>
    </Box>
  </Overlay>
});