import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import Head from "next/head"

export default function About() {
  const [data, setData] = useState([])
  const apiURL = "/api/news?fast=true"

  useEffect(() => {
    async function getData() {
      try {
        console.time("getData")
        fetch(apiURL, {
          method: "GET",
          credentials: "include",
          mode: "no-cors",
        }).then((res) => {
          console.timeEnd("getData")
          res.json().then((data) => {
            setData(data)
          })
        })
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [apiURL])

  return (
    <div>
      <Head>
        <link rel="preload" href={apiURL} as="fetch" />
      </Head>
      <h1>{data ? data.title : "loading..."}</h1>

      <Link href="/">
        <a> &larr; Back home</a>
      </Link>
      <span> | </span>
      <Link href="/hello/world">
        <a> &rarr; Normal example</a>
      </Link>
    </div>
  )
}
