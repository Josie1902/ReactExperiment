import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <nav>
      <h1>logo</h1>
      <ul className="font-semibold">
        <li className="underline hover:bg-blue-500"><Link href="/">Home</Link></li>
        <li className="underline hover:bg-blue-500"><Link href="/login">Login</Link></li>
        <li className="underline hover:bg-blue-500"><Link href="/form">Form</Link></li>
      </ul>
    </nav>
  )
}




