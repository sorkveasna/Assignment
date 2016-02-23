TabularTables.Order = new Tabular.Table({
    name: "Order",
    collection: Collection.Order,
    columns: [
        {data: "_id", title: "ID"},
        {
            data: "orderDate",
            title: "Order Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                } else {
                    return "Never";
                }
            }
        },
        {data: "customerId", title: "Customer ID"},
        {data: "productName", title: "Product Name"},
        {data: "qty", title: "Quanity"},
        {data: "productType", title: "Type"},
        {
            data: "price", title: "Price",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {data:"address", title: "Address"},
        {
            data: "total", title: "Total Price",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.orderAction
        }
    ]
});