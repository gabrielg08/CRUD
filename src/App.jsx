import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import { EMPTY_VALUES, URL_BASE } from "./constants/users";
import Modal from "./components/modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UserList from "./components/UserList";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [users, setUsers] = useState ([])
  const { handleSubmit, register, reset } = useForm();
  const [idUserToEdit, setIdUser] = useState(null)
  const submit = (data) => {
    
    if(idUserToEdit){
      updateUser(data)
    }else {
      createUser(data)
    }
    
  };

  const handleOpenModal = () =>{
    setIsShowModal(true)
  }

  const handleCloseModal = () =>{
    setIsShowModal(false)
    reset(EMPTY_VALUES)
    setIdUser(null)
  }

  const handleClickUpdate = (userToUpdate) =>{
    handleOpenModal()
    reset(userToUpdate)
    setIdUser(userToUpdate.id)
  }

  const createUser = (data) => {
    axios
    .post(URL_BASE + "/users/", data)
    .then(() => {
      handleCloseModal()
      reset(EMPTY_VALUES)
      getAllUser()
    })
    .catch((err) => console.log(err))
  }

  const deleteUser = (id) => {
    axios
    .delete(URL_BASE + `/users/${id}/`)
    .then(({data}) => console.log(data))
    .catch((err) => console.log(err))
  }

  const updateUser = (data) =>{
    axios
    .put(URL_BASE + `/users/${idUserToEdit}/`, data)
    .then(() => {
      getAllUser()
      handleCloseModal()
    })
    .catch((err) => console.log(err))
  }

  const getAllUser = () => {
    axios
      .get(URL_BASE + "/users/")
      .then(({data}) =>  setUsers(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllUser()
  }, []);

  return (
    <main className="min-h-screen">
      <Header 
      handleOpenModal={handleOpenModal}
      
       />
      <Modal 
      isShowModal={isShowModal}
      handleCloseModal={handleCloseModal}
      handleSubmit={handleSubmit}
      submit={submit}
      register={register}
      idUserToEdit = {idUserToEdit}
      />

      <UserList users={users} deleteUser={deleteUser} handleClickUpdate={handleClickUpdate} />
    </main>
  );
}
export default App;
