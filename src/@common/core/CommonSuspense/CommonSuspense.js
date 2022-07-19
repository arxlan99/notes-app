import CommonLoading from '@common/core/CommonLoading';
import PropTypes from 'prop-types';
import { Suspense } from 'react';

/**
 * React Suspense defaults
 * For to Avoid Repetition
 */ function CommonSuspense(props) {
  return <Suspense fallback={<CommonLoading {...props.loadingProps} />}>{props.children}</Suspense>;
}

CommonSuspense.propTypes = {
  loadingProps: PropTypes.object,
};

CommonSuspense.defaultProps = {
  loadingProps: {
    delay: 0,
  },
};

export default CommonSuspense;
