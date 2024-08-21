import '@/styles/globals.css'
import '@/styles/Home.module.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Tabs, extendTheme, useTab } from '@chakra-ui/react'
import { TabsProvider, useTabs } from '@/context/TabsContext'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig, configureChains, createConfig } from "wagmi";
import {
  polygonMumbai,
  goerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from "wagmi/connectors/injected";
import { ModalProvider } from "../context/useModalContext"
import { StrategiesProvider } from '@/context/StrategiesContext'



export default function App({ Component, pageProps }: AppProps) {

  const { chains, publicClient } = configureChains([polygonMumbai, goerli], [publicProvider()]);


  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    projectId: "957c795c4c86e7c46609c0cd4064fa00", //walletconnect ID
    chains
  });

  const config = createConfig({
    autoConnect: true,
    connectors: connectors,
    publicClient,
  });


  const theme = extendTheme({
    styles: {
      global: {
        body: {
          bg: '#101827', // Default background color
          color: 'white', // Default text color
        },
      },
    },
  });


  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>
        <ModalProvider>
          <ChakraProvider theme={theme}>
            <StrategiesProvider>
              <TabsProvider>
                <Component {...pageProps} />
              </TabsProvider>
            </StrategiesProvider>
          </ChakraProvider>
        </ModalProvider>

      </RainbowKitProvider>
    </WagmiConfig >
  );
}
