import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import theme from "../src/theme";
import "../src/theme/styles.css";

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default App;
