export default function Dashboard() {
    return (
        // Full-viewport shell — no scrolling on the outer container
        <main className="h-screen overflow-hidden">

            {/* Flex row: sidebar sits on the left, main content fills the rest */}
            <div className="flex h-full">

                {/* ── Sidebar ─────────────────────────────────────────────────────── */}
                {/* shrink-0 prevents the sidebar from collapsing when content is wide */}
                <aside className="flex w-64 shrink-0 flex-col bg-gray-900 text-white">

                    {/* Logo strip — same height as the top header for visual alignment */}
                    <div className="flex h-16 shrink-0 items-center border-b border-gray-700 px-6">
                        <span className="text-lg font-semibold">Logo</span>
                    </div>

                    {/* Nav links — flex-1 pushes any footer content to the bottom */}
                    <nav className="flex flex-1 flex-col gap-1 p-4">
                        <a href="#" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800">Dashboard</a>
                        <a href="#" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800">Projects</a>
                        <a href="#" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800">Team</a>
                        <a href="#" className="rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-800">Settings</a>
                    </nav>

                </aside>
                {/* ── End Sidebar ─────────────────────────────────────────────────── */}

                {/* ── Main content column ─────────────────────────────────────────── */}
                {/* min-w-0 lets this column shrink properly inside the flex parent   */}
                <section className="flex min-w-0 flex-1 flex-col">

                    {/* Top header — fixed height, never grows or shrinks */}
                    <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 px-6">
                        <h1 className="text-lg font-semibold text-gray-900">Page Title</h1>
                        {/* Avatar placeholder */}
                        <div className="h-8 w-8 rounded-full bg-gray-300"></div>
                    </header>

                    {/* Scrollable body — takes all remaining height */}
                    <div className="flex-1 overflow-y-auto p-6">
                        <div className="grid grid-cols-3 gap-4">
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Card 1</div>
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Card 2</div>
                            <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">Card 3</div>
                        </div>
                    </div>

                </section>
                {/* ── End Main content column ─────────────────────────────────────── */}

            </div>

        </main>
    )
}
