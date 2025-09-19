import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Site em Construção - VDOM Digital',
  description: 'Nosso site está em construção. Voltamos em breve com novidades incríveis!',
}

export default function UnderConstructionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
