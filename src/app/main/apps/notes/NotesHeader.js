import React from 'react';

import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import FuseSvgIcon from '@common/core/SvgIcon';
import NotesSearch from './NotesSearch';
import { selectVariateDescSize, toggleVariateDescSize } from './store/notesSlice';

function NotesHeader(props) {
  const dispatch = useDispatch();
  const variateDescSize = useSelector(selectVariateDescSize);

  React.useEffect(() => {
    dispatch(toggleVariateDescSize());
  }, [dispatch]);

  return (
    <div className=" flex-col sm:flex-row flex-1 items-center justify-between p-8 sm:p-24 sm:px-32 hidden">
      <div className="flex shrink items-center sm:w-224">
        <Hidden lgUp>
          <IconButton
            onClick={(ev) => props.onSetSidebarOpen(true)}
            aria-label="open left sidebar"
            size="large">
            <FuseSvgIcon>heroicons-outline:menu</FuseSvgIcon>
          </IconButton>
        </Hidden>
      </div>

      <div className="flex flex-1 w-full sm:w-auto items-center justify-end space-x-12">
        <NotesSearch />
      </div>
    </div>
  );
}

export default NotesHeader;
