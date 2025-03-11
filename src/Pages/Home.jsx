import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loading from '../Components/Loading'
import { GithubUsers, GithubUsersData } from '../featurres/Data/DataSlice'
import { toast } from 'react-toastify'
import UsersCards from '../Components/UsersCards'

const Home = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {Users , isError , message} = useSelector(state => state.Auth)
    const {All_Users , isLoading} = useSelector((state) => state.Search)

    const [username , setUserName] = useState("")

    const SearchUserData = async (username) =>{
dispatch(GithubUsers(username))
    }

    const SearchData = async (e) =>{
        e.preventDefault()
        if(username.trim()){
            await SearchUserData(username)
            setUserName("")
        }else{
            toast.warn("Please enter a username.")
        }
    }

    useEffect(() =>{
        if(isError){
            toast.error(message)
        }
        if(!Users){
    navigate("/login")
        }else{
            navigate("/")
        }
    },[isError , message , Users])

    if(isLoading){
      return <Loading />
    }


  return (
    <div className='container p-5 min-h-screen' >
      <form
      onSubmit={SearchData}
      className="w-full md:w-[60%] mx-auto mt-24 px-2"
    >
      <div className="flex items-center bg-gray-200 rounded-lg shadow-lg overflow-hidden h-14">
        <input
        onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder="Search Here"
          className="flex-1 px-4 py-2 text-gray-600 text-lg outline-none bg-transparent"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-2 h-full hover:from-gray-900 hover:to-gray-800 transition-all flex items-center font-semibold"
        >
          🔍 SEARCH
        </button>
      </div>
    </form>
    <div className="container p-5 rounded flex flex-wrap gap-7 items-center justify-center w-full">
    {
        All_Users?.map((card) => <UsersCards key={card.id} card={card} />)
    }
    </div>
    </div>
  )
}

export default Home
