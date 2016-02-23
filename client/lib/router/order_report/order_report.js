
FlowRouter.route('/orderReport/', {
    name: "orderReport",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "orderReport"});
    },
    breadcrumb:{
        title:'Order Report',
        parent:'home'
    }
});
//Report Generate
FlowRouter.route('/orderReportGen/',{
    name: "orderReportGen",
    action: function (params, queryParams) {
        BlazeLayout.render('OrderReportLayout', {content:"orderReportGen"});
    }
});