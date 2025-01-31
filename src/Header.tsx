import { Avatar, IconButton } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"

function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="header-item" style={{ justifyContent: "flex-start" }}>
        <Avatar
          alt="Mikiu"
          src="/logo.png"
          sx={{
            width: 36,
            height: 36,
            marginRight: ".5rem",
            transition: "transform 2s ease-in-out",
            "&:hover": {
              transform: "rotate(360deg)",
            },
          }}
        />
        {/* 修改字体样式为艺术体，并设置为白色 */}
        <h2
          style={{
            fontFamily: "'Brush Script MT', cursive", // 使用艺术字体
            fontSize: "2.5rem", // 字体大小
            color: "white", // 字体颜色设置为白色
            fontWeight: "normal", // 字体重量为正常
            letterSpacing: "2px", // 字母间距
          }}
        >
          Mikiu
        </h2>
      </div>

      <div className="header-item" style={{ marginTop: "50px" }}>
        <p> </p>
      </div>

      <div className="header-item" style={{ justifyContent: "flex-end" }}>
        <a href="https://github.com/AugustineBernal/Mikiu" target="_blank">
          <IconButton>
            <FontAwesomeIcon icon={faGithub} color="white" size="sm" />
          </IconButton>
        </a>
        <a href="https://t.me/your-telegram-link" target="_blank">
          <IconButton>
            <FontAwesomeIcon icon={faTelegram} color="white" size="sm" />
          </IconButton>
        </a>
        <a href="https://x.com/mikiuai" target="_blank">
          <IconButton size="small" color="inherit">
            <FontAwesomeIcon icon={faTwitter} color="white" size="sm" />
          </IconButton>
        </a>
      </div>
    </header>
  )
}

export default Header
