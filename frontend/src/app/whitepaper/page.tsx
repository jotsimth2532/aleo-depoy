"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Brain,
  Database,
  Shield,
  Terminal,
  Ticket,
  Coins,
  ExternalLink,
  ChevronRight,
  Workflow,
} from "lucide-react";

const contracts = [
  {
    title: "Profile Registry",
    programId: "profile_registry.aleo",
    desc: "Zero-knowledge identity commitments for role, region, and policy metadata without public disclosure.",
    href: "https://api.explorer.provable.com/v1/testnet/program/profile_registry.aleo",
    icon: Shield,
  },
  {
    title: "Data Market",
    programId: "data_market.aleo",
    desc: "Confidential dataset listing layer with price and quota controls for private AI data exchange.",
    href: "https://api.explorer.provable.com/v1/testnet/program/data_market.aleo",
    icon: Database,
  },
  {
    title: "Access Ticketing",
    programId: "access_ticketing.aleo",
    desc: "Proof-backed access token issuance enabling controlled data and inference permissions.",
    href: "https://api.explorer.provable.com/v1/testnet/program/access_ticketing.aleo",
    icon: Ticket,
  },
  {
    title: "Inference Settlement",
    programId: "inference_settlement.aleo",
    desc: "Validation and settlement of off-chain inference with on-chain commitment checks.",
    href: "https://api.explorer.provable.com/v1/testnet/program/inference_settlement.aleo",
    icon: Terminal,
  },
  {
    title: "Payment Router",
    programId: "payment_router.aleo",
    desc: "Escrow and payout routing for provider, node runner, and treasury settlement flows.",
    href: "https://api.explorer.provable.com/v1/testnet/program/payment_router.aleo",
    icon: Coins,
  },
];

