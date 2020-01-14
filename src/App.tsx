import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Alert, Box, Text } from "welcome-ui";
import { Dictionary } from "lodash";
import styled from "@xstyled/styled-components";

import { jobRequest, filtersChange } from "./redux/actions/jobs";
import { getGroupedJobOffers } from "./redux/selectors/getGroupedJobOffers";
import { IStore } from "./types/IStore";
import { IJob } from "./types/IJob";
import { Filters } from "./components/Filters";
import { IFilters } from "./types/IFilters";
import { getCurrentFilters } from "./redux/selectors/getCurrentFilters";
import { getContractTypes } from "./redux/selectors/getContractTypes";
import { getPreviewingJob } from "./redux/selectors/getPreviewingJob";
import { previewJob } from "./redux/actions/preview";
import { IPreview } from "./types/IPreview";
import { JobModal } from "./components/JobModal";
import { GroupTabs } from "./components/GroupTabs";
import { SearchContext } from "./contexts/SearchContext";

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
};

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

  const closeModal = useCallback(
    () =>
      previewJob({
        jobId: null,
        isOpen: false,
      }),
    [previewJob]
  );

  return (
    <Box padding="25px">
      <SearchContext.Provider value={filters.search}>
        <Heading>
          <Text variant="h1">Our offers</Text>
        </Heading>
        {previewingJob && <JobModal onClose={closeModal} {...previewingJob} />}
        <Filters
          filters={filters}
          onChange={onFilterChange}
          contractTypes={contractTypes}
        />
        {loading ? (
          <Alert variant="info">Wait a moment...</Alert>
        ) : (
          <GroupTabs
            key={filters.groupBy}
            groups={groups}
            previewJob={previewJob}
          />
        )}
      </SearchContext.Provider>
    </Box>
  );
};

const mapStateToProps = (state: IStore) => ({
  groups: getGroupedJobOffers(state),
  loading: state.jobs.loading,
  filters: getCurrentFilters(state),
  contractTypes: getContractTypes(state),
  previewingJob: getPreviewingJob(state),
});

const mapDispatchToProps = {
  onRequest: jobRequest,
  onFilterChange: filtersChange,
  previewJob: previewJob,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
