import { useEffect, useState } from 'react';
import { studentDetails, updateData } from '../../APIRequest/APIRequest';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const EditForm = () => {

    const {id} = useParams();
    const navigate = useNavigate()
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
    const birthDate = dateOfBirth.split("T")[0]
    const admissionDateOnly = admissionDate.split("T")[0]
    
    const captureData = (event) =>{

        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }



    const handleSubmit = async(event)=>{
        event.preventDefault();
        const result = await updateData(_id, data );
        if(result.status ==="success"){
            toast.success('Updated Successfully');
            navigate("/")
            
        } else {
            toast.error(result.data.data);
        }
        
        

    }



    return (
        <section className="form-section">
            <h3 className='title'>Edit Student Data</h3>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input onBlur={captureData} type="text" defaultValue={firstName} name="firstName" id="firstName" className="form-control mb-2" required/>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input onBlur={captureData} type="text" name="lastName" id="lastName" defaultValue={lastName} className="form-control mb-2" required  />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label me-4">Gender</label><br />
                        <input onChange={captureData} type="radio" name="gender" id="male" value="male"  checked={gender =="male" && true } required/>
                        <label className="form-check-label me-3 ms-1" htmlFor="male">Male</label>

                        <input onChange={captureData} type="radio" name="gender" id="female" value="female" checked={gender =="female" && true }  required/>
                        <label className="form-check-label ms-1 " htmlFor="female">Female</label>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Date Of Birth</label>
                        <input onBlur={captureData} type="date" name="dateOfBirth" className="form-control mb-2" defaultValue={birthDate}  required  />
                    </div>  
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className="form-label" htmlFor="nationality">Nationality</label>
                        <input onBlur={captureData} type="text" name="nationality" className="form-control mb-2" id="nationality" defaultValue={ nationality}  required />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <label className="form-label" htmlFor="address">Address</label>
                        <input onBlur={captureData} type="text" name="address" id="address" className="form-control mb-2"  defaultValue={address}  required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input onBlur={captureData} type="email" name="email" className="form-control mb-2" id="email" defaultValue={email }  required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" htmlFor="phone">Phone</label>
                        <input onBlur={captureData} type="tel" name="phone" id="phone" className="form-control mb-2" defaultValue={phone }  required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <label className="form-label" htmlFor="admissionDate">Admission Date</label>
                        <input onBlur={captureData} type="date" name="admissionDate" id="admissionDate" className="form-control mb-2" defaultValue={admissionDateOnly }  required/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label" htmlFor="admissionDate">Course</label>
                        <select onChange={captureData} name="courses" className="form-select"  defaultValue={courses} aria-label="Default select example" required>
                            <option disabled>--Select a Course---</option>
                            <option value="Web Design">Web Development</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                    </div>
                </div>
                <div>
                    <input className='btn btn-success w-100 btn-lg mt-4' type="submit" value="UPDATE" />
                </div>
            </form>
            
        </section>
    );
};

export default EditForm;