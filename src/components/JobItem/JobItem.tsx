import React, { memo } from 'react';

type JobItemProps = {
  name: string;
  contractType: string | null;
  description: string;
  profile: string;
}

export const JobItem: React.FC<JobItemProps> = memo(({ name, contractType, description, profile }) => {
  return <section>
    <header>{name}</header>
    <sub>{contractType}</sub>
    <div dangerouslySetInnerHTML={{ __html: description }} />
    <div dangerouslySetInnerHTML={{ __html: profile }} />
  </section>
});