class LibInfoContainerController {
    constructor($element) {
        this.element = $element;        
        if (this.location == null) {
            let locationController = this.element.parent().parent().parent().parent().parent().parent().parent().controller('prm-location');
            if (locationController) {                
                this.location = locationController.loc.location;
            } else {                
                let locationItemsController = angular.element(document.querySelector('prm-location-items')).controller('prm-location-items')
                this.location = locationItemsController.currLoc.location;
            }
        }
    }
}

LibInfoContainerController.$inject = ['$element'];

export let libInfoContainerComponent = {
    name: 'rzs-lib-info-container',
    config: { 
        bindings: { parentCtrl: '<' },
        controller: LibInfoContainerController,
        template: '<rzs-lib-info location="$ctrl.location"></rzs-lib-info>'
    },
    enabled: false,
    appendTo: 'prm-stack-map-after',
    enableInView: '.*',
}