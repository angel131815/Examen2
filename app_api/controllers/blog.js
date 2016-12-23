var mongoose = require('mongoose');
var pst = mongoose.model('post');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.loadPosts = function (req, res) {
   pst.find().exec(function(err,post){
      if(!post){
         sendJSONresponse(res, 404, {
            "message": "Nos se encontraron posts"
          });
          return;
      }else if (err) {
          sendJSONresponse(res, 404, err);
          return;
      }

      sendJSONresponse(res, 200, post);
   }
};

module.exports.addPost = function(req, res) {
  pst.create({
    autor: req.body.authr,
    content: req.body.content,
    email: req.body.email    
  }, function(err, post) {
    if (err) {
      sendJSONresponse(res, 400, err);
    } else {
      sendJSONresponse(res, 201, post);
    }
  });
};

/* PUT /api/blog/:postid */
module.exports.updatePost = function(req, res) {
  if (!req.params.postid) {
    sendJSONresponse(res, 404, {
      "message": "se requiere un id de post"
    });
    return;
  }
  pst
    .findById(req.params.postid)
    .exec(
      function(err, post) {
        if (!post) {
          sendJSONresponse(res, 404, {
            "message": "postid no encontrado"
          });
          return;
        } else if (err) {
          sendJSONresponse(res, 400, err);
          return;
        }
        post.autor = req.body.autor;
        post.content = req.body.content;
        post.email = req.body.email;
        post.save(function(err, post) {
          if (err) {
            sendJSONresponse(res, 404, err);
          } else {
            sendJSONresponse(res, 200, post);
          }
        });
      }
  );
};

/* DELETE /api/blog/:postid */
module.exports.locationsDeleteOne = function(req, res) {
  var postid = req.params.postid;
  if (postid) {
    pst
      .findByIdAndRemove(postid)
      .exec(
        function(err, post) {
          if (err) {
            console.log(err);
            sendJSONresponse(res, 404, err);
            return;
          }
          console.log("post id " + postid + " deleted");
          sendJSONresponse(res, 204, null);
        }
    );
  } else {
    sendJSONresponse(res, 404, {
      "message": "No postid"
    });
  }
};