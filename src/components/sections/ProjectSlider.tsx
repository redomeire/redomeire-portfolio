import "swiper/css";

import { Typography } from "@mui/material";
import { FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSlider = () => {
  return (
    <div>
      <Typography
        variant="h2"
        sx={{ textAlign: "center", marginTop: "100px", fontWeight: "500", fontFamily: "Amiri" }}>
        Recent Works
      </Typography>
      <Swiper modules={[FreeMode]}>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>1</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
