import React from "react";

const Header = ({handleOpenModal}) => {
  return (
    <header className="flex justify-between p-4 bg-black">
      <h1 className="text-xl font-bold text-white">Usuarios</h1>

      <button onClick={handleOpenModal} className="bg-[#555A88] text-white p-1 px-3 font-semibold">
        + Crear nuevo usuario
      </button>
    </header>
  );
};

export default Header;
