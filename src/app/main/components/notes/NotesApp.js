import withReducer from 'app/store/withReducer';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import FusePageCarded from '@common/core/PageCarded';
import useThemeMediaQuery from 'src/@common/hooks/useThemeMediaQuery';
import LabelsDialog from './dialogs/labels/LabelsDialog';
import NoteDialog from './dialogs/note/NoteDialog';
import NewNote from './NewNote';
import NoteList from './NoteList';
import NotesHeader from './NotesHeader';
import NotesSidebarContent from './NotesSidebarContent';
import reducer from './store';
import { getLabels } from './store/labelsSlice';
import { getNotes } from './store/notesSlice';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {},
  '& .FusePageCarded-sidebar': {},
  '& .FusePageCarded-leftSidebar': {},
}));

function NotesApp(props) {
  const dispatch = useDispatch();
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(!isMobile);
  const routeParams = useParams();

  useEffect(() => {
    dispatch(getNotes(routeParams));
    dispatch(getLabels());
  }, [dispatch, routeParams]);

  return (
    <>
      <Root
        header={<NotesHeader onSetSidebarOpen={setLeftSidebarOpen} />}
        content={
          <div className="flex flex-col w-full items-center p-24">
            <Box className="w-full p-12 flex flex-col items-center">
              <NewNote />
              <NoteList />
            </Box>
            <NoteDialog />
            <LabelsDialog />
          </div>
        }
        leftSidebarOpen={leftSidebarOpen}
        leftSidebarOnClose={() => {
          setLeftSidebarOpen(false);
        }}
        leftSidebarContent={<NotesSidebarContent />}
        scroll={isMobile ? 'normal' : 'content'}
      />
    </>
  );
}

export default withReducer('notesApp', reducer)(NotesApp);
