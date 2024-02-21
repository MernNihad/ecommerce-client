import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast, successToast } from "../../Toast";
import { useNavigate } from "react-router-dom";

function AdminProfile() {


    const [profile,setProfile] = useState({})

    useEffect(()=>{
        fetchData()
    })

    const navigate = useNavigate()

  
    const fetchData =  async() => {
      try {
  
        const response = await axios.get('http://localhost:8080/api/v1/admin/profile', {headers:{'Authorization':localStorage.getItem('token')}} )

        console.log(response.data.data.user)
        setProfile(response.data.data.user)
    
      } catch (error) {
        errorToast(error.response.data.message || error.message || 'error')
      }
    };

  return (
    <div>
      <div className="ms-5 mt-5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name : {profile.name}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           Mail  - {profile.email}
        </p>
       
      </div>
    </div>
  );
}

export default AdminProfile;
