import React from "react";

function PhoneAnimation() {
  return (
    <div className="phone-animation">
      <img
        src={process.env.PUBLIC_URL + "/images/slider/phone.gif"}
        alt="phone animation"
      />
    </div>
  );
}

export default PhoneAnimation;
