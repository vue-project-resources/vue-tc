function debounce(fn,time,triggleNow){
    var t = null;
    var debounce = function(){
        var _self = this,
            args = arguments;
        if(t){
            clearTimeout(t);
        } 
        if(triggleNow){
            var exec = !t;
            t = setTimeout(function(){
                t = null;
            },time);
            if(exec){
                res = fn.apply(_self,args);
            }
        }else{
            t = setTimeout(function(){
                res = fn.apply(_self,args);
            })
        }
    }
    debounce.remove = function(){
        clearTimeout(t);
        t = null;
    }
    return debounce;
}

export default debounce;
