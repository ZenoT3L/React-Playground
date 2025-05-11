import { useState } from "react";
import Image from "./components/Image";
import src from "./components/imgsrc";
import Facebook from "./components/facebook/Facebook";
import Instagram from "./components/Instagram";
import LinkedIn from "./components/LinkedIn";
import Youtube from "./components/Youtube";

function App() {
  const [page, setPage] = useState(<Facebook />);

  function clickFunction(event) {
    const name = event.target.name;
    if (name === "Facebook") {
      setPage(<Facebook />);
    } else if (name === "Instagram") {
      setPage(<Instagram />);
    } else if (name === "LinkedIn") {
      setPage(<LinkedIn />);
    } else if (name === "YouTube") {
      setPage(<Youtube />);
    }
    console.log(name);
  }

  return (
    <>
      <div className="container">
        {src.map((item) => {
          return (
            <Image
              key={item.id}
              name={item.name}
              sauce={item.sauce}
              class={item.name}
              click={clickFunction}
            />
          );
        })}
      </div>
      <div>{page}</div>
    </>
  );
}

export default App;
