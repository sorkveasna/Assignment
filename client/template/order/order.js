Template.orderAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('orderUpdate', {id: this._id});// url??
    },
    'click .jsRemove': function () {
        Collection.Order.remove({_id: this._id}); /// remove by _id?
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm('Do you want to delete the record?',
            function () {
                Collection.Order.remove({_id: self._id});
                alertify.success('Deleted!');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});

Template.orderUpdate.helpers({
    orderDoc(){
        let orderId = FlowRouter.getParam("id");
        let order = Collection.Order.findOne(orderId); //{}
        //console.log(employee);
        return order;
    }
});

AutoForm.hooks({
    orderInsert: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Order, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Added!');
            //FlowRouter.go('order');
        },
        onError(formType, error){
            Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    orderUpdate: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Order, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Updated!');
            FlowRouter.go('order');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});