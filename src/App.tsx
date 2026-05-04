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
      backgroundColor: "#242424" // Цвет фона как в Unity, чтобы не было белых вспышек
    }}>
      <div style={{ 
        width: "100%", 
        height: "100%", 
        maxWidth: "412px", 
        maxHeight: "100vh",
        position: "relative"
      }}>
        <Unity
          unityProvider={unityProvider}
          style={{ 
            width: "100%", 
            height: "100%",
            display: "block" // Важно для корректного рендеринга canvas
          }}
        />
      </div>
    </div>
  );
}

export default App;
