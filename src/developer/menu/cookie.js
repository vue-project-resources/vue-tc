var isType = {}.toString;
export class Cookies {
    static set(cookieKey, cookieValue, overSeconds){
        if(isType.call(cookieValue) == "[object Array]" || "[object Object]"){
            cookieValue = JSON.stringify(cookieValue);
        }
        if(!overSeconds){
            overSeconds = 24*60*60*1000;
        }
        document.cookie = cookieKey + "=" +cookieValue +";max-age="+overSeconds*24*60*60*1000;
    }
    static get(cookieKey){
        var arr = document.cookie.split("; ");
        for (var i = 0;i < arr.length;i++) {
            var arr2 = arr[i].split("=");
            if (arr2[0].trim() == cookieKey) {
                if(isType.call(arr2[1]) == "[object Array]" || "[object Object]"){
                    return JSON.parse(arr2[1]);
                }else{
                    return arr2[1];
                }
            }
        }
    }
    static delete(cookieKey){
        Cookies.set(cookieKey,"",-1);
    }
    static has(cookieKey){
        var arr = document.cookie.split(";");
        for (var i = 0;i < arr.length;i++) {
            var arr2 = arr[i].split("=");
            if (arr2[0].trim() == cookieKey) {
                return true;
            }
        }
        return false;
    }
}

export class Local{
    static set(key,value){
        if(isType.call(value) == "[object Array]" || "[object Object]"){
            return localStorage.setItem(key,JSON.stringify(value));
        }else{
            return localStorage.setItem(key,value);
        }
    }
    static get(key){
        var v = localStorage.getItem(key);
        if(isType.call(v) == "[object Array]" || "[object Object]"){
            return JSON.parse(v);
        }else{
            return v;
        }
    }
}

export class Session{
    static set(key,value){
        if(isType.call(value) == "[object Array]" || "[object Object]"){
            return sessionStorage.setItem(key,JSON.stringify(value));
        }else{
            return sessionStorage.setItem(key,value);
        }
    }
    static get(key){
        var v = sessionStorage.getItem(key);
        if(isType.call(v) == "[object Array]" || "[object Object]"){
            return JSON.parse(v);
        }else{
            return v;
        }
    }
}
