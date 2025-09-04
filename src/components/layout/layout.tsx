// src/components/Layout.tsx
import Header from "@components/header/header"
import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Header />
      <main className="flex-1 mx-auto max-w-7xl p-4">
        {children}
      </main>
    </div>
  )
}
