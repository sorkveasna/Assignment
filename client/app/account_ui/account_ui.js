// Config Account UI
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL",
    requestPermissions: {},
});

accountsUIBootstrap3.logoutCallback = function(error) {
    if(error) console.log("Error:" + error);
    FlowRouter.go('home');
}
