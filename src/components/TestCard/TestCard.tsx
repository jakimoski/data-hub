import { Box, Typography } from "@mui/material";
import image from "../../assets/products-img/Pic placeholder.png";

export default function TestCard() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box>
        <img
          src={image}
          alt=""
          style={{ borderRadius: "20px", width: "437px" }}
        />
        <Typography sx={{ fontWeight: "600", marginY: "10px" }}>
          Нешто за бледнерот
        </Typography>
        <Typography sx={{ fontSize: "16px" }}>
          Секој корисник и секое семејство има различни потреби. Ние имаме
          неколку видови на блендери нешто дуго бла... <b>Види повеќе</b>
        </Typography>
      </Box>
    </Box>
  );
}
