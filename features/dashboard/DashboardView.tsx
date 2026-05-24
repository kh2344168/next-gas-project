export default function DashboardView() {
  return (
    <main className="min-h-screen bg-slate-100">
      <div className="flex">
        <aside className="min-h-screen w-64 bg-slate-900 text-white">
          <div className="p-6">
            <h2 className="text-xl font-bold">Gas Admin</h2>
          </div>
        </aside>

        <section className="flex-1 p-6">
          <h1 className="text-3xl font-bold text-slate-900">Gas Dashboard</h1>
          <p className="mt-2 text-slate-600">
            Welcome to your gas management dashboard.
          </p>
        </section>
      </div>
    </main>
  );
}