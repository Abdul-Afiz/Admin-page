import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "./screens/auth-screen/login-screen";
import HomeScreen from "./screens/home-screen";
import ListScreen from "./screens/list-screen";
import NewScreen from "./screens/new-screen";
import SingleScreen from "./screens/single-screen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="users">
              <Route index element={<ListScreen />} />
              <Route path=":userId" element={<SingleScreen />} />
              <Route path="new" element={<NewScreen />} />
            </Route>
            <Route path="products">
              <Route index element={<ListScreen />} />
              <Route path=":productId" element={<SingleScreen />} />
              <Route path="new" element={<NewScreen />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
