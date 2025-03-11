import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Components/Loading";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { GithubUserRepos, GithubUsersData } from "../featurres/Data/DataSlice";
import Repository from "../Components/Repository";

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const UserProfileCard = () => {

    const {User_Card , Repository_Data, isLoading , isError , message} = useSelector((state) => state.Search)
    const {username} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        if (username) {
          dispatch(GithubUsersData(username));
          dispatch(GithubUserRepos(username))
        }
      }, [username, dispatch]);

    useEffect(() =>{
        if(isError){
toast.error(message)
        }
    },[isError , message ])

    if(isLoading){
        return <Loading />
    }

  return (
    <div className="max-w-6xl my-20 mx-auto bg-white shadow-lg rounded-lg p-6">
      {/* User Info */}
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src={User_Card?.avatar_url || "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}
          alt={User_Card?.login || "GitHub Octocat"}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">{User_Card?.name || "No Name"}</h2>
          <a
            href={`https://github.com/${User_Card?.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            @{User_Card?.login}
          </a>
          <p className="text-gray-500 mt-1">{User_Card?.bio || "No bio available"}</p>
        </div>
        <p className="text-gray-500 text-sm">{User_Card?.created_at ? formatDate(User_Card.created_at) : "N/A"}</p>
      </div>

      {/* Stats Section */}
      <div className="flex justify-around bg-gray-100 rounded-lg p-4 mt-4">
        <div className="text-center">
          <p className="text-gray-600 text-sm">Repositories</p>
          <p className="text-lg font-semibold">{User_Card?.public_repos ?? 0}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">Followers</p>
          <p className="text-lg font-semibold">{User_Card?.followers ?? 0}</p>
        </div>
        <div className="text-center">
          <p className="text-gray-600 text-sm">Following</p>
          <p className="text-lg font-semibold">{User_Card?.following ?? 0}</p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="mt-4 space-y-2 text-center md:text-left">
        <p className="text-gray-500">{User_Card?.company || "No company info"}</p>
        <a
          href={User_Card?.blog || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {User_Card?.blog || "No website"}
        </a>
        <p className="text-gray-500">{User_Card?.location || "No location"}</p>
      </div>

{/* <ul>
    <h1 className="text-center text-5xl my-7 font-bold" >All Repository's Here</h1>
{
    Repository_Data?.map((item) => <Repository key={item.id} item={item} />)
}
</ul> */}
    <ul className="list-none p-5 bg-white shadow-md rounded-lg">
      <h1 className="text-center text-5xl my-7 font-bold">
        All Repositories Here
      </h1>
      {Repository_Data?.map((item) => (
        <Repository key={item.id} item={item} />
      ))}
    </ul>

    </div>


  );
};

export default UserProfileCard;
