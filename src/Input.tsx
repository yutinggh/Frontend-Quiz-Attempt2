import { useState } from "react";

const Input = () => {
  const [count, setCount] = useState("0");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: "1 0 0",
        width: "576px",
        height: "280px",
        padding: "64px 96px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          background: "#1A2902",
          borderRadius: "16px",
          boxSizing: "border-box",
          flex: "0 0",
          width: "576px",
          height: "280px",
          padding: "64px 96px",
          color: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            padding: "0px",
            gap: "8px",
            width: "384px",
            height: "80px",
          }}
        >
          <label
            htmlFor="count"
            style={{
              display: "flex",
              flexDirection: "column",
              background: "#1A2902",
              borderRadius: "16px",
              flex: "none",
              order: "1",
              flexGrow: "0",
              fontFamily: "Helvetica Neue",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "20px",
              lineHeight: "24px",
            }}
          >
            Input a number:
          </label>
          <input
            name="count"
            value={count}
            onChange={(e) => setCount(e.target.value)}
            style={{
              boxSizing: "border-box",
              display: "flex",
              padding: "0px 8px",
              width: "384px",
              height: "48px",
              background: "#FFFFFF",
              border: "1px solid #000000",
              borderRadius: "8px",
              flex: "none",
              order: "1",
              flexGrow: "0",
            }}
          />
        </div>
        <button
          onClick={() =>
            !isNaN(Number(count))
              ? setCount((Number(count) + 1).toString())
              : alert(`${count} is not a number`)
          }
          style={{
            boxSizing: "border-box",
            width: "243px",
            height: "40px",
            background: "#C1D2AE",
            border: "1px solid #000000",
            borderRadius: "8px",
          }}
        >
          Increase one
        </button>
      </div>
    </div>
  );
};

export default Input;
