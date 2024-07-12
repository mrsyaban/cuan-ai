
const UserSidebar = () => {
  const handleLogout = () => {
    window.location.href = (import.meta.env.VITE_API_URL || "") + "/auth/logout";
  }

  return (
    <div className="flex flex-col h-screen sticky gap-12 bg-primary-dark w-[280px] ">
      <div className="flex px-4">
        Logo
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex px-4 ">
          Profile
        </div>
        <div className="flex px-4">
          Item 1
        </div>
        <div className="flex px-4">
          Item 1
        </div>
        <div className="flex px-4">
          Item 1
        </div>
      </div>
      <div onClick={handleLogout}  className="cursor-pointer bottom-0 border-2 hover:bg-opacity-40 hover:text-white border-red-500 bg-red-500 bg-opacity-25 w-fit self-center h-fit py-1 px-8 rounded-full text-white text-lg">
        Logout
      </div>
    </div>
  )
}

export default UserSidebar