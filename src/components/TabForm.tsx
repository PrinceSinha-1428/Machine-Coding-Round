import { useState } from "react";
import Interest from "../sub-Components/Interest";
import Profile from "../sub-Components/Profile";
import Settings from "../sub-Components/Settings";

 interface dataTypes {
  name: string;
  age: string;
  email: string;
  interests: string[];
  theme?: "light" | "dark";
}

export interface TabComponentProps {
  data: dataTypes;
  setData: React.Dispatch<React.SetStateAction<dataTypes>>
}

const TabForm = () => {

  const [activeTab, setActiveTab] = useState<number>(0);
  const [data, setData] = useState<dataTypes>({
    name:"",
    age: "",
    email: "",
    interests: [],
    theme: "light"
  });

  const tabs = [
    { name: "Profile", component: Profile  },
    { name: "Interest", component: Interest },
    { name: "Settings", component: Settings }
  ];

  const handleSubmit = async () => {
    // make api call
    console.log(data);
    setData({
      name: "",
      age: "",
      email: "",
      interests: [],
    });
  }

  const ActiveTabComponent = tabs[activeTab].component;
  return (
    <div className="p-10">
      <div className="flex gap-2 mb-1 ">
        {tabs.map((tab, index) => (
          <div key={tab.name} onClick={() => setActiveTab(index)} className={`${activeTab === index ? "bg-gray-400": ""} p-2 border cursor-pointer  border-black px-3 py-2 rounded-md`}>
            {tab.name}
          </div>
        ))}
      </div>
      <div className="flex border border-black h-[200px]">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      <div className="flex justify-center gap-10 mt-4">
        <button  className={`${activeTab === 0 ? "hidden": ''} px-3 py-2 bg-gray-500 text-white rounded-xl cursor-pointer`} onClick={() => setActiveTab(activeTab-1)}>Prev</button>
        <button  className={`${activeTab === tabs.length-1 ? "hidden": ''} px-3 py-2 bg-gray-500 text-white rounded-xl cursor-pointer`} onClick={() => setActiveTab(activeTab+1)}>Next</button>
      </div>
      {activeTab === tabs.length-1 && (
        <div>
          <button onClick={handleSubmit}  className="px-3 py-2 bg-blue-600 text-white rounded-xl mt-2 cursor-pointer">Submit</button>
        </div>
      )}
    </div>
  );
}

export default TabForm;
