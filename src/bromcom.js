/**
 * @class Bromcom
 */
var Bromcom = {
    errors: {
        targetFormNotExist: 'target form is not exist --> '
    }
};

/**
 * Components namelist
 */
Bromcom.inputComponents = {
    INPUT: 'input',
    TEXTAREA: 'textarea',
    RADIO_GROUP: 'radio-group',
    CHECKBOX_GROUP: 'checkbox-group'
}

Bromcom.helpers = {
    randomId: function() {
        return Math.random().toString(16).slice(2,-1);
    }
}


!(function(bcm, undefined) {
    var doc = document;

    /**
     * @Class forms 
     * inherited from Bromcom
     */
    bcm.forms = function(selector) {
        this.formData = null;
        this.inputs = [];
        this.selector = selector;

        this.getInputs();
    }

    /**
     * @desc
     * @returns {void}
     */
    bcm.forms.prototype.getInputs = function() {
        var form = document.querySelector(this.selector);
        
        if (!form) { 
            console.warn(Bromcom.errors.targetFormNotExist + this.selector);
            return;
        }

        this.inputs = form.querySelectorAll(
            'bcm-' + Object.values(Bromcom.inputComponents).join(',bcm-')
        );
    };

    /**
     * @desc
     * @returns {Promise<Object>}
     */
    bcm.forms.prototype.data = function() {

        // Reset form data
        // #
        this.formData = {};

        for (var i = 0; i <= this.inputs.length -1; i++) {
            this.formData[this.inputs[i].name] = this.inputs[i].value
        }
        return this.formData;
    };
})(Bromcom);

