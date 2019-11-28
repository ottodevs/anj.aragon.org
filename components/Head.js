import Head from 'next/head'

function AnjHead() {
  return (
    <Head>
      <title>Aragon Court</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@AragonProject" />
      <meta name="twitter:description" content="Become a juror for Aragon Court" />
      <meta name="twitter:title" content="Aragon Court" />
      <meta name="twitter:image" content="https://raw.githubusercontent.com/aragon/anj.aragon.org/master/public/twitter-card-icon.png" />
      <meta property="og:title" content="Aragon Court" />
      <meta property="og:description" content="Become a juror for Aragon Court" />
      <meta property="og:url" content="https://court.aragon.org/" />
      <meta property="og:site_name" content="Aragon Court" />
      <meta property="og:image" content="https://raw.githubusercontent.com/aragon/anj.aragon.org/master/public/twitter-card-icon.png" />
      <meta property="og:image:secure_url" content="https://raw.githubusercontent.com/aragon/anj.aragon.org/master/public/twitter-card-icon.png" />
      <meta property="og:image:width" content="300" />
      <meta property="og:image:height" content="300" />

      <meta name="description" content="Become a juror for Aragon Court" />
    </Head>
  )
}

export default AnjHead
