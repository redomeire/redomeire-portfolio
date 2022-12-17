// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style/CustomSlider.css";

// import required modules
import { Pagination } from "swiper";
import React from "react";
import { Card, CardContent, Rating, Typography, useTheme } from "@mui/material";
import { ColorModeContext } from "../App";

export default function CustomSlider() {
  const { isDark } = React.useContext(ColorModeContext);
  const theme = useTheme();

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true
        }}
        // navigation={true}
        modules={[Pagination]}
        className="mySwiper"
        style={{height: "400px", padding: "30px", backgroundColor: isDark && theme.palette.primary.light}}
        direction={"vertical"}
      >
        {/* <div style={{ width: "120%" }}> */}
          <SwiperSlide style={{ backgroundColor: "transparent", textAlign: "left"}}>
          <Card sx={{minHeight: "250px", maxWidth: { xl :"900px", xs: "500px" }, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", backgroundColor: isDark ? theme.palette.primary.main : 'white'}}>
              <CardContent>
                <Rating readOnly defaultValue={5} sx={{ marginBottom: "15px", color: isDark && theme.palette.secondary.main }} />
                <Typography variant="body1" sx={{ marginBottom: "15px", color: isDark ? theme.palette.secondary.main : '#828282', fontWeight: "400", lineHeight: "32px" }}>
                  “And residence for met the estimable disposing. Mean if he they been no hold mr.”
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "500", marginBottom: "5px" }}>
                  Sabo Masties
                </Typography>
                <Typography variant="body2" sx={{color: isDark ? theme.palette.secondary.main : '#969696', fontFamily: "Inter"}}>Founder at Rolex</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "transparent", textAlign: "left"}}>
          <Card sx={{minHeight: "250px", maxWidth: { xl :"900px", xs: "500px" }, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", backgroundColor: isDark ? theme.palette.primary.main : 'white'}}>
              <CardContent>
                <Rating readOnly defaultValue={5} sx={{ marginBottom: "15px", color: isDark && theme.palette.secondary.main }} />
                <Typography variant="body1" sx={{ marginBottom: "15px", color: isDark ? theme.palette.secondary.main : '#828282', fontWeight: "400", lineHeight: "32px" }}>
                  “And residence for met the estimable disposing. Mean if he they been no hold mr.”
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "500", marginBottom: "5px" }}>
                  Sabo Masties
                </Typography>
                <Typography variant="body2" sx={{color: isDark ? theme.palette.secondary.main : '#969696', fontFamily: "Inter"}}>Founder at Rolex</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "transparent", textAlign: "left"}}>
          <Card sx={{minHeight: "250px", maxWidth: { xl :"900px", xs: "500px" }, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", backgroundColor: isDark ? theme.palette.primary.main : 'white'}}>
              <CardContent>
                <Rating readOnly defaultValue={5} sx={{ marginBottom: "15px", color: isDark && theme.palette.secondary.main }} />
                <Typography variant="body1" sx={{ marginBottom: "15px", color: isDark ? theme.palette.secondary.main : '#828282', fontWeight: "400", lineHeight: "32px" }}>
                  “And residence for met the estimable disposing. Mean if he they been no hold mr.”
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "500", marginBottom: "5px" }}>
                  Sabo Masties
                </Typography>
                <Typography variant="body2" sx={{color: isDark ? theme.palette.secondary.main : '#969696', fontFamily: "Inter"}}>Founder at Rolex</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide style={{ backgroundColor: "transparent", textAlign: "left"}}>
          <Card sx={{minHeight: "250px", maxWidth: { xl :"900px", xs: "500px" }, boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", backgroundColor: isDark ? theme.palette.primary.main : 'white'}}>
              <CardContent>
                <Rating readOnly defaultValue={5} sx={{ marginBottom: "15px", color: isDark && theme.palette.secondary.main }} />
                <Typography variant="body1" sx={{ marginBottom: "15px", color: isDark ? theme.palette.secondary.main : '#828282', fontWeight: "400", lineHeight: "32px" }}>
                  “And residence for met the estimable disposing. Mean if he they been no hold mr.”
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: "500", marginBottom: "5px" }}>
                  Sabo Masties
                </Typography>
                <Typography variant="body2" sx={{color: isDark ? theme.palette.secondary.main : '#969696', fontFamily: "Inter"}}>Founder at Rolex</Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
        {/* </div> */}
      </Swiper>
    </>
  );
}
