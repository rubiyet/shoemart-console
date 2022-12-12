export default function LogInButton({ isLoggedIn }) {
  const handleLogIn = (e) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    window.location.href = "/";
  };

  return (
    <div>
      {isLoggedIn == "isLoggedIn" ? (
        <button
          className="h-11 w-28 rounded-md text-white bg-orange-600"
          onClick={handleLogOut}
        >
          Logout
        </button>
      ) : (
        <button
          className="h-11 w-28 rounded-md text-white bg-orange-600"
          onClick={handleLogIn}
        >
          Login
        </button>
      )}
    </div>
  );
}
