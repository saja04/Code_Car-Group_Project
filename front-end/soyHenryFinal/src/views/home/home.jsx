import BestCarCards from "../../components/bestCards/bestCarCards";
import vehiclesData from "../../../utils/utils.json";
import Questions from "../../components/questions/questions";

import style from "./home.module.css";
import React from "react";

function Home() {
  return (
    <div className={style.container}>
      <BestCarCards vehicles={vehiclesData.vehicles} />
      <Questions />
    </div>
  );
}

export default Home;
