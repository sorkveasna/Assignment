//Generate
Template.orderReportGen.helpers({
    data(){
        let data = {};

        let totalUnitPrice = 0;
        let totalAll = 0;

        let dateFrom = FlowRouter.getQueryParam('dateFrom');
        dateFrom = moment(dateFrom).toDate();
        let dateTo = FlowRouter.getQueryParam('dateTo');
        dateTo = moment(dateTo).toDate();
        //header
        data.header = {
            orderDate: moment(dateFrom).format('DD/MM/YYYY') + '-' + moment(dateTo).format('DD/MM/YYYY')
        };
        //end Header
        let selector = {
            orderDate: {$gte: dateFrom, $lte: dateTo}
        };
        let option = {$sort: {orderDate: 1}};
        let tempContent = Collection.Order.find(selector, option);
        let content = [];

        tempContent.forEach(function (obj) {

            totalUnitPrice += obj.price;
            totalAll += obj.total;

            let customerDoc = Collection.Customer.findOne(obj.customerId);
            obj._customer = customerDoc;

            //Find subject
            let stockDoc = Collection.Stock.findOne(obj.productName);
            obj._stock = stockDoc;

            content.push(obj);
        });
        data.price = totalUnitPrice;
        data.total = totalAll;
        data.content = content;

        return data;
    },
    no(index){
        //console.log(index);
        return index + 1;
    }
});

//hook
AutoForm.hooks({
    orderReport: {
        onSubmit(insertDoc, updateDoc, currentDoc){
            this.done(null, insertDoc);
        },
        onSuccess(formType, result){
            let query = result;
            let path = FlowRouter.path('orderReportGen', {}, query);

            window.open(path, '_blank');
        },
        onError(formType, error){
            alertify.error(error.message);
        }
    }
});