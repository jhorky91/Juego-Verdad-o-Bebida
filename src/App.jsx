import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthContextProvider } from "./context/authContext";
import { MyRoutes } from "./routes/router";

function App() {
  return (
    <AuthContextProvider>
      <MyRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </AuthContextProvider>
  );
}

export default App;
