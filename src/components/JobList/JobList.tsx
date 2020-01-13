import React, { memo } from 'react';

import { IJob } from '../../types/IJob';
import { JobItem } from '../JobItem';

type JobListProps = {
  items: IJob[];
}

export const JobList: React.FC<JobListProps> = memo(({ items }) => {
  return <div>
    {items.length === 0 && <div>No results</div>}
    {items.map(job => <JobItem
      name={job.name}
      contractType={job.contract_type?.en || null}
      description={job.description}
      profile={job.profile}
    />)}
  </div>
});