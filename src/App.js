import React from "react";
import { Container } from "@mui/material";
import NavBar from "./NavBar";
import Profile from "./Profile";
import axios from "axios"; // Import axios
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { getAccessTokenSilently } = useAuth0();

  const callApi = () => {
    axios
      .get("http://localhost:4000/api")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error making the request:", error.message);
      });
  };

  const callProtectedApi = async () => {
    try {
      const token = await getAccessTokenSilently({
        audience: process.env.REACT_APP_AUTH0_AUDIENCE,
      });
      console.log("Access Token:", token); // Log the token for debugging
      const response = await axios.get("http://localhost:4000/protectedapi", {
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in the Authorization header
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("There was an error making the request:", error);
    }
  };

  return (
    <div className="App">
      <NavBar />
      <Container>
        <header className="App-header">
          <Profile />
          <button onClick={callApi}>api</button> {/* Add onClick handlers */}
          <button onClick={callProtectedApi}>Protected Api</button>
        </header>
      </Container>
    </div>
  );
}

export default App;
