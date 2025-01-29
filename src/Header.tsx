import { Avatar, IconButton } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// 导入新的 Telegram 和 Twitter 图标
import { faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"

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
        <h2>MiKiu</h2>
      </div>

      {/* 添加自定义 margin-top 来调整 CA 文本与顶部的距离 */}
      <div className="header-item" style={{ marginTop: "70px" }}>
        <p>CA: 8Sgs7W1mL8cxsd31UKkKTXQjRwqdbLSzw3m9Pcsppump</p>
      </div>

      <div className="header-item" style={{ justifyContent: "flex-end" }}>
        {/* 将 Github 图标替换为 Telegram 图标 */}
        <a href="https://t.me/your-telegram-link" target="_blank">
          <IconButton>
            <FontAwesomeIcon icon={faTelegram} color="white" size="sm" />
          </IconButton>
        </a>
        {/* 将 Download 图标替换为 Twitter 图标 */}
        <a href="https://twitter.com/your-twitter-link" target="_blank">
          <IconButton size="small" color="inherit">
            <FontAwesomeIcon icon={faTwitter} color="white" size="sm" />
          </IconButton>
        </a>
        <a href="https://www.buymeacoffee.com/amyang" target="_blank">
          <img src="/coffee.png" alt="Buy Me A Coffee" width={140} height={34} />
        </a>
      </div>
    </header>
  )
}

export default Header
