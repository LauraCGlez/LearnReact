import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar.tsx";
import Body from "./components/Body/Body.tsx";
import Address from "./components/Address/Address.tsx";

function App() {
  return (
    <div className="application">
        <Router>
            <NavBar/>
            <Routes>
                <Route path={"/"}>
                    <Route index element={<Navigate to={"/home"}/> } />
                    <Route path={"/home"} element={<Body/>} />
                    <Route path={"/address"} element={<Address/>} />
                </Route>
            </Routes>
        </Router>
    </div>
  )
}

export default App
