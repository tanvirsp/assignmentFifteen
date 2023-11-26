import axios from "axios";

const BaseURL="http://localhost:5000/api/v1";


export async function registerStudent(postBody){
    try {
        const res= await axios.post(`${BaseURL}/registration`,postBody );
        return res.data

    } catch (error) {
        return error.response
    }
 }
 


 export async function viewStudentData(){
    try {
        const res = await axios.get(`${BaseURL}/students` );
        return res.data

    } catch (error) {
        return error.response
    }
 }
 



 export async function studentDetails(id){
    try {
        const res = await axios.get(`${BaseURL}/student-details/${id}` );
        return res.data

    } catch (error) {
        return error.response
    }
 }
 

 

 export async function updateData(id, updateData){
    try {
        const res = await axios.post(`${BaseURL}/update-register/${id}`, updateData );
        return res.data

    } catch (error) {
        return error.response
    }
 }


  
 export async function deleteStudent(id){
    try {
        const res = await axios.delete(`${BaseURL}/delete-student/${id}` );
        return res.data

    } catch (error) {
        return error.response
    }
 }