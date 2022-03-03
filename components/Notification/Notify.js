import React from "react";
import { Group, Button } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";
import { useContext } from "react";
import { DiscordContext } from "../../context/context";
import styles from "../../styles/chatHeader.module.css";

function Notify() {
  const notifications = useNotifications();
  const { connectWallet, showNotify } = useContext(DiscordContext);

  const notifi = () => {
    connectWallet();
    console.log(showNotify);
    if (showNotify === undefined) {
      notifications.showNotification({
        title: "You Need Metamask extention & create an account",
        message: "IF You want a Chat! You should open a ethereum account 🤥",
      });
    }
  };

  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() => notifi()}
        className={styles.connectWallet}
      >
        Connect Wallet
      </Button>
    </Group>
  );
}

export default Notify;
