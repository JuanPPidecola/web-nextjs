"use client";

import React from "react";

export default function DownloadStores() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/images/AppStore.png"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="/images/PlayStore.png"
          alt=""
        />
      </div>
    </div>
  );
}
