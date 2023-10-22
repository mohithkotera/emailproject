import React, { useEffect, useState } from "react";
import axios from "axios";
import MailCard from "../components/MailCard";

const Home = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://flipkart-email-mock.now.sh/");
        const data = response.data;
        setDetails(data.list);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <div style={{ marginBlock: 20 }}>
      <MailCard item={details} />;
    </div>
  );
};

export default Home;
