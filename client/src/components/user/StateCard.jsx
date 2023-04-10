const StateCard = ({username, isActive}) => {

return (
    <div className="flex w-5/6 h-auto gap-8 px-4 py-2">
        <h1 className='w-1/2 text-2xl capitalize'>{username}</h1>
        <h4 className={ `w-1/2 text-xl font-semibold capitalize ${isActive}` }>{isActive}</h4>
    </div>
  )
}

export default StateCard
