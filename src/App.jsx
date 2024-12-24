import { Boxes } from "./components/ui/background-boxes";
import { cn } from "./lib/utils";
import BackgroundBoxesDemo
  from "./components/elements/BackgroundBoxes";
import { TextRevealCardPreview } from "./components/elements/TextRevealCardPreview";
import Layout from "./components/layouts/Layout";

function App() {

  return (
    <Layout>
      <TextRevealCardPreview />
    </Layout>
  );
}

export default App
