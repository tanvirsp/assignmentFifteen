const RegistrationModel = require("../models/RegistrationModel");

exports.register = async(req, res) => {

    try {
        const data = req.body;
        const result = await RegistrationModel.create(data);
        res.status(200).json({status: "success", data: result});

        
    } catch (error) {
        res.status(400).json({status:"fail", data: error.toString()})
    }

};



exports.viewStudents = async(req, res) => {
    try {
        
        const result = await RegistrationModel.find({});
        res.status(200).json({status: "success", data: result});

        
    } catch (error) {
        res.status(400).json({status:"fail", data: error.toString()})
    }

};


exports.studentDetails = async(req, res) => {
    try {
        const id = req.params.id;
        const result = await RegistrationModel.findOne({_id: id});
        res.status(200).json({status: "success", data: result});

        
    } catch (error) {
        res.status(400).json({status:"fail", data: error.toString()})
    }

};



exports.updateStudent = async(req, res) => {

    try {
        const id = req.params.id;
        const data = req.body;
        
        const result = await RegistrationModel.updateOne({_id: id}, data);
        res.status(200).json({status: "success", data: result});

        
    } catch (error) {
        res.status(400).json({status:"fail", data: error.toString()})
    }

};



exports.deleteStudent = async(req, res) => {

    try {
        const id = req.params.id;
       
        const result = await RegistrationModel.deleteOne({_id: id});
        res.status(200).json({status: "success", data: result});

        
    } catch (error) {
        res.status(400).json({status:"fail", data: error.toString()})
    }

};