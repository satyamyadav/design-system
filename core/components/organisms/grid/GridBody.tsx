import * as React from 'react';
import { GridRow } from './GridRow';
import { Data, Schema } from './Grid';
import { Heading, Grid } from '@/index';

export interface GridBodyProps {
  schema: Schema;
  data: Data;
  withCheckbox?: boolean;
  _this: Grid;
  offset: number;
  inView: number;
  avgRowHeight: number;
}

export const GridBody = (props: GridBodyProps) => {
  const {
    _this,
    schema,
    data,
    withCheckbox,
    offset,
    inView,
    avgRowHeight
  } = props;

  const buffer = 50;

  const {
    loading,
    error,
    withPagination,
    page,
    pageSize,
    totalRecords,
    errorTemplate
  } = _this.props;

  if (error) {
    return errorTemplate ? errorTemplate() : <Heading>No results found</Heading>;
  }

  const totalPages = Math.ceil(totalRecords / pageSize);
  const dummyRows = page === totalPages ? totalRecords - (page - 1) * pageSize : pageSize;
  const rows = loading ? Array.from({ length: dummyRows }, () => ({})) : data.slice(offset, offset + buffer);

  return (
    <div className="Grid-body">
      {!loading && (
        <div
          className="GridBody-padding"
          style={{
            height: `${offset * avgRowHeight}px`
          }}
        />
      )}
      {rows.map((d, rI) => {
        return (
          <GridRow
            key={offset + rI}
            _this={_this}
            rowIndex={offset + rI}
            data={d}
            schema={schema}
            withCheckbox={withCheckbox}
          />
        );
      })}
      {!loading && (
        <div
          className="GridBody-padding"
          style={{
            height: `${((withPagination ? dummyRows : data.length) - inView - offset - 1) * avgRowHeight}px`
          }}
        />
      )}
    </div>
  );
};

export default GridBody;
