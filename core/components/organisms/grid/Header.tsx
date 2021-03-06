import * as React from 'react';
import { Checkbox, Text, Input, Dropdown, Placeholder, PlaceholderParagraph, Button } from '@/index';
import { updateSchemaFn, ColumnSchema, Schema, Data, onSelectAllFn, GridProps, updateFilterListFn } from './Grid';

export interface ExternalHeaderProps {
  children?: React.ReactNode;
  withSearch?: boolean;
  searchPlaceholder?: string;
  dynamicColumn?: boolean;
}

export type updateSearchTermFn = (newSearchTerm: string) => void;

export interface HeaderProps extends ExternalHeaderProps {
  loading: boolean;
  error: boolean;
  data: Data;
  schema: Schema;
  selectAll?: GridProps['selectAll'];
  totalRecords?: number;
  withPagination?: boolean;
  withCheckbox?: boolean;
  showHead?: boolean;
  // updateData?: updateDataFn;
  updateSchema?: updateSchemaFn;
  filterList?: GridProps['filterList'];
  updateFilterList?: updateFilterListFn;
  onSelectAll?: onSelectAllFn;
  searchTerm?: string;
  updateSearchTerm?: updateSearchTermFn;
}

export const Header = (props: HeaderProps) => {
  const {
    loading,
    error,
    data,
    schema,
    withSearch,
    showHead,
    withPagination,
    withCheckbox,
    children,
    // updateData,
    updateSchema,
    filterList = {},
    updateFilterList,
    totalRecords = 0,
    onSelectAll,
    searchPlaceholder,
    selectAll,
    searchTerm,
    updateSearchTerm,
    dynamicColumn
  } = props;

  const [selectAllRecords, setSelectAllRecords] = React.useState<boolean>(false);
  const [flag, setFlag] = React.useState(true);

  React.useEffect(() => {
    setFlag(!flag);
  }, [schema]);

  React.useEffect(() => {
    if (selectAll && selectAll.checked) {
      if (onSelectAll) onSelectAll(true, selectAllRecords);
    }
  }, [selectAllRecords]);

  React.useEffect(() => {
    if (selectAll && !selectAll.checked) setSelectAllRecords(false);
  }, [selectAll]);

  const filterSchema = schema.filter(s => s.filters);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (updateSearchTerm) {
      updateSearchTerm(value);
    }
  };

  const onFilterChange = (name: ColumnSchema['name'], filters: any[]) => {
    const newFilterList = {
      ...filterList,
      [name]: filters
    };

    if (updateFilterList) {
      updateFilterList(newFilterList);
    }
  };

  const onHideColumn = (selected: any[]) => {
    const newSchema = schema.map(s => ({
      ...s,
      hidden: selected.findIndex(val => val === s.name) === -1
    }));

    if (updateSchema) updateSchema(newSchema);
  };

  const columnOptions = schema.map(s => ({
    label: s.displayName,
    value: s.name,
    selected: !s.hidden
  }));

  const selectedCount = data.filter(d => d._selected).length;
  const label = withCheckbox && selectedCount ?
    selectAllRecords ? `Selected all ${totalRecords} items` : `Selected ${selectedCount} items on this page`
    : `Showing ${!error ? totalRecords : 0} items`;

  return (
    <div className="Header">
      <div className="Header-content Header-content--top">
        {withSearch && (
          <div className="Header-search">
            <Input
              name="GridHeader-search"
              icon="search"
              placeholder={searchPlaceholder}
              onChange={onSearchChange}
              value={searchTerm}
              onClear={() => updateSearchTerm && updateSearchTerm('')}
            />
          </div>
        )}
        {!showHead && (
          <div className="Header-dropdown">
            {/* {sortingSchema.length > 0 && (
              <div className="Header-sorting">
                {sortingSchema.map(s => {
                  const {
                    name,
                    displayName,
                    filters
                  } = s;

                  return (
                    <Dropdown
                      key={name}
                      checkboxes={true}
                      showApplyButton={true}
                      placeholder={displayName}
                      icon={'sort'}
                      options={filters}
                      onChange={selected => onSortChange(name, selected)}
                    />
                  );
                })}
              </div>
            )} */}
            {!showHead && filterSchema.length > 0 && (
              <div className="Header-filters">
                {filterSchema.map(s => {
                  const {
                    name,
                    displayName,
                    filters
                  } = s;

                  const filterOptions = filters
                    ? filters.map(f => ({
                      ...f,
                      selected: filterList[name] && filterList[name].findIndex(fl => fl === f.value) !== -1
                    }))
                    : [];

                  return (
                    <Dropdown
                      key={name}
                      withCheckbox={true}
                      showApplyButton={true}
                      inlineLabel={displayName}
                      icon={'filter_list'}
                      options={filterOptions}
                      onChange={selected => onFilterChange(name, selected)}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}
        <div className="Header-actions">
          {children}
        </div>
      </div>
      <div className="Header-content Header-content--bottom">
        <div className="Header-label">
          {!showHead && withCheckbox && !loading && (
            <Checkbox
              {...selectAll}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                if (onSelectAll) onSelectAll(event.target.checked);
              }}
            />
          )}
          {loading ? (
            <Placeholder withImage={!showHead && withCheckbox}>
              <PlaceholderParagraph length={'small'} />
            </Placeholder>
          ) : (
              <>
                <Text small={true} weight={'medium'}>{label}</Text>
                {withPagination && selectAll?.checked && (
                  <div className="ml-4">
                    {!selectAllRecords ? (
                      <Button
                        size="tiny"
                        onClick={() => setSelectAllRecords(true)}
                      >
                        {`Select all ${totalRecords} items`}
                      </Button>
                    ) : (
                        <Button
                          size="tiny"
                          onClick={() => setSelectAllRecords(false)}
                        >
                          Clear Selection
                        </Button>
                      )
                    }
                  </div>
                )}
              </>
            )
          }
        </div>
        {dynamicColumn && (
          <div className="Header-hideColumns">
            <Dropdown
              key={`${flag}`}
              triggerSize={'tiny'}
              withCheckbox={true}
              showApplyButton={true}
              options={columnOptions}
              totalOptions={columnOptions.length}
              align={'left'}
              triggerOptions={{
                labelLimit: 0,
                customLabel: (selected, totalOptions) => `Showing ${selected} of ${totalOptions} columns`,
                customTrigger: triggerLabel => (
                  <Button
                    size="tiny"
                    appearance="transparent"
                    icon="keyboard_arrow_down_filled"
                    iconAlign="right"
                  >
                    {triggerLabel ? triggerLabel : `Showing 0 of ${columnOptions.length} columns`}
                  </Button>
                )
              }}
              onChange={selected => onHideColumn(selected)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

Header.defaultProps = {
  schema: [],
  data: [],
  searchPlaceholder: 'Search',
  dynamicColumn: true
};

export default Header;
