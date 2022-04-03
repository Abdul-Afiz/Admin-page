import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import LoginScreen from "./screens/auth-screen/login-screen";
import HomeScreen from "./screens/home-screen";
import ListScreen from "./screens/list-screen";
import NewScreen from "./screens/new-screen";
import SingleScreen from "./screens/single-screen";
import "./style/dark.scss";

function App() {
  return (
    <div className="app dark">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomeScreen />} />
            <Route path="login" element={<LoginScreen />} />
            <Route path="users">
              <Route index element={<ListScreen />} />
              <Route path=":userId" element={<SingleScreen />} />
              <Route
                path="new"
                element={<NewScreen inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<ListScreen />} />
              <Route path=":productId" element={<SingleScreen />} />
              <Route
                path="new"
                element={
                  <NewScreen inputs={productInputs} title="Add New Product" />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
