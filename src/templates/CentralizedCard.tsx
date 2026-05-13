export default function CentralizedCard() {
    return (
        <main className="min-h-screen grid place-items-center bg-white">

            <section className="w-full max-w-xl rounded-2xl border border-gray-200 p-8 shadow-sm">

                <header className="mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">Card Title</h1>
                    <p className="mt-1 text-sm text-gray-500">Card subtitle or description goes here.</p>
                </header>

                {/* Main input row — stacks vertically on mobile, switches to row on sm+ */}
                <form className="flex flex-col gap-3 sm:flex-row">
                    <label htmlFor="card-input" className="sr-only">Item</label>
                    <input
                        id="card-input"
                        type="text"
                        placeholder="Enter something..."
                        className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                    >
                        Add
                    </button>
                </form>

                {/* Content list area */}
                <section className="mt-6">
                    <ul className="flex flex-col gap-2">
                        <li className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                            Item one
                        </li>
                        <li className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                            Item two
                        </li>
                        <li className="rounded-lg border border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-700">
                            Item three
                        </li>
                    </ul>
                </section>

            </section>

        </main>
    )
}
