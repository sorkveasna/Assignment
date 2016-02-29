// Collection.Payment=New Mongo.Collection('payment');
// Schema.Payment=new SimpleSchema({
//     paidDate: {
//         type: Date,
//         label: "Paid Date",
//         defaultValue: moment().toDate(),
//         autoform: {
//             type: "bootstrap-datetimepicker",
//             afFieldInput: {
//                 dateTimePickerOptions: {
//                     pickTime: false,
//                     format: 'MMM/DD/YYYY'
//                 }
//             }
//         }
//     },
//     customerId: {
//         type: String,
//         label: "Customer ID",
//         autoform: {
//             type: "select2",
//             options: function() {
//                 var data = Collection.Customer.find();
//                 var list = [{
//                     label: '(Select One)',
//                     value: ''
//                 }];
//
//                 data.forEach(function(obj) {
//                     list.push({
//                         label: obj._id + ' | ' + obj.name,
//                         value: obj._id
//                     });
//                 });
//                 return list;
//             }
//         }
//     },
//     productId: {
//         type: String,
//         label: "Product ID",
//         autoform: {
//             type: "select2",
//             options: function() {
//                 let studentId = AutoForm.getFieldValue('customerId');
//                 var data = Collection.Product.find({
//                     "customerId": customerId
//                 });
//                 var list = [{
//                     label: '(Select One)',
//                     value: ''
//                 }];
//
//                 data.forEach(function(obj) {
//                     let product = Collection.Product.findOne(obj.productId);
//                     // Check last paid
//                     let lastPaid = Collection.Payment.findOne({
//                         productId: obj._id
//                     }, {
//                         $sort: {
//                             paidDate: -1
//                         }
//                     });
//                     if (lastPaid) {
//                         if (lastPaid.osAmount > 0) {
//                             list.push({
//                                 label: obj._id + ' | ' + customer.name + ' | ' + lastPaid.osAmount,
//                                 value: obj._id
//                             })
//                         }
//                     } else {
//                         list.push({
//                                 label: obj._id + ' | ' + customer.name + ' | ' + obj.amount,
//                                 value: obj._id
//                             })
//                             //list.push({label: `${obj._id} | ${subject.name} ${obj.amount}`, value: obj._id});
//                     }
//                 });
//                 return list;
//             }
//         }
//     },
//     qty: {
//             type: Number,
//             label: "Quanity",
//             autoform: {
//                 type: "select2",
//                 options: function() {
//                     var data = Collection.Order.find();
//                     var list = [{
//                         label: '(Select One)',
//                         value: ''
//                     }];
//
//                     data.forEach(function(obj) {
//                         list.push({
//                             label: obj._id + ' | ' + obj.name,
//                             value: obj._id
//                         })
//                     });
//                     return list;
//                 }
//             }
//         },
// });
