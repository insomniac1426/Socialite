import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logoAnimation from "../../public/lottie/logo.json";

const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md text-center">
          <div className="mb-8">
            <Player
              autoplay
              loop
              src={logoAnimation}
              style={{ height: "300px", width: "400px" }}
            />
              <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} />

          </div>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
export default AuthImagePattern;
