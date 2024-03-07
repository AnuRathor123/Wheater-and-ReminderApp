
import { useState } from 'react';
import { Col, Row, Container, Button} from 'react-bootstrap';
import { MainWrapper } from './componets/weather.module';
import './App.css';
import CreateNotes from './componets/CreateNotes';
import DisplayWeather from './componets/DisplayWeather';
import NotesList from './componets/NotesList';
import { Note } from './models/note.models';
import DisplayNotes from './componets/DisplayNote';

function App() {
  const [activeTab, setActiveTab] = useState(0);

 
  const handleTabClick = (index:any) => {
    setActiveTab(index);
  };
  return (
      <><MainWrapper>
      <div>
      <div className="App">
        <Button className={activeTab === 0 ? 'active' : ''} onClick={() => handleTabClick(0)}>Weather App</Button>&nbsp; &nbsp;
        <Button className={activeTab === 1 ? 'active' : ''} onClick={() => handleTabClick(1)}>Reminder App</Button>

      </div>
      <div className="App">
        {activeTab === 0 && <TabContent1 />}
        {activeTab === 1 && <TabContent2 />}
      </div>
    </div>
    </MainWrapper>
    
    
    </>
  );

}
const TabContent1 = () => {
  return <div className="App">
  <DisplayWeather />
</div>
};

const TabContent2 = () =>{
  return <div className="App">
  <DisplayNotes />
</div>
}


export default App;
