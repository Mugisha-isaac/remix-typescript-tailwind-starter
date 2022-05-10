import Navbar from '~/components/Navbar';
import Sidebar from '../components/Sidebar';


export default function Index() {
  return (
    <div className='container'>
      <div>
        <Navbar />
      </div>
      <div className=''>
        <Sidebar />  
      </div>
    </div>
  );
}