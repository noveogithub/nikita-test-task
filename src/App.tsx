import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Alert, Badge, Box, Text, Tooltip } from 'welcome-ui';
import { Dictionary, map } from 'lodash';
import styled from '@xstyled/styled-components';

import { JobList } from './components/JobList';
import { jobRequest, filtersChange } from './redux/actions/jobs';
import { getGroupedJobOffers } from './redux/selectors/getGroupedJobOffers';
import { IStore } from './redux/store/types';
import { IJob } from './types/IJob';
import { Filters } from './components/Filters';
import { IFilters } from './types/IFilters';
import { getCurrentFilters } from './redux/selectors/getCurrentFilters';
import { getContractTypes } from './redux/selectors/getContractTypes';
import { getPreviewingJob } from './redux/selectors/getPreviewingJob';
import { previewJob } from './redux/actions/preview';
import { IPreview } from './types/IPreview';
import { JobModal } from './components/JobModal';

const Heading = styled.header`
  text-align: center;
`;

type AppProps = {
  onRequest: () => void;
  loading: boolean;
  groups: Dictionary<IJob[]>;
  filters: IFilters;
  contractTypes: string[];
  onFilterChange: (filters: IFilters) => void;
  previewingJob: IJob | null;
  previewJob: (preview: IPreview) => void;
}

const App: React.FC<AppProps> = ({
  loading,
  groups,
  filters,
  onFilterChange,
  onRequest,
  contractTypes,
  previewingJob,
  previewJob,
}) => {
  useEffect(() => {
    onRequest();
  }, [onRequest]);

  const renderGroup = (group: IJob[], key: string) => <summary key={key}>
    <header>
      <Text variant="h4">
        {key}
        {' '}
        <Tooltip content={`Total items in this group: ${group.length}`}>
          <Badge>{group.length}</Badge>
        </Tooltip>
      </Text>
    </header>
    <details>
      <JobList items={group} onOpen={previewJob} />
    </details>
  </summary>;

  return (<Box padding="25px">
    <Heading>
      <Text variant="h1">Our offers</Text>
    </Heading>
    {previewingJob && <JobModal onClose={() => previewJob({
      jobId: null,
      isOpen: false,
    })} {...previewingJob} />}
    <Filters
      filters={filters}
      onChange={onFilterChange}
      contractTypes={contractTypes}
    />
    {loading ? <Alert variant="info">Wait a moment...</Alert> : <>
      {map(groups, renderGroup)}
    </>}
  </Box>)
}

const mapStateToProps = (state: IStore) => ({
  groups: getGroupedJobOffers(state),
  loading: state.jobs.loading,
  filters: getCurrentFilters(state),
  contractTypes: getContractTypes(state),
  previewingJob: getPreviewingJob(state),
})

const mapDispatchToProps = {
  onRequest: jobRequest,
  onFilterChange: filtersChange,
  previewJob: previewJob,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
