import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactModal from "react-modal";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import Header from "./components/Header";
import NotFound from "./pages/NotFound";

ReactModal.setAppElement("#root");

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/add" element={<AddEmployee />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
