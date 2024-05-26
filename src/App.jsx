import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx"; // Import the new AddPost component
import { useColorMode } from "@chakra-ui/react"; // Import useColorMode hook

function App() {
  const { colorMode, toggleColorMode } = useColorMode(); // Destructure colorMode and toggleColorMode

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index colorMode={colorMode} toggleColorMode={toggleColorMode} />} />
      <Route path="/add-post" element={<AddPost />} /> {/* Add route for AddPost */}
      </Routes>
    </Router>
  );
}

export default App;
