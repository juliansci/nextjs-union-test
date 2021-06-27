import { AppProps } from 'next/app'
import '../styles/globals.css'

const BaseApp = ({ Component, pageProps }: AppProps) => {
 return <Component {...pageProps} />;
}

export default BaseApp
