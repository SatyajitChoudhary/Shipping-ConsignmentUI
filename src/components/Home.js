const Home = (props) => {
  return (
    <div style={{ padding: 15, position: "relative" }}>
      <h1>Home Page</h1>
      <button
        type="button"
        onClick={() => props.history.push("/")}
        style={{
          backgroundColor: "#b13af1",
          color: "#ffffff",
          border: 0,
          padding: 5,
          position: "absolute",
          right: 80,
          top: 40,
          height: 35,
        }}>
        Add Shipping Details
      </button>
    </div>
  );
};

export default Home;
