import {ErrorBoundary} from 'react-error-boundary';
import DataItem from './DataItem';
import ErrorFallback from './ErrorFallback';

function DataList() {
  return (
    <>
      <div>
        {Array.apply(null, {length: 3}).map((e, i) => (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <DataItem key={i}></DataItem>
          </ErrorBoundary>
        ))}
      </div>
    </>
  );
}

export default DataList;
