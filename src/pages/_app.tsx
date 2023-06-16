import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/graphQL/apollo-client";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
          <Toaster />
        </SessionProvider>
      </ApolloProvider>
    </>
  );
}
