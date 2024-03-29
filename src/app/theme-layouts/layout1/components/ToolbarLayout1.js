import { ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import clsx from 'clsx';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectFuseCurrentLayoutConfig, selectToolbarTheme } from 'app/store/common/settingsSlice';
import { selectFuseNavbar } from 'app/store/common/navbarSlice';
import UserMenu from '../../shared-components/UserMenu';

function ToolbarLayout1(props) {
  const config = useSelector(selectFuseCurrentLayoutConfig);
  const navbar = useSelector(selectFuseNavbar);
  const toolbarTheme = useSelector(selectToolbarTheme);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx('flex relative z-20 shadow', props.className)}
        color="default"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? toolbarTheme.palette.background.paper
              : toolbarTheme.palette.background.default,
        }}
        position="static">
        <Toolbar className="p-0 min-h-48 md:min-h-64">
          <div className="flex flex-1 px-16 text-lg font-medium">
            <Link className="no-underline" to="/">
              <span className="no-underline">Home</span>
            </Link>
          </div>

          <div className="flex items-center px-8 h-full overflow-x-auto">
            <UserMenu />
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout1);
