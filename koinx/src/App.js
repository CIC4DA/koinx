import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DefaultLayout from "./routes/DefaultLayout";


function App() {
  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId="83495204132-2jghsnfdg73bfo3oi7evsbuk3pfkqd0j.apps.googleusercontent.com">
        <DefaultLayout/>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
