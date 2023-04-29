'use client'
import '@rainbow-me/rainbowkit/styles.css'
import { ReactNode } from 'react'

import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit'
import { connectorsForWallets } from '@rainbow-me/rainbowkit'
import { braveWallet, injectedWallet, ledgerWallet, metaMaskWallet } from '@rainbow-me/rainbowkit/wallets'
import { WagmiConfig, createClient } from 'wagmi'

import { chains, provider } from '@/config/networks'
import { useColorMode } from '@/lib/state/color-mode'

interface Props {
  children: ReactNode
  autoConnect?: boolean
}

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      metaMaskWallet({ chains }), // eth_decrypt supported but deprecated: https://github.com/MetaMask/metamask-extension/issues/15379
      braveWallet({ chains }), // eth_decrypt supported but deprecated: https://github.com/brave/brave-wallet-docs/pull/73
      ledgerWallet({ chains }) // eth_decrypt supported but blocked by Metamask keyring: https://github.com/MetaMask/metamask-extension/pull/16716
    ],
  },
])

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
})

export function RainbowKit(props: Props) {
  const [colorMode] = useColorMode()
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={colorMode == 'dark' ? darkTheme() : lightTheme()}>
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
