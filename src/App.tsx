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
    height: "100vh",
    width: "412px", 
    maxWidth: "100vw", 
    margin: "0 auto",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    }}>
    <Unity
    unityProvider={unityProvider}
    style={{ width: "100%", height: "100%" }}
    />
    </div>
  );
}
export default App;