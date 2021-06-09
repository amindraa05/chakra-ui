import { Box,Container } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <>
    <Container minWidth="6xl" h="100vh" bg={{base:"red", md:"green",lg:"teal"}} paddingX={{base: "7",md:"20",lg:"20"}}> 
      <Box bg="tomato" w="100%" p={4} color="white" >
        This is the Box 
      </Box>
    </Container>
    </>
  );
}

export default App;
