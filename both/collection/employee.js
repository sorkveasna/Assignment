Collection.Employee = new Mongo.Collection('employee');
Schema.Employee = new SimpleSchema({
    employeeName: {
        type: String,
        label: "Employee Name"
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select",
            options(){
                return [
                    {label: "Male", value: "Male"},
                    {label: "Female", value: "Female"},
                ]
            }
        }
    },
    dateBirth: {
        type: Date,
        label: "Date of Birth",
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'YYYY/MM/DD',
                    pickTime: false
                }
            }
        }
    },
    employeeType: {
        type: String,
        label: "Type Of Employee",
        autoform: {
            type: "select",
            options(){
                return [
                    {label: "Part Time", value: "Part Time"},
                    {label: "Full Time", value: "Full Time"},
                ]
            }
        }
    },
    address: {
        type: String,
        label: "Address"
    },
    phone: {
        type: String,
        label: "Phone Number"
    },
    des: {
        type: String,
        label: "Description"
    }
});
Collection.Employee.attachSchema(Schema.Employee);
