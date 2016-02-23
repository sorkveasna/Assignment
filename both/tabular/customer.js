TabularTables.Customer = new Tabular.Table({
    name: "Customer",
    collection: Collection.Customer,
    columns: [
        {data: "_id", title: "ID"},
        {data: "customerName", title: "Customer Name"},
        {data: "gender", title: "Gender"},
        {data: "type", title: "Type Of Customer"},
        {data: "address", title: "Address"},
        {data: "phone", title: "Phone Number"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.customerAction
        }
    ]
});