"use client";
import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

function fbLive() {
  return (
    <FacebookProvider appId="680742153917072" chatSupport>
      <CustomChat pageId="111835310434029" minimized={true} />
    </FacebookProvider>
  );
}

export default fbLive;
