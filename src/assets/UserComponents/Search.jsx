import { Input } from "@mantine/core";

const Search=()=>{
  const [value, setValue] = useState("clearable");

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={
        value !== "" ? (
          <Input.ClearButton onClick={() => setValue("")} />
        ) : undefined
      }
      rightSectionPointerEvents="auto"
      size="sm"
    />
  );
}

export default Search;
