import "./App.css";
import Input from "./companents/input/Input";
import Button from "./companents/button/Button";
import Form from "./companents/form/Form";
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

function App() {
  const [user, setUser] = useState({ name: "", password: "" }); //user ve setuse Hook"UseState"(araştır): iki dğeiken istiyor biri değişken biri de fonksiyon.
  const handleChange = (e) => {
    if (e.target.type === "text") {
      setUser({ ...user, name: e.target.value });
    }
    if (e.target.type === "password") {
      setUser({ ...user, password: e.target.value });
    }
  };
  const handleClick = (e) => {
    if (user.name === "") {
      alert("Kullanıcı adı boş girilemez");
    // } else if (user.password === "") {
    //   alert("Parola boş girilemez");
    } else {
      const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Sidebar />
  </BrowserRouter>
);
    
    }
  };

  return (
    <div className="App">
      <Form>
        <h2>Giriş</h2>

        <Input
          type={"text"}
          value={user.name}
          placeHolder={"Kullanıcı Adınız"}
          onChange={handleChange}
          autoComplete="on"
        />
        <Input
          type={"password"}
          value={user.password}
          placeHolder={"Şifreniz"}
          onChange={handleChange}
          autoComplete="off"
        />

        <Button onClick={handleClick} />
      </Form>
    </div>
  );
}

export default App;
