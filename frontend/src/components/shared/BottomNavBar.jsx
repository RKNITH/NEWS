import { signOutSuccess } from "@/redux/user/userSlice"
import React from "react"
import { FaHome, FaSignOutAlt, FaUserAlt } from "react-icons/fa"
import { IoIosCreate, IoIosDocument } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const BottomNavBar = () => {
  const dispatch = useDispatch()

  const { currentUser } = useSelector((state) => state.user)

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      })

      const data = await res.json()

      if (!res.ok) {
        console.log(data.message)
      } else {
        dispatch(signOutSuccess())
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-200 border-t border-gray-300 p-2 flex justify-around">
      <Link
        to="/dashboard?tab=profile"
        className="flex flex-col items-center text-slate-800"
      >
        <FaUserAlt size={20} />
        <span className="text-xs">Profile</span>
      </Link>

      {currentUser && currentUser.isAdmin && (
        <Link
          to="/create-post"
          className="flex flex-col items-center text-slate-800"
        >
          <IoIosCreate size={20} />
          <span className="text-xs">Create Post</span>
        </Link>
      )}

      {currentUser && currentUser.isAdmin && (
        <Link
          to="/dashboard?tab=posts"
          className="flex flex-col items-center text-slate-800"
        >
          <IoIosDocument size={20} />
          <span className="text-xs">Posts</span>
        </Link>
      )}

      <button
        className="flex flex-col items-center text-slate-800"
        onClick={handleSignout}
      >
        <FaSignOutAlt size={20} />
        <span className="text-xs">Logout</span>
      </button>
    </nav>
  )
}

export default BottomNavBar
