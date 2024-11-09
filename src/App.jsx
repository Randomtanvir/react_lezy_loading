import { Suspense, useState } from "react";
import demos from "./data/demos";
import importDemo from "./utils/importDemo";

export default function App() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const loadDamo = async (file) => {
    const Demo = await importDemo(file);
    return <Demo />;
  };

  const selectedDamo = async (file) => {
    const DemoComponent = await loadDamo(file);

    setSelectedDemo(DemoComponent);
    console.log(selectedDemo);
  };

  return (
    <div>
      <div>
        <h1>React Lazy load explained</h1>

        <div>
          {demos.map((damo) => (
            <button key={damo.name} onClick={() => selectedDamo(damo.file)}>
              {damo.file}
            </button>
          ))}
        </div>

        <Suspense fallback={<h1>Loading...</h1>}>
          <div>{selectedDemo}</div>
        </Suspense>
      </div>
    </div>
  );
}
