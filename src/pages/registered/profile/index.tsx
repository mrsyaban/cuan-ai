
const ProfilePage = () => {
  // Example user data, in a real application this would likely come from props or state
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    riskProfile: "Moderate"
  };

  return (
    <div className='p-16 text-xl gap-8 flex flex-col h-full w-full'>
      <h1 className='font-semibold text-4xl'>Profile Page</h1>
      <div className='grid grid-cols-2 gap-4'>
        <div className='font-semibold'>Name</div>
        <div>: {user.name}</div>
        <div className='font-semibold'>Email</div>
        <div>: {user.email}</div>
        <div className='font-semibold'>Risk Profile</div>
        <div>: {user.riskProfile}</div>
      </div>
    </div>
  );
}

export default ProfilePage;
