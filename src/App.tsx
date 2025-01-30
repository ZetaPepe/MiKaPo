import { useEffect, useState } from "react";
import Motion from "./Motion";
import MMDScene from "./MMDScene";
import Materials from "./Materials";
import Model from "./Model";
import Animation from "./Animation";
import Header from "./Header";
import Footer from "./Footer";
import Skeleton from "./Skeleton";
import Background from "./Background";
import { Drawer, IconButton } from "@mui/material";
import { KeyboardBackspace, Close } from "@mui/icons-material"; // 关闭按钮
import { Body } from "./index";

function App(): JSX.Element {
  const [body, setBody] = useState<Body>({
    mainBody: null,
    leftHand: null,
    rightHand: null,
    face: null,
  });

  const [lerpFactor, setLerpFactor] = useState<number>(0.5);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("");
  const [selectedModel, setSelectedModel] = useState<string>("Eye of Deep Space-Thoth");
  const [selectedBackground, setSelectedBackground] = useState<string>("Static");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedAnimation, setSelectedAnimation] = useState<string>("");
  const [currentAnimationTime, setCurrentAnimationTime] = useState<number>(0);
  const [animationSeekTime, setAnimationSeekTime] = useState<number>(0);
  const [animationDuration, setAnimationDuration] = useState<number>(0);
  const [boneRotation, setBoneRotation] = useState<{ name: string; axis: string; value: number } | null>(null);
  const [materials, setMaterials] = useState<string[]>([]);
  const [materialVisible, setMaterialVisible] = useState<{ name: string; visible: boolean } | null>(null);
  const [motionMounted, setMotionMounted] = useState(false);

  // 先显示提示框，等提示框消失后才显示3D模型
  const [showPopup, setShowPopup] = useState<boolean>(true);
  const [showModel, setShowModel] = useState<boolean>(false);
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    if (activeTab === "motion" && !motionMounted) {
      setMotionMounted(true);
    }
  }, [activeTab, motionMounted]);

  // 6 秒后隐藏提示框，然后显示 3D 模型
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
    <div>
      {/* 提示框 */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
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
          }}
        >
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

          <h2 style={{ margin: "0 0 10px", fontSize: "22px", fontWeight: "bold" }}>
            Welcome to Mikiu!
          </h2>

          <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.5", maxWidth: "350px" }}>
            First 3D AI Agent Platform, allowing users to recreate and display Mikiu Agent.
            Using 3D Motion Capture & MMD Model Technology to interact with MIKIU.
          </p>

          <button
            onClick={() => {
              setOpacity(0);
              setTimeout(() => {
                setShowPopup(false);
                setShowModel(true);
              }, 500);
            }}
            style={{
              marginTop: "15px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "#007bff",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
          >
            Enter
          </button>
        </div>
      )}

      <Header />

      {showModel && (
        <MMDScene
          selectedModel={selectedModel}
          selectedBackground={selectedBackground}
          selectedAnimation={selectedAnimation}
          setSelectedAnimation={setSelectedAnimation}
          body={body}
          lerpFactor={lerpFactor}
          boneRotation={boneRotation}
          setMaterials={setMaterials}
          materialVisible={materialVisible}
          setCurrentAnimationTime={setCurrentAnimationTime}
          setAnimationDuration={setAnimationDuration}
          animationSeekTime={animationSeekTime}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}

      <Drawer
        variant="persistent"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        sx={{
          [`& .MuiDrawer-paper`]: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            minWidth: "210px",
          },
        }}
      >
        <IconButton onClick={() => setOpenDrawer(false)} sx={{ position: "absolute", top: 0, right: ".5rem" }}>
          <KeyboardBackspace sx={{ color: "white" }} />
        </IconButton>

        {motionMounted && (
          <Motion
            body={body}
            setBody={setBody}
            setLerpFactor={setLerpFactor}
            style={{ display: activeTab === "motion" ? "block" : "none" }}
          />
        )}
        {activeTab === "material" && <Materials materials={materials} setMaterialVisible={setMaterialVisible} />}
        {activeTab === "skeleton" && <Skeleton setBoneRotation={setBoneRotation} />}
        {activeTab === "animation" && (
          <Animation
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            setSelectedAnimation={setSelectedAnimation}
            currentAnimationTime={currentAnimationTime}
            setAnimationSeekTime={setAnimationSeekTime}
            animationDuration={animationDuration}
          />
        )}
        {activeTab === "model" && <Model setSelectedModel={setSelectedModel} />}
        {activeTab === "background" && (
          <Background selectedBackground={selectedBackground} setSelectedBackground={setSelectedBackground} />
        )}
      </Drawer>
      <Footer setOpenDrawer={setOpenDrawer} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
