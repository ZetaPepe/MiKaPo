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
import { KeyboardBackspace } from "@mui/icons-material";
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
  const [selectedModel, setSelectedModel] = useState<string>("Eye of Deep Space - Brahma 2");
  const [selectedBackground, setSelectedBackground] = useState<string>("Beach");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedAnimation, setSelectedAnimation] = useState<string>("");
  const [currentAnimationTime, setCurrentAnimationTime] = useState<number>(0);
  const [animationSeekTime, setAnimationSeekTime] = useState<number>(0);
  const [animationDuration, setAnimationDuration] = useState<number>(0);
  const [boneRotation, setBoneRotation] = useState<{ name: string; axis: string; value: number } | null>(null);
  const [materials, setMaterials] = useState<string[]>([]);
  const [materialVisible, setMaterialVisible] = useState<{ name: string; visible: boolean } | null>(null);
  const [motionMounted, setMotionMounted] = useState(false);

  // 添加状态控制提示框
  const [showPopup, setShowPopup] = useState<boolean>(true);

  useEffect(() => {
    if (activeTab === "motion" && !motionMounted) {
      setMotionMounted(true);
    }
  }, [activeTab, motionMounted]);

  // 自动隐藏提示框
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000); // 3秒后消失

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 右上角提示框 */}
      {showPopup && (
        <div className="popup">
          <p>Welcome to Mikiu!</p>
        </div>
      )}

      <Header />

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
    </>
  );
}

export default App;
