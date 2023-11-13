import {useState} from "react";

function SearchHeader({search})
 {
    
    const [value, setValue] = useState("")

    const onChange=(event)=>{
        setValue(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        search(value);
    }

    return (
      <div className="searchDiv">
        <form onSubmit={handleSubmit}>
            <label>Ne Arıyorsunuz?</label>
            <input onChange={onChange} value={value}></input>
        </form>
      </div>
    );
  };

  export default SearchHeader;