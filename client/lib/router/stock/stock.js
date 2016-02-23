FlowRouter.route('/stock', {
    name: "stock",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "stock"});
    },
    breadcrumb:{
        title:'Stock',
        parent:'home'
    }
});
FlowRouter.route('/stockInsert', {
    name: "stockInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "stockInsert"});
    },
    breadcrumb:{
        title:'Insert',
        parent:'stock'
    }
});
FlowRouter.route('/stockUpdate/:id', {
    name: "stockUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "stockUpdate"});
    },
    breadcrumb:{
        title:'Update',
        parent:'stock'
    }
});