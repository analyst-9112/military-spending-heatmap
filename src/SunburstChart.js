import React, { useState } from "react";
import { ResponsiveSunburst } from "@nivo/sunburst";
import OriginalData from "./data.json";

console.clear();

const flatten = (data) =>
  data.reduce((acc, item) => {
    if (item.children) {
      return [...acc, item, ...flatten(item.children)];
    }

    return [...acc, item];
  }, []);

const findObject = (data, name) =>
  data.find((searchedName) => searchedName.name === name);

const SunburstChart = () => {
  const [data, setData] = useState(OriginalData);

  const handleClick = (clickedData, event) => {
    const foundObject = findObject(flatten(data.children), clickedData.id);
    if (foundObject && foundObject.children) {
      setData(foundObject);
    }
  };

  return (
    <div>
      <div className="sunburst" style={{ height: "800px" }}>
        <ResponsiveSunburst
          valueFormat=" >-$,.2f"
          theme={{
            tooltip: {
              container: {
                background: "#333",
                color: "#fff",
                padding: "10px 20px",
                fontSize: "13px",
                textTransform: "uppercase"
              }
            }
          }}
          data={data}
          identity="name"
          value="loc"
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          id="name"
          cornerRadius={3}
          borderColor="#333"
          colors={{ scheme: "yellow_orange_brown" }}
          childColor={{ from: "color", modifiers: [["brighter", "0.3"]] }}
          enableArcLabels={true}
          arcLabel="id"
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="black"
          animate="true"
          transitionMode="startAngle"
          onClick={handleClick}
        />
      </div>

      <button className="button" onClick={() => setData(OriginalData)}>
        Reset
      </button>
    </div>
  );
};

export default SunburstChart;