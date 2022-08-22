import { Box } from "@mui/material";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Brands = () => {
  return (
    <Box sx={{
      pt: 8,
      height: '300px',
      overflow: 'hidden',
    }}>
      <Carousel 
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        showArrows={false}
        interval={1000}
      >
        <div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82c7d4af-f961-4db5-ad23-d8fb05511d09/d7ccqvc-f9ce91e9-51b5-49cc-90c7-68a2c023556d.jpg/v1/fill/w_648,h_350,q_70,strp/concept_painting___grid_2_by_antifan_real_d7ccqvc-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAzNyIsInBhdGgiOiJcL2ZcLzgyYzdkNGFmLWY5NjEtNGRiNS1hZDIzLWQ4ZmIwNTUxMWQwOVwvZDdjY3F2Yy1mOWNlOTFlOS01MWI1LTQ5Y2MtOTBjNy02OGEyYzAyMzU1NmQuanBnIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.K2waG05rVp8RyPJerEwzeUg7GSgQdJQcZjutEzwY_nU" />
        </div>
        <div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/82c7d4af-f961-4db5-ad23-d8fb05511d09/dcagpr-b39281e3-852d-41dd-8dbe-8bea282cabc7.jpg/v1/fill/w_496,h_350,q_70,strp/type_25__2006__menace__by_antifan_real_dcagpr-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAzIiwicGF0aCI6IlwvZlwvODJjN2Q0YWYtZjk2MS00ZGI1LWFkMjMtZDhmYjA1NTExZDA5XC9kY2FncHItYjM5MjgxZTMtODUyZC00MWRkLThkYmUtOGJlYTI4MmNhYmM3LmpwZyIsIndpZHRoIjoiPD0xMjgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.eMEi3klHYo3cdDja8pBWOG2m7f6S-e8-DHuM33dGELg" />
        </div>
        <div>
          <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0c6e0590-011b-4912-bfe4-9353b6e5dc98/ddiwq0e-0f2e60c3-29d2-445b-803c-aaf90ed41621.jpg/v1/fill/w_661,h_350,q_70,strp/muscle_by_eddie_mendoza_ddiwq0e-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODQ3IiwicGF0aCI6IlwvZlwvMGM2ZTA1OTAtMDExYi00OTEyLWJmZTQtOTM1M2I2ZTVkYzk4XC9kZGl3cTBlLTBmMmU2MGMzLTI5ZDItNDQ1Yi04MDNjLWFhZjkwZWQ0MTYyMS5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7us7QnpcroU9konU81WOBavgOCcX-efmodyL_7ZeKHM" />
        </div>
      </Carousel>
    </Box>
  );
};

export default Brands;
