import "tailwindcss/tailwind.css";
import { init } from '../utils/sentry'

init()

function App({ Component, pageProps, err }) {
  return <Component {...pageProps} err={err}/>
}

export default App
