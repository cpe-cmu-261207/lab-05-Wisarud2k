import { createContext, useReducer } from "react";
import CourseCard from "./components/CourseCard";
import CourseForm from "./components/CourseForm";

export const context = createContext({})

function reducer(state,action) {
  switch(action.type){
    case "ADD_FORM":
      console.log("ADDform!!!")
      return {
        ...state,
        mycourses:[...state.mycourses,action.payload],
        
      };
    case "TEST":
      console.log(state.mycourses);
      return{...state
      };
    case "ERROR":
      alert("Please Fill CourseId")
      return{...state
      };
    }
    
}

const initialState = {
  mycourses:[],
}


function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  

  return (
    <div>
      <h1>GPA CALCULATOR</h1>
      {/* TODO ADD UI */}
      <context.Provider value ={{state,dispatch}}>
      <CourseForm/>
      <button onClick={() => dispatch({type:"TEST"})} >
        test
      </button>
      </context.Provider>
    </div>
  );
}

export default App;
