import Image from "next/image";
import personPlus from "../../../assets/icons/person-plus.svg";
import video from "../../../assets/icons/video.svg";
import inbox from "../../../assets/icons/inbox.svg";
import phone from "../../../assets/icons/phone.svg";
import help from "../../../assets/icons/help.svg";
import pin from "../../../assets/icons/pin.svg";
import at from "../../../assets/icons/at.svg";
import styles from "../../../styles/chatHeader.module.css";
import ethLogo from "../../../assets/eth.png";
import { useContext } from "react";
import { DiscordContext } from "../../../context/context";
import { NotificationsProvider } from "@mantine/notifications";
import Notify from "../../Notification/Notify";
import { AiOutlineMenu } from "react-icons/ai";
// const currentAccount = "54745hdfdfjhg834hkhr847hjh4349njn5459";

const ChatHeader = () => {
  const { roomName, currentAccount, handleClickMenu } =
    useContext(DiscordContext);

  return (
    <div className={styles.chatHeader}>
      <div className={styles.roomNameContainer}>
        <AiOutlineMenu
          className={styles.menuI}
          onClick={() => handleClickMenu()}
        />
        <Image height={20} width={20} src={at} className={styles.svg} alt="" />
        <h3 className={styles.title}>{roomName}</h3>
        <div className={styles.chatHeaderStatus} id="online" />
      </div>
      {currentAccount ? (
        <div className={styles.connectedWallet}>
          <Image src={ethLogo} height={20} width={15} alt="ethLogo" />
          <span className={styles.separator}>{"|"}</span>
          {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
        </div>
      ) : (
        <>
          <NotificationsProvider position="top-right" zIndex={2077}>
            <Notify />
          </NotificationsProvider>
        </>
      )}

      <div className={styles.headerIconsContainer}>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={phone}
            className={styles.svg}
            alt=""
          />
        </div>
        <div className={styles.headerItem}>
          <Image
            height={25}
            width={25}
            src={video}
            className={styles.svg}
            alt=""
          />
        </div>
      </div>
      <div className={styles.headerItem}>
        <Image height={25} width={25} src={pin} className={styles.svg} alt="" />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={personPlus}
          className={styles.svg}
          alt=""
        />
      </div>
      <div className={styles.headerItem}>
        <input type="search" placeholder="Search" />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={inbox}
          className={styles.svg}
          alt=""
        />
      </div>
      <div className={styles.headerItem}>
        <Image
          height={25}
          width={25}
          src={help}
          className={styles.svg}
          alt=""
        />
      </div>
      {/* Mobile  */}
      <div className={styles.mobile_icon}>
        <div className={styles.headerItem_m}>
          <Image
            height={25}
            width={25}
            src={personPlus}
            className={styles.svg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
