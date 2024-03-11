import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addUser } from "../store";
const UserForm = () => {
    const dispatch=useDispatch()

    const [user,setUser]=useState({
        email:'',
        name:'',
        address:"",
        contactno:''

    })
    console.log(user)

    const HandleOnChange=(e)=>{
        e.preventDefault()
        const {name,value}=e.target
        console.log(name,value)
        setUser({...user,[name]:value})

    }
    const HandleSubmit=(e)=>{
        e.preventDefault()
       dispatch(addUser(user))
       setUser({email:'',name:'',address:'',contactno:''})

    }
  return (
    <div>
        <h1 className="text-center text-2xl">User Details</h1>
    <form onSubmit={HandleSubmit} class="max-w-sm mx-auto">
      <div class="mb-5">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
         name="email"
         value={user.email}
         onChange={HandleOnChange}
          type="email"
          id="email"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
         Your Name
        </label>
        <input
          type="text"
          value={user.name}
          onChange={HandleOnChange}
          id="name"
          name="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="address"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
         Your address
        </label>
        <input
         name="address"
         value={user.address}
         onChange={HandleOnChange}
          type="textarea"
          id="address"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-24 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="mb-5">
        <label
          for="contactno"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
         Your Contact No
        </label>
        <input
         name="contactno"
         value={user.contactno}
         onChange={HandleOnChange}
          type="number"
          id="contactno"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
    
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add User
      </button>
    </form>
    </div>
  );
};
export default UserForm;
