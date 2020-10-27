import React from "react";

const Display = (props) => {
  const {words} = props
  const [state, setState] = React.useState({
    search: ""
  }
  )

  const updateSearch = (event) => {
    setState({...state, search: event.target.value.substr(0,20)});
  }

  const loaded = () => {
    let filteredWords = words.filter((word)=> {
      return word.word.toLowerCase().indexOf(state.search.toLowerCase()) !== -1;
    })
  return (<>
  <br></br>
    <label>Search library: </label>
    <input type="text" value={state.search} onChange={updateSearch}></input>
    <div style={{textAlign: "center"}}>
      {filteredWords.map((word)=>(
        <article>
          <h1>{word.word}</h1>
          <img src={word.img}/>
          <h3>{word.age}</h3>
          <button onClick={()=>{
            props.selectWord(word);
            props.history.push("/edit")
          }}>Edit</button>
          <button onClick={()=>{
            props.deleteWord(word);
          }}>Delete</button>
        </article>
      ))}
  </div>
  </>
  )
}
const loading = <h1>Loading...</h1>

return words.length > 0 ? loaded() : loading

};

export default Display;