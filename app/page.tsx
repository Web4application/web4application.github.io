"use client";

import { useEffect, useState } from "react";
import { kernel } from "@/core/kernel";

export default function Home() {
  const [status, setStatus] = useState("booting...");
  const [aiResponse, setAiResponse] = useState<string>("");

  useEffect(() => {
    // listen to system events
    kernel.on("system:ready", () => {
      setStatus("online");
    });

    kernel.on("ai:response", (e: any) => {
      setAiResponse(JSON.stringify(e.detail));
    });

    kernel.on("news:update", (e: any) => {
      console.log("News updated:", e.detail);
    });

    // trigger system-level events
    kernel.emit("system:check");
  }, []);

  return (
    <div className="web4-desktop">
      <h1>Web4 OS</h1>

      <p>Status: {status}</p>

      <button onClick={() => kernel.emit("news:fetch")}>
        Sync News Feed
      </button>

      <button
        onClick={() =>
          kernel.emit("ai:query", "Explain Web4 system architecture")
        }
      >
        Ask AI Kernel
      </button>

      <pre style={{ marginTop: 20 }}>
        {aiResponse}
      </pre>
    </div>
  );
}