const ContractTicker = () => (
  <div className="flex items-center space-x-10 px-6">
    {contracts.map((c) => (
      <div key={c.programId} className="flex items-center space-x-10">
        <span className="text-lg md:text-xl font-mono text-neutral-300">{c.programId}</span>
        <span className="w-2 h-2 rounded-full bg-white/30"></span>
      </div>
    ))}
  </div>
);

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans overflow-x-hidden">
      {/* Header */}
      <header className="px-8 py-6 border-b border-white/10 sticky top-0 bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-[1000px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-mono tracking-widest uppercase">Back to Home</span>
          </Link>
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 border border-white flex items-center justify-center rotate-45">
              <Brain className="w-3 h-3 -rotate-45" />
            </div>
          </div>
        </div>
      </header>

      <div className="w-full overflow-hidden border-b border-white/5 bg-white/5 py-4 flex relative z-10 hidden md:flex">
        <motion.div 
          animate={{ x: [0, -2000] }} 
          transition={{ repeat: Infinity, ease: "linear", duration: 34 }}
          className="flex whitespace-nowrap"
        >
          <ContractTicker />
          <ContractTicker />
          <ContractTicker />
          <ContractTicker />
        </motion.div>
      </div>

      <main className="max-w-[1000px] mx-auto px-6 pt-16 md:pt-24 pb-32">
        <div className="mb-16">
          <div className="inline-flex items-center space-x-2 border border-white/10 rounded-full px-4 py-1.5 text-xs tracking-widest uppercase mb-8 bg-white/5">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-neutral-300">Protocol Whitepaper</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">Aura Protocol: <br/><span className="text-neutral-500">The Technical Whitepaper</span></h1>
          <div className="flex items-center space-x-4 font-mono text-sm text-neutral-500 pb-8 border-b border-white/10 overflow-x-auto whitespace-nowrap">
            <span>Version 1.0</span>
            <span>|</span>
            <span>March 2026</span>
            <span>|</span>
            <span>Live on Aleo Testnet V3</span>
          </div>
        </div>

        <article className="max-w-none font-light text-neutral-300">
          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">1. Abstract</h2>
            <p className="leading-relaxed mb-6 text-lg">
              The rapid expansion of AI requires proprietary datasets, trusted compute, and verifiable payments. Traditional data marketplaces expose too much operational metadata and force participants to trust centralized operators.
            </p>
            <p className="leading-relaxed mb-6 text-lg">
              Aura Protocol is a modular zero-knowledge marketplace built on Aleo where dataset providers, model runners, and consumers coordinate through cryptographic commitments. Data stays private, access rights are provable, and settlement is trust-minimized.
            </p>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-8 tracking-tight">2. Working Architecture</h2>
            <p className="leading-relaxed mb-10 text-lg">
              The protocol executes in five deterministic stages. This operational architecture defines how value and proofs move from listing to final payout.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
              {[
                "Identity Commit",
                "Dataset Listing",
                "Access Ticket",
                "Inference Settle",
                "Escrow Release",
              ].map((step, i) => (
                <div key={step} className="border border-white/10 bg-white/[0.02] p-4 text-center">
                  <p className="font-mono text-xs text-neutral-500 mb-2">STEP {i + 1}</p>
                  <p className="text-sm text-white">{step}</p>
                </div>
              ))}
            </div>

            <div className="border border-white/10 bg-black p-5 flex items-center gap-3 text-sm text-neutral-300 mb-10">
              <Workflow className="w-4 h-4 text-neutral-500" />
              End-to-end flow: profile_registry &gt; data_market &gt; access_ticketing &gt; inference_settlement &gt; payment_router
            </div>

            <h3 className="text-2xl font-semibold text-white mb-6">Deployed Smart Contracts (A-Z)</h3>
            <div className="overflow-x-auto border border-white/10 mb-10">
              <table className="w-full min-w-[760px] text-sm">
                <thead className="bg-white/5 text-neutral-300 font-mono uppercase text-xs tracking-wider">
                  <tr>
                    <th className="text-left px-4 py-3">Contract</th>
                    <th className="text-left px-4 py-3">Program ID</th>
                    <th className="text-left px-4 py-3">Explorer Link</th>
                  </tr>
                </thead>
                <tbody>
                  {[...contracts]
                    .sort((a, b) => a.programId.localeCompare(b.programId))
                    .map((c) => (
                      <tr key={c.programId} className="border-t border-white/10">
                        <td className="px-4 py-3 text-white">{c.title}</td>
                        <td className="px-4 py-3 font-mono text-neutral-400">{c.programId}</td>
                        <td className="px-4 py-3">
                          <a href={c.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white">
                            Open
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-2xl font-semibold text-white mb-6">Contracts Carousel</h3>
            <div className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
              {contracts.map((c) => (
                <div key={c.programId} className="snap-start shrink-0 w-[320px] border border-white/10 bg-white/[0.02] p-6">
                  <div className="flex items-center justify-between mb-4">
                    <c.icon className="w-5 h-5 text-neutral-300" />
                    <a href={c.href} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <h4 className="text-lg text-white mb-2">{c.title}</h4>
                  <p className="text-xs font-mono text-neutral-500 mb-4">{c.programId}</p>
                  <p className="text-sm text-neutral-300 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="space-y-6">
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Shield className="w-6 h-6 text-white" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-white m-0">2.1 Profile Registry</h3>
                  </div>
                  <a href="https://api.explorer.provable.com/v1/testnet/program/profile_registry.aleo" target="_blank" rel="noreferrer" className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors bg-black px-4 py-2 border border-white/10">
                    <span>profile_registry.aleo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="leading-relaxed">Handles Zero-Knowledge identities. Entities commit to their organizational profiles through on-chain Pedersen hashes. Actors utilize this layer to statically prove their eligibility, preventing sybil attacks while guaranteeing no wallet addresses or personal metadata are publicly stored.</p>
              </div>
              
              {/* Contract 2 */}
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Database className="w-6 h-6 text-white" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-white m-0">2.2 Data Market</h3>
                  </div>
                  <a href="https://api.explorer.provable.com/v1/testnet/program/data_market.aleo" target="_blank" rel="noreferrer" className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors bg-black px-4 py-2 border border-white/10">
                    <span>data_market.aleo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="leading-relaxed">The global repository of off-chain encrypted data identifiers, dynamically managing access quotas and base Aleo-credit pricing models. Every listing operates confidentially.</p>
              </div>

              {/* Contract 3 */}
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Ticket className="w-6 h-6 text-white" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-white m-0">2.3 Access Ticketing</h3>
                  </div>
                  <a href="https://api.explorer.provable.com/v1/testnet/program/access_ticketing.aleo" target="_blank" rel="noreferrer" className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors bg-black px-4 py-2 border border-white/10">
                    <span>access_ticketing.aleo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="leading-relaxed">Orchestrates single-use or perpetual tokenized authorizations. Inference requests are impossible unless the requester is in mathematical possession of the encrypted ticket minted out of the network.</p>
              </div>

              {/* Contract 4 */}
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Terminal className="w-6 h-6 text-white" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-white m-0">2.4 Inference Settlement</h3>
                  </div>
                  <a href="https://api.explorer.provable.com/v1/testnet/program/inference_settlement.aleo" target="_blank" rel="noreferrer" className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors bg-black px-4 py-2 border border-white/10">
                    <span>inference_settlement.aleo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="leading-relaxed">Cryptographically maps inference logic requests to validation pipelines. The node runner submits a zkSNARK of the AI execution, and if successfully validated, triggers the state-transition closing the settlement.</p>
              </div>

              {/* Contract 5 */}
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:border-white/30 transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Coins className="w-6 h-6 text-white" strokeWidth={1.5} />
                    <h3 className="text-xl font-semibold text-white m-0">2.5 Payment Escrow</h3>
                  </div>
                  <a href="https://api.explorer.provable.com/v1/testnet/program/payment_router.aleo" target="_blank" rel="noreferrer" className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors bg-black px-4 py-2 border border-white/10">
                    <span>payment_router.aleo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="leading-relaxed">Trustless routing and automated liquidity. Escrow holds AI-consumer funds pending a verified payload delivery, effectively omitting platform risk for both the data provider and node runner.</p>
              </div>

            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">3. Network Economics & Settlement</h2>
            <p className="leading-relaxed mb-6 text-lg">
              Because Aura employs absolute ZK proof methodologies, validators are unable to arbitrarily freeze transactions or selectively review payload models. Upon the <code>inference_settlement</code> contract accepting a verified state transition, <strong>Payment Escrow</strong> systematically unpacks Aleo Credits.
            </p>
            <ul className="list-disc pl-6 space-y-4 marker:text-neutral-500 font-mono text-sm leading-relaxed tracking-wide">
              <li><span className="text-white">NODE RUNNER:</span> Consumes 45% of total payload fee for computational delivery.</li>
              <li><span className="text-white">DATA PROVIDER:</span> Consumes 50% of total payload fee for private network injection.</li>
              <li><span className="text-white">AURA TREASURY:</span> 5% flat mapping cost for recursive execution funding.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">4. Conclusion</h2>
            <p className="leading-relaxed text-lg">
              Aura unlocks the fundamental bottleneck in decentralized enterprise artificial intelligence. By intertwining the sheer mathematical power of Aleo with carefully tuned game theoretics across an elegant suite of ZK smart contracts, Aura bridges the gap to a fully confidential AI operating system. 
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">5. Quick Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link href="/" className="border border-white/10 p-5 bg-white/[0.02] hover:border-white/30 transition-colors flex items-center justify-between">
                <span>Back to Main UI</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a href="https://api.explorer.provable.com/v1/testnet" target="_blank" rel="noreferrer" className="border border-white/10 p-5 bg-white/[0.02] hover:border-white/30 transition-colors flex items-center justify-between">
                <span>Provable Testnet API</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>
        </article>

        <div className="mt-32 pt-16 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-sm font-mono text-neutral-500">
          <p>END OF SPECIFICATION_DOC</p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-white transition-colors mt-4 sm:mt-0"
          >
            [ RETURN TO TOP ]
          </button>
        </div>
      </main>
    </div>
  );
}
