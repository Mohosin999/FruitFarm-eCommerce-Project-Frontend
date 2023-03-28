import React from "react";
import { useStoreActions } from "easy-peasy";
import { useRouter } from "next/router";

const ProfileComponent = () => {
  const router = useRouter();
  const logout = useStoreActions((actions) => actions.auth.logout);

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="container mx-auto px-5 pt-28 md:pt-30 flex flex-col min-h-screen">
      <h1 className="text-gray-300 ">My Profile</h1>
      <button
        className="bg-yellow-800 text-gray-300 px-4 py-2"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileComponent;
