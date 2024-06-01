import { Box, Button, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import stars from "../../assets/about-images/Frame 203.png";
import user1 from "../../assets/about-images/Ellipse 127.png";

export default function ProductReview() {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "36px",
          fontWeight: 600,
          paddingLeft: "30px",
          marginTop: "30px",
        }}
      >
        Рецензии
      </Typography>
      <Typography
        sx={{ paddingLeft: "30px", fontSize: "20px", maringTop: "10px" }}
      >
        Погледни што мислат другите корисници
      </Typography>
      <Box sx={{ width: "100%", paddingLeft: "30px", marginBottom: "30px" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {" "}
          <Grid item xs={6}>
            <Typography
              sx={{ fontSize: "40px", fontWeight: "600", marginY: "10px" }}
            >
              <StarIcon sx={{ color: "#ffa500", fontSize: "35px" }}></StarIcon>
              4.1
            </Typography>
            <Typography sx={{ marginBottom: "10px" }}>
              од <b>321 одговори</b>
            </Typography>
            <Box
              sx={{ display: "flex", flexDirection: "column", marginY: "30px" }}
            >
              <Typography>
                {" "}
                5 <progress value={0.5} />
              </Typography>
              <Typography>
                {" "}
                4 <progress value={0.4} />
              </Typography>
              <Typography>
                {" "}
                3 <progress value={0.3} />
              </Typography>
              <Typography>
                {" "}
                2 <progress value={0.2} />
              </Typography>
              <Typography>
                {" "}
                1 <progress value={0.1} />
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                color: "white",
                backgroundColor: "black",
                borderRadius: "10px",
                border: "1px solid black",
                paddingX: "50px",
              }}
            >
              +Коментар
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex" }}>
              <img src={user1} alt="Stefan" />
              <Box>
                <Typography sx={{ marginX: "20px", fontSize: "30px" }}>
                  Стефан{" "}
                </Typography>
                <Typography sx={{ marginX: "20px", color: "grey" }}>
                  сега{" "}
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "270px", marginTop: "15px" }}>
                <img src={stars} alt="stars" />
              </Box>
            </Box>
            <Box>
              <Typography sx={{ width: "80%", marginY: "10px" }}>
                Дали ова веќе 2 недели го добив како замена за мојата постара
                серија од 600. Првично сакав да ја купам серијата 1000, но таа е
                распродадена насекаде.
              </Typography>
            </Box>
            <Box sx={{ display: "flex", marginTop: "60px" }}>
              <img src={user1} alt="Franjo" />
              <Box>
                <Typography sx={{ marginX: "20px", fontSize: "30px" }}>
                  Фрањо{" "}
                </Typography>
                <Typography sx={{ marginX: "20px", color: "grey" }}>
                  пред 3 дена{" "}
                </Typography>
              </Box>
              <Box sx={{ marginLeft: "270px", marginTop: "15px" }}>
                <img src={stars} alt="stars" />
              </Box>
            </Box>
            <Box>
              <Typography sx={{ width: "79%", marginY: "10px" }}>
                Го купив ова за смути и мило ми е што го направивте. Лесен е за
                употреба, многу брз и лесен за чистење. Го користевте и за да
                скршите блок сирење и брзо успеа.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
