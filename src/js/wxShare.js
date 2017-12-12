/**
 *  微信jssdk 1.0
 *  @author: guoqingzhou
 */
!function($,win) {
    WeixinJS = (typeof WeixinJS === 'undefined') ? {} : WeixinJS;
    var videoMetaData = {};

    WeixinJS.getVideoMetaData = function () {
        //解析meta data
        var o = document.getElementsByTagName("meta");
        var rlt = {};
        for (var i = 0; i < o.length; i++) {
            var vn = o[i].getAttribute('name');
            var vp = o[i].getAttribute('property');
            var vl = o[i].getAttribute('content') || "";
            if (vn == null || vn == undefined || vn.length == 0) {
                vn = vp;
            }
            if (vn == null || vn == undefined || vn.length == 0) {
                continue;
            }
            rlt[vn] = vl;
        }
        videoMetaData = rlt;
        return rlt;
    };
    videoMetaData = WeixinJS.getVideoMetaData(); //exec
    WeixinJS.UA = window.navigator.userAgent;
    WeixinJS.IsWeixin = !! (window['WeixinJSBridge'] || /MicroMessenger/i.test(WeixinJS.UA));
    WeixinJS.IsAndroid = !!(/Android|HTC|Adr/i.test(WeixinJS.UA)  || !!(window.navigator.platform + '').match(/Linux/i));
    WeixinJS.IsIpad = !WeixinJS.IsAndroid && /iPad/i.test(WeixinJS.UA);
    WeixinJS.IsIpod = !WeixinJS.IsAndroid && /iPod/i.test(WeixinJS.UA);
    WeixinJS.IsIphone = !WeixinJS.IsAndroid && /iPod|iPhone/i.test(WeixinJS.UA);
    WeixinJS.IsIOS = WeixinJS.IsIpad || WeixinJS.IsIphone;
    WeixinJS.dataForWeixin = {};

    WeixinJS.getData = function (data) {
        videoMetaData = WeixinJS.getVideoMetaData();
        data = data ? data : videoMetaData;
        WeixinJS.dataForWeixin = {
            appId: WeixinJS._config.appId, //appid 设置空就好了,web id=25250114746637056375,微信app_id:wxb6c82517aa33d525
            imgUrl:data['imgUrl']|| videoMetaData['og:image'] || "http://css.tv.itc.cn/global/images/nav1/logo.gif", //分享朋友圈时所带的图片路径
            url: data['url']||videoMetaData['og:url'] || window.location.href, //分享附带链接地址
            imgWidth: data['width']||videoMetaData['og:imgWidth'] || "300", //图片宽度
            imgHeight: data['height']|| videoMetaData['og:imgHeight'] || "300", //图片高度
            title:data['title']|| videoMetaData['og:title'] || document.getElementsByTagName('title')[0].text.split(' ')[0] || "", //分享标题
            desc: data['description']||data['desc']|| data['content'] ||videoMetaData['description']||videoMetaData['og:desc']|| document.getElementsByTagName('title')[0].text.split(' ')[0] || "", //分享内容介绍
            type: data['type'] || "",
            callback: data['callback'] || function(){}
        };

        return WeixinJS.dataForWeixin;
    };
//    WeixinJS.rDialog = function(type){
//        if(type === 0){
//            return $.rDialog({
//                content : '<h3 class="shareTitle">分享成功</h3><p class="shareMore">点击观看更多精彩视频</p>' +
//                '<ul class="shareImg">' +
//                '<li><a href="http://m.tv.sohu.com/v3231933.shtml?aid=9169242&channeled=1210020001&columnid=510"><img src="http://photocdn.sohu.com/20160829/vrsa_ver9169242_2ehJa_pic26.jpg" alt=""><p>吸血鬼日记</p></a></li>' +
//                '<li><a href="http://m.tv.sohu.com/v3229767.shtml?aid=9169240&channeled=1210020001&columnid=510"><img src="http://photocdn.sohu.com/20160829/vrsa_ver9169240_GB2Q7_pic26.jpg" alt=""><p>绿箭侠</p></a></li>' +
//                '<li><a href="http://m.tv.sohu.com/v3236664.shtml?aid=9166302&channeled=1210020001&columnid=510"><img src="http://photocdn.sohu.com/20160812/vrsa_ver9166302_ckK5s_pic26.jpg" alt=""><p>疑犯追踪</p></a></li>' +
//                '</ul>',
//                title : '对话框dialog',
//                //title : 'ok',
//                ok : function() {
////                alert('我是确定按钮，回调函数返回false时不会关闭对话框。');
//
//                },
//                cancel : function() {
////                alert('我是取消按钮');
//                    return false;
//                },
//                width:'100%',
//                lock : true //mask
//            });
//        }else{
//            return $.rDialog({
//                content : '<h3 class="shareTitle">分享失败!</h3><p class="shareMore">窗口将在两秒后关闭</p>',
//                title: "",
//                //title: "提示",
//                width: '100%',
//                time : 2000
//            });
//        }
//
//    }
    WeixinJS.success = function(res){
        //alert('11 success');
        //WeixinJS.rDialog(0);
        //if (res && res.err_msg == "send_app_msg:ok") {alert('22 success'); }
        //if (res && res.err_msg == "share_timeline:ok") { }

    };
    //WeixinJS.cancel = function(res){WeixinJS.rDialog(1)};
    //WeixinJS.fail = function(res){ WeixinJS.rDialog(1)};
    WeixinJS._createNonceStr = function () {
        return Math.random().toString(36).substr(2, 15);
    };
    WeixinJS._createTimestamp = function () {
        return parseInt(new Date().getTime() / 1000) + '';
    };
    WeixinJS._signature='';
    WeixinJS._config = {
        debug: false,
//        appId: 'wx8e662471b6240037',
//        timestamp: WeixinJS._createTimestamp(),
//        nonceStr:  WeixinJS._createNonceStr(), //后台出
        url:window.location.href.replace(window.location.hash,''),
        signature:'',  //后台出
        jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
            'onMenuShareQZone',
            'hideMenuItems',
            'showMenuItems',
            'getNetworkType',
            'hideOptionMenu',
            'showOptionMenu'
        ]
    };
    WeixinJS._cfgSignature =function(res) {
        if(res && res.signature && res.appId) {
            WeixinJS._config.appId = res.appId;
            WeixinJS._config.timestamp = res.timestamp;
            WeixinJS._config.nonceStr = res.nonceStr;
            WeixinJS._config.signature = res.signature;
            WeixinJS._signature = res.signature || '';
            console.log("接口返回验证签名", res);
        }
        return WeixinJS._config;
    };
    /*
     *第1版的方法，取后端服务器验证签名
     */
    WeixinJS.wxShare = function(data) {
        var dataForWeixin = WeixinJS.getData(data);
        if (typeof dataForWeixin == 'undefined') return;
        if (!WeixinJS.IsWeixin) return;
        if (WeixinJS.IsWeixin && /tv\.sohu\.com/i.test(dataForWeixin.url)) {
            try {
                var _href = dataForWeixin.url;
                _href = _href.replace(/http:\/\/tv\.sohu\.com/i, 'http://wx.m.tv.sohu.com');
                _href = _href.replace(/http:\/\/my\.tv\.sohu\.com/i, 'http://wx.m.tv.sohu.com');
                dataForWeixin.url = _href;
            } catch (e) {
            }
        }

        // 设置分享内容data
        // ==============================
        WeixinJS.shareData = {
            title: dataForWeixin.title,             // 分享标题
            desc: dataForWeixin.desc,               // 分享描述
            imgUrl: dataForWeixin.imgUrl,           // 分享图标
            link: dataForWeixin.url,               // 分享链接
            type: dataForWeixin.type || 'link',     // 分享类型,music、video或link,不填默认为 link
            dataUrl: dataForWeixin.dataUrl || '',   // 如果type是music或video，则要提供数据链接，默认为空
            success: WeixinJS.success,
            cancel: WeixinJS.cancel,
            fail: WeixinJS.fail
        };
        if (dataForWeixin.type && ( dataForWeixin.type == 'video' || dataForWeixin.type == 'music')) {
            WeixinJS.shareData.type = dataForWeixin.type || '';
            WeixinJS.shareData.data_url = dataForWeixin.url || '';
        }


        //alert(JSON.stringify(WeixinJS.shareData));
        WeixinJS.bindEvents = function (shareData) {
            shareData = shareData || WeixinJS.shareData;
            console.log('wxready信息 --> OK');
            // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
            wx.checkJsApi({
                jsApiList: WeixinJS._config.jsApiList,
                success: function (res) {
                    WeixinJS.checkJsApi(res);
                }
            });
            wx.showOptionMenu(); //显示右上角菜单
            // 2. 分享接口
            // 监听“分享给朋友”，按钮点击、自定义分享内容及分享结果接口
            wx.onMenuShareAppMessage(shareData);
            // 监听“分享到朋友圈”按钮点击
            wx.onMenuShareTimeline(shareData);
            //  分享到QQ”按钮点击
            wx.onMenuShareQQ(shareData);
            // 2.4 监听“分享到微博”按钮
            wx.onMenuShareWeibo(shareData);
            // 2.5 监听“分享到QZone”按钮点击、自定义分享内容及分享接口
            wx.onMenuShareQZone(shareData);
            // 6 设备信息接口
            // 6.1 获取当前网络状态
            wx.getNetworkType({
                success: function (res) {
                    WeixinJS.networkType = res.networkType;
                },
                fail: function (res) {
                    WeixinJS.networkType = null;
                }
            });
        };
        // 权限验证,引入js 服务端验证签名
        //1.引用 http://res.wx.qq.com/open/js/jweixin-1.1.0.js
        //2.取后端服务器验证签名 signature
        // ==============================
        window.wxJsVerify = function(res) {
            if(typeof(wx) !='undefined' && res && res.signature && res.appId){
                WeixinJS._config.appId=res.appId;
                WeixinJS._config.timestamp=res.timestamp;
                WeixinJS._config.nonceStr=res.nonceStr;
                WeixinJS._config.signature=res.signature;
                WeixinJS._signature = res.signature||'';
                console.log('wx.config 信息 -->',WeixinJS._config);
                wx.config(WeixinJS._config);
                console.log('shareData信息 -->',WeixinJS.shareData);
                //  绑定分享接口
                wx.ready(function() {
                    WeixinJS.bindEvents(WeixinJS.shareData);
                    console.log('wx ready bindEvents OK!');
                });//onready

                wx.error(function (res) {
                    console.log('wx check error', res);
                });
            }else{
                console.log('服务端验证签名错误,用旧接口');
                var wxShareData = {
                    'appid': '',
                    'img_url':  dataForWeixin.imgUrl,
                    'img_width': dataForWeixin.imgWidth,
                    'img_height': dataForWeixin.imgHeight,
                    'link':dataForWeixin.url|| location.href,
                    'desc': dataForWeixin.desc||'',
                    'title':dataForWeixin.title|| ''
                };
                if( dataForWeixin.type && (dataForWeixin.type=='video'|| dataForWeixin.type=='music')){
                    wxShareData.type = dataForWeixin.type||'';
                    wxShareData.data_url = dataForWeixin.url||'';
                }
                console.log('shareData信息 -->',wxShareData);
                if(typeof WeixinJSBridge != 'undefined'){
                    WeixinJSBridge.on('menu:share:timeline', function (argv) {//分享到朋友圈
                        WeixinJSBridge.invoke('shareTimeline', wxShareData, function (res) {

                        });
                    });
                    WeixinJSBridge.on('menu:share:appmessage', function (argv) {//分享给朋友
                        WeixinJSBridge.invoke('sendAppMessage', wxShareData, function (res) {
                        });
                    });
                    WeixinJSBridge.on('menu:share:qq', function (argv) {//分享给qq
                        WeixinJSBridge.invoke('shareQQ', wxShareData, function (res) {
                        });
                    });
                    WeixinJSBridge.on('menu:share:weiboApp', function (argv) {//分享wb
                        WeixinJSBridge.invoke('shareWeiboApp', wxShareData, function (res) {
                        });
                    });
                    WeixinJSBridge.on('menu:share:QZone', function (argv) {//分享给qz
                        WeixinJSBridge.invoke('shareQZone', wxShareData, function (res) {
                        });
                    });
                }
            }
        };

        (function() {
            var hp = ('https:' === document.location.protocol) ? 'https://' : 'http://';
            var hs ='m.tv.sohu.com';
            if (/t\.m\.tv\.sohu\.com|t1\.m\.tv\.sohu\.com|\d+|\.\d+|\.\d+|\.\d+/i.test( window.location.host )) {
                hs ='t.m.tv.sohu.com';
            }
            var s = document.createElement('script');
            var ajaxUrl = hp + hs + '/wxauth/jsticket/signature?callback=wxJsVerify&url=' +WeixinJS._config.url+"&_rd="+ (new Date().getTime()); //or wxJsVerify

            console.log(ajaxUrl);
            s.src = ajaxUrl;
            console.log(s);
            document.body.appendChild(s); //document ready
        })();

    };

    WeixinJS.chkJSB = WeixinJS.wxShare;//兼容旧版

    WeixinJS.init = function (data) {
        $(document).ready(function () {
            if (!WeixinJS.IsWeixin){
                console.log('not  Support weixin ,pls check WeixinJS.IsWeixin'+WeixinJS.IsWeixin);
                return
            }
            WeixinJS.wxShare(data);
        });
    };


    //引用jweixin-1.1.0.js,再服务端验证签名,
    WeixinJS.getConfig = function(callback) {
        callback = callback||function(){};
        try {
            if (!WeixinJS.IsWeixin || typeof(wx) =='undefined'){
                console.log('不在微信客户端内 ',WeixinJS.IsWeixin);
                return;
            }
            var hp = ('https:' === document.location.protocol) ? 'https://' : 'http://';
            var hs ='m.tv.sohu.com';
            WeixinJS._config.url = window.location.href.replace(window.location.hash,'');
            if (/t\.m\.tv\.sohu\.com|t1\.m\.tv\.sohu\.com|\d+|\.\d+|\.\d+|\.\d+/i.test( window.location.host )) {
                hs ='t.m.tv.sohu.com';
            }
            var ajaxUrl = hp + hs + '/wxauth/jsticket/signature?url=' +  WeixinJS._config.url;
            console.log(ajaxUrl);
            $.ajax({
                url: ajaxUrl,
                type: 'get',
                dataType: 'jsonp',
                cache: false,
                success: function (data) {
                    //返回参数
                    console.log("ajax接口返回验证签名",data);
                    if(data && data.signature) {
                        WeixinJS._cfgSignature(data);
                        callback(WeixinJS._config);
                    }else{
                        callback(WeixinJS._config);
                    }
                },
                error: function () {
                    //返回默认参数
                    callback(WeixinJS._config);
                }
            });
        }catch(e){
            callback(WeixinJS._config);
        }
    };

    window.WeixinJS = WeixinJS;
    WeixinJS.init();

    if (typeof define === "function") {
        //export
        define('WeixinApi', function(require, exports, module) {
            //window.WeixinApi = WeixinJS;
            module.exports =  WeixinJS;
        });
    }

}(window.Zepto||window.jQuery,window);
