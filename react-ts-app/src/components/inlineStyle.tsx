export const InlineStyle = () => {
  const containerStyle: {
    border: string;
    borderRadius: string;
    padding: string;
    margin: string;
    display: string;
    justifyContent: string;
    alignItems: string;
  } = {
    border: 'solid 2px blue',
    borderRadius: '20px',
    padding: '8px',
    margin: '8px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };
  const titleStyle: {
    margin: string;
    color: string;
  } = {
    margin: '0',
    color: 'green',
  };
  const buttonStyle = {
    backgroundColor: 'lightgreen',
    border: 'none',
    padding: '8px',
    borderRadius: '8px',
  };
  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- Inline Styles -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
