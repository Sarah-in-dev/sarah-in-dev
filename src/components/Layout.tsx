import Head from 'next/head'
import Link from 'next/link'
import { ReactNode } from 'react'

export default function Layout({ children, title = 'Sarah Davidson – In Development' }: { children: ReactNode, title?: string }) {
  return (
    <div className="bg-[#f9f8f5] text-gray-900 font-serif min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Sarah Davidson's personal site – projects in narrative, science, and technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="w-full px-4 py-6 border-b border-gray-200 bg-white">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold"><Link href="/">Sarah In Dev</Link></h1>
          <nav className="space-x-4 text-sm">
            <Link href="/">Home</Link>
            <Link href="/novel">Novel</Link>
            <Link href="/research">Research</Link>
            <Link href="/consulting">Consulting</Link>
            <Link href="/predictive-rx">PredictiveRX</Link>
            <Link href="/music">Music</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="px-4 py-10 max-w-3xl mx-auto">
        {children}
      </main>
      <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-200">
        © {new Date().getFullYear()} Sarah Davidson. All rights reserved.
      </footer>
    </div>
  )
}
