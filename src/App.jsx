import { Box, Heading } from "@kuma-ui/core";
function App() {
  return (
    <Box
      // as="h1" // Use to alter the rendered element to any HTML element a user defines
      bgColor="red"
      height="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={64}
      p={24}
      _hover={{
        bgColor: "green"
      }}
    >
      <Heading color="brown" p={32} bgColor="yellow" fontSize="120px">
        Hello World
      </Heading>
    </Box>
  );
}

export default App;
