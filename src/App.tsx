import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: `./unity/docs.loader.js`,
    dataUrl: `./unity/docs.data`,
    frameworkUrl: `./unity/docs.framework.js`,
    codeUrl: `./unity/docs.wasm`,
  });

  return (
    // Внешний контейнер на весь экран
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#222" // Добавил цвет, чтобы вы видели границы
    }}>
      {/* Внутренний контейнер игры */}
      <div style={{ 
        height: "100vh",
        width: "412px", 
        maxWidth: "100vw", 
        position: "relative"
      }}>
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
export default App;