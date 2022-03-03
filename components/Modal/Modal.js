import { useEffect, useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

export default function Modalst({ opened, setOpened }) {
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Do you want to chat❓"
        overflow="inside"
      >
        <p style={{ fontSize: "13px", fontWeight: "500", color: "#868e96" }}>
          * You Need Metamask extention & create an ethereum account.
        </p>
        <p style={{ fontSize: "13px", fontWeight: "500", color: "#868e96" }}>
          * After that again connect your wallet.
        </p>
      </Modal>
    </>
  );
}
