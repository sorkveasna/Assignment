//Template.stockAction.events({
//    'click .jsUpdate': function () {
//        FlowRouter.go('stockUpdate', {id: this._id});// url??
//    },
//    'click .jsRemove': function () {
//        Collection.Stock.remove({_id: this._id}); /// remove by _id?
//    },
//    'click .jsRemove': function () {
//        var self = this;
//        alertify.confirm('Do you want to delete the record?',
//            function () {
//                Collection.Stock.remove({_id: self._id});
//                alertify.success('Deleted!');
//            },
//            function () {
//                alertify.error('Cancel');
//            });
//    }
//});
//
//Template.stockUpdate.helpers({
//    stockDoc(){
//        let stockId = FlowRouter.getParam("id");
//        let stock = Collection.Stock.findOne(stockId); //{}
//        //console.log(employee);
//        return stock;
//    }
//});
//
//AutoForm.hooks({
//    stockInsert: { //id autoform
//        before: {
//            insert: function (doc) {
//                doc._id = idGenerator.gen(Collection.Stock, 3);
//                return doc;
//            }
//        },
//        onSuccess(formType, id){
//            alertify.alert('Successfully Added!');
//            FlowRouter.go('stock');
//        },
//        onError(formType, error){
//            Bert.alert(error.message, 'danger', 'growl-top-right');
//        }
//    },
//    stockUpdate: {
//        before: {
//            insert: function (doc) {
//                doc._id = idGenerator.gen(Collection.Stock, 3);
//                return doc;
//            }
//        },
//        onSuccess(formType, id){
//            alertify.alert('Successfully Updated!');
//            FlowRouter.go('stock');
//        },
//        onError(formType, error){
//            alertify.error(error.message);
//        }
//    }
//});