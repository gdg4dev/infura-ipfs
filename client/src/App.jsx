import { EthProvider } from "./contexts/EthContext";
import { useState } from "react";
import Intro from "./components/Intro/";
import Setup from "./components/Setup";
import Demo from "./components/Demo";
import Footer from "./components/Footer";
import ipfs from "./ipfs";
import "./App.css";

function App() {
  const [buffer, setBuffer] = useState([])
  const [ipfsHash, setIpfsHash] = useState('')

  const onSubmit = (event) => {
    event.preventDefault()
    console.log("capture")
    
    ipfs.add(buffer, (err, res) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(res[0].hash)
      setIpfsHash(res[0].hash)
    })
    console.log("submit")
  }
  const captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      console.log('buffer', Buffer(reader.result))
      setBuffer(Buffer(reader.result))

    }
  }
  return (
    <EthProvider>
      <div id="App" >
        <div className="container">
          <h1>IPFS File Upload Demo</h1>
          <img src="" alt="" />
          <h3>upload image</h3>
          <form onSubmit={onSubmit} >
            <input type="file" onChange={captureFile}></input>
            <input type="submit" />
            uploaded File
            <img src={`https://ipfs.io/ipfs/${ipfsHash}`} alt="ipfs" />
          </form>
          {/* <Intro />
          <hr />
          <Setup />
          <hr />
          <Demo />
          <hr />
          <Footer /> */}
        </div>
      </div>
    </EthProvider>
  );
}

export default App;
