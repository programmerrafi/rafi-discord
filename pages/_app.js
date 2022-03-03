import "../styles/globals.css";
import { DiscordProvider } from "../context/context";
import { useRouter } from "next/router";
import { NotificationsProvider } from "@mantine/notifications";

function MyApp({ Component, pageProps }) {
  return (
    <DiscordProvider>
      <Component {...pageProps} />
    </DiscordProvider>
  );
}

export default MyApp;
