import React, { memo } from 'react';
import { Alert } from 'welcome-ui';

import { IJob } from '../../types/IJob';
import { JobItem } from '../JobItem';

type JobListProps = {
  items: IJob[];
}

export const JobList: React.FC<JobListProps> = memo(({ items }) => {
  return <div>
    {items.length === 0 && <Alert variant="info">No results</Alert>}
    {items.map(job => <JobItem
      key={job.id}
      name={job.name}
      contractType={job.contract_type?.en || null}
      office={job.office.name}
    />)}
  </div>
});