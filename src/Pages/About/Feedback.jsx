import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Chip, Divider, Typography } from "@mui/material";

export default function Feedback() {
  return (
    <Box p={8}>
      <Typography p={5} variant='h4' fontWeight={600} align='center'>
        Clients FeedBack
      </Typography>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
            <Typography variant="body1" align='center'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, doloribus deleniti! Deleniti aspernatur accusantium delectus ducimus alias possimus, accusamus ullam rem iure distinctio, quisquam aliquam, eaque vero autem perferendis maxime?
            </Typography>
            <Divider>
              <Chip label={<KeyboardArrowUpIcon />} />
            </Divider>
            <Typography variant="h6" fontWeight={600} align='center'>username</Typography>
            <Typography variant="body2" align='center'>company name</Typography>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
            <Typography variant="body1" align='center'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, doloribus deleniti! Deleniti aspernatur accusantium delectus ducimus alias possimus, accusamus ullam rem iure distinctio, quisquam aliquam, eaque vero autem perferendis maxime?
            </Typography>
            <Divider>
              <Chip label={<KeyboardArrowUpIcon />} />
            </Divider>
            <Typography variant="h6" fontWeight={600} align='center'>username</Typography>
            <Typography variant="body2" align='center'>company name</Typography>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
