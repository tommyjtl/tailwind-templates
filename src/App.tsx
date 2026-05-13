import { useState } from 'react'
import CentralizedCard from './templates/CentralizedCard'
import Dashboard from './templates/Dashboard'
import HalfHalf from './templates/HalfHalf'

const templates = [
  { id: 'card', label: 'Centralized Card', component: CentralizedCard },
  { id: 'dashboard', label: 'Dashboard', component: Dashboard },
  { id: 'half', label: 'Half & Half', component: HalfHalf },
] as const

type TemplateId = typeof templates[number]['id']

function App() {
  const [active, setActive] = useState<TemplateId>('card')
  const Template = templates.find(t => t.id === active)!.component

  return (
    <div className="relative">

      {/* Floating tab switcher — fixed to the top-center of the viewport */}
      <nav className="fixed top-4 left-1/2 z-50 flex -translate-x-1/2 gap-1 rounded-full border border-gray-200 bg-white px-2 py-1 shadow-md">
        {templates.map(t => (
          <button
            key={t.id}
            onClick={() => setActive(t.id)}
            className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${active === t.id
              ? 'bg-gray-900 text-white'
              : 'text-gray-600 hover:bg-gray-100'
              }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <Template />

    </div>
  )
}

export default App

