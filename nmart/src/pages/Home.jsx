const Home = ({ handleLogout, user }) => {
  return (
    <>
      <h1>Hello All!!</h1>
      <button onClick={handleLogout} style={{}}>
        LOGOUT
      </button>
      <div>{user?.email}</div>
    </>
  );
};

export default Home;
