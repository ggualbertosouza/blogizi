import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { Provider } from '@/components/providers/provider'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500', '700'] })

export const metadata: Metadata = {
  title: 'BlogIZI',
  description: 'Blog voltado para compartilhamento de conhecimentos sobre nextjs, react, typescript e outras stacks do desenvolvimento web.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={roboto.className}>
        <Provider>
        {children}
        </Provider>
        </body>
    </html>
  )
}
