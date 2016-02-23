FlowRouter.route('/employee', {
    name: "employee",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "employee"});
    },
    breadcrumb:{
        title:'Employee',
        parent:'home'
    }
});
FlowRouter.route('/employeeInsert', {
    name: "employeeInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "employeeInsert"});
    },
    breadcrumb:{
        title:'Insert',
        parent:'employee'
    }
});
FlowRouter.route('/employeeUpdate/:id', {
    name: "employeeUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "employeeUpdate"});
    },
    breadcrumb:{
        title:'Update',
        parent:'employee'
    }
});