import { useDispatch, useSelector} from 'react-redux'
import { RootState } from './redux/store'
import { decrement, increment } from './redux/features/counter/counterSlice'
function App() {
 const {count} = useSelector((state: RootState) => state.counter)
 const dispatch =useDispatch()


  return (
   <div className="grid place-items-center h-screen ">
   <div className="border border-green-500 h-60 w-80 grid place-items-center shadow-lg bg-slate-100">
     <div className=" flex gap-6">
      <button 
      onClick={()=>dispatch(increment())}
      className="border-2 border-green-500 rounded-md px-2 py-3">
        Increment
      </button>
    
    <div className=" grid items-center font-bold">{count}</div>
    
      <button
      onClick={()=>dispatch(decrement())}
       className="border-2 border-red-500 rounded-md px-2 py-3"
       >
        Decrement
      </button>
    </div>
   </div>
   </div>
  )
}

export default App
