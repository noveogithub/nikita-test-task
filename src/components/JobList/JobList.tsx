import React, { memo, useCallback } from "react";
import { Alert } from "welcome-ui";
import styled, { css, down } from "@xstyled/styled-components";

import { IJob } from "@app/types/IJob";
import { JobItem } from "@app/components/JobItem";
import { IPreview } from "@app/types/IPreview";

type JobListProps = {
  items: IJob[];
  onOpen: (preview: IPreview) => void;
};

const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  ${down(
    "md",
    css`
      margin: 0;
    `
  )}
`;

const Item = styled.div`
  width: calc(33.3333% - 10px);
  margin: 0 5px 10px;

  ${down(
    "md",
    css`
      width: 100%;
      margin: 0 0 5px;
    `
  )}
`;

// Component to render list (group) of job offers
export const JobList: React.FC<JobListProps> = memo(({ items, onOpen }) => {
  const onOpenJob = useCallback(
    (id: number) =>
      onOpen({
        jobId: id,
        isOpen: true,
      }),
    [onOpen]
  );

  return (
    <ItemsWrapper>
      {items.length === 0 && <Alert variant="info">No results</Alert>}
      {items.map(job => (
        <Item key={job.id}>
          <JobItem
            id={job.id}
            name={job.name}
            profile={job.profile}
            description={job.description}
            contractType={job.contract_type?.en || null}
            office={job.office.name}
            onOpen={onOpenJob}
          />
        </Item>
      ))}
    </ItemsWrapper>
  );
});
