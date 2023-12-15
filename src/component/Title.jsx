import React from "react";
import "../Style/Title.css";
import { Link } from "react-router-dom";

function Title() {

  return (
    <div className="topBanner Container">
      <Link to="/" className="logo">
      <img src={process.env.PUBLIC_URL + "/img/Title.png"} alt="오염수 정보 알리미 :)" style={{ width: 60 }} />
      <span>오염수를 알려드림</span>
      </Link>
    </div>
  )

}

export default Title;