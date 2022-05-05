export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 1px #392fff",
    borderRadius: "10px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: 0,
    color: "red"
  };
  const buttonStyle = {
    backgroundColor: "yellow",
    border: "none",
    padding: "8px",
    borderRadius: "10px"
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-- inlineStyle --</p>
      <button style={buttonStyle}>Fight</button>
    </div>
  );
};
