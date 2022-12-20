import {ErrorBoundary, useErrorHandler} from 'react-error-boundary';
import DataItem from './DataItem';
// import DataReceiverWithBoundary from './DataReceiverWithBoundary';
import ErrorFallback from './ErrorFallback';

function DataList() {
  const handleError = useErrorHandler();
  return (
    <>
      <div>
        {/* <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DataItem></DataItem>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DataItem></DataItem>
        </ErrorBoundary>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DataItem></DataItem>
        </ErrorBoundary> */}

        {/* {Array.apply(null, {length: 3}).map((e, i) => (
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <DataItem></DataItem>
          </ErrorBoundary>
        ))} */}

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
