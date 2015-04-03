/* Configuration for default, important for creating switch, 
everytime we pick category, we want to show something else 
in category Session, at first null = no category picked
*/
Router.configure({
    layoutTemplate:'layout',
    yieldTemplates:{
        //each yield going to different templates
        'books':{to:'books'},
        'categories':{to:'categories'}
    }
});
/* If someone comes to browser and type / - show layout template ,
 if /books - different set of books 
Switch based on category, in data function, session.set - and then set category
= pulling out category to route from url. Path of our template, what is name of categories*/

Router.map(function(){
    this.route('/','layout');
    this.route('books', {
        layoutTemplate:'layout',
        path:'/:name',
        data: function() {
            console.log(this.params.name);
            Session.set('category',this.params.name);
            },
        template:'layout'
    });
});