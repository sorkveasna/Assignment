TabularTables.Stock = new Tabular.Table({
    name: "Stock",
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
        {data: "qty", title: "Quanity"},
        {data: "importDate",
            title: "Import Date",
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('YYYY/MM/DD');
                }
                else {
                    return "Never";
                }
            }
        },
        {data: "total", title: "Total Price",
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