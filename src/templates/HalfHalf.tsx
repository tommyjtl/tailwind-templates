export default function HalfHalf() {
    return (
        // Full-viewport shell — no scrolling on the outer container
        <main className="h-screen overflow-hidden">

            {/* Flex row: two equal halves side by side */}
            <div className="flex h-full">

                {/* ── Left column — centralized card ──────────────────────────────── */}
                {/* grid + place-items-center centers the card both horizontally and vertically */}
                <section className="grid w-1/2 place-items-center bg-white p-8">

                    <div className="w-full max-w-md rounded-2xl border border-gray-200 p-8 shadow-sm">

                        <header className="mb-6">
                            <h1 className="text-2xl font-semibold text-gray-900">Card Title</h1>
                            <p className="mt-1 text-sm text-gray-500">Description goes here.</p>
                        </header>

                        <form className="flex flex-col gap-3">
                            <label htmlFor="half-input" className="sr-only">Input</label>
                            <input
                                id="half-input"
                                type="text"
                                placeholder="Enter something..."
                                className="rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                            >
                                Submit
                            </button>
                        </form>

                    </div>

                </section>
                {/* ── End Left column ─────────────────────────────────────────────── */}

                {/* ── Right column — empty gray area ──────────────────────────────── */}
                <section className="w-1/2 bg-gray-100"></section>
                {/* ── End Right column ────────────────────────────────────────────── */}

            </div>

        </main>
    )
}
