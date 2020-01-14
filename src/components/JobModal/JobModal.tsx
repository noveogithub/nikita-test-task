import React, { memo, useEffect, useCallback } from 'react';
import { Button, Box, Text } from 'welcome-ui';
import styled from '@xstyled/styled-components';

import { IJob } from '@app/types/IJob';
import { getApplyUrl } from '@app/utils/getApplyUrl';

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
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 25px;
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

// Component to render currently opened job offer
export const JobModal: React.FC<JobModalProps> = memo(({ onClose, name, description, profile, websites_urls }) => {
  // Prevent default click on overlay
  const prevent = useCallback((e: Event) => {
    e.stopPropagation()
  }, []);

  const applyUrl = getApplyUrl(websites_urls);
  const onApply = useCallback(() => {
    if (applyUrl) {
      window.location.href = applyUrl.url
    }
  }, [applyUrl]);

  /**
   * Add class to prevent body scroll when mounting modal
   * And remove it when modal dismounts
   */
  useEffect(() => {
    document.body.classList.add('overflow');

    return () => document.body.classList.remove('overflow');
  }, []);

  return <Overlay onClick={onClose}>
    <Box backgroundColor="light.900" onClick={prevent} padding="50px">
      <Text variant="h1">{name}</Text>
      <Text variant="h2">Job Description</Text>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <Text variant="h2">Profile</Text>
      <div dangerouslySetInnerHTML={{ __html: profile }} />
      <ButtonWrapper>
        <Button onClick={onApply} size="xl"><Text size="xl">APPLY</Text></Button>
      </ButtonWrapper>
    </Box>
  </Overlay>
});