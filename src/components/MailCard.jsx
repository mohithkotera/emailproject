import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MailCard = ({ item}) => {
  const navigate = useNavigate();
  const [id, setId] = useState();

  const navigateNext = (i,index) => {
    navigate(`/singlePage/${i}`);
    setId(index);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {item.map((val, i) => (
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "row",
            border: "groove",
            borderColor: "#F4F5F9",
            borderRadius: 10,
            gap: "2%",
            paddingBlock: 10,
            paddingInline: 10,
          }}
          className={i == id ? "bgcolor1" : "bgcolor2"}
          onClick={() => navigateNext(val.id,i)}
        >
          <div>
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
          <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <label>From:</label>
                <p>{val.from.email}</p>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                }}
              >
                <label>Subject:</label>
                <p>{val.subject}</p>
              </div>
            </div>
            <p className="desp">{val.short_description}</p>

            <p>
              <span>
                {new Date(val.date).toLocaleDateString()}&nbsp;&nbsp;
                {new Date(val.date).toLocaleTimeString()}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MailCard;
