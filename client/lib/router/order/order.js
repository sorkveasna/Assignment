FlowRouter.route('/order', {
    name: "order",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "order"});
    },
    breadcrumb:{
        title:'Order',
        parent:'home'
    }
});
FlowRouter.route('/orderInsert', {
    name: "orderInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "orderInsert"});
    },
    breadcrumb:{
        title:'Insert',
        parent:'order'
    }
});
FlowRouter.route('/orderUpdate/:id', {
    name: "orderUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "orderUpdate"});
    },
    breadcrumb:{
        title:'Update',
        parent:'order'
    }
});