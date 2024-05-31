import { Box, Typography } from "@mui/material";

export default function TestCard() {
  return (
    <Box sx={{ padding: "20px" }}>
      <Box>
        <img
          src="../../../src/assets/products-img/Pic placeholder.png"
          alt=""
          style={{ borderRadius: "20px", width: "300px" }}
        />
        <Typography sx={{ fontWeight: "600", marginY: "10px" }}>
          Нешто за бледнерот
        </Typography>
        <Typography sx={{ fontSize: "10px" }}>
          Секоe семејство има различни потреби. Ние имаме неколку видови на
          блендери.. <b>Види повеќе</b>
        </Typography>
      </Box>
    </Box>
  );
}
