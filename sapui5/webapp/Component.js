sap.ui.define([
    "sap/ui/core/UIComponent",
    "logali/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typof sap.ui.core.UIComponent} UIComponent
     */
    function (UIComponent, Models, ResourceModel) {
        return UIComponent.extend("logali.sapui5.Component", {

            metadata: {
                manifest:"json"
            },

            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                this.setModel(Models.createRecipient());
                var i18nModel = new ResourceModel({ bundleName: "logali.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n");
            }
        });
    });