import React, { useEffect, useState } from "react";
import BestCarCards from "../../components/bestCards/bestCarCards";
import SuggestedCards from "../../components/suggestedCards/suggestedCards";
import Questions from "../../components/questions/questions";
import style from "./home.module.css";
import axios from "axios";

function Home() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("https://codecar.onrender.com/cars");
        setVehicles(response.data);

        const response2 = await axios.get("https://codecar.onrender.com/checkUser");
        console.log(response2.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={style.container}>
      <BestCarCards vehicles={vehicles} />
      <Questions />
      <SuggestedCards vehicles={vehicles} />
    </div>
  );
}

export default Home;
