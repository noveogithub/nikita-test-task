import React, { memo, useCallback } from 'react';
import { Alert } from 'welcome-ui';

import { IJob } from '../../types/IJob';
import { JobItem } from '../JobItem';
import { IPreview } from '../../types/IPreview';

type JobListProps = {
  items: IJob[];
  onOpen: (preview: IPreview) => void;
}

export const JobList: React.FC<JobListProps> = memo(({ items, onOpen }) => {

  const onOpenJob = useCallback((id: number) => onOpen({
    jobId: id,
    isOpen: true,
  }), [onOpen])

  return <div>
    {items.length === 0 && <Alert variant="info">No results</Alert>}
    {items.map(job => <JobItem
      id={job.id}
      key={job.id}
      name={job.name}
      profile={job.profile}
      description={job.description}
      contractType={job.contract_type?.en || null}
      office={job.office.name}
      onOpen={onOpenJob}
    />)}
  </div>
});