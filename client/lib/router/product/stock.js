FlowRouter.route('/product', {
    name: "product",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "product"});
    },
    breadcrumb:{
        title:'Product',
        parent:'home'
    }
});
FlowRouter.route('/productInsert', {
    name: "productInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "productInsert"});
    },
    breadcrumb:{
        title:'Insert',
        parent:'product'
    }
});
FlowRouter.route('/productUpdate/:id', {
    name: "productUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "productUpdate"});
    },
    breadcrumb:{
        title:'Update',
        parent:'product'
    }
});