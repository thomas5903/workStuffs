import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        validateUser(){
            console.log(this.get("model"))
        }
    }
});
