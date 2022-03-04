import styles from "../styles/Home.module.css";
import SideBar from "../components/SideBar/SideBar";
import ConversationList from "../components/ConversationList";
import ChatView from "../components/ChatView";
import { useContext } from "react";
import { DiscordContext } from "../context/context";

export default function Home() {
  const { showMenu, setShowMenu } = useContext(DiscordContext);

  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.main}>
        <ConversationList />
        <ChatView />
      </div>
      {showMenu && (
        <div
          className={styles.back_drop}
          onClick={() => setShowMenu(false)}
        ></div>
      )}
    </div>
  );
}
