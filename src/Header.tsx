import icon from "monitoricon.png";

const Header = () => (
  <header
    style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: "0px 32px",
      gap: "32px",
      background: "#1A2902",
      flex: "none",
      order: "0",
      alignSelf: "stretch",
      flexGrow: "0",
    }}
  >
    <img
      src={icon} alt=" "
      style={{
        width: "64px",
        height: "64px",
        flex: "none",
        order: "0",
        flexGrow: "0",
      }}
    />
    <h1
      style={{
        fontFamily: "'Helvetica Neue'",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "38px",
        lineHeight: "46px",
        color: "#C1D2AE",
      }}
    >
      Counter
    </h1>
  </header>
);

export default Header;
