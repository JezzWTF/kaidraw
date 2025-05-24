import { Footer } from "@excalidraw/excalidraw/index";
import React from "react";

// import { isExcalidrawPlusSignedUser } from "../app_constants"; // KAIR0S_ESLINT_CLEANUP - Unused

import { DebugFooter, isVisualDebuggerEnabled } from "./DebugCanvas";
// import { EncryptedIcon } from "./EncryptedIcon"; // KAIR0S_ESLINT_CLEANUP - Unused
// import { ExcalidrawPlusAppLink } from "./ExcalidrawPlusAppLink"; // KAIR0S_ESLINT_CLEANUP - Unused

export const AppFooter = React.memo(
  ({ onChange }: { onChange: () => void }) => {
    return (
      <Footer>
        <div
          style={{
            display: "flex",
            gap: ".5rem",
            alignItems: "center",
          }}
        >
          {isVisualDebuggerEnabled() && <DebugFooter onChange={onChange} />}
          {/* KAIR0S_FOOTER_CONTENT_HERE */}
          {/* {isExcalidrawPlusSignedUser ? (
            <ExcalidrawPlusAppLink />
          ) : (
            <EncryptedIcon />
          )} */}
        </div>
      </Footer>
    );
  },
);
