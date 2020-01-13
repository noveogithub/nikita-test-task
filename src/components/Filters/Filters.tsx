import React, { memo, ChangeEvent } from 'react';
import { DatePicker, InputText, Select } from 'welcome-ui';

import styled from '@xstyled/styled-components';
import { IFilters } from '../../types/IFilters';

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
  value: 'none',
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

export const Filters: React.FC<FiltersProps> = memo(({
  contractTypes,
  filters,
  onChange,
}) => {
  const callback = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target as HTMLInputElement;

    onChange({
      ...filters,
      [name]: value
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

  const onDateChange = console.log;

  return <Wrapper>
    <Item>
      <InputText placeholder="Your dream job?" name="search" value={filters.search || ''} onChange={callback} />
    </Item>
    <Item>
      <Select
        value={filters.contractType}
        onChange={onContractTypeChange}
        options={contractTypes.map(v => ({ label: v, value: v }))}
      />
    </Item>
    <Item><DatePicker iconPlacement="right" name="publishedAt" value={filters.publishedAt?.toString() || ''} onChange={onDateChange} type="date" /></Item>
    <Item>
      <Select
        name="groupBy"
        value={filters.groupBy}
        onChange={onGroupByChange}
        options={OPTIONS}
      />
    </Item>
  </Wrapper>
});