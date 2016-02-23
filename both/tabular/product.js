TabularTables.Product = new Tabular.Table({
    name: "Product",
    collection: Collection.Stock,
    columns: [
        {data: "_id", title: "ID"},
        {data: "productName", title: "Product Name"},
        {data: "category", title: "Category"},
        {data: "productType", title: "Type"},
        {data: "price", title: "Price",
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.stockAction
        }
    ]
});