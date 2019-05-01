import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    clinicalData: service(),

    didInsertElement() {
        this._super(...arguments);
        
        this.get('clinicalData').getVisits().then((visits) => {
          this.set('visits', visits);
        });
    }
});
