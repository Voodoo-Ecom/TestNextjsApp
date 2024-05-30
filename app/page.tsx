import getUsers from '@/libs/getUsers'
import { User } from '@/types/user'
import UserCard from '@/components/UserCard'

export default async function Home() {
  const users: User[] = await getUsers()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] items-center justify-between">
      {users.map((user: User) => (
        <div key={user.id} className='sm:flex sm:h-full w-full'>
          <UserCard user={user}/>
        </div>
      ))}
    </div>
  )
}
