"use client";

import { Database, Plus } from "lucide-react";
import { useState } from "react";

export default function MarketHub() {
  const [isListing, setIsListing] = useState(false);

  const listDataset = () => {
    setIsListing(true);
    setTimeout(() => setIsListing(false), 1200);
  };

  return (
    <div className="max-w-5xl">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-light mb-2">Confidential Data Market</h2>
          <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">data_market.aleo</p>
        </div>
        <button
          onClick={listDataset}
          disabled={isListing}
          className="hidden md:flex items-center space-x-2 border border-white px-4 py-2 hover:bg-white hover:text-black disabled:bg-neutral-800 disabled:text-neutral-500 disabled:border-transparent transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span className="font-mono text-xs uppercase">{isListing ? "Listing..." : "List Dataset"}</span>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {[1, 2, 3].map((i) => {
          const price = 15 * i;
          return (
            <div key={i} className="flex items-center justify-between p-6 border border-white/10 bg-black hover:border-white/30 transition-colors">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 border border-white/10 flex items-center justify-center bg-white/[0.02]">
                  <Database className="w-5 h-5 text-neutral-400" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold">MEDICAL_IMAGING_SET_{i}</h3>
                  <p className="text-xs text-neutral-500 font-mono mt-1">Hash: 0x8f2...{i}9a | Quota: {40 - i * 10}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right hidden md:block">
                  <div className="font-mono">{price} ALEO</div>
                  <div className="text-[10px] text-neutral-500 uppercase">Base Price</div>
                </div>
                <button className="bg-white/5 border border-white/20 hover:bg-white hover:text-black px-6 py-3 font-mono text-xs uppercase transition-colors">
                  Purchase
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
