import { Unity, useUnityContext } from "react-unity-webgl";

const BUILD_PATH = `${import.meta.env.BASE_URL}unity`;

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: `unity/docs.loader.js`,
    dataUrl: `unity/docs.data`,
    frameworkUrl: `unity/docs.framework.js`,
    codeUrl: `unity/docs.wasm`,
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
      <Unity
        unityProvider={unityProvider}
        style={{ 
          aspectRatio: "9 / 16", 
          height: "100%", 
          width: "100%",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)"
        }}
      />
    </div>
  );
}

export default App;
