export default function DashboardOverview() {
  return (
    <div className="max-w-5xl">
      <div className="mb-12">
        <h2 className="text-3xl font-light mb-2">System Overview</h2>
        <p className="font-mono text-xs text-neutral-500 uppercase tracking-widest">Confidential compute operations at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-8 border border-white/10 bg-black">
          <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">Network Status</h3>
          <div className="text-4xl font-light">Aleo Testnet</div>
          <div className="mt-4 inline-flex items-center space-x-2 text-xs text-green-400 font-mono">
            <span>PING 42ms</span>
          </div>
        </div>

        <div className="p-8 border border-white/10 bg-black">
          <h3 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">Escrow Balance</h3>
          <div className="text-4xl font-light">-- Credits</div>
          <div className="mt-4 text-xs text-neutral-600 font-mono uppercase">Connect wallet to index on-chain state</div>
        </div>
      </div>

      <div className="p-8 border border-white/10 bg-white/[0.02]">
        <h3 className="text-lg font-semibold mb-2">Start Flow</h3>
        <p className="text-sm text-neutral-400 font-light mb-4">1. Register identity 2. List or buy data 3. Run inference 4. Settle payments.</p>
        <a href="/dashboard/identity" className="inline-block bg-white text-black px-6 py-2 text-xs font-mono uppercase tracking-widest hover:bg-neutral-200 transition-colors">
          Open Identity Console
        </a>
      </div>
    </div>
  );
}
