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

  const radius = 100; // 增加半径，使按钮分布更均匀
  const startAngle = 30; // 起始角度
  const endAngle = 120; // 结束角度
  const stepAngle = (endAngle - startAngle) / (items.length - 1); // 计算每个按钮的间隔角度

  return (
    <div className="footer">
      {items.map(({ name, icon, color }, index) => {
        const angle = startAngle + stepAngle * index; // 计算当前按钮的角度
        const radian = (angle * Math.PI) / 180; // 角度转弧度
        const x = 65 + radius * Math.cos(radian); // **减少基础值，往左移动**
        const y = 50 + radius * Math.sin(radian); // 计算Y坐标

        return (
          <Tooltip key={index} title={name}>
            <Fab
              style={{
                position: "absolute",
                right: x, // 向左移动
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
