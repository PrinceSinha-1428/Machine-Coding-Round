import type {  TabComponentProps } from "../components/TabForm";

const Profile = ( {data , setData } : TabComponentProps) => {
  const { name, email, age } = data;
  return (
    <div className="flex flex-col p-2 gap-2">
      <div className="flex justify-between p-1 items-center gap-2 ">
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => setData({...data, name: e.target.value})} className="border border-black px-2 py-1 placeholder:text-gray-600" placeholder="Enter name here.." />
      </div>
      <div className="flex justify-between p-1 items-center gap-2 ">
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setData({...data, email: e.target.value})} className="border border-black px-2 py-1 placeholder:text-gray-600" placeholder="Enter email here.." />
      </div>
      <div className="flex justify-between p-1 items-center gap-2 ">
        <label>Age: </label>
        <input type="number" value={age} onChange={(e) => setData({...data, age: e.target.value})} className="border border-black px-2 py-1 placeholder:text-gray-600" placeholder="Enter age here.." />
      </div>
    </div>
  );
}

export default Profile;
