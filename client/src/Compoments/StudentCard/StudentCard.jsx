/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin2Line } from "react-icons/ri";
import { LuView } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const StudentCard = ({student, sl, handleDelete}) => {
    const navigate = useNavigate();

    const {_id, firstName, lastName, gender, email, phone, admissionDate, courses} = student;
    

    

    
        
    return (
        <tr>
            <td className="left-cell">{sl +1}</td>
            <td >{firstName}</td>
            <td>{lastName}</td>
            <td>{gender}</td>
            <td>{email} <br />{phone}</td>
            <td>{admissionDate}</td>
            <td >{courses}</td>
            <td className="right-cell">
                <button onClick={() => navigate(`/details/${_id}`)} title="View Details" className='btn btn-warning m-1'><LuView /></button>
                <button title="Edit" onClick={() => navigate(`/edit/${_id}`)}  className='btn btn-success m-1'><FaRegEdit /></button>
                <button title="Delete" onClick={() => handleDelete(_id)}  className='btn btn-danger m-1'><RiDeleteBin2Line /></button>
            </td>
        </tr>
    );
};

export default StudentCard;