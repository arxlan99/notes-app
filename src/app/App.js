import "@mock-api";
import BrowserRouter from "src/@common/core/BrowserRouter";
import CommonLayout from "@common/core/CommonLayout";
import CommonTheme from "@common/core/CommonTheme";
import { SnackbarProvider } from "notistack";
import { useSelector } from "react-redux";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { selectCurrentLanguageDirection } from "app/store/i18nSlice";
import { selectUser } from "app/store/userSlice";
import themeLayouts from "app/theme-layouts/themeLayouts";
import { selectMainTheme } from "app/store/common/settingsSlice";
import Authorization from "@common/core/Authorization";
import settingsConfig from "app/configs/settingsConfig";
import withAppProviders from "./withAppProviders";
import { AuthProvider } from "./auth/AuthContext";
import "./index.css";

const emotionCacheOptions = {
  rtl: {
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
    insertionPoint: document.getElementById("emotion-insertion-point"),
  },
  ltr: {
    key: "muiltr",
    stylisPlugins: [],
    insertionPoint: document.getElementById("emotion-insertion-point"),
  },
};

const App = () => {
  const user = useSelector(selectUser);
  const langDirection = useSelector(selectCurrentLanguageDirection);
  const mainTheme = useSelector(selectMainTheme);

  return (
    <CacheProvider value={createCache(emotionCacheOptions[langDirection])}>
      <CommonTheme theme={mainTheme} direction={langDirection}>
        <AuthProvider>
          <BrowserRouter>
            <Authorization userRole={user.role} loginRedirectUrl={settingsConfig.loginRedirectUrl}>
              <SnackbarProvider
                maxSnack={5}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                classes={{
                  containerRoot: "bottom-0 right-0 mb-52 md:mb-68 mr-8 lg:mr-80 z-99",
                }}>
                <CommonLayout layouts={themeLayouts} />
              </SnackbarProvider>
            </Authorization>
          </BrowserRouter>
        </AuthProvider>
      </CommonTheme>
    </CacheProvider>
  );
};

export default withAppProviders(App)();
