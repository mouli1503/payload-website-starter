import React from 'react'

import './preview.css'

export const metadata = { title: 'App preview' }

// Bare root layout: the admin's Live Preview frames these pages at phone size.
export default function AppPreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
