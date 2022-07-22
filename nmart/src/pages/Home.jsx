const Home = ({ handleLogout }) => {
  return (
    <>
      <h1>Hello All!!</h1>
      <button onClick={handleLogout} style={{}}>
        LOGOUT
      </button>
    </>
  );
};

export default Home;
