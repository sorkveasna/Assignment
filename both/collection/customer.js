Collection.Customer = new Mongo.Collection('customer');
Schema.Customer = new SimpleSchema({
    customerName: {
        type: String,
        label: "Customer"
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
    type: {
        type: String,
        label: "Type Of Customer",
        autoform: {
            type: "select",
            options(){
                return [
                    {label: "Default Customer", value: "DefaultCustomer"},
                    {label: "General Customer", value: "GeneralCustomer"},
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
        label: "Phone",
        optional: true
    }
});
Collection.Customer.attachSchema(Schema.Customer);