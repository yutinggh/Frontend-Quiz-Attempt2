import Input from "Input";
import Footer from "Footer";
import Header from "Header";

const App = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
      width: "100%",
      height: "100%",
      background: "#C1D2AE",
    }}
  >
    <Header />
    <Input />
    <Footer />
  </div>
);

export { App };
