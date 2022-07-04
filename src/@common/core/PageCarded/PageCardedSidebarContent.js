import { useSelector } from "react-redux";
import Scrollbars from "@common/core/Scrollbars";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { selectContrastMainTheme } from "app/store/common/settingsSlice";
import clsx from "clsx";

function PageCardedSidebarContent(props) {
  const theme = useTheme();
  const contrastTheme = useSelector(selectContrastMainTheme(theme.palette.primary.main));

  return (
    <Scrollbars enable={props.innerScroll}>
      {props.header && (
        <ThemeProvider theme={contrastTheme}>
          <div
            className={clsx(
              "FusePageCarded-sidebarHeader",
              props.variant,
              props.sidebarInner && "FusePageCarded-sidebarHeaderInnerSidebar"
            )}>
            {props.header}
          </div>
        </ThemeProvider>
      )}

      {props.content && <div className="FusePageCarded-sidebarContent">{props.content}</div>}
    </Scrollbars>
  );
}

export default PageCardedSidebarContent;
