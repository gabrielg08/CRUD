import { IconGift, IconPencil, IconTrash } from "@tabler/icons-react";
import React from "react";

const User = ({ userInfo, deleteUser, handleClickUpdate }) => {
  return (
    <article className="border-2 p-4 rounded-lg grid gap-2">
      <h5 className="border-b-2 font-bold">
        {userInfo.first_name} {userInfo.last_name}
      </h5>
      <ul className="grid gap-2">
        <span className="text-gray-500">Email</span>
        <li className="text-black font-semibold">{userInfo.email}</li>
        <span className="text-gray-500">Birthday</span>
        <li className="flex border-b-2 text-black font-semibold">
          <IconGift size={20} />
          {userInfo.birthday}
        </li>
      </ul>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => deleteUser(userInfo.id)}
          className="border border-[#BDBDBD] bg-[#D85D5D] text-white rounded-s p-2"
        >
          <IconTrash />
        </button>
        <button onClick={() => handleClickUpdate(userInfo)} className="border border-[#BDBDBD] text-[#D3D3D3] rounded-s p-2">
          <IconPencil />
        </button>
      </div>
    </article>
  );
};

export default User;
