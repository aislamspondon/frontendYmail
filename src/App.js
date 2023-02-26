import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AutoMessage from "./components/pages/AutoMessage";
import CreateCustomerPreview from "./components/pages/CreateCustomerPreview";
import CustomerPage from "./components/pages/CustomerPage";
import CustomerPreview from "./components/pages/CustomerPreview";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import SuccessPage from "./components/pages/SuccessPage";
import UserList from "./components/pages/UserList";

function App() {
  const [active, setActive] = useState(false);
  const path = window.location.pathname;
  const consumer = path.substring(path.lastIndexOf("/") + 1);
  useEffect(() => {
    if (consumer === "consumer") {
      setActive(true);
    }
  }, [consumer]);
  return (
    <div>
      {active ? (
        <Routes>
          <Route exact path="/consumer" element={<CustomerPage />} />
        </Routes>
      ) : (
        <Header />
      )}

      {!active && (
        <>
          {" "}
          <main className="py-3">
            <Container>
              <Routes>
                <Route exact path="/" element={<Home />} />
              </Routes>
              <Routes>
                <Route exact path="/login" element={<Login />} />
              </Routes>
              <Routes>
                <Route exact path="/automessage" element={<AutoMessage />} />
              </Routes>
              <Routes>
                <Route exact path="/success" element={<SuccessPage />} />
              </Routes>

              <Routes>
                <Route exact path="/users" element={<UserList />} />
              </Routes>
              <Routes>
                <Route exact path="/preview" element={<CustomerPreview />} />
              </Routes>
              <Routes>
                <Route
                  exact
                  path="/createpreview"
                  element={<CreateCustomerPreview />}
                />
              </Routes>
            </Container>
          </main>
          <Footer />{" "}
        </>
      )}
    </div>
  );
}

export default App;
