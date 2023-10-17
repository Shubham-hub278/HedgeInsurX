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
  polygon,
  goerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { InjectedConnector } from "wagmi/connectors/injected";
import { ModalProvider } from "../context/useModalContext"


export default function App({ Component, pageProps }: AppProps) {

  const { chains, publicClient } = configureChains([polygon, goerli], [publicProvider()]);

  const config = createConfig({
    autoConnect: true,
    connectors: [
      new InjectedConnector({
        chains,
        options: {
          name: "Injected",
          shimDisconnect: true,
        },
      }),
    ],
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

            <TabsProvider>
              <Component {...pageProps} />
            </TabsProvider>

          </ChakraProvider>
        </ModalProvider>

      </RainbowKitProvider>
    </WagmiConfig >
  );
}
