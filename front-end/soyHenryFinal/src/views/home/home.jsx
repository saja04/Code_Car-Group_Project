import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BestCarCards from "../../components/bestCards/bestCarCards";
import SuggestedCards from "../../components/suggestedCards/suggestedCards";
import { getCars } from "../../redux/actions";
import Questions from "../../components/questions/questions";
import style from "./home.module.css";
import axios from "axios";
import Banner from "../../components/banner/banner";

function Home() {
  const [vehicles, setVehicles] = useState([]);

  const dispatch = useDispatch();
  const divisa = localStorage.getItem("divisa");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post("https://codecar.onrender.com/cars", {
          precio: divisa,
        });
        setVehicles(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
  useEffect(() => {
    dispatch(getCars(divisa));
  }, [divisa]);

  return (
    <div className={style.container}>
      <Banner />
      <BestCarCards vehicles={vehicles} />
      <Questions />
      <SuggestedCards vehicles={vehicles} />
    </div>
  );
}

export default Home;
