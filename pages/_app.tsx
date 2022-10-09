import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "config/AuthContext";
import Navbar from "layout/Navbar";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
};

export default MyApp;
