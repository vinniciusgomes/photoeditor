import React from "react";
import Lottie from "lottie-react-web";

import loading from "../../animations/loading.json";
import "./styles.css";

export default function Splash() {
  return (
    <div className="container animate__animated animate__fadeIn">
      <div className="loading-container">
        <Lottie
          options={{
            animationData: loading,
          }}
        />
      </div>
    </div>
  );
}
