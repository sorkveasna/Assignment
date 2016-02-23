Template.employeeAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('employeeUpdate', {id: this._id});// url??
    },
    'click .jsRemove': function () {
        Collection.Employee.remove({_id: this._id}); /// remove by _id?
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm('Do you want to delete the record?',
            function () {
                Collection.Employee.remove({_id: self._id});
                alertify.success('Deleted!');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});

Template.employeeUpdate.helpers({
    employeeDoc(){
        let employeeId = FlowRouter.getParam("id");
        let employee = Collection.Employee.findOne(employeeId); //{}
        //console.log(employee);
        return employee;
    }
});

AutoForm.hooks({
    employeeInsert: { //id autoform
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Employee, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Added!');
            //FlowRouter.go('employee');
        },
        onError(formType, error){
            Bert.alert(error.message, 'danger', 'growl-top-right');
        }
    },
    employeeUpdate: {
        before: {
            insert: function (doc) {
                doc._id = idGenerator.gen(Collection.Employee, 3);
                return doc;
            }
        },
        onSuccess(formType, id){
            alertify.alert('Successfully Updated!');
            FlowRouter.go('employee');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});