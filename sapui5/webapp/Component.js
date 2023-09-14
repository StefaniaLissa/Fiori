sap.ui.define([
    "sap/ui/core/UIComponent",
    "logali/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
],
    /**
     * @param {typof sap.ui.core.UIComponent} UIComponent
     */
    function (UIComponent, Models, ResourceModel, HelloDialog) {
        return UIComponent.extend("logali.sapui5.Component", {

            metadata: {
                manifest:"json"
            },

            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                this.setModel(Models.createRecipient());
                var i18nModel = new ResourceModel({ bundleName: "logali.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
                this._helloDialog = new HelloDialog(this.getRootControl());
            },

            exit: function(){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function(){
                this._helloDialog.open();
            }

        });
    });