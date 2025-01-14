import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import ReservationForm from './components/FoodBook'
import PatientDashboard from './components/PatientDashboard'
import HospitalSystem from './components/HospitalSystem'
import DeliveryDashboard from './components/DeliveryDashboard'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/food-reservation' element={<ReservationForm/>}/>
          <Route path='/your-dashboard' element={<PatientDashboard/>}/>
          <Route path='/managment-system' element={<HospitalSystem/>}/>
          <Route path='/deliveryboy' element={<DeliveryDashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
