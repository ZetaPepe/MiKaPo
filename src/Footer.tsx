import { FontAwesomeIcon } from "@fortawesome/react-fontawesome" 
import { faBone, faFilm, faPanorama, faUser } from "@fortawesome/free-solid-svg-icons"
import { Fab, Tooltip } from "@mui/material"

function Footer({
  setOpenDrawer,
  setActiveTab,
}: {
  setOpenDrawer: (open: boolean) => void
  setActiveTab: (tab: string) => void
}): JSX.Element {
  const colorPalette = {
    skeleton: "#3498DB", // Peter River Blue
    background: "#9B59B6", // Amethyst
    model: "#FF8C00", // Dark Orange
    animation: "#E74C3C", // Alizarin Red
  }

  const items = [
    { name: "Model", icon: faUser, color: colorPalette.model },
    { name: "Background", icon: faPanorama, color: colorPalette.background },
    { name: "Skeleton", icon: faBone, color: colorPalette.skeleton },
    { name: "Animation", icon: faFilm, color: colorPalette.animation },
  ];

  const radius = 90; // 设定半径
  const startAngle = 45; // 起始角度
  const endAngle = 135; // 结束角度
  const stepAngle = (endAngle - startAngle) / (items.length - 1); // 计算每个按钮的间隔角度

  return (
    <div className="footer">
      {items.map(({ name, icon, color }, index) => {
        const angle = startAngle + stepAngle * index; // 计算当前按钮的角度
        const radian = (angle * Math.PI) / 180; // 角度转弧度
        const x = 50 + radius * Math.cos(radian); // 计算X坐标
        const y = 50 + radius * Math.sin(radian); // 计算Y坐标

        return (
          <Tooltip key={index} title={name}>
            <Fab
              style={{
                position: "absolute",
                right: x, // 让按钮沿着弧形排列
                bottom: y,
                width: "36px",
                height: "36px",
                backgroundColor: color,
              }}
              onClick={() => {
                setActiveTab(name.toLowerCase());
                setOpenDrawer(true);
              }}
            >
              <FontAwesomeIcon icon={icon} color="white" size="lg" />
            </Fab>
          </Tooltip>
        );
      })}
    </div>
  );
}

export default Footer;
