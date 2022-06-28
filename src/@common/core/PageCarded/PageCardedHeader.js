import clsx from 'clsx';

function PageCardedHeader(props) {
  return (
    <div className={clsx('FusePageCarded-header', 'container')}>{props.header && props.header}</div>
  );
}

export default PageCardedHeader;
