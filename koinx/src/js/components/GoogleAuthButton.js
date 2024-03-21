import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

const GoogleAuthButton = ({ setUser }) => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          // Decode the JWT token (credential)
          const decoded = jwtDecode(credentialResponse.credential);

          setUser({
            name: decoded.name,
            email: decoded.email,
            picture: decoded.picture,
          });
        }}
        onError={() => {
          console.log("Login Failed");
        }}
        type="icon"
      />
    </div>
  );
};

export default GoogleAuthButton;
