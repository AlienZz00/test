var urlParams = location.search.substring(1).split('&'),
params = {};

urlParams.forEach(function(el){
    var tmpArr = el.split('=');
    params[tmpArr[0]] = tmpArr[1];
});
      
var edit = params['edit'];
console.log(edit);