const envVars = {
  CHAIN_ID: [process.env.CHAIN_ID, '1'],
  FORTMATIC_API_KEY: [process.env.FORTMATIC_API_KEY, ''],
  PORTIS_DAPP_ID: [process.env.PORTIS_DAPP_ID, ''],
  SUBSCRIPTIONS_URL: [
    process.env.SUBSCRIPTIONS_URL,
    'https://court-backend.eth.aragon.network/subscriptions',
  ],
}

export default function environment(name) {
  const envVar = envVars[name]
  if (!envVar) {
    return null
  }
  return envVar[0] === undefined ? envVar[1] : envVar[0]
}
