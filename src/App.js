import React, { useEffect, useState } from "react";
import ColorMessage from "./components/ColorMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitch = () => {
    setFaceShow(!faceShow);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World!</h1>
      <ColorMessage color="blue">Hello my world!</ColorMessage>
      <ColorMessage color="pink">Hello your world!</ColorMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitch}>on/off</button>
      <p>{num}</p>
      {faceShow && <p>(*^^*)</p>}
    </>
  );
};

export default App;
