"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function InferenceEngine() {
  const [prompt, setPrompt] = useState("");
  const [logs, setLogs] = useState<string[]>([
    "AURA_TERMINAL_v1.0 initialized...",
    "Ready to compile off-chain LLM pipelines. Awaiting parameters.",
  ]);

  const runInference = () => {
    if (!prompt.trim()) return;
    const currentPrompt = prompt;
    setPrompt("");
    setLogs((prev) => [
      ...prev,
      `~/ > ${currentPrompt}`,
      "Broadcasting inference intent inside TEE...",
      "Inference execution mocked successfully.",
    ]);
  };

  return (
    <div className="max-w-4xl h-[calc(100vh-12rem)] flex flex-col">
      <div className="mb-8 shrink-0">
        <h2 className="text-3xl font-light mb-2">Inference Engine</h2>
        <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">inference_settlement.aleo</p>
      </div>
      <div className="flex-1 flex flex-col border border-white/10 bg-black overflow-hidden relative">
        <div className="flex-1 p-6 overflow-y-auto font-mono text-sm flex flex-col">
          {logs.map((log, i) => (
            <div key={i} className="mb-3 text-neutral-400">{log}</div>
          ))}
        </div>
        <div className="p-4 border-t border-white/10 bg-white/[0.02]">
          <div className="flex items-end space-x-4">
            <div className="text-green-500 font-mono mb-3 ml-2 shrink-0">~/&gt;</div>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  runInference();
                }
              }}
              placeholder="Analyze medical_imaging_1 against anomaly protocol..."
              className="flex-1 bg-transparent border-0 outline-none text-white font-mono text-sm resize-none focus:ring-0"
              rows={2}
            />
            <button
              onClick={runInference}
              disabled={!prompt.trim()}
              className="w-12 h-12 shrink-0 bg-white text-black flex items-center justify-center hover:bg-neutral-300 transition-colors disabled:bg-neutral-800 disabled:text-neutral-500"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
