import React from 'react'
import { Link } from 'react-router-dom'

const UsersCards = ({card}) => {
  return (
    <>
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center w-full md:w-80 mx-auto">
        {/* User Profile Logo */}
      <img
        src={card?.avatar_url || "https://avatars.githubusercontent.com/u/583231?v=4"}
        alt="Profile Picture"
        className="w-24 h-24 rounded-full object-cover"
      />

      {/* Username */}
      <h3 className="mt-3 text-lg font-bold text-gray-900">{card?.login}</h3>

      {/* View Profile Button */}
      <Link to={`/userprofile/${card?.login}`} className="w-full mt-3">
        <button
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md transition-all"
        >
          View Profile
        </button>
      </Link>
    </div>

    </>
  )
}

export default UsersCards
