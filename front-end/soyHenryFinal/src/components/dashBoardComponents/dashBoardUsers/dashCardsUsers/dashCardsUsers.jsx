import style from "./dashCardsUsers.module.css";
import { useState, useEffect } from "react";
import axios from 'axios'

function DashCardsCar({ user }) {
  const [userBan, setUserBan] = useState(false);

  console.log(user);


  const getUserBan = () => {
    return setUserBan(user.user_ban)
  }

  useEffect(() => {
    getUserBan()
  }, []);

  const changeBan = async() => {
    let prev = null
    if(userBan){
      prev = false
    } else prev = true

    const response = await axios.post('https://codecar.onrender.com/banUser',{
      adminEmail: 'elgilazo9123@gmail.com',
      userEmail: user.user_email,
      ban: prev
    })
    setUserBan(prev)

  }

  

  return (
    <div className={style.container}>
      <div className={style.info}>
        <h4 className={style.title}>{user.user_name} </h4>
        <h4 className={style.title}>{user.user_email} </h4>

        <h4 className={style.title}>{user.user_address} </h4>
        <h4 className={style.title}>{user.user_phone} </h4>
        {!userBan ? <button onClick={changeBan}>Ban</button> : <button onClick={changeBan}>Unban</button>}
      </div>
    </div>
  );
}

export default DashCardsCar;
