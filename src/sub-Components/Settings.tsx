import type { TabComponentProps } from "../components/TabForm";



const Settings = ({data, setData} : TabComponentProps) => {
  const { theme } = data;
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
        ...data,
        theme: e.target.value as "light" | "dark"
      })
  }
  return (
    <div className="flex flex-col p-2">
      <div className="flex gap-2 justify-between ">
        <input type="radio" name="theme" value={"dark"}  onChange={handleOnChange} defaultChecked={theme === 'dark'}/>
        <label>Dark</label>
      </div>
      <div className="flex gap-2 justify-between ">
        <input type="radio" name="theme" value={"light"} onChange={handleOnChange} defaultChecked={theme === 'light'}/>
        <label>Light</label>
      </div>
    </div>
  );
}

export default Settings;
