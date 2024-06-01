import { Box, Typography, Button } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Section from "../Section/Section";

import partner1 from "../../assets/partners-image/Rectangle 135.png";
import partner2 from "../../assets/partners-image/Rectangle 136.png";
import partner3 from "../../assets/partners-image/Frame 20023.png";
import partner4 from "../../assets/partners-image/Frame 20024.png";
import partner5 from "../../assets/partners-image/Frame 20025 copy.png";
import partner6 from "../../assets/partners-image/Frame 20026.png";

export default function Partners() {
  return (
    <div className="bg-grey">
      <Section>
        <Box
          sx={{
            backgroundColor: "#f6f6f6",
            paddingX: "20px",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Typography sx={{ fontSize: "36px", fontWeight: 600 }}>
              Партнери
            </Typography>
            <Button
              sx={{ width: "150px", textTransform: "none", color: "black" }}
              variant="text"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Види повеќе
            </Button>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingX: "30px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={partner1} alt="Merkur" />
              <Typography sx={{ marginTop: "10px" }}>Меркур</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={partner2} alt="Neptun" />
              <Typography sx={{ marginTop: "10px" }}>Нептун</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={partner3} alt="Mebel-Vi" />
              <Typography sx={{ marginTop: "10px" }}>Мебел-ВИ</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={partner4} alt="Tehno-Market" />
              <Typography sx={{ marginTop: "10px" }}>Техно Маркет</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={partner5} alt="Mr-Bricolage" />
              <Typography sx={{ marginTop: "10px" }}>
                Г-дин. Бриколаж
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <img src={partner6} alt="Anhoch" />
              <Typography sx={{ marginTop: "10px" }}> Анхоч</Typography>
            </Box>
          </Box>
        </Box>
      </Section>
    </div>
  );
}
