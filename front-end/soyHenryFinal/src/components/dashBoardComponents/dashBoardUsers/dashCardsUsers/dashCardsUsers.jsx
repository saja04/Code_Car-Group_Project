import style from "./dashCardsUsers.module.css";
import { useState } from "react";
import axios from "axios";

function DashCardsUser({ user }) {
  const [userBan, setUserBan] = useState(user.user_ban);

  const handleToggleBan = async () => {
    const newBanStatus = !userBan;
    setUserBan(newBanStatus);

    const response = await axios.post("https://codecar.onrender.com/banUser", {
      adminEmail: "elgilazo9123@gmail.com",
      userEmail: user.user_email,
      ban: newBanStatus,
    });
  };

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h4 className={style.title}>{user.user_name} </h4>
        <h4 className={style.title}>{user.user_email} </h4>

        <h4 className={style.title}>{user.user_address} </h4>
        <h4 className={style.title}>{user.user_phone} </h4>
        <div className={style.button}>
          <button
            className={`${style.onOffButton} ${userBan ? style.off : ""}`}
            onClick={handleToggleBan}
          >
            {userBan ? "Unban" : "Ban"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashCardsUser;
