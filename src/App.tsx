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
    height: "100dvh", 
    width: "100%", 
    maxWidth: "412px", 
    margin: "0 auto",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden"
    }}>
    <Unity
        unityProvider={unityProvider}
        style={{ width: "100%", height: "100%" }}
    />
    </div>
  );
}
export default App;