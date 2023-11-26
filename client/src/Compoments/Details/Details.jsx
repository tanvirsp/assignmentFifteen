import './Details.css';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { studentDetails } from "../../APIRequest/APIRequest";
import Loader from "../Loader/Loader";
import { Table } from 'react-bootstrap';
import logo from "../../assets/images/logo.png"


const Details = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [data, setData] = useState(null);


    useEffect( ()=>{
        ( async()=>{
            const result = await studentDetails(id);
            setData(result.data);
        } )()

    } ,[id]);


    if(!data){
        return <Loader />
    }

    
    const {firstName, lastName, gender, dateOfBirth, nationality, _id, address, email, phone, admissionDate, courses} = data;
    


    return (
        <section className="detail-section">
            <div className='top-logo'><img src={logo} alt="Logo" /></div>
            <h2 className='title'>Student Details</h2>
            <Table>
                <tbody>
                    <tr>
                        <td>First Name: {firstName}</td>
                        <td>Last Name: {lastName}</td>
                    </tr>
                    <tr>
                        <td>Gender: {gender}</td>
                        <td>Date of Birth: {dateOfBirth }</td>
                    </tr>
                    <tr>
                        <td>Nationality: {nationality}</td>
                        <td>Address: {address }</td>
                    </tr>
                    <tr>
                        <td>Email: {email}</td>
                        <td>Phone: {phone }</td>
                    </tr>
                    <tr>
                        <td>Admission Date: {admissionDate}</td>
                        <td>Courses: {courses }</td>
                    </tr>
                    <tr>
                        <td colSpan={2}> 
                            <button onClick={()=>navigate("/")} className='btn btn-lg btn-dark'>Go Back</button> 
                            <button onClick={()=>navigate(`/edit/${_id}`)} className='btn btn-lg btn-success ms-2'>Edit</button> 
                        </td>
    
                    </tr>
                </tbody>
            </Table>
        </section>
    );
};

export default Details;