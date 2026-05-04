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
    /* Контейнер, который центрирует игру и создает черный фон вокруг */
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
          // Укажите пропорции как в симуляторе (например, 9/16 для телефона или 16/9 для монитора)
          aspectRatio: "9 / 16", 
          height: "100%", 
          width: "auto",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)" // Немного тени для красоты
        }}
      />
    </div>
  );
}

export default App;
