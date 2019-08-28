module.exports = {
    methods: {
        noImage(event){
            event.target.src = './images/no-menu-1.png'
            console.log('no-image');
            return
        },                  
    }
}