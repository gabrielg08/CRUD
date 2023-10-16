import { IconX } from "@tabler/icons-react";
import React from "react";
import { useForm } from "react-hook-form";

const Modal = ({ isShowModal, handleCloseModal, handleSubmit, register, submit, idUserToEdit }) => {
  

  return (
    <section
      className={`fixed bg-black/30 top-0 bottom-0 left-0 right-0 flex items-center justify-center ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0 duration-700"
      } transition-all`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-white p-3 rounded-md grid gap-6 w-[min(100%,_350px)] fixed"
      >
        <h2 className="text-xl font-semibold">
            {idUserToEdit ? "Editar usuario" : "Nuevo usuario"}
        </h2>
        <button
          onClick={handleCloseModal}
          className="absolute right-3 top-2"
          type="button"
        >
          <IconX />
        </button>
        <div className="grid gap-1">
          <label className="font-semibold" htmlFor="first_name">
            First Name:
          </label>
          <input
            className="outline-none border px-4 py-2 rounded-sm"
            id="first_name"
            name="first_name"
            type="text"
            {...register("first_name")}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-semibold" htmlFor="last_name">
            Last Name:
          </label>
          <input
            className="outline-none border px-2 py-2 rounded-sm"
            id="last_name"
            name="last_name"
            type="text"
            {...register("last_name")}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-semibold" htmlFor="email">
            Email:
          </label>
          <input
            className="outline-none border px-2 py-2 rounded-sm"
            id="email"
            name="email"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-semibold" htmlFor="password">
            Password:
          </label>
          <input
            className="outline-none border px-2 py-2 rounded-sm"
            id="password"
            name="password"
            type="text"
            {...register("password")}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-semibold" htmlFor="birthday">
            Birthday:
          </label>
          <input
            type="date"
            className="outline-none border px-2 py-2 rounded-sm"
            id="birthday"
            name="birthday"
            {...register("birthday")}
          />
        </div>
        <button className="bg-[#555A88] text-white p-2 px-4 font-semibold">
          {idUserToEdit ? "Guardar cambios" : "Agregar nuevo usuario"}
        </button>
      </form>
    </section>
  );
};

export default Modal;
