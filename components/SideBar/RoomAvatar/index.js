import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../../../styles/roomAvatar.module.css";
import { useContext } from "react";
import { DiscordContext } from "../../../context/context";

const RoomAvatar = ({ id, avatar, name }) => {
  const router = useRouter();
  const { setShowMenu } = useContext(DiscordContext);

  const changeUrl = () => {
    router.push(`?channel=${id}&name=${name}`);
    setShowMenu(false);
  };

  return (
    <div className={styles.wrapper} onClick={changeUrl}>
      <div className={styles.roomAvatar}>
        <Image
          src={avatar}
          className={styles.roomAvatarImage}
          height={48}
          width={48}
          alt={name}
        />
      </div>
    </div>
  );
};

export default RoomAvatar;
