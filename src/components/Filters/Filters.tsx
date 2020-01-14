import React, { memo, ChangeEvent, useMemo } from 'react';
import { DatePicker, InputText, Select } from 'welcome-ui';

import './Filters.css';
import styled from '@xstyled/styled-components';
import { IFilters } from '../../types/IFilters';
import { NONE } from '../../constants/None';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  margin: 5px;
`;

const OPTIONS = [{
  label: 'None',
  value: NONE,
}, {
  label: 'Office',
  value: 'office.name',
}, {
  label: 'Department',
  value: 'department.name'
}]

type FiltersProps = {
  filters: IFilters;
  onChange: (filters: IFilters) => void;
  contractTypes: string[];
}

// Component to render filter bar
export const Filters: React.FC<FiltersProps> = memo(({
  contractTypes,
  filters,
  onChange,
}) => {
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    onChange({
      ...filters,
      search: value
    });
  };

  const onGroupByChange = (value: string) => {
    onChange({
      ...filters,
      groupBy: value,
    })
  };

  const onContractTypeChange = (value: string) => {
    onChange({
      ...filters,
      contractType: value,
    });
  };

  const onDateChange = (date: Date) => {
    onChange({
      ...filters,
      publishedAt: date,
    })
  };

  const types = useMemo(() => contractTypes.map(v => ({
    label: v === NONE ? 'All Types' : v,
    value: v
  })), [contractTypes]);

  return <Wrapper>
    <Item>
      <InputText
        placeholder="Your dream job?"
        value={filters.search || ''}
        onChange={onSearchChange}
      />
    </Item>
    <Item>
      <Select
        value={filters.contractType}
        onChange={onContractTypeChange}
        options={types}
      />
    </Item>
    <Item>
      <DatePicker
        value={filters.publishedAt?.toString() || ''}
        iconPlacement="right"
        onChange={onDateChange} />
    </Item>
    <Item>
      <Select
        value={filters.groupBy}
        onChange={onGroupByChange}
        options={OPTIONS}
      />
    </Item>
  </Wrapper>
});