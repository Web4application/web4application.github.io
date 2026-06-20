"use client";

import { useEffect } from "react";
import { bootWeb4 } from "@/core/bootstrap";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Boot the Web4 Kernel once at system start
    bootWeb4();
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Web4 OS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Optional: system theme tuning */}
        <meta name="theme-color" content="#0a0a0f" />
      </head>

      <body className="web4-body">
        {/* SYSTEM ROOT */}
        <div id="web4-root">
          
          {/* OS LAYER (desktop, windows, widgets render here) */}
          <div id="desktop-layer">
            {children}
          </div>

          {/* GLOBAL SYSTEM OVERLAYS */}
          <div id="overlay-layer"></div>
          <div id="modal-layer"></div>
          <div id="cursor-layer"></div>

        </div>
      </body>
    </html>
  );
}
