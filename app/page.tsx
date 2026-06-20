"use client";

import { useEffect, useState } from "react";
import { kernel } from "@/core/kernel";

export default function Page() {
  const [systemStatus, setSystemStatus] = useState("booting...");
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    // SYSTEM EVENTS

    kernel.on("system:ready", () => {
      setSystemStatus("online");
      pushLog("System ready");
    });

    kernel.on("plugin:loaded", (e: any) => {
      pushLog(`Plugin loaded: ${e.detail.name}`);
    });

    kernel.on("ai:response", () => {
      pushLog("AI response received");
    });

    kernel.on("news:update", () => {
      pushLog("News feed updated");
    });

    // BOOT SIGNAL (optional safety trigger)
    kernel.emit("system:check");

    return () => {
      pushLog("UI mounted");
    };
  }, []);

  const pushLog = (msg: string) => {
    setLogs((prev) => [msg, ...prev.slice(0, 10)]);
  };

  return (
    <main className="web4-desktop">
      {/* HEADER / SYSTEM STATUS */}
      <header className="web4-header">
        <h1>WEB4 OS</h1>
        <span className={`status ${systemStatus}`}>
          {systemStatus.toUpperCase()}
        </span>
      </header>

      {/* CONTROL PANEL */}
      <section className="web4-controls">
        <button onClick={() => kernel.emit("news:fetch")}>
          Sync News
        </button>

        <button
          onClick={() =>
            kernel.emit("ai:query", "Explain Web4 OS architecture")
          }
        >
          Ask AI Kernel
        </button>

        <button
          onClick={() =>
            kernel.emit("window:create", {
              content: "New Web4 Window Instance"
            })
          }
        >
          Open Window
        </button>
      </section>

      {/* DASHBOARD */}
      <section className="web4-grid">
        <div className="panel">
          <h3>System Status</h3>
          <p>{systemStatus}</p>
        </div>

        <div className="panel">
          <h3>Live Kernel Logs</h3>
          <ul>
            {logs.map((log, i) => (
              <li key={i}>{log}</li>
            ))}
          </ul>
        </div>

        <div className="panel">
          <h3>AI / News / Plugins</h3>
          <p>Event-driven modules active via kernel bus.</p>
        </div>
      </section>
    </main>
  );
}
