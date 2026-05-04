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
      margin: 0,
      overflow: "hidden"
    }}>
      <div style={{ 
        // Хитрость здесь: ширина всегда будет 9/16 от высоты экрана
        height: "100vh",
        width: "calc(100vh * 9 / 16)", 
        maxWidth: "100vw", // Чтобы на узких телефонах не вылезало за края
        position: "relative",
        display: "flex"
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