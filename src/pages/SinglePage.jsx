import axios from "axios";
import React, { useEffect, useState } from "react";
import MailCard from "../components/MailCard";
import { useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  const [details, setDetails] = useState([]);
  const [arr, setArr] = useState([JSON.parse(localStorage.getItem("myArray"))]);
  const { id } = useParams();

  // const handleClick = (unique) => {
  //   setArr((pre) => {
  //     return [...pre, unique].push(unique);
  //   });
  //   localStorage.setItem("myArray", JSON.stringify(arr));

  // };

  console.log(arr);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get("https://flipkart-email-mock.now.sh/");
        const data = await response.data;
        await setDetails(data.list);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
      <div style={{ flex: 4 }}>
        <MailCard item={details} />;
      </div>
      <div style={{ flex: 8 }}>
        {details
          .filter((e) => e.id === id)
          .map((e, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                    color: "white",
                    width: 45,
                    height: 45,
                    backgroundColor: "#E54065",
                    borderRadius: "50%",
                  }}
                >
                  F
                </h2>
              </div>
              <div style={{ flex: 11 }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h2>{e.subject}</h2>
                  <button
                    style={{
                      backgroundColor: "#E54065",
                      outline: "none",
                      border: "none",
                      color: "white",
                      borderRadius: 20,
                      paddingInline: 10,
                      paddingBlock: 10,
                    }}
                    //onClick={() => handleClick(e.id)}
                  >
                    Mark as favorite
                  </button>
                </div>

                <p>
                  <span>
                    {new Date(e.date).toLocaleDateString()}&nbsp;&nbsp;
                    {new Date(e.date).toLocaleTimeString()}
                  </span>
                </p>
                <div style={{ marginTop: 15 }}>
                  <p>{e.short_description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SinglePage;
