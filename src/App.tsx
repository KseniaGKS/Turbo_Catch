import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: `./unity/docs.loader.js`,
    dataUrl: `./unity/docs.data`,
    frameworkUrl: `./unity/docs.framework.js`,
    codeUrl: `./unity/docs.wasm`,
  });

  return (
    <div className="wrapper">
      <div className="game-container">
        <Unity
          unityProvider={unityProvider}
          style={{ width: "100%", height: "100%" }}
          devicePixelRatio={Math.min(window.devicePixelRatio, 2)}
          matchWebGLToCanvasSize={true}
        />
      </div>
    </div>
  );
}
export default App;
