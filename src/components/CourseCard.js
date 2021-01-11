import { useContext } from "react";
import { context } from "../App";

const CourseCard = ({id,grade,credit}) => {
const {dispatch} = useContext(context)

  const removeCard = () => {
    dispatch({
      type:"DELETE_CARD",
      payload:id
    })
  }

  return (
    <div>
      <p>Course ID : {id} 
        Grade : {grade} 
        Credit : {credit}
         <button id="delete_button" onClick = {removeCard}>
        X
        </button>
        </p>
      
    </div>
  );
};

export default CourseCard;
