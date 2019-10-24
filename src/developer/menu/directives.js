export const throttle = {
    bind: function (el, binding) {
        let starDate = new Date();
        let t = null;
        let endsDate = null;
        let throttleTime = binding.value // 节流时间
        if (!throttleTime) { // 用户若不设置节流时间，则默认2s
            throttleTime = 2000
        }
        el.addEventListener('click', () => {
            el.isDisableClick = true;
            clearTimeout(t);
            endsDate = new Date();
            if(endsDate - starDate > throttleTime){
                el.isDisableClick = false;
                starDate = new Date();
            }else{
                t = setTimeout(function(){
                    el.isDisableClick = false;
                },throttleTime);
            }
        }, true)
    }
}

export function capitalize(value){
    return value + '$';
}