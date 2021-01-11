import { createContext, useEffect, useReducer, useState } from "react";
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
    case "ERROR":
      alert("Please Fill CourseId")
      return{...state
      };
    case "DELETE_CARD":
      console.log("delete")
      return{...state,
        mycourses: state.mycourses.filter((course) => course.ID !== action.payload), 
      };
    case "SET_COURSE":
      return{
        ...state,
        mycourses:action.payload,
      }
    default:
      throw new Error();
  }
    
    
}

const initialState = {
  mycourses:[],
}




function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  const [GPA,setGpa] = useState(0.0);
  

  function calGPA() {
    var allgrade = 0;
    var allcredit = 0;
    state.mycourses.forEach(element => {
      allcredit += Number(element.credit);
      allgrade += (Number(element.grade) * Number(element.credit)); 
      

    });
    
    if(allgrade == 0){
      setGpa(0.0)
    }else{
      setGpa(allgrade / allcredit);
    }
  }

  function fetchcourses() {
    const localcourse = localStorage.getItem("mycourses");
    if(localcourse){
      dispatch({
        type:"SET_COURSE",
        payload:JSON.parse(localcourse),
      });
    }
  }

  useEffect(fetchcourses,[]);


  useEffect(() => {
    console.log("course is updating..")
    calGPA();
    console.log(GPA)
    localStorage.setItem("mycourses",JSON.stringify(state.mycourses));
    
  },[state.mycourses])



  return (
    <div id="main">
      <h1>GPA CALCULATOR</h1>
      {/* TODO ADD UI */}
      <context.Provider value ={{state,dispatch}}>

          {state.mycourses.map((item) => (
            <CourseCard id ={item.ID} grade = {item.grade} credit ={item.credit}></CourseCard>
          ))}

        <CourseForm/>
        
        <h3>Your GPA IS {GPA.toFixed(2)}</h3>
        
      </context.Provider>
    </div>
  );
}

export default App;
