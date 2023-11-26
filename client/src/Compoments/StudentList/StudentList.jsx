import './StudentList.css';
import { useEffect, useState } from 'react';
import { deleteStudent, viewStudentData } from '../../APIRequest/APIRequest';
import StudentCard from '../StudentCard/StudentCard';
import toast from 'react-hot-toast';
import Empty from '../Empty/Empty';


const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [count, setCount] = useState(0)

    useEffect( ()=>{
        ( async() =>{
            const result = await viewStudentData();
            setStudents(result.data);
        } )()
    } ,[count])


  


    const handleDelete = async(id)=>{
        const result = await deleteStudent(id);
        if(result.status ==="success"){
            toast.success('Delete Successfully ');
            setCount(count+1)
    
        } else {
            toast.error(result.data.data);
        }


    }


    return (
        <div >
            <h2 className='title'>Registered Students</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th className="left-cell">Sl</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Gender</th>
                            <th>Email & Phone</th>
                            <th>Admission Date</th>
                            <th >Courses</th>
                            <th className="right-cell">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          students.length > 0 ?  students.map( (student, index) => <StudentCard handleDelete={handleDelete} student={student} key={index} sl={index} />)
                          : <Empty />
                        }
                        
                    
                    </tbody>
                </table>
            </div>


           
        </div>
    );
};

export default StudentList;