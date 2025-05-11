import { useState } from "react";
import FacebookLogin from "./FacebookLogin";
import FacebookSignup from "./FacebookSignup";

function Facebook() {
  const [fbPage, setfbPage] = useState(<FacebookLogin change={change} />);

  function change() {
    setfbPage(<FacebookSignup />);
  }

  return (
    <>
      <div className="facebook-page page">
        <div className="fbook-header">
          <h1>Facebook</h1>
          <img src="src/assets/facebook.png" name="Facebook" />
        </div>
        <div>{fbPage}</div>
      </div>
    </>
  );
}

export default Facebook;
