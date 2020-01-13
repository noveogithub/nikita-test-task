import React, { memo, useEffect } from 'react';
import { map, Dictionary } from 'lodash';
import { TabList, Tab, TabPanel, useTabState } from 'welcome-ui';

import { IJob } from '../../types/IJob';
import { IPreview } from '../../types/IPreview';
import { JobList } from '../JobList';

type GroupTabsProps = {
  groups: Dictionary<IJob[]>;
  previewJob: (preview: IPreview) => void;
}

export const GroupTabs: React.FC<GroupTabsProps> = memo(({ groups, previewJob }) => {
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