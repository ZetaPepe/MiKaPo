import { Avatar, IconButton } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { Download } from "@mui/icons-material"

function Header(): JSX.Element {
  return (
    <header className="header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <div className="header-item" style={{ justifyContent: "flex-start", display: 'flex', alignItems: 'center' }}>
        <Avatar
          alt="MiKaPo"
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
        <h2>MiKaPo</h2>
      </div>

      <div className="header-item" style={{ marginTop: '10px' }}>
        {/* 让 CA 在新的一行显示 */}
        <p>CA: 8Sgs7W1mL8cxsd31UKkKTXQjRwqdbLSzw3m9Pcsppump</p>
      </div>

      <div className="header-item" style={{ justifyContent: "flex-end", display: 'flex', alignItems: 'center' }}>
        <a href="https://github.com/AmyangXYZ/MiKaPo" target="_blank">
          <IconButton>
            <FontAwesomeIcon icon={faGithub} color="white" size="sm" />
          </IconButton>
        </a>
        <a href="https://github.com/AmyangXYZ/MiKaPo-Electron" target="_blank">
          <IconButton size="small" color="inherit">
            <Download sx={{ color: "white", fontSize: "1.5rem", marginTop: ".2rem" }} />
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
