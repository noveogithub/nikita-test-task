import React, {
  memo,
  ChangeEvent,
  useMemo,
  useState,
  useEffect,
  useRef,
} from "react";
import { DatePicker, InputText, Select } from "welcome-ui";
import styled, { css, down } from "@xstyled/styled-components";
import { debounce } from "lodash";

import "./Filters.css";
import { IFilters } from "@app/types/IFilters";
import { NONE } from "@app/constants/None";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${down(
    "md",
    css`
      flex-direction: column;
    `
  )}
`;

const Item = styled.div`
  margin: 5px;

  ${down(
    "md",
    css`
      flex: 1 0 auto;
      width: 100%;
    `
  )}
`;

const OPTIONS = [
  {
    label: "None",
    value: NONE,
  },
  {
    label: "Office",
    value: "office.name",
  },
  {
    label: "Department",
    value: "department.name",
  },
];

type FiltersProps = {
  filters: IFilters;
  onChange: (filters: IFilters) => void;
  contractTypes: string[];
};

// Component to render filter bar
export const Filters: React.FC<FiltersProps> = memo(
  ({ contractTypes, filters, onChange }) => {
    const [state, setState] = useState<IFilters>(filters);
    useEffect(() => {
      setState(filters);
    }, [filters]);

    const debouncedChange = useRef(
      debounce((filters: IFilters) => {
        onChange(filters);
      }, 750)
    );

    const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target as HTMLInputElement;

      const nextFilters = {
        ...filters,
        search: value,
      };

      setState(nextFilters);
      debouncedChange.current(nextFilters);
    };

    const onGroupByChange = (value: string) => {
      const nextFilters = {
        ...filters,
        groupBy: value,
      };

      onChange(nextFilters);
    };

    const onContractTypeChange = (value: string) => {
      const nextFilters = {
        ...filters,
        contractType: value,
      };

      onChange(nextFilters);
    };

    const onDateChange = (date: Date) => {
      const nextFilters = {
        ...filters,
        publishedAt: date,
      };

      onChange(nextFilters);
    };

    const types = useMemo(
      () =>
        contractTypes.map(v => ({
          label: v === NONE ? "All Types" : v,
          value: v,
        })),
      [contractTypes]
    );

    return (
      <Wrapper>
        <Item>
          <InputText
            placeholder="Your dream job?"
            value={state.search || ""}
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
            value={filters.publishedAt?.toString() || ""}
            iconPlacement="right"
            onChange={onDateChange}
          />
        </Item>
        <Item>
          <Select
            value={filters.groupBy}
            onChange={onGroupByChange}
            options={OPTIONS}
          />
        </Item>
      </Wrapper>
    );
  }
);
