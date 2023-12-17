import { Typography } from "@mui/material";
import * as Layout from "./Equipments.styles";
import { equipmentsBr } from "./data";

const labelsBr = {
  primary: "Primário",
  secondary: "Secondário",
  findGhostRoom: "Achar local",
  evidence: "Achar evidência",
  test: "Testes",
};

export default function Equipments() {
  return (
    <Layout.mainSection>
      <Layout.equip>
        <Layout.equipSections>
          <Layout.equipTitles variant="h5">
            {labelsBr.primary}
          </Layout.equipTitles>
          {equipmentsBr.map((item, i) => {
            return item.primary ? (
              <Layout.equipNames
                href={`/equipment/${item.name}`}
                key={item.name}
              >
                <Typography>{item.name}</Typography>
              </Layout.equipNames>
            ) : null;
          })}
        </Layout.equipSections>
        <Layout.equipSections>
          <Layout.equipTitles variant="h5">
            {labelsBr.secondary}
          </Layout.equipTitles>
          {equipmentsBr.map((item, i) => {
            return item.secondary ? (
              <Layout.equipNames
                href={`/equipment/${item.name}`}
                key={item.name}
              >
                <Typography>{item.name}</Typography>
              </Layout.equipNames>
            ) : null;
          })}
        </Layout.equipSections>
      </Layout.equip>
      <Layout.equip>
        <Layout.equipSections>
          <Layout.equipTitles variant="h5">
            {labelsBr.findGhostRoom}
          </Layout.equipTitles>
          {equipmentsBr.map((item, i) => {
            return item.findGhost ? (
              <Layout.equipNames
                href={`/equipment/${item.name}`}
                key={item.name}
              >
                <Typography>{item.name}</Typography>
              </Layout.equipNames>
            ) : null;
          })}
        </Layout.equipSections>
        <Layout.equipSections>
          <Layout.equipTitles variant="h5">
            {labelsBr.evidence}
          </Layout.equipTitles>
          {equipmentsBr.map((item, i) => {
            return item.findEvidence ? (
              <Layout.equipNames
                href={`/equipment/${item.name}`}
                key={item.name}
              >
                <Typography>{item.name}</Typography>
              </Layout.equipNames>
            ) : null;
          })}
        </Layout.equipSections>
        <Layout.equipSections>
          <Layout.equipTitles variant="h5">{labelsBr.test}</Layout.equipTitles>
          {equipmentsBr.map((item, i) => {
            return item.test ? (
              <Layout.equipNames
                href={`/equipment/${item.name}`}
                key={item.name}
              >
                <Typography>{item.name}</Typography>
              </Layout.equipNames>
            ) : null;
          })}
        </Layout.equipSections>
      </Layout.equip>
    </Layout.mainSection>
  );
}
