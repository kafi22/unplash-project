import Gallery from "./Components/Gallery";
import SearchForm from "./Components/SearchForm";
import ThemeToggle from "./Components/ThemeToggle";

const App = () => {

  return (
    <div>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </div>
  )
}

export default App;