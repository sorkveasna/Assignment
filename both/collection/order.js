Collection.Order = new Mongo.Collection('order');
Schema.Order = new SimpleSchema({
    orderDate: {
        type: Date,
        label: "Order Date",
        defaultValue: moment().toDate(),
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    customerId: {
        type: String,
        label: "Customer ID",
        autoform: {
            type: "select",
            options: function () {
                var data = Collection.Customer.find();
                var list = [];

                data.forEach(function (obj) {
                    list.push({label: obj._id + ' : ' + obj.customerName, value: obj._id})
                });

                return list;
            }
        }
    },
    //customerName: {
    //    type: String,
    //    label: "Customer Name",
    //},
    productName: {
        type: String,
        label: "Product Name",
        autoform: {
            type: "select",
            options: function () {
                var data = Collection.Stock.find();
                var list = [];

                data.forEach(function (obj) {
                    list.push({label: obj._id + ' : ' + obj.productName, value: obj._id})
                });
                return list;
            }
        }
    },
    qty: {
        type: Number,
        label: "Quanity",
        decimal: true
    },
    productType: {
        type: String,
        label: "Type Of Product",
        autoform: {
            value: function () {
                let productName = AutoForm.getFieldValue('productName');

                //if (customerId) {
                let data = Collection.Stock.findOne(productName);

                if(data){
                    return data.productType;
                }
            }
        }
    },
    price: {
        type: Number,
        label: "Price",
        decimal: true,
        autoform: {
            value: function(){
                let productName = AutoForm.getFieldValue('productName');

                //if (customerId) {
                let data = Collection.Stock.findOne(productName);

                if(data){
                    return data.price;
                }
            },
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }

        }
    },
    address: {
        type: String,
        label: "Address",
        autoform: {
            value: function () {
                let customerId = AutoForm.getFieldValue('customerId');

                //if (customerId) {
                    let data = Collection.Customer.findOne(customerId);

                if(data){
                    return data.address;
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
    }
});
Collection.Order.attachSchema(Schema.Order);
