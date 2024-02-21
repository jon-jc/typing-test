import { faker } from "@faker-js/faker";

const words = faker.random.words(10)

function App() {


  return (
    <div className="text-4xl text-center text-primary-200">{words}</div>
  )
}

export default App
