import React from "react"
import './App.css';
import LoginPage from './component/LoginPage';
import SlipsPage from './component/SlipsPage';

function App() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      {/* <LoginPage></LoginPage> */}
      <p>{!data ? "Loading..." : data}</p>
      <SlipsPage></SlipsPage>
    </div>
  )}

export default App;
