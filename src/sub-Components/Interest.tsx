import type {  TabComponentProps } from "../components/TabForm";

const Interest = ({data, setData} : TabComponentProps) => {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
      setData({
        ...data,
        interests: checked
          ? [...interests, value] // add if checked
          : interests.filter((item) => item !== value), // remove if unchecked
      });
  }
  const { interests} = data;
  return (
    <div className="flex flex-col p-2 gap-2">
      <div className="flex gap-2">
        <input type="checkbox" name="coding" defaultChecked={interests.includes("coding")} value={"coding"} onChange={(e) => handleOnChange(e)}/>
        <label>Coding</label>
      </div>
      <div className="flex gap-2">
        <input type="checkbox" name="music" defaultChecked={interests.includes("music")} value={"music"}
         onChange={(e) => handleOnChange(e)}/>
        <label>Music</label>
      </div>
      <div className="flex gap-2">
        <input type="checkbox" name="javascript" defaultChecked={interests.includes("javascript")} value={"javascript"} onChange={(e) => handleOnChange(e)}
        />
        <label>Javascript</label>
      </div>
    </div>
  );
}

export default Interest;
