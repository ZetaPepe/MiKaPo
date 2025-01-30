import { useEffect, useState } from "react";
import MMDScene from "./MMDScene";
import Header from "./Header";
import Footer from "./Footer";
import { Close } from "@mui/icons-material"; // 关闭按钮

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

  // 关闭提示框并显示 3D 模型
  const handleEnter = () => {
    setOpacity(0);
    setTimeout(() => {
      setShowPopup(false);
      setShowModel(true);
    }, 500);
  };

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
            backgroundColor: "transparent", // 让提示框全透明
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
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)", // 文字光晕效果
          }}
        >
          {/* 关闭按钮 */}
          <button
            onClick={handleEnter}
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

          {/* Enter 按钮 */}
          <button
            onClick={handleEnter}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              background: "rgba(255, 255, 255, 0.2)",
              border: "2px solid white",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
              textTransform: "uppercase",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.5)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)")}
          >
            Enter
          </button>
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
