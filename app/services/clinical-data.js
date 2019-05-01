import Service from '@ember/service';

export default Service.extend({
    getVisits(){
        return Ember.$.getJSON('http://localhost:4300/api/clinical-services/visits');
    },

    getAppointments(){
        return Ember.$.getJSON('http://localhost:4300/api/clinical-services/appointments');
    }
});
