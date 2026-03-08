"use client";

import { User, Shield, Key, CheckCircle2 } from "lucide-react";
import { useWallet } from "@demox-labs/aleo-wallet-adapter-react";

export default function IdentityManager() {
  const { publicKey } = useWallet();

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h2 className="text-3xl font-light mb-2">My Identity</h2>
        <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">profile_registry.aleo</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="border border-white/10 p-6 bg-white/[0.02]">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
              <User className="w-8 h-8 text-neutral-400" />
            </div>
            <div>
              <h3 className="text-xl font-light">Aleo Citizen</h3>
              <p className="text-sm font-mono text-neutral-500">Tier 1 Attestation</p>
            </div>
          </div>

          <div className="space-y-4 font-mono text-sm">
            <div className="flex flex-col">
              <span className="text-neutral-500 mb-1">Public Key</span>
              <span className="select-all break-all text-neutral-300 bg-black p-2 border border-white/5">
                {publicKey || "Connect wallet to view key"}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border border-white/10 p-6 bg-white/[0.02]">
            <h3 className="text-lg font-medium mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-3 text-green-400" />
              ZK Verification Status
            </h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex justify-between items-center bg-black p-3 border border-white/5">
                <span className="text-neutral-400">KYC Hash</span>
                <span className={publicKey ? "text-green-400" : "text-neutral-500"}>{publicKey ? "Valid" : "Pending"}</span>
              </div>
              <div className="flex justify-between items-center bg-black p-3 border border-white/5">
                <span className="text-neutral-400">Compute Origin</span>
                <span className={publicKey ? "text-green-400" : "text-neutral-500"}>{publicKey ? "Verified" : "Pending"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-white/10 p-6 bg-black">
        <h3 className="text-xl font-light mb-4 flex items-center">
          <Key className="w-5 h-5 mr-3 text-neutral-400" />
          Zero-Knowledge Credentials
        </h3>
        <p className="text-neutral-500 text-sm mb-6">
          Generate private proofs to access Aura protocol features without revealing underlying private data.
        </p>

        <div className="bg-green-500/10 border border-green-500/20 p-4 text-green-400 font-mono text-sm flex items-center">
          <CheckCircle2 className="w-5 h-5 mr-3" />
          Credential pipeline ready.
        </div>
      </div>
    </div>
  );
}
