import { AppBar, IconButton, Toolbar } from "@mui/material";
import { StyledTypography } from "./style";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import { InnerContainer } from "../../screens/Home/styles";
export default function NavBar() {
  return (
    <AppBar position="static" sx={{ background: "#2b6777" }}>
      <InnerContainer
        style={{ flexDirection: "row", justifyContent: "space-between" }}
      >
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <PlaylistAddCheckIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <div style={{ width: "55%" }}>
          <StyledTypography
            fontSize="30px"
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            To Do List App
          </StyledTypography>
        </div>
      </InnerContainer>
    </AppBar>
  );
}
