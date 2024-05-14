// Todo.jsx
import React from "react";
import PropTypes from "prop-types";
import Delicon from "../svg-components/Delicon";

import Eye1 from "../svg-components/Eye1";
import Editicon from "../svg-components/Editicon";

function Todo({ onDelete }) {
    const handleDelete = () => {
        // Assuming taskId is provided by the parent component
        onDelete();
    };

    return (
        <div className=" bg-white border-2 ml-40">
            <div className="flex mt-2 px-4" onClick={handleDelete}>
                <button className=" flex items-center">
                    <Delicon/>
                    Delete
                </button>
                
            </div>
            <div className="flex mt-2 px-4">
                <button className=" flex items-center" > 
                <Eye1/>
                   View
                </button>
                
            </div>
            <div className="flex mt-2 px-4">
                <button className=" flex items-center">
                <Editicon/>    
                Edit
                </button>
            </div>
        </div>
    );
}
Todo.propTypes = {
    onDelete: PropTypes.func.isRequired,
  };
export default Todo;