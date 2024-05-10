import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Deleteicon2 from "../svg-components/Deleteicon2";

function DeleteConfirmationPopup({ onSubmit, taskId, taskTitle, onDelete }) {
	const [cross, setCross] = useState(true);
    const [ShowPopup, setShowPopup] =useState(true);
	
	const [loading, setLoading] = useState(false); // Add loading state




    const handleFormSubmit = () => {
        // e.preventDefault();
        // setLoading(true); // Set loading to true on form submission
        axios.get('http://localhost:3000/api/tasks/')
          .then(response => {
            // const newData = { taskId  };
            const Task_Id = response.data.data.map(_id => _id);
            onSubmit(Task_Id);
            setLoading(false); // Set loading to false after successful submission
            console.log("Response " , response)
          })
          .catch(err => {
            setLoading(false); // Set loading to false if submission is unsuccessful
            console.log(err);
          });
      };
     
	

	function crossDisplay() {
		setCross(!cross);
	}


	const handleCancel = () => {
		setShowPopup(!ShowPopup); // Hide the popup when cancel is clicked
	};

	const handleDelete = (task_Id) => {
        handleFormSubmit(task_Id);
		axios.delete(`http://localhost:3000/api/tasks/${taskId}`)
			.then((response) => {
				onDelete(); // Notify parent component that the task has been deleted
				setShowPopup(false); // Hide the popup after successful deletion
				console.log("Task deleted successfully:", response);
			})
			.catch((error) => {
				console.error("Error deleting task:", error);
			});
	};

	return (
		<>
			{cross && (
				<div className="fixed inset-0 flex items-center justify-center bg-[#000000] bg-opacity-70">
					<div className="bg-white p-8 w-[632px] h-[436px] rounded-lg">
						{/* <div className="flex"> */}

						<button onClick={crossDisplay} className=" flex ml-[550px]  ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6 text-gray-500"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>

						<div className="flex items-center justify-center mb-4  ">
							<Deleteicon2 />
						</div>

						{/* </div> */}
						<h2 className="text-[22px] justify-center flex  font-Poppins text-[#2C2C2E]">
							Are you sure you want to delete this Task {taskTitle}?
						</h2>

						<div className="flex justify-center">
							<button
								className="bg-[#4BCBEB]  h-[56px] text-white text-[20px] font-Poppins ml-8 mt-3 rounded-md relative"
								style={{ width: "167px", height: "56px" }} // Set fixed dimensions for the button
								disabled={loading} // Disable button when loading is true
                                type="submit"
								onClick={handleDelete}>
								Delete
							</button>

							<button
								className="bg-[#D9D9D9] text-[#2C2C2E] text-[20px] font-Poppins  ml-8 mt-3 rounded-md relative"
								style={{ width: "167px", height: "56px" }} // Set fixed dimensions for the button
								onClick={handleCancel}
                                type="submit"
								disabled={loading} // Disable button when loading is true
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

DeleteConfirmationPopup.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};

export default DeleteConfirmationPopup;

// import React, { useState } from "react";
// import axios from "axios";

// const DeleteConfirmationPopup = ({ taskId, taskTitle, onDelete }) => {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleDelete = () => {
//     axios
//       .delete(`http://localhost:3000/api/tasks/${taskId}`)
//       .then((response) => {
//         onDelete(); // Notify parent component that the task has been deleted
//         setShowPopup(false); // Hide the popup after successful deletion
//         console.log("Task deleted successfully:", response);
//       })
//       .catch((error) => {
//         console.error("Error deleting task:", error);
//       });
//   };

//   const handleCancel = () => {
//     setShowPopup(false); // Hide the popup when cancel is clicked
//   };

//   return (
//     <div>
//       {/* Button to show the popup
//       <button onClick={() => setShowPopup(true)}>Delete Task</button> */}

//       {/* Popup */}
//       {showPopup && (
//         <div className="popup-container">
//           <div className="popup">
//             <h2>Are you sure you want to delete "{taskTitle}"?</h2>
//             <div className="button-container">
//               <button onClick={handleDelete}>Delete</button>
//               <button onClick={handleCancel}>Cancel</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DeleteConfirmationPopup;
