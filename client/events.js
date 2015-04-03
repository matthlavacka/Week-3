Template.book.events({
  'click .like':function(event, template){
    var curlike = Likes.findOne({ muser:Meteor.userId(), book:template.data._id});
      if (!curlike) {
          Likes.insert({muser:Meteor.userId(),book:template.data._id});
      }
        Session.set('updated',new Date());
  }
});