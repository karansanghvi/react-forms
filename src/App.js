import './App.css';
import Dropdown from './components/Dropdown';
import HandlingForms from './components/HandlingForms';
import MultipleInputs from './components/MultipleInputs';
import RadioButton from './components/RadioButton';
import SubmittingForms from './components/SubmittingForms';
import Textarea from './components/Textarea';

function App() {
  return (
    <div className="App">
      {/* handling forms */}
        <HandlingForms/>
      {/* submitting forms */}
        <SubmittingForms/>
      {/* handling multiple inputs */}
        <MultipleInputs/>
      {/* textarea */}
        <Textarea/>
      {/* dropdown */}
        <Dropdown/>
      {/* radio button */}
        <RadioButton/>
    </div>
  );
}

export default App;
