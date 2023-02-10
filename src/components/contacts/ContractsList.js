import React, { useState } from "react";
import "./ContractsList.css";
import Contact from "./contact/Contact";
import Checkbox from "./Checkbox/Checkbox";

const Сontracts = ({ contacts }) => {
  contacts.forEach((item, index) => (item.id = index + 1));
  const [contactsData] = useState(contacts),
    [serch, setSerch] = useState(""),
    [checkedOne, setCheckedOne] = useState(true),
    [checkedTwo, setCheckedTwo] = useState(true),
    [checkedThree, setCheckedThree] = useState(true),
    
    checkBoxOneChange = () => {
      setCheckedOne(!checkedOne);
    },
    checkBoxTwoChange = () => {
      setCheckedTwo(!checkedTwo);
    },
    checkBoxThreeChange = () => {
      setCheckedThree(!checkedThree);
    };
  function handelChange(event) {
    setSerch(event.target.value);
  }

  return (
    <div className="wraper">
      <h1>Contacts</h1>
      <div className="input-container">
        <div>
          <input
            className="serch-contact"
            type="text"
            value={serch}
            onChange={handelChange}
            placeholder="Serch"
          />
        </div>
        <div className="checkbox-container">
          <Checkbox
            lable="Male"
            value={checkedOne}
            onChange={checkBoxOneChange}
          />
          <Checkbox
            lable="Female"
            value={checkedTwo}
            onChange={checkBoxTwoChange}
          />
          <Checkbox
            lable="n\a"
            value={checkedThree}
            onChange={checkBoxThreeChange}
          />
        </div>
      </div>
      {contactsData
        .filter((item) => {
          if (
            item.firstName
              .toLocaleLowerCase()
              .includes(serch.toLocaleLowerCase()) ||
            item.lastName
              .toLocaleLowerCase()
              .includes(serch.toLocaleLowerCase()) ||
            item.phone.includes(serch.toLocaleLowerCase())
          ) {
            return true;
          }
        })
        .filter((item) => {
          if (
            (item.gender === "male" && checkedOne) ||
            (item.gender === "female" && checkedTwo)
          ) {
            return true;
          } else if (!item.gender && checkedThree) return true;
        })
        .map((item) => (
          <Contact key={item.id} {...item} />
        ))}
    </div>
  );
};

export default Сontracts;
