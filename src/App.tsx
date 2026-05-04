import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: `./unity/docs.loader.js`,
    dataUrl: `./unity/docs.data`,
    frameworkUrl: `./unity/docs.framework.js`,
    codeUrl: `./unity/docs.wasm`,
  });

  return (
  <div style={{ 
    width: "100vw", 
    height: "100vh", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#1a1a1a",
    overflow: "hidden"
  }}>
    <div style={{ 
      height: "100%",
      aspectRatio: "9 / 16",
      maxHeight: "100vh",
      maxWidth: "100vw",
      position: "relative"
    }}>
      <Unity
        unityProvider={unityProvider}
        style={{ 
          width: "100%", 
          height: "100%",
          display: "block"
        }}
      />
    </div>
  </div>
);
}
export default App;