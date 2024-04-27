
import AppLayout from "./components/Layout/AppLayout";
import { CryptoContextProvider } from "./components/context/crypto-context";





export default function App() {
  return (
    <CryptoContextProvider>
      <AppLayout />
    </CryptoContextProvider>
  );
}
