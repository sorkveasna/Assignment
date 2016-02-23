Collection.Stock = new Mongo.Collection('stock');
Schema.Stock = new SimpleSchema({
    productName: {
        type: String,
        label: "Drink Name",
        unique: true
    },
    category: {
        type: String,
        label: "Category",
        autoform: {
            type: "select",
            options(){
                return [
                    {label: "Wine", value: "Wine"},
                    {label: "Beer", value: "Beer"},
                    {label: "Milk", value: "Milk"},
                    {label: "Cola", value: "Cola" },
                    {label: "Water", value: "Water"}
                ]
            }
        }
    },
    productType: {
        type: String,
        label: "Type Of Product",
        autoform: {
            type: "select",
            options(){
                return [
                    {label: "Case", value: "Case"},
                    {label: "Bottle", value: "Bottle"},
                    {label: "Can", value: "Can"}
                ]
            }
        }
    },
    price: {
        type: Number,
        label: "Price",
        decimal: true,
        autoform: {
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }

        }
    },
    qty:{
        type: Number,
        label:"Quanity",
        decimal: true,
    },
    importDate: {
        type: Date,
        label: "Import Date",
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
    total: {
        type: Number,
        label: "Price Total",
        decimal: true,
        autoform: {
            readonly: true,
            value: function () {
                let price = AutoForm.getFieldValue('price');
                let qty = AutoForm.getFieldValue('qty');
                return price * qty;
            },
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }

        }
    },
});
Collection.Stock.attachSchema(Schema.Stock);
