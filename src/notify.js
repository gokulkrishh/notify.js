(function (exports) {
  
  'use strict';

  var html, $container, $ele; //Initializing
  
  $container = document.createElement('div'); //To create a div

  $container.className = 'notify-container'; //Add a class to $container

  document.body.appendChild($container); //Append the container div to the page

  var notify = {
    
    //Show notification (user message, status of msg, time in milliseconds eg: 5000)
    show : function(msg, status, time) {
      var timeOut = time;
      
      //If no timeout is given, setTimeout to 3 seconds
      if (typeof timeOut === 'undefined') {
        timeOut = 4000;
      }

      $ele = document.createElement('div'); //Create a div to show msg
      $ele.innerHTML = msg; //Add user msg to div

      // remove($container); //Remove previous appended div

      $container.style.display = 'block';

      $ele.className = 'notify ' + status; //Eg notify-error or notify-success

      $container.appendChild($ele); //Add notification to notify-container

      hide($container, $ele, timeOut); //After appending call hide method
    }
  };

  //Hide notification as per time given
  function hide($container, $ele, timeOut) {
    setTimeout(function () {
      $container.style.display = 'none';
      remove($container); //remove appended div
    }, timeOut);
  }

  //Remove previously appended notification
  function remove($container) {
    for (var i = 0; i < $container.childNodes.length; i++) {
      $container.removeChild($container.childNodes[i]);
    } 
  }

  exports.notify = notify; //Make this method availble in global
  
})(typeof window === 'undefined' ? module.exports : window);
