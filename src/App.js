import { useState } from "react";
import Pano from "./component/Pano";
import PanoEditor from "./component/PanoEditor";
import PanoList from "./component/PanoList";
function App() {
  const [panorama, setPanorama] = useState();
  const [viewer, setViewer] = useState();

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Pano
        panorama={panorama}
        setPanorama={setPanorama}
        setViewer={setViewer}
      />
      <PanoEditor panorama={panorama} viewer={viewer} />
      <PanoList />
    </div>
  );
}

export default App;
