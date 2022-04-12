import NavBar from '../components/NavBar'
import RideForm from '../components/RideForm'
import Welcome from '../components/Welcome'


export default function Home() {

  const col = 'bg-slate-200'

  return (
    <div className='flex bg-slate-100  h-full w-full flex-col items-center'>
      <NavBar />
      <Welcome />
      <RideForm />
    </div>
  )
}
