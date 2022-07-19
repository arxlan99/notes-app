import { useSelector } from 'react-redux';
import FuseSearch from '@common/core/FuseSearch';
import { selectFlatNavigation } from 'app/store/common/navigationSlice';

function NavigationSearch(props) {
  const { variant, className } = props;
  const navigation = useSelector(selectFlatNavigation);

  return <FuseSearch className={className} variant={variant} navigation={navigation} />;
}

export default NavigationSearch;
