// import { loginIcon } from "@excalidraw/excalidraw/components/icons"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { POINTER_EVENTS } from "@excalidraw/common"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { useI18n } from "@excalidraw/excalidraw/i18n"; // KAIR0S_ESLINT_CLEANUP - Unused
import { WelcomeScreen } from "@excalidraw/excalidraw/index";
import React from "react";

// import { isExcalidrawPlusSignedUser } from "../app_constants"; // KAIR0S_ESLINT_CLEANUP - Unused

export const AppWelcomeScreen: React.FC<{
  onCollabDialogOpen: () => any;
  isCollabEnabled: boolean;
}> = React.memo((props) => {
  // const { t } = useI18n(); // KAIR0S_ESLINT_CLEANUP - Unused
  let headingContent;

  // KAIR0S_WELCOME_MESSAGE_HERE
  // if (isExcalidrawPlusSignedUser) {
  //   headingContent = t("welcomeScreen.app.center_heading_plus")
  //     .split(/(Excalidraw\+)/)
  //     .map((bit, idx) => {
  //       if (bit === "Excalidraw+") {
  //         return (
  //           <a
  //             style={{ pointerEvents: POINTER_EVENTS.inheritFromUI }}
  //             href={`${
  //               import.meta.env.VITE_APP_PLUS_APP
  //             }?utm_source=excalidraw&utm_medium=app&utm_content=welcomeScreenSignedInUser`}
  //             key={idx}
  //           >
  //             Excalidraw+
  //           </a>
  //         );
  //       }
  //       return bit;
  //     });
  // } else {
  //   headingContent = t("welcomeScreen.app.center_heading");
  // }
  headingContent = "Welcome to Kair0sDraw"; // KAIR0S_CUSTOM_HEADING

  return (
    <WelcomeScreen>
      {/* KAIR0S_WELCOME_HINTS_HERE */}
      {/* <WelcomeScreen.Hints.MenuHint>
        {t("welcomeScreen.app.menuHint")}
      </WelcomeScreen.Hints.MenuHint>
      <WelcomeScreen.Hints.ToolbarHint />
      <WelcomeScreen.Hints.HelpHint /> */}
      <WelcomeScreen.Center>
        <WelcomeScreen.Center.Logo />
        <WelcomeScreen.Center.Heading>
          {headingContent}
        </WelcomeScreen.Center.Heading>
        <WelcomeScreen.Center.Menu>
          <WelcomeScreen.Center.MenuItemLoadScene />
          <WelcomeScreen.Center.MenuItemHelp />
          {props.isCollabEnabled && (
            <WelcomeScreen.Center.MenuItemLiveCollaborationTrigger
              onSelect={() => props.onCollabDialogOpen()}
            />
          )}
          {/* KAIR0S_SIGN_UP_LINK_HERE */}
          {/* {!isExcalidrawPlusSignedUser && (
            <WelcomeScreen.Center.MenuItemLink
              href={`${
                import.meta.env.VITE_APP_PLUS_LP
              }/plus?utm_source=excalidraw&utm_medium=app&utm_content=welcomeScreenGuest`}
              shortcut={null}
              icon={loginIcon}
            >
              Sign up
            </WelcomeScreen.Center.MenuItemLink>
          )} */}
        </WelcomeScreen.Center.Menu>
      </WelcomeScreen.Center>
    </WelcomeScreen>
  );
});
