import Head from 'next/head'

function Layout(props) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-700 h-screen">
        <nav className="bg-yellow-300">
          <ul className="container mx-auto p-2 flex">
            <li>Suertle Binance Tool</li>
          </ul>
        </nav>
        <main className="container mx-auto text-white p-2">
          {props.children}
        </main>
        {/*<footer className="sticky bottom-0">
          Presented by Suertle
        </footer>*/}
      </div>
    < />
  )
}

export default Layout