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
    <>
      <p>Course ID : {id} 
        Grade : {grade} 
        Credit : {credit}
         <button onClick = {removeCard}>
        X
        </button>
        </p>
      
    </>
  );
};

export default CourseCard;
