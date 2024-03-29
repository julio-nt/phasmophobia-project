import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as Layout from "./Filter.styles";

export default function Filter({
  data,
  filter,
  setFilter,
}: {
  data: any;
  filter: string;
  setFilter: any;
}) {
  interface Ioption {
    label: string;
    value: string;
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id={data.id} sx={{ color: "lightGray" }}>
        {data.label}
      </InputLabel>
      <Layout.select
        labelId={data.id}
        id={data.id}
        value={filter}
        label={data.label}
        onChange={(e) => setFilter(e.target.value)}
      >
        <MenuItem value="All">
          <em>Todos</em>
        </MenuItem>
        {data.options.map((item: Ioption) => {
          return <MenuItem value={item.value}>{item.label}</MenuItem>;
        })}
      </Layout.select>
    </FormControl>
  );
}
