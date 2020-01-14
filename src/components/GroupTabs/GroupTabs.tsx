import React, { memo, useEffect } from 'react';
import { map, Dictionary } from 'lodash';
import { Alert, TabList, Tab, TabPanel, useTabState } from 'welcome-ui';

import { IJob } from '@app/types/IJob';
import { IPreview } from '@app/types/IPreview';
import { JobList } from '@app/components/JobList';

type GroupTabsProps = {
  groups: Dictionary<IJob[]>;
  previewJob: (preview: IPreview) => void;
}

/**
 * Component to render tabs based on current groupBy filter
 * Each group is rendered as separate tab item & panel
 */
export const GroupTabs: React.FC<GroupTabsProps> = memo(({ groups, previewJob }) => {

  if (Object.keys(groups).length === 0 || Object.values(groups).every(group => group.length === 0)) {
    return <Alert variant="info">No data to be displayed</Alert>
  }

  const tab = useTabState({
    selectedId: Object.keys(groups)[0],
  });

  useEffect(() => {
    tab.move(Object.keys(groups)[0], true);
    // eslint-disable-next-line
  }, [groups])

  return <>
    <TabList {...tab}>
      {map(groups, (_, key) => <Tab key={key} stopId={key} {...tab}>{key}</Tab>)}
    </TabList>
    {map(groups, (group, key) => <TabPanel key={key} stopId={key} {...tab}>
      <JobList items={group} onOpen={previewJob} />
    </TabPanel>)}
  </>
});