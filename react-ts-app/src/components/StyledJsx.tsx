export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title">- Styled Jsx -</p>
        <button className="button">FIGHT!!</button>
      </div>
      <style jsx={true}>{`
        .container {
          border: solid 2px blue;
          border-radius: 20px;
          padding: 8px;
          margin: 8px;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        .title {
          margin: 0;
          color: green;
        }
        .button {
          background-color: lightgreen;
          border: none;
          padding: 8px;
          border-radius: 8px;
        }
      `}</style>
    </>
  );
};
