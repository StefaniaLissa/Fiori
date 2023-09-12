// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "logali/sapui5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     *
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (Controller, MessageToast, Models, ResourceModel) {
        "use strict"

        return Controller.extend("logali.sapui5.controller.App", {

            onInit: function () {
                //this.getView().setModel(Models.createRecipient());
                //var i18nModel = new ResourceModel({ bundleName : "logali.sapui5.i18n.i18n"});
                //this.getView().setModel(i18nModel, "i18n");
            },

            onShowHello: function () {
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });
