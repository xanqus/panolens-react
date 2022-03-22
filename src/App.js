import { useState } from "react";
import Pano from "./component/Pano";
import PanoEditor from "./component/PanoEditor";
import PanoList from "./component/PanoList";
function App() {
  const [panorama, setPanorama] = useState();
  const [viewer, setViewer] = useState();
  const [infospots, setInfospots] = useState([]);
  const [infospotText, setInfospotText] = useState("");
  const [currentInfospotIndex, setCurrentInfospotIndex] = useState(-1);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <Pano
        panorama={panorama}
        setPanorama={setPanorama}
        setViewer={setViewer}
      />
      <PanoEditor
        panorama={panorama}
        viewer={viewer}
        infospots={infospots}
        setInfospots={setInfospots}
        infospotText={infospotText}
        setInfospotText={setInfospotText}
        currentInfospotIndex={currentInfospotIndex}
        setCurrentInfospotIndex={setCurrentInfospotIndex}
      />
      <PanoList
        infospots={infospots}
        setCurrentInfospotIndex={setCurrentInfospotIndex}
      />
    </div>
  );
}

export default App;
