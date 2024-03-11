/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../store";
const UserDetails = () => {
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.users)

    const HandleDeleteUser=(name)=>{
        dispatch(deleteUser({name}))

    }
  return (<div>
    <div className="mt-12 flex flex-wrap gap-4">
        {users.map((user)=>{
            return (
                <div>
                    <a
        class="block max-w-sm mb-12 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="text-lg"> <span className="font-bold">Name :</span>  {user.name}</h5>
        <button className="btn-danger" onClick={()=>HandleDeleteUser(user.name)}>Delete</button>
        <p class="mb-2 text-lg  tracking-tight text-gray-900 dark:text-white">
        <span className="font-bold">Email :</span>  {user.email}
        </p>
        Address:
        <p class="font-normal text-gray-700 dark:text-gray-400">
          {user.address}
        </p>
      </a>

                </div>
            )
        })}
      
    </div>
    </div>
  );
};

export default UserDetails;
