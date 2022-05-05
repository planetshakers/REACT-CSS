export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- StyledJsx -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx="true">
        {`
          .container {
            border: solid 1px #392fff;
            border-radius: 10px;
            padding: 10px;
            margin: 10px;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }

          .title {
            margin: 0;
            color: red;
          }

          .button {
            background-color: yellow;
            border: none;
            padding: 8px;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
};
