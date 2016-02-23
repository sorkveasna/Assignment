FlowRouter.route('/customer', {
    name: "customer",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "customer"});
    },
    breadcrumb:{
        title:'Customer',
        parent:'home'
    }
});
FlowRouter.route('/customerInsert', {
    name: "customerInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "customerInsert"});
    },
    breadcrumb:{
        title:'Insert',
        parent:'customer'
    }
});
FlowRouter.route('/customerUpdate/:id', {
    name: "customerUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "customerUpdate"});
    },
    breadcrumb:{
        title:'Update',
        parent:'customer'
    }
});