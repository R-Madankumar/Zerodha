import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    localStorage.clear(); // ✅ Clear login state
    window.location.href = "https://zerodhafrontend-qjxe.onrender.com"; // ✅ Redirect to login
  };

  return (
    <div className="text-center p-5 mt-5">
         <button className="btn btn-outline-danger " onClick={handleLogout}>
            Logouts
        </button>
    </div>
   
  );
};

export default LogoutButton;
