import React, {useState} from 'react';
import { CreateSoldiers } from './pages/createSoldiers/CreateSoldiers';
import { Soldiers } from './pages/soldiers/soldiers';

const App: React.FC = () => {
 const [refresh, setRefresh] = useState(false)

 const handleRefesh = () => {
   setRefresh(!refresh)
 }

 console.log(refresh);
  return (
    <div className="container">
      <CreateSoldiers refresh={handleRefesh}/>
      <Soldiers reffresh={refresh}/>
    </div>
  );
}

export default App;
