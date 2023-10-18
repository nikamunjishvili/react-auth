import { useEffect, useState } from "react";

function App() {
  const [data,setData] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      await fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(dt => setData(dt))
    }
    requestData()
  }, [])
  return (
    <div>
      {/* <Home /> */}
      {data && data.map(item => {
        return <li key={item.id}>{item.address.geo.lat}</li>
      })}
    </div>
  );
}

export default App;
