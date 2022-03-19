import { useEffect } from "react";
import * as PANOLENS from "../../node_modules/panolens/build/panolens";

const Pano = ({ panorama, setPanorama, setViewer }) => {
  useEffect(() => {
    const panorama = new PANOLENS.ImagePanorama("/assets/pano.jpg");
    const viewer = new PANOLENS.Viewer({
      container: document.querySelector("#coucou"),
      output: "test",
    });

    viewer.add(panorama);
    console.log(viewer);
    setPanorama(panorama);
    setViewer(viewer);
  }, [setPanorama, setViewer]);

  return (
    <>
      <div
        id="coucou"
        style={{
          width: "1500px",
          height: "800px",
        }}
      ></div>
    </>
  );
};

export default Pano;
