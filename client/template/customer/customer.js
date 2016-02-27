// //Alertify
// Template.subject.onRendered(function() {
//     // Create new  alertify
//     createNewAlertify("customer"); //subject is name of alertify
//
// });
// //insert
// Template.customer.events({
//             'click #insert': function(error, result) {
//                 // Bert.alert('Hello Bert!', 'success', 'growl-top-right');
//                     alertify.subject(renderTemplate(Template.customerInsert))
//                     // .set({
//                     //     // title: "plus", "Subject"
//                     // })
//                     .maximize();
//                 }
//             });

        Template.customerAction.events({
            'click .jsUpdate': function() {
                FlowRouter.go('customerUpdate', {
                    id: this._id
                }); // url??
            },
            'click .jsRemove': function() {
                Collection.Customer.remove({
                    _id: this._id
                }); /// remove by _id?
            },
            'click .jsRemove': function() {
                var self = this;
                alertify.confirm('Do you want to delete the record?',
                    function() {
                        Collection.Customer.remove({
                            _id: self._id
                        });
                        alertify.success('Deleted!');
                    },
                    function() {
                        alertify.error('Cancel');
                    });
            }
        });

        Template.customerUpdate.helpers({
            customerDoc() {
                let customerId = FlowRouter.getParam("id");
                let customer = Collection.Customer.findOne(customerId); //{}
                //console.log(customer);
                return customer;
            }
        });

        AutoForm.hooks({
            customerInsert: { //id autoform
                before: {
                    insert: function(doc) {
                        doc._id = idGenerator.gen(Collection.Customer, 3);
                        return doc;
                    }
                },
                onSuccess(formType, id) {
                    alertify.alert('Successfully Added!');
                    //FlowRouter.go('customer');
                },
                onError(formType, error) {
                    Bert.alert(error.message, 'danger', 'growl-top-right');
                }
            },
            customerUpdate: {
                before: {
                    insert: function(doc) {
                        doc._id = idGenerator.gen(Collection.Customer, 3);
                        return doc;
                    }
                },
                onSuccess(formType, id) {
                    alertify.alert('Successfully Updated!');
                    FlowRouter.go('customer');
                },
                onError(formType, error) {
                    alertify.error(error.message);
                }
            }
        });
