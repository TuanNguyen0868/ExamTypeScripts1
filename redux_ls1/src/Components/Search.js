const Search = (props) => {
    return (
      <>
      <form>
        <input
          placeholder="Search for..."
          onChange={(event)=>(event.target.value)}
        />
      </form>
      </>
    )}
    export default Search