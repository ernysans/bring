/*!
 * Lend v0.1: Retrieve your web browser information.
 * (c) 2016 Erny Sans
 * 
 * http://github.com/ernysans/lend
 * http://erny.co
 * MIT License
 */

'use strict';

// Global Function ======================================== //
function lend(){};

// ====================================================================================== //
// Test ================================================================================= //
// ====================================================================================== //
lend.test = function() {
    return 'Hello human!.';
};

// ====================================================================================== //
// Screen Density ======================================================================= //
// ====================================================================================== //
lend.screenDensity = function() {

    var retina = ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    var hd = (window.matchMedia && (window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches)) || (window.devicePixelRatio && window.devicePixelRatio > 1.3);

    if (retina) return 'retina'; // is Retina
    else if (hd) return 'hd'; // is High Density
    else return 'sd'; // is Standard
};

// ====================================================================================== //
// Screen Size ======================================================================= //
// ====================================================================================== //
lend.screenSize = function(type){

    var w = Math.max(window.innerWidth || document.documentElement.clientWidth || 0); // window width
    var h = Math.max(window.innerHeight || document.documentElement.clientHeight || 0); // window height

    if (type === 'bootstrap')
        if (w >= 1200) return 'xl'; // Extra large screens
        else if (w >= 992 && w <= 1199) return 'lg'; // Large screens
        else if (w >= 768 && w <= 991) return 'md'; // Medium screens
        else if (w >= 544 && w <= 767) return 'sm'; // Small screens
        else return 'xs'; // Extra small screens
    else if (type === 'w') return w; // window width in px
    else if (type === 'h') return h; // window height in px
};

// =========================================== //
// Navigator User Agent  ===================== //
// =========================================== //
lend.userAgent = function () {

    if (/MSIE/i.test(navigator.userAgent) || navigator.appName == 'Microsoft Internet Explorer') return 'ie';
    else if (/Android/i.test(navigator.userAgent) ) return 'android';
    else if (/iPad/i.test(navigator.userAgent) ) return 'ipad';
    else if (/iPhone/i.test(navigator.userAgent) ) return 'iphone';
    else if (/Opera/i.test(navigator.userAgent) ) return 'opera';
    else if (/firefox/i.test(navigator.userAgent) ) return 'firefox';
    else if (/Chrome/i.test(navigator.userAgent) ) return 'chrome';
    else if (/AppleWebKit/i.test(navigator.userAgent) ) return 'safari';
    else if (/Netscape/i.test(navigator.userAgent) || navigator.appName == 'Netscape') return 'netscape';
    else if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
        return 'mobile';
    else return 'unknown';
};

// =========================================== //
// OS ======================================== //
// =========================================== //
lend.os = function () {

    if (navigator.appVersion.indexOf("Win")!=-1) return 'win';
    else if (navigator.appVersion.indexOf("Mac")!=-1) return 'mac';
    else if (navigator.appVersion.indexOf("X11")!=-1) return 'unix';
    else if (navigator.appVersion.indexOf("Linux")!=-1) return 'linux';
    else if (navigator.appVersion.indexOf("`iPad")!=-1) return 'ipad';
    else if (navigator.appVersion.indexOf("iPhone")!=-1) return 'iphone';
    else if (navigator.appVersion.indexOf("Android")!=-1) return 'android';
    else if (navigator.appVersion.indexOf("symbianos")!=-1) return 'symbianos';
    else return 'unknown';
};

// =========================================== //
// Languages ================================= //
// =========================================== //
lend.language = function () {

    return (navigator.language || navigator.userLanguage || navigator.browserLanguage) ? navigator.language : navigator.userLanguage;
};
