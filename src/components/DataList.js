import {ErrorBoundary} from 'react-error-boundary';
import DataItem from './DataItem';
// import DataReceiverWithBoundary from './DataReceiverWithBoundary';
import ErrorFallback from './ErrorFallback';

function DataList() {
  return (
    <>
      <div>
        {Array.apply(null, {length: 3}).map((e, i) => (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <DataItem></DataItem>
          </ErrorBoundary>
        ))}
      </div>
    </>
  );
}

export default DataList;
