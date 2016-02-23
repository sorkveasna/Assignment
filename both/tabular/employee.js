TabularTables.Employee = new Tabular.Table({
    name: "Employee",
    collection: Collection.Employee,
    columns: [
        {data: "_id", title: "ID"},
        {data: "employeeName", title: "Employee Name"},
        {data: "gender", title: "Gender"},
        {data: "dateBirth",
            title: "Date Of Birth",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                }
                else
                {
                    return "Never";
                }
            }
        },
        {data: "employeeType", title: "Type Of Employee"},
        {data: "address", title: "Address"},
        {data: "phone", title: "Phone Number"},
        {data: "des", title: "Description"},
{
            title: "Action",
            tmpl: Meteor.isClient && Template.employeeAction
        }
    ]
});