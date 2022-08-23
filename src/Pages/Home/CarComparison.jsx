import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { Link } from 'react-router-dom'

const CarComparison = () => {
  return (
    <Box sx={{ p: "3rem 0", m: 3 }}>
      <Typography align="center" p={3} variant="h4" fontWeight={600}>
        Cars Comparision
      </Typography>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "max-content",
            }}
          >
            <Card sx={{ width: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="car"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/727935c1-08fc-4f9d-86c8-25b003c68c70/d6ni4dk-3119b9a4-99c7-482c-920e-8bdd79990661.jpg/v1/fill/w_1552,h_515,q_70,strp/car_design_by_matiasmurad_d6ni4dk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY0IiwicGF0aCI6IlwvZlwvNzI3OTM1YzEtMDhmYy00ZjlkLTg2YzgtMjViMDAzYzY4YzcwXC9kNm5pNGRrLTMxMTliOWE0LTk5YzctNDgyYy05MjBlLThiZGQ3OTk5MDY2MS5qcGciLCJ3aWR0aCI6Ijw9MTcwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uFxjTq2h2c84ZlPeOCGsJZQfjFl68DXkE6CILav45_4"
                />
                <CardContent>
                  <Typography variant={"h5"}>car name 1</Typography>
                  <Typography color="orange">1000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Avatar component={Link} to='/' sx={{textDecoration: 'none'}}>VS</Avatar>
            <Card sx={{ width: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="car"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82c7d4af-f961-4db5-ad23-d8fb05511d09/ddsmik-90201fb4-5ce7-49b0-84a6-5e5c70e5bd34.jpg/v1/fill/w_700,h_339,q_70,strp/type_25__2006__velocity__by_antifan_real_ddsmik-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk2IiwicGF0aCI6IlwvZlwvODJjN2Q0YWYtZjk2MS00ZGI1LWFkMjMtZDhmYjA1NTExZDA5XC9kZHNtaWstOTAyMDFmYjQtNWNlNy00OWIwLTg0YTYtNWU1YzcwZTViZDM0LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vqTyUzY2FVl1gTiqYjltJJ1urnOkkxzbhiNWIcHu96M"
                />
                <CardContent>
                  <Typography variant={"h5"}>car name 3</Typography>
                  <Typography color="orange">4000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "max-content",
            }}
          >
            <Card sx={{ width: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="car"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/727935c1-08fc-4f9d-86c8-25b003c68c70/d6ni4dk-3119b9a4-99c7-482c-920e-8bdd79990661.jpg/v1/fill/w_1552,h_515,q_70,strp/car_design_by_matiasmurad_d6ni4dk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY0IiwicGF0aCI6IlwvZlwvNzI3OTM1YzEtMDhmYy00ZjlkLTg2YzgtMjViMDAzYzY4YzcwXC9kNm5pNGRrLTMxMTliOWE0LTk5YzctNDgyYy05MjBlLThiZGQ3OTk5MDY2MS5qcGciLCJ3aWR0aCI6Ijw9MTcwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uFxjTq2h2c84ZlPeOCGsJZQfjFl68DXkE6CILav45_4"
                />
                <CardContent>
                  <Typography variant={"h5"}>car name 1</Typography>
                  <Typography color="orange">1000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Avatar>VS</Avatar>
            <Card sx={{ width: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="car"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82c7d4af-f961-4db5-ad23-d8fb05511d09/ddsmik-90201fb4-5ce7-49b0-84a6-5e5c70e5bd34.jpg/v1/fill/w_700,h_339,q_70,strp/type_25__2006__velocity__by_antifan_real_ddsmik-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk2IiwicGF0aCI6IlwvZlwvODJjN2Q0YWYtZjk2MS00ZGI1LWFkMjMtZDhmYjA1NTExZDA5XC9kZHNtaWstOTAyMDFmYjQtNWNlNy00OWIwLTg0YTYtNWU1YzcwZTViZDM0LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vqTyUzY2FVl1gTiqYjltJJ1urnOkkxzbhiNWIcHu96M"
                />
                <CardContent>
                  <Typography variant={"h5"}>car name 3</Typography>
                  <Typography color="orange">4000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </SwiperSlide>
        <SwiperSlide>
          <Paper
            elevation={3}
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "max-content",
            }}
          >
            <Card sx={{ width: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="car"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/727935c1-08fc-4f9d-86c8-25b003c68c70/d6ni4dk-3119b9a4-99c7-482c-920e-8bdd79990661.jpg/v1/fill/w_1552,h_515,q_70,strp/car_design_by_matiasmurad_d6ni4dk-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTY0IiwicGF0aCI6IlwvZlwvNzI3OTM1YzEtMDhmYy00ZjlkLTg2YzgtMjViMDAzYzY4YzcwXC9kNm5pNGRrLTMxMTliOWE0LTk5YzctNDgyYy05MjBlLThiZGQ3OTk5MDY2MS5qcGciLCJ3aWR0aCI6Ijw9MTcwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.uFxjTq2h2c84ZlPeOCGsJZQfjFl68DXkE6CILav45_4"
                />
                <CardContent>
                  <Typography variant={"h5"}>car name 1</Typography>
                  <Typography color="orange">1000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Avatar>VS</Avatar>
            <Card sx={{ width: 250 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  alt="car"
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82c7d4af-f961-4db5-ad23-d8fb05511d09/ddsmik-90201fb4-5ce7-49b0-84a6-5e5c70e5bd34.jpg/v1/fill/w_700,h_339,q_70,strp/type_25__2006__velocity__by_antifan_real_ddsmik-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NDk2IiwicGF0aCI6IlwvZlwvODJjN2Q0YWYtZjk2MS00ZGI1LWFkMjMtZDhmYjA1NTExZDA5XC9kZHNtaWstOTAyMDFmYjQtNWNlNy00OWIwLTg0YTYtNWU1YzcwZTViZDM0LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.vqTyUzY2FVl1gTiqYjltJJ1urnOkkxzbhiNWIcHu96M"
                />
                <CardContent>
                  <Typography variant={"h5"}>car name 3</Typography>
                  <Typography color="orange">4000</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Paper>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default CarComparison;
