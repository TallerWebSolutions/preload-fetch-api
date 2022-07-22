import Link from 'next/link'
export default function Home() {
  return (
    <div>
      <h3>Hello World example with Preload for API fetching.</h3>
      <br />
      <Link href="/hello/world">
        <a>Normal example</a>
      </Link>
      <span> | </span>
      <Link href="/hello/world-fast">
        <a>Fast example</a>
      </Link>
    </div>
  )
}
