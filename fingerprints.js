var t = navigator.mimeTypes, e, splitFonts = false,noFonts = false;
e = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(n) {
        var f = "", o, t, i, h, c, s, r, u = 0;
        for (n = e._utf8_encode(n); u < n.length; )
            o = n.charCodeAt(u++),
            t = n.charCodeAt(u++),
            i = n.charCodeAt(u++),
            h = o >> 2,
            c = (o & 3) << 4 | t >> 4,
            s = (t & 15) << 2 | i >> 6,
            r = i & 63,
            isNaN(t) ? s = r = 64 : isNaN(i) && (r = 64),
            f = f + this._keyStr.charAt(h) + this._keyStr.charAt(c) + this._keyStr.charAt(s) + this._keyStr.charAt(r);
        return f
    },
    _utf8_encode: function(n) {
        var i, r, t;
        for (n = n.replace(/\r\n/g, "\n"),
        i = "",
        r = 0; r < n.length; r++)
            t = n.charCodeAt(r),
            t < 128 ? i += String.fromCharCode(t) : t > 127 && t < 2048 ? (i += String.fromCharCode(t >> 6 | 192),
            i += String.fromCharCode(t & 63 | 128)) : (i += String.fromCharCode(t >> 12 | 224),
            i += String.fromCharCode(t >> 6 & 63 | 128),
            i += String.fromCharCode(t & 63 | 128));
        return i
    }
},
function(n) {
    "use strict";
    function md5f(n, t) {
        var i = (n & 65535) + (t & 65535)
          , r = (n >> 16) + (t >> 16) + (i >> 16);
        return r << 16 | i & 65535
    }
    function md5p(n, t) {
        return n << t | n >>> 32 - t
    }
    function md5e(n, t, i, r, u, e) {
        return md5f(md5p(md5f(md5f(t, n), md5f(r, e)), u), i)
    }
    function md5t(n, t, i, r, u, f, o) {
        return md5e(t & i | ~t & r, n, t, u, f, o)
    }
    function md5i(n, t, i, r, u, f, o) {
        return md5e(t & r | i & ~r, n, t, u, f, o)
    }
    function md5r(n, t, i, r, u, f, o) {
        return md5e(t ^ i ^ r, n, t, u, f, o)
    }
    function md5u(n, t, i, r, u, f, o) {
        return md5e(i ^ (t | ~r), n, t, u, f, o)
    }
    function md5o(n, e) {
        n[e >> 5] |= 128 << e % 32;
        n[(e + 64 >>> 9 << 4) + 14] = e;
        for (var a, v, y, p, o = 1732584193, s = -271733879, h = -1732584194, c = 271733878, l = 0; l < n.length; l += 16)
            a = o,
            v = s,
            y = h,
            p = c,
            o = md5t(o, s, h, c, n[l], 7, -680876936),
            c = md5t(c, o, s, h, n[l + 1], 12, -389564586),
            h = md5t(h, c, o, s, n[l + 2], 17, 606105819),
            s = md5t(s, h, c, o, n[l + 3], 22, -1044525330),
            o = md5t(o, s, h, c, n[l + 4], 7, -176418897),
            c = md5t(c, o, s, h, n[l + 5], 12, 1200080426),
            h = md5t(h, c, o, s, n[l + 6], 17, -1473231341),
            s = md5t(s, h, c, o, n[l + 7], 22, -45705983),
            o = md5t(o, s, h, c, n[l + 8], 7, 1770035416),
            c = md5t(c, o, s, h, n[l + 9], 12, -1958414417),
            h = md5t(h, c, o, s, n[l + 10], 17, -42063),
            s = md5t(s, h, c, o, n[l + 11], 22, -1990404162),
            o = md5t(o, s, h, c, n[l + 12], 7, 1804603682),
            c = md5t(c, o, s, h, n[l + 13], 12, -40341101),
            h = md5t(h, c, o, s, n[l + 14], 17, -1502002290),
            s = md5t(s, h, c, o, n[l + 15], 22, 1236535329),
            o = md5i(o, s, h, c, n[l + 1], 5, -165796510),
            c = md5i(c, o, s, h, n[l + 6], 9, -1069501632),
            h = md5i(h, c, o, s, n[l + 11], 14, 643717713),
            s = md5i(s, h, c, o, n[l], 20, -373897302),
            o = md5i(o, s, h, c, n[l + 5], 5, -701558691),
            c = md5i(c, o, s, h, n[l + 10], 9, 38016083),
            h = md5i(h, c, o, s, n[l + 15], 14, -660478335),
            s = md5i(s, h, c, o, n[l + 4], 20, -405537848),
            o = md5i(o, s, h, c, n[l + 9], 5, 568446438),
            c = md5i(c, o, s, h, n[l + 14], 9, -1019803690),
            h = md5i(h, c, o, s, n[l + 3], 14, -187363961),
            s = md5i(s, h, c, o, n[l + 8], 20, 1163531501),
            o = md5i(o, s, h, c, n[l + 13], 5, -1444681467),
            c = md5i(c, o, s, h, n[l + 2], 9, -51403784),
            h = md5i(h, c, o, s, n[l + 7], 14, 1735328473),
            s = md5i(s, h, c, o, n[l + 12], 20, -1926607734),
            o = md5r(o, s, h, c, n[l + 5], 4, -378558),
            c = md5r(c, o, s, h, n[l + 8], 11, -2022574463),
            h = md5r(h, c, o, s, n[l + 11], 16, 1839030562),
            s = md5r(s, h, c, o, n[l + 14], 23, -35309556),
            o = md5r(o, s, h, c, n[l + 1], 4, -1530992060),
            c = md5r(c, o, s, h, n[l + 4], 11, 1272893353),
            h = md5r(h, c, o, s, n[l + 7], 16, -155497632),
            s = md5r(s, h, c, o, n[l + 10], 23, -1094730640),
            o = md5r(o, s, h, c, n[l + 13], 4, 681279174),
            c = md5r(c, o, s, h, n[l], 11, -358537222),
            h = md5r(h, c, o, s, n[l + 3], 16, -722521979),
            s = md5r(s, h, c, o, n[l + 6], 23, 76029189),
            o = md5r(o, s, h, c, n[l + 9], 4, -640364487),
            c = md5r(c, o, s, h, n[l + 12], 11, -421815835),
            h = md5r(h, c, o, s, n[l + 15], 16, 530742520),
            s = md5r(s, h, c, o, n[l + 2], 23, -995338651),
            o = md5u(o, s, h, c, n[l], 6, -198630844),
            c = md5u(c, o, s, h, n[l + 7], 10, 1126891415),
            h = md5u(h, c, o, s, n[l + 14], 15, -1416354905),
            s = md5u(s, h, c, o, n[l + 5], 21, -57434055),
            o = md5u(o, s, h, c, n[l + 12], 6, 1700485571),
            c = md5u(c, o, s, h, n[l + 3], 10, -1894986606),
            h = md5u(h, c, o, s, n[l + 10], 15, -1051523),
            s = md5u(s, h, c, o, n[l + 1], 21, -2054922799),
            o = md5u(o, s, h, c, n[l + 8], 6, 1873313359),
            c = md5u(c, o, s, h, n[l + 15], 10, -30611744),
            h = md5u(h, c, o, s, n[l + 6], 15, -1560198380),
            s = md5u(s, h, c, o, n[l + 13], 21, 1309151649),
            o = md5u(o, s, h, c, n[l + 4], 6, -145523070),
            c = md5u(c, o, s, h, n[l + 11], 10, -1120210379),
            h = md5u(h, c, o, s, n[l + 2], 15, 718787259),
            s = md5u(s, h, c, o, n[l + 9], 21, -343485551),
            o = md5f(o, a),
            s = md5f(s, v),
            h = md5f(h, y),
            c = md5f(c, p);
        return [o, s, h, c]
    }
    function md5c(n) {
        for (var i = "", t = 0; t < n.length * 32; t += 8)
            i += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
        return i
    }
    function md5s(n) {
        var t, i = [];
        for (i[(n.length >> 2) - 1] = undefined,
        t = 0; t < i.length; t += 1)
            i[t] = 0;
        for (t = 0; t < n.length * 8; t += 8)
            i[t >> 5] |= (n.charCodeAt(t / 8) & 255) << t % 32;
        return i
    }
    function md5w(n) {
        return md5c(md5o(md5s(n), n.length * 8))
    }
    function md5b(n, t) {
        var i, r = s(n), u = [], f = [], e;
        for (u[15] = f[15] = undefined,
        r.length > 16 && (r = o(r, n.length * 8)),
        i = 0; i < 16; i += 1)
            u[i] = r[i] ^ 909522486,
            f[i] = r[i] ^ 1549556828;
        return e = md5o(u.concat(s(t)), 512 + t.length * 8),
        md5c(md5o(f.concat(e), 640))
    }
    function md5l(n) {
        for (var r = "0123456789abcdef", u = "", i, t = 0; t < n.length; t += 1)
            i = n.charCodeAt(t),
            u += r.charAt(i >>> 4 & 15) + r.charAt(i & 15);
        return u
    }
    function md5h(n) {
        return unescape(encodeURIComponent(n))
    }
    function md5a(n) {
        //return md5w(md5h(n))
        //console.log(n);
        return md5w(n)
    }
    function md5k(n) {
        return md5l(md5a(n))
    }
    function md5v(n, t) {
        return md5b(md5h(n), md5h(t))
    }
    function md5d(n, t) {
        return md5l(md5v(n, t))
    }
    function md5y(n, t, i) {
        return t ? i ? md5v(t, n) : md5d(t, n) : i ? md5a(n) : md5k(n)
    }
    typeof define == "function" && define.amd ? define(function() {
        return md5k
    }) : n.MD5Hash = md5k
}(this);
function b() {
    var n = ["monospace", "sans-serif", "serif"], i = "Times New Roman CYR;Arial CYR;Courier New CYR;宋体;Arial Cyr;Times New Roman Cyr;Courier New Cyr;华文细黑;儷黑 Pro;WP CyrillicB;WP CyrillicA;궁서체;細明體;小塚明朝 Pr6N B;宋体-PUA;方正流行体繁体;汉仪娃娃篆简;돋움;GaramondNo4CyrTCYLig;HelveticaInseratCyr Upright;HelveticaCyr Upright;TL Help Cyrillic;가는안상수체;TLCyrillic2;AGRevueCyr-Roman;AGOptimaCyr;HelveticaInseratCyrillicUpright;HelveticaCyrillicUpright;HelveticaCyrillic;CyrillicRibbon;CyrillicHover;文鼎ＰＯＰ－４;方正中倩简体;创艺简中圆;Zrnic Cyr;Zipper1 Cyr;Xorx_windy Cyr;Xorx_Toothy Cyr;소야솔9;Цветные эмодзи Apple;Chinese Generic1;Korean Generic1;Bullets 5(Korean);UkrainianFuturisExtra;VNI-Viettay;UkrainianCompact;UkrainianBrushScript;TiffanyUkraine;Baltica_Russian-ITV;Vietnamese font;Unicorn Ukrainian;UkrainianTimesET;UkrainianCourier;Tiff-HeavyUkraine;䡵湧䱡渠䅲瑤敳楧渠㈰〲‭⁁汬⁲楧桴猠牥獥牶敤⹔桵⁰桡瀠噎周畦慰〲†乯牭慬ㄮ〠䍯摥⁖义⁦潲⁗楮摯睳周畦慰〲乯牭慬HungLan Artdesign - http://www.vietcomic.comVNI-Thufap2  Normalv2.0 Code VNI for WindowsVNI-Thufap2 Normal\x02;Vietnam;Bwviet;Soviet;Soviet Expanded;Soviet Bold;Russian;UVN Han Viet;UkrainianAcademy;Symbol;Verdana;Webdings;Arial;Georgia;Courier New;Trebuchet MS;Times New Roman;Impact;Comic Sans MS;Wingdings;Tahoma;Microsoft Sans Serif;Arial Black;Plantagenet Cherokee;Arial Narrow;Wingdings 2;Wingdings 3;Arial Unicode MS;Papyrus;Calibri;Cambria;Consolas;Candara;Franklin Gothic Medium;Corbel;Constantia;Marlett;Lucida Console;Lucida Sans Unicode;MS Mincho;Arial Rounded MT Bold;Palatino Linotype;Batang;MS Gothic;PMingLiU;SimSun;MS PGothic;MS PMincho;Gulim;Cambria Math;Garamond;Bookman Old Style;Book Antiqua;Century Gothic;Monotype Corsiva;Courier;Meiryo;Century;MT Extra;MS Reference Sans Serif;MS Reference Specialty;Mistral;Bookshelf Symbol 7;Lucida Bright;Cooper Black;Modern No. 20;Bernard MT Condensed;Bell MT;Baskerville Old Face;Bauhaus 93;Britannic Bold;Wide Latin;Playbill;Harrington;Onyx;Footlight MT Light;Stencil;Colonna MT;Matura MT Script Capitals;Copperplate Gothic Bold;Copperplate Gothic Light;Edwardian Script ITC;Rockwell;Curlz MT;Engravers MT;Rockwell Extra Bold;Haettenschweiler;MingLiU;Mongolian Baiti;Microsoft Yi Baiti;Microsoft Himalaya;SimHei;SimSun-ExtB;PMingLiU-ExtB;MingLiU-ExtB;MingLiU_HKSCS-ExtB;MingLiU_HKSCS;Gabriola;Goudy Old Style;Calisto MT;Imprint MT Shadow;Gill Sans Ultra Bold;Century Schoolbook;Gloucester MT Extra Condensed;Perpetua;Franklin Gothic Book;Brush Script MT;Microsoft Tai Le;Gill Sans MT;Tw Cen MT;Lucida Handwriting;Lucida Sans;Segoe UI;Lucida Fax;MV Boli;Sylfaen;Estrangelo Edessa;Mangal;Gautami;Tunga;Shruti;Raavi;Latha;Lucida Calligraphy;Lucida Sans Typewriter;Kartika;Vrinda;Perpetua Titling MT;Cordia New;Angsana New;IrisUPC;CordiaUPC;FreesiaUPC;Miriam;Traditional Arabic;Miriam Fixed;JasmineUPC;KodchiangUPC;LilyUPC;Levenim MT;EucrosiaUPC;DilleniaUPC;Rod;Narkisim;FrankRuehl;David;Andalus;Browallia New;AngsanaUPC;BrowalliaUPC;MS UI Gothic;Aharoni;Simplified Arabic Fixed;Simplified Arabic;GulimChe;Dotum;DotumChe;GungsuhChe;Gungsuh;BatangChe;Meiryo UI;NSimSun;Segoe Script;Segoe Print;DaunPenh;Kalinga;Iskoola Pota;Euphemia;DokChampa;Nyala;MoolBoran;Leelawadee;Gisha;Microsoft Uighur;Arabic Typesetting;Malgun Gothic;Microsoft JhengHei;DFKai-SB;Microsoft YaHei;FangSong;KaiTi;Helvetica;Segoe UI Light;Segoe UI Semibold;Andale Mono;Palatino;Geneva;Monaco;Lucida Grande;Gill Sans;Helvetica Neue;Baskerville;Hoefler Text;Thonburi;Herculanum;Apple Chancery;Didot;Zapf Dingbats;Apple Symbols;Copperplate;American Typewriter;Zapfino;Cochin;Chalkboard;Sathu;Osaka;BiauKai;Segoe UI Symbol;Aparajita;Krungthep;Ebrima;Silom;Kokila;Shonar Bangla;Sakkal Majalla;Microsoft PhagsPa;Microsoft New Tai Lue;Khmer UI;Vijaya;Utsaah;Charcoal CY;Ayuthaya;InaiMathi;Euphemia UCAS;Vani;Lao UI;GB18030 Bitmap;KufiStandardGK;Geeza Pro;Chalkduster;Tempus Sans ITC;Kristen ITC;Apple Braille;Juice ITC;STHeiti;LiHei Pro;DecoType Naskh;New Peninim MT;Nadeem;Mshtakan;Gujarati MT;Devanagari MT;Arial Hebrew;Corsiva Hebrew;Baghdad;STFangsong".split(";"), p = "mmmmmmmmmmlli", w = "72px", u = document.getElementsByTagName("body")[0], f = document.createElement("div"), e = document.createElement("div"), s = {}, h = {}, c = function() {
        var n = document.createElement("span");
        return n.style.position = "absolute",
        n.style.left = "-9999px",
        n.style.fontSize = w,
        n.style.lineHeight = "normal",
        n.innerHTML = p,
        n
    }, b = function(n, t) {
        var i = c();
        return i.style.fontFamily = "'" + n + "'," + t,
        i
    }, k = function() {
        for (var t, r = [], i = 0, u = n.length; i < u; i++)
            t = c(),
            t.style.fontFamily = n[i],
            f.appendChild(t),
            r.push(t);
        return r
    }, d = function() {
        for (var u, r, s, f, o = {}, t = 0, h = i.length; t < h; t++) {
            for (u = [],
            r = 0,
            s = n.length; r < s; r++)
                f = b(i[t], n[r]),
                e.appendChild(f),
                u.push(f);
            o[i[t]] = u
        }
        return o
    }, g = function(t) {
        for (var r = !1, i = 0; i < n.length; i++)
            if (r = t[i].offsetWidth !== s[n[i]] || t[i].offsetHeight !== h[n[i]],
            r)
                return r;
        return r
    }, l = k(), t, a, v, o, r, y, yyyu = [];
    for (u.appendChild(f),
    t = 0,
    a = n.length; t < a; t++)
        s[n[t]] = l[t].offsetWidth,
        h[n[t]] = l[t].offsetHeight;
    var fontsss = "";
    for (v = d(),
    u.appendChild(e),
    o = [],
    r = 0,
    y = i.length; r < y; r++)
        if(g(v[i[r]])){
            o.push(i[r]);
        }
        else{
            yyyu.push(i[r]);
        }
    for(var yr = 0; yr < yyyu.length; yr++){
        fontsss += '"' + yyyu[yr] + '", ';
    }
    console.log(fontsss);
    return u.removeChild(e),
    u.removeChild(f),
    o
}
function n(n) {
    for (var i, r, f = n.constructor == String ? [n] : n, e = "false", o = "false", u = 0; u < f.length; u++)
        if (i = t[f[u]],
        i && i.enabledPlugin) {
            r = i.enabledPlugin;
            e = r.name ? r.name : "true";
            o = r.description;
            break
        }
    return [e, o]
}
function rt() {
    var i = "false"
      , r = n(["application/x-mplayer2", "application/asx"])
      , t = r[0]
      , u = r[1];
    return t != "false" && t != "true" && /Windows.*Media.*Firefox Plugin.*/i.test(t) && (i = "true"),
    i
}
function ut() {
    var t = "false", u = n(["application/pdf"]), i = u[0], f = u[1], r;
    return i != "false" && i != "true" && /Adobe Acrobat/i.test(i) && (t = "true"),
    t == "true" && f && (r = /[\d][\d\.\_,-]*/.exec(f),
    t = r ? r[0] : "8.0/later"),
    t
}
function ft() {
    var t = "false"
      , r = n(["application/x-silverlight"])
      , i = r[0]
      , u = r[1];
    return i != "false" && i != "true" && /Silverlight Plug-in/i.test(i) && (t = "true"),
    t == "true" && u && (t = u),
    t
}
function et() {
    var i = "false", u, t, r;
    return navigator.platform && /linux/i.test(navigator.platform) ? i = "false" : (u = n(["video/quicktime", "application/x-quicktimeplayer", "image/x-macpaint", "image/x-quicktime"]),
    t = u[0],
    t != "false" && t != "true" && /QuickTime.*(Plug-in|Plugin).*/i.test(t) && (i = "true",
    r = /[\d][\d\.\_,-]*/.exec(t),
    r && (i = r[0]))),
    i
}
function ot() {
    var t = "false", u = n(["application/x-director"]), i = u[0], f = u[1], r;
    return i != "false" && i != "true" && /Shockwave for Director/i.test(i) && (t = "true"),
    t == "true" && f && (r = /[\d][\d\.\_,-]*/.exec(f),
    r && (t = r[0])),
    t
}
function st() {
    var t = "false", u = n(["application/vnd.rn-realplayer-javascript"]), i = u[0], f = u[1], r;
    return i != "false" && i != "true" && /RealPlayer.*Version.*/i.test(i) && (t = "true"),
    t == "true" && f && (r = /[\d][\d\.\_,-]*/.exec(f),
    t = r ? r[0] : "5.0"),
    t
}
function ht() {
    var t = "false", u = n(["application/x-vlc-plugin"]), i = u[0], f = u[1], r;
    return i != "false" && i != "true" && /VLC.*(Plug-in|Plugin).*/i.test(i) && (t = "true"),
    t == "true" && f && (r = /(Version)([\d][\d\.]*[a-z]*)/.exec(f),
    r && (t = r[2])),
    t
}
function ct() {
    var t = "false", u = n(["application/x-java-applet", "application/x-java-vm", "application/x-java-bean"]), i = u[0], f = u[1], r;
    return i != "false" && i != "true" && /Java/i.test(i) && (t = "true"),
    t == "true" && f && (r = /[\d][\d\._]*/.exec(f),
    r && (t = r[0])),
    t
}
function lt() {
    var t = "false", u = n(["application/x-shockwave-flash", "application/futuresplash"]), i = u[0], f = u[1], r;
    return i != "false" && i != "true" && /Flash/i.test(i) && (t = "true"),
    t == "true" && f && (r = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(f),
    r && (t = r[0])),
    t
}
function lt() {
    var t = "false", u = n(["application/x-shockwave-flash", "application/futuresplash"]), i = u[0], f = u[1], r;
    return i != "false" && i != "true" && /Flash/i.test(i) && (t = "true"),
    t == "true" && f && (r = /[\d][\d\,\.\s]*[rRdD]{0,1}[\d\,]*/.exec(f),
    r && (t = r[0])),
    t
}
function s() {
    var n = b()
      , t = "";
    var fontsss = "";
    for(var yr = 0; yr < n.length; yr++){
        fontsss += '"' + n[yr] + '", ';
    }
    console.log(fontsss);
    return n != null && n.length > 0 && (t = "fh=" + window.MD5Hash(n.join()) + "&fn=" + n.length),
    t
}
function w() {
    var i = 0, n;
    return t && t.length && (i = t.length),
    n = "",
    window.ActiveXObject ? (n += "plugin_flash=false",
    n += "&plugin_windows_media_player=false",
    n += "&plugin_adobe_acrobat=false",
    n += "&plugin_silverlight=false",
    n += "&plugin_quicktime=false",
    n += "&plugin_shockwave=false") : i > 0 && (n += "plugin_flash=" + lt(),
    n += "&plugin_windows_media_player=" + rt(),
    n += "&plugin_adobe_acrobat=" + ut(),
    n += "&plugin_silverlight=" + ft(),
    n += "&plugin_quicktime=" + et(),
    n += "&plugin_shockwave=" + ot(),
    n += "&plugin_realplayer=" + st(),
    n += "&plugin_vlc_player=" + ht(),
    n += "&plugin_devalvr=false",
    n += "&plugin_svg_viewer=false",
    n += "&plugin_java=" + ct()),
    n
}
function software() {
    var r = "", e = "start", u, o, i, h, f, n, l, c;
    try {
        for (u = t ? t.length : 0,
        o = [],
        n = 0; n < u; n++)
            o[n] = t[n].type;
        if (r += u > 0 ? "&mth=" + window.MD5Hash(o.join()) + "&mtn=" + u : "",
        i = navigator.plugins,
        i && i.length > 0) {
            for (h = i.length,
            r += "&pn=" + h,
            f = null,
            n = 0; n < h; n++)
                f += i[n].name + i[n].description + i[n].filename + i[n].length;
            f && (r += "&ph=" + window.MD5Hash(f))
        }
        e = "PluginDetect";
        l = w();
        r += "&p=" + encodeURIComponent(l);
        splitFonts || noFonts || (e = "FontsDetect",
        c = s(),
        c != "" && (r += "&" + c));
    } catch (a) {
        console.log("software|" + a)
    }
    return r
}

