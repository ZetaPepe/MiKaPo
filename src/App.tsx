import { useEffect, useState } from "react";
import MMDScene from "./MMDScene";
import Header from "./Header";
import Footer from "./Footer";
import { Close } from "@mui/icons-material"; // 仅保留 "×" 关闭按钮
import { Body } from "./index";

function App(): JSX.Element {
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0);
      setTimeout(() => {
        setShowPopup(false);
        setShowModel(true);
      }, 500);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 提示框 */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "transparent",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            fontSize: "18px",
            textAlign: "center",
            width: "400px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: opacity,
            transition: "opacity 0.5s ease-in-out",
            zIndex: 9999,
            fontFamily: "'Orbitron', sans-serif",
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
          }}
        >
          {/* 关闭按钮 */}
          <button
            onClick={() => {
              setOpacity(0);
              setTimeout(() => {
                setShowPopup(false);
                setShowModel(true);
              }, 500);
            }}
            style={{
              position: "absolute",
              top: "8px",
              right: "8px",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Close style={{ color: "white", fontSize: "20px" }} />
          </button>

          {/* 标题文本 */}
          <h2 style={{ margin: "0 0 10px", fontSize: "22px", fontWeight: "bold" }}>
            Welcome to Mikiu!
          </h2>

          {/* 介绍文本 */}
          <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", maxWidth: "350px" }}>
            First 3D AI Agent Platform, allowing users to recreate and display Mikiu Agent.
            Using 3D Motion Capture & MMD Model Technology to interact with MIKIU.
          </p>
        </div>
      )}

      <Header />

      {/* 6 秒后才显示 3D 模型 */}
      {showModel && <MMDScene />}

      <Footer />
    </>
  );
}

export default App;
