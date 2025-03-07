import HelloWorld from "./components/HelloWorld"
import UserStatus from "./components/UserStatus"
import ProgrammingLanguageList from "./components/ProgrammingLanguageList"


const App = () => {
  return (
    <div>
      <HelloWorld />
      <UserStatus email="daniel@gmail.com"/>
      <ProgrammingLanguageList languages={["amharic", "english"]} />
    </div>
  )
}

export default App