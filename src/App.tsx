import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dictionary } from 'lodash';

import { jobRequest, filtersChange } from './redux/actions/jobs';
import { getGroupedJobOffers } from './redux/selectors/getGroupedJobOffers';
import { IStore } from './redux/store/types';
import { IJob } from './types/IJob';
import { IFilters } from './types/IFilters';
import { getCurrentFilters } from './redux/selectors/getCurrentFilters';
import { getContractTypes } from './redux/selectors/getContractTypes';

type AppProps = {
  onRequest: () => void;
  loading: boolean;
  groups: Dictionary<IJob[]>;
  filters: IFilters;
  contractTypes: string[];
  onFilterChange: (filters: IFilters) => void;
}

const App: React.FC<AppProps> = ({ loading, groups, filters, onFilterChange, onRequest, contractTypes }) => {
  useEffect(() => {
    onRequest();
  }, [onRequest]);

  return <h1>Our offers</h1>
}

const mapStateToProps = (state: IStore) => ({
  groups: getGroupedJobOffers(state),
  loading: state.jobs.loading,
  filters: getCurrentFilters(state),
  contractTypes: getContractTypes(state)
})

const mapDispatchToProps = {
  onRequest: jobRequest,
  onFilterChange: filtersChange,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