//////////////////////
function a(n, t) {
    t.font = "14px 'Arial'";
    t.fillStyle = "rgba(555, 0, 0, 0.9)";
    t.fillRect(125, 1, 62, 20);
    t.fillStyle = "rgba(77, 142, 1, 0.9)";
    t.fillText(n, 2, 15);
    t.fillStyle = "rgba(102, 204, 0, 0.7)";
    t.fillText(n, 4, 17)
}
function nt() {
    for (var h, c, r, o, s, u = {}, pp = {}, f = {}, n = null, i = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], t = 0, e = document.createElement("canvas"); t < i.length; t++)
        try {
            if (n = e.getContext(i[t])) {
                f.ContextName = i[t];
                break
            }
        } catch (l) {}
    if (!n || !1 in n)
        return null;
    try {
        h = n.getExtension("WEBGL_debug_renderer_info");
        u.uvdr = n.getParameter(h.UNMASKED_VENDOR_WEBGL);
        u.urdr = n.getParameter(h.UNMASKED_RENDERER_WEBGL);
        pp.vendorgpu = u.uvdr;
        pp.namegpu = u.urdr;
    } catch (l) {}
    for (e = "VENDOR VERSION RENDERER SHADING_LANGUAGE_VERSION DEPTH_BITS MAX_VERTEX_ATTRIBS MAX_VERTEX_TEXTURE_IMAGE_UNITS MAX_VARYING_VECTORS MAX_VERTEX_UNIFORM_VECTORS MAX_COMBINED_TEXTURE_IMAGE_UNITS MAX_TEXTURE_SIZE MAX_CUBE_MAP_TEXTURE_SIZE NUM_COMPRESSED_TEXTURE_FORMATS MAX_RENDERBUFFER_SIZE MAX_VIEWPORT_DIMS ALIASED_LINE_WIDTH_RANGE ALIASED_POINT_SIZE_RANGE".split(" "),
    c = {
        VENDOR: "vdr",
        RENDERER: "rdr"
    },
    i = 0; i < e.length; i++){
        t = e[i],
        t in n && (t in c && (u[c[t]] = n.getParameter(n[t])),
        f[t] = n.getParameter(n[t]));
        if(t === "MAX_VIEWPORT_DIMS" || t === "ALIASED_LINE_WIDTH_RANGE" || t === "ALIASED_POINT_SIZE_RANGE"){
            pp[t] = Object.values(f[t]);
        }
        else{
            pp[t] = f[t];
        }
    }
    return r = document.createElement("canvas"),
    r.setAttribute("style", "visibility:hidden"),
    document.body.appendChild(r),
    o = "myword glyphs vext bunfiq jackz",
    s = r.getContext("2d"),
    a(o, s),
    f.img = r.toDataURL(),
    o += ", 😃",
    s.clearRect(0, 0, r.width, i.height),
    a(o, s),
    u.iduh = window.MD5Hash(r.toDataURL()),
    document.body.removeChild(r),
    {
        legacy: f,
        modern: u,
        mypp: pp
    }
}
function tt() {
    try {
        var f = "";
        return navigator.userAgentData.getHighEntropyValues(["architecture", "model", "bitness", "platformVersion", "fullVersionList"]).then(function(n) {
            f += "&u1=" + encodeURIComponent(n.model) + "&u3=" + encodeURIComponent(n.platformVersion) + "&u4=" + encodeURIComponent(n.architecture) + "&u5=" + encodeURIComponent(n.bitness);
            n.fullVersionList && (f += "&u2=" + encodeURIComponent(n.fullVersionList.map(function(n) {
                return "(" + Object.values(n).join(",") + ")"
            }).join(",")))
            return f;
        }).catch(function(n) {
            return n.toString()
        })
    } catch (n) {
        return null
    }
}
function iit() {
    try {
        var n, ir, r, u, f, t = "";
        n = window.devicePixelRatio;
        t += "&pr=" + window.devicePixelRatio;
        ir = screen.width * n;
        r = screen.height * n;
        t += "&sr=" + ir + "x" + r;
        t += "&scd=" + screen.colorDepth;
        u = screen.availWidth * n;
        f = screen.availHeight * n;
        t += "&asr=" + u + "x" + f;
        return t;
    } catch (n) {
        return null
    }
}
function onClick() {
    start();
}
async function start() {
    var dtt = "";
    var dpp = "";
    var st = await tt();
    dtt = st + "\r\n\r\n";
    //console.log(st);
    //console.log(i);
    var sc = nt();
    dtt += JSON.stringify(sc.legacy) + "\r\n\r\n";
    dtt += JSON.stringify(sc.modern) + "\r\n\r\n";
    dpp = JSON.stringify(sc.mypp);
    //console.log(JSON.stringify(sc.legacy));
    //console.log(JSON.stringify(sc.modern));
    var c = window.MD5Hash(JSON.stringify(sc.legacy));
    var sw = software();
    dtt += sw + "&c=" + c + "\r\n\r\n";
    //console.log(sw + "&c=" + c);
    var iit_ = iit();
    dtt += iit_ + "\r\n\r\n";
    //console.log(iit_);
    console.log(dtt);
    var textboxtext1 = document.getElementById('textbox1');
    textboxtext1.value = dtt;
    var textboxtext2 = document.getElementById('textbox2');
    textboxtext2.value = dpp;
}

function updateLabel() {
var str1 = getString1();
var str2 = getString2();
var str = str1 + str2;
label.textContent = str1 + ' + ' + str2 + ' = ' + str;
}

function getString1() {
return inputs[0].value;
}

function getString2() {
return inputs[1].value;
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

