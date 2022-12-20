import {ErrorBoundary} from 'react-error-boundary';
import DataReceiver from './DataReceiver';
import ErrorFallback from './ErrorFallback';

function DataReceiverWithBoundary() {
  return (
    <>
      <div>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <DataReceiver />
        </ErrorBoundary>
      </div>
    </>
  );
}
export default DataReceiverWithBoundary;
