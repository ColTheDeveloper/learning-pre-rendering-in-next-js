import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Next JS pre-rendering</h1>
      <Link href="/users">Users</Link>
      <Link href="/posts">Posts</Link>
    </>
  )
}
