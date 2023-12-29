import { Box, Typography } from "@mui/material";
import * as Layout from "./EquipmentsInfo.styles";
import { equipments } from "./data";

export default function EquipmentsInfo(props: any) {
  const currentEquip = equipments.find(
    (equip: any) => equip.name === props.equipment
  );
  return (
    <Layout.mainSection>
      <Typography variant="h3">{currentEquip?.name}</Typography>
      <Layout.sectionTitles variant="h5">
        O que o equipamento faz?
      </Layout.sectionTitles>
      {currentEquip?.basicInfo.map((item, i) => {
        return <Layout.text>{item}</Layout.text>;
      })}
      <Layout.sectionTitles variant="h5">Dicas</Layout.sectionTitles>
      {currentEquip?.tips.map((item, i) => {
        return <Layout.text>{item}</Layout.text>;
      })}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {currentEquip?.media?.map((item, i) => {
          return (
            <Box
              sx={{
                marginTop: "2rem",
                width: "45rem",
              }}
            >
              <Typography marginBottom={"1rem"} fontSize={"1.5rem"}>
                {item.title}
              </Typography>
              <iframe
                width="100%"
                height="350"
                src={item.media}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <Typography>{item.caption}</Typography>
            </Box>
          );
        })}
      </Box>
    </Layout.mainSection>
  );
}
