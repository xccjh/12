$(function () {
//导航栏部分开始
    var lm =document.getElementsByClassName("exclusive-content")[0]
    dj.onmouseenter=function () {
      lm.style.display = 'block';
    }
    lm.onmouseenter=function () {
      lm.style.display = 'block';
    }
    lm.onmouseleave=function () {
      lm.style.display = 'none';
    }
    dj.onmouseleave=function () {
       lm.style.display = 'none';
    };
    xhs.onfocus=function () {
        xh.style.display = 'block';
    }
    xh.onmouseenter=function () {
        xh.style.display = 'block';
    }
    xhs.onblur=function () {
        xh.style.display = "none";
    }
    xh.onmouseleave=function () {
        xh.style.display = "none";
    }
// 导航栏部分结束
//轮播图开始
    var nowing = 0; /*定义一个变量来控制图片的显示*/
    var mytimer = null; /*定义一个定时器*/

    function autoplay() { /*定义一个自动播放的函数*/
        if (nowing < $(".slider .slider-ul li").length - 1) {
            nowing++;
        } else {
            nowing = 0;
        }
        $(".slider .slider-ul li").eq(nowing - 1).stop().animate({
            "opacity": 0,
            "zIndex": 0,
        }, 800);
        $(".slider .slider-ul li").eq(nowing).stop().animate({
            "opacity": 1,
            "zIndex": 1,
        }, 800);

        //小圆点的同步
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");

    }
    mytimer = setInterval(autoplay, 4000);


    // 鼠标进入的时候显示左右按钮
    $(".slider").mouseenter(function () {
        $(".arrow").css("display", "block");
        clearInterval(mytimer);
    })
    //鼠标离开的时候 隐藏左右按钮

    $(".slider").mouseleave(function () {
        $(".arrow").css("display", "none");
        mytimer = setInterval(autoplay, 4000);
    })

    //鼠标移入切换栏
    $('.circle ul li').mouseenter(function () {
        var index = $(this).index();
        $(".slider .slider-ul li").eq(index).stop().animate({opacity:1,zIndex:1},800);
        $(".slider .slider-ul li").eq(nowing).stop().animate({opacity:0,zIndex:0},800);
        $(this).addClass("current").siblings().removeClass("current");
        nowing = index;
    })

    //点击左右按钮的时候的事件
    $(".arrow-r").click(autoplay); //直接执行autoplay函数

    //点击 左按钮的时候
    $(".arrow-l").click(function () {
        if (nowing > 0) {
            nowing--;
        } else {
            nowing = $(".slider .slider-ul li").length - 1;
        }

        if (nowing == $(".slider .slider-ul li").length - 1) {
            $(".slider .slider-ul li").eq(0).stop().animate({
                "opacity": 0,
                "zIndex": 0,
            }, 800); //隐藏第一个元素
            $(".slider .slider-ul li").eq(nowing).stop().animate({
                "opacity": 1,
                "zIndex": 1,
            }, 800);
        } else {
            $(".slider .slider-ul li").eq(nowing + 1).stop().animate({
                "opacity": 0,
                "zIndex": 0,
            }, 800); //当前元素后面的元素隐藏起来，因为点击的是左按钮
            $(".slider .slider-ul li").eq(nowing).stop().animate({
                "opacity": 1,
                "zIndex": 1,
            }, 800); //当前元素显示
        }
        //小圆点的变化
        $(".circle ul li").eq(nowing).addClass("current").siblings().removeClass("current");
    })
//轮播图结束
//新闻开始
    /*******   news_special 部分渲染 start   *******/
    // 假装是后台请求回来的news_special_title数据
    var news_special_title_obj = {
        href: 'http://www.1905.com/news/20190104/1340434.shtml?fr=homepc_news_yw01',
        innerContent: '习近平：历史研究是一切社会科学基础',
        img_src: 'images/thumb_1_210_185_20190104021732433595.jpg',
        img_title: '习近平：历史研究是一切社会科学基础',
        news_special_p: '中国社会科学院中国历史研究院3日在京成立。中共中央总书记、国家主席、中央军委主席习近平发来贺信，代表党中央表示热烈的祝贺，向全国广大历史研究工作者致以诚挚的问…',
        news_special_date: '2019-01-04'
    }

    // 大新闻渲染
    $('.news_special_title a').attr('href', news_special_title_obj.href)
    $('.news_special_title a').text(news_special_title_obj.innerContent)
    $('.news_special>a').attr('href', news_special_title_obj.href)
    $('.news_special>a>img').attr({
        'src': news_special_title_obj.img_src,
        title: news_special_title_obj.img_title
    })
    $('.news_special_p').text(news_special_title_obj.news_special_p)
    $('.news_special_date span').text(news_special_title_obj.news_special_date)
    /*******   news_special 部分渲染 end   *******/


    /******* news_special_list 部分渲染 start *****/
    // 假装是后台请求回来的news_special_list数据
    var news_special_list_arr = [{
            href: 'http://www.1905.com/news/20190107/1341230.shtml?fr=homepc_news_yw02',
            littleTitle: '焦点',
            content: '全国宣传部长会议在京召开 王沪宁出席并发表讲话'
        },
        {
            href: 'http://www.1905.com/news/20190109/1341985.shtml?fr=homepc_news_yw02',
            littleTitle: '热点',
            content: '《网络短视频平台管理规范》发布 短视频需审核'
        },
        {
            href: 'http://www.1905.com/news/20190107/1341230.shtml?fr=homepc_news_yw02',
            littleTitle: '热点',
            content: '人民日报谈影视数据造假：拒绝假流量 锻造好品质'
        },
        {
            href: 'http://www.1905.com/news/20190107/1341230.shtml?fr=homepc_news_yw02',
            littleTitle: '焦点',
            content: '光明日报：国产电影强势崛起竞争力不断增强'
        },
        {
            href: 'http://www.1905.com/news/20190107/1341230.shtml?fr=homepc_news_yw02',
            littleTitle: '焦点',
            content: '央视网：感受习主席六次新年贺词里的改革开放'
        }
    ]

    // 遍历渲染新闻列表
    $('.news_special_list li').each(function (index, ele) {
        $(ele).children('a').attr('href', news_special_list_arr[index].href)
            .children('span').text(news_special_list_arr[index].littleTitle).end().children('h6').text(news_special_list_arr[index].content)
    })
    /******* news_special_list 部分渲染 end *****/


    /******* quick_news_title 部分渲染 start *****/
    // 假装是后台请求回来的数据
    var title_fastFocus_arr = [
        {
        href: 'http://www.1905.com/news/20190108/1341626.shtml?fr=homepc_news_kx',
        content: '电影频道2019年创作会 三部电影献礼建国70周年'
        }, 
        {
        href: 'http://www.1905.com/news/20190108/1341611.shtml?fr=homepc_news_kx',
        content: '韩庚《大侦探霍桑》因技术原因撤档 新档期未定'
        }, 
        {
        href: 'http://www.1905.com/news/20190109/1341960.shtml?fr=homepc_news_kx',
        content: '第72届英国电影学院奖公布提名 《宠儿》受瞩目'
        }, 
    ]
    var title_fast_arr = [
        {
            href:'http://www.1905.com/news/20190109/1341833.shtml?fr=homepc_news_kx',
            content:'电影频道“百合杯”表彰精品电影人齐聚 2019新片曝光'
        },
        {
            href:'http://www.1905.com/news/20190109/1341795.shtml?fr=homepc_news_kx',
            content:'新版“龙标”正式启用 视效升级片头更名“国家电影局”'
        },
        {
            href:'http://www.1905.com/news/20190109/1341659.shtml?fr=homepc_news_kx',
            content:'贾樟柯监制《海上浮城》海报预告片 李淳邬君梅神态各异'
        },
        {
            href:'http://www.1905.com/news/20190109/1341686.shtml?fr=homepc_news_kx',
            content:'《白蛇：缘起》1月11日上映发布片段 阿宣清唱“何须问”'
        },
        {
            href:'http://www.1905.com/news/20190109/1341690.shtml?fr=homepc_news_kx',
            content:'《一吻定情》情人节上映曝海报 王大陆林允上演女追男爱情'
        },
        {
            href:'http://www.1905.com/news/20190109/1341692.shtml?fr=homepc_news_kx',
            content:'《一条狗的回家路》联合国家地理曝特辑 广袤山河不敌深爱'
        },
        {
            href:'http://www.1905.com/news/20190109/1341989.shtml?fr=homepc_news_kx',
            content:'春节后首部好莱坞大片！《阿丽塔》定档2月22日发布海报'
        },
        {
            href:'http://www.1905.com/news/20190109/1341972.shtml?fr=homepc_news_kx',
            content:'ASC公布20世纪百佳摄影影片 《阿拉伯的劳伦斯》位居第一'
        },
        {
            href:'http://www.1905.com/news/20190109/1341853.shtml?fr=homepc_news_kx',
            content:'换了三次女主角！真人版芭比由“小丑女”玛格特·罗比出演'
        },
    ]
    var $title_fastFocus = $('#news_middle > .title-fastFocus')
    var $title_fast = $('#news_middle > .title-fast')
    // 遍历渲染
    $title_fastFocus.each(function (index, ele) {
        // 调用渲染新闻列表的函数
        renderNewsList($(ele), index, title_fastFocus_arr)
    })
    $title_fast.each(function (index, ele) {
        renderNewsList($(ele), index, title_fast_arr)
    })

    // 封装渲染的函数，参数1为jQ对象、2为索引、3为数据数组
    function renderNewsList($ele, index, objArr) {
        // 调用渲染新闻列表的函数
        $ele.children('a').attr('href', objArr[index].href).text(objArr[index].content)
    }
    /******* quick_news_title 部分渲染 end *****/

    /******* news_right 部分渲染 start *****/
    // 假数据
    var deepth_figure_arr = [
        {
            href:'http://www.1905.com/news/20190104/1340657.shtml?fr=homepc_news_sd01',
            img_src:'images/thumb_1_176_110_20190104084855759200.jpg',
            img_title:'毕赣，走下神坛了吗？',
        },
        {
            href:'http://www.1905.com/news/20181229/1339162.shtml?fr=homepc_news_sd02',
            img_src:'images/thumb_1_176_110_20190104054946772857.jpg',
            img_title:'马丽：不要撕我这些标签！',
        },
        {
            href:'http://www.1905.com/news/20181229/1339190.shtml?fr=homepc_news_sd03',
            img_src:'images/thumb_1_176_110_20181229080722485394.jpg',
            img_title:'那些被定格在2018年的电影',
        },
    ]

    // 遍历渲染填充数据
    $('#deepth_figure > .deepth_figure_item').each(function (index, ele) {
        $(ele).children('a:eq(0)').attr('href',deepth_figure_arr[index].href).children('img').attr('src', deepth_figure_arr[index].img_src).attr('title', deepth_figure_arr[index].img_title)
        $(ele).children('a:eq(1)').attr('href',deepth_figure_arr[index].href).text(deepth_figure_arr[index].img_title)
    })
    /******* news_right 部分渲染 end *****/
//新闻结束
//新片动态部分开始
    var container = document.querySelector('#container');
    var litt=document.querySelector('#container').children;
    var trendsArr = [
        {Img: 'images/thumb_1_320_174_20190109100443982831.jpg', Title: '《白蛇：缘起》曝光原片片段', Time: '01:13',},
        {Img: 'images/thumb_1_320_174_20190109094949884281.jpg', Title: '《掠食城市》“传奇再现”版特辑', Time: '01:14',},
        {Img: 'images/thumb_1_320_174_20190109092356955479.jpg', Title: '《海上浮城》终极预告', Time: '01:13',},
        {Img: 'images/thumb_1_320_174_20190109091542120566.jpg', Title: '《情圣2》吴秀波肖央乔杉联手', Time: '01:13',},

    ];
    //创建空字符串
    var htmlString = '';
    for (var i = 0; i < trendsArr.length; i++) {
        // 循环遍历内部
        var item = trendsArr[i];
        //拼接字符串-
        htmlString += '<li>\n' +
            '                    <a href="javascript:;"><img src="'+item.Img+'" alt="" id="trendsImg">\n' +
            '                        <span id="trendsOn"></span>\n' +
            '                        <span id="trendsTitle">'+item.Title+'</span>\n' +
            '                        <span id="trendsTime">'+item.Time+'</span>\n' +
            '                    </a>\n' +
            '                </li>';
    }
    //使用字符串-innerHTML属性添加到盒子
    container.innerHTML = htmlString;

    /*新片动态右边样式*/
    /*右边上部分盒子*/

    var RightOne = document.querySelector('.RightOne');//ul盒子
    var RightLis = document.querySelectorAll('#RightOne li');//li
    var RightTwo = document.querySelector('.RightTwo');

    //创建一个空数组
    var rightHtml = [];
    var rightArrone = [
        {rightTitle: '《沉默的雪》公映"悬疑版"　海报展现危险氛围'},
        {
            rightTitle: '《中国推销员》主创见面会 李东学再现热血场景'
        },
        {
            rightTitle: '《"大人物》预告海报双发　王千源王砚辉脱裤比伤'
        },
        {
            rightTitle: '能不能看伴侣手机? 《来电》主创曝夫妻相处之道'
        }
    ];
    for (var i = 0; i < rightArrone.length; i++) {
        // 循环遍历内部
        var lis = rightArrone[i];
        rightHtml += '<li><a href="javascript:;">' + lis.rightTitle + '</a></li>'
    }
    RightOne.innerHTML = rightHtml;


    /*右边第二个盒子*/
    var righgArr = [];
    var rightArrtwo = [
        {twoTitle: '《密室逃生》放大招五大密室发出"最终警告"'},
        {
            twoTitle: '《大黄蜂》 "重返1987" 80年代复古风潮情怀满分'
        },
        {
            twoTitle: '《22年后的自白》 1月11日上映发"对峙"版特辑'
        },
        {
            twoTitle: '史诗专业户"彼得杰克逊再造奇观《掠食城市》'
        }
    ];
    for (var i = 0; i < rightArrtwo.length; i++) {
        // 循环遍历内部
        var lisTwo = rightArrtwo[i];
        righgArr+= '<li><a href="javascript:;">' + lisTwo.twoTitle + '</a></li>'
    }
    RightTwo.innerHTML = righgArr;

    var trendsOn = document.querySelectorAll('#trendsOn');
    var trendsTime = document.querySelectorAll('#trendsTime');
    var trendsLeft = document.querySelector('.trendsLeft');
    var trendsImg = document.querySelectorAll('#trendsImg');

    for (var i = 0; i < litt.length; i++) {
        litt[i].index=i;
        litt[i].onmouseenter=function () {
            trendsOn[this.index].style.opacity=0.5;
            trendsTime[this.index].style.opacity=0.5;
            trendsImg[this.index].style.opacity=0.9;
        };
        litt[i].onmouseleave=function () {
            trendsOn[this.index].style.opacity=1;
            trendsTime[this.index].style.opacity=1;
            trendsImg[this.index].style.opacity=1;
        };

    }
//新片动态部分结束
// 播大片+友链开始
    var dataArr=[
        {img:"images/thumb_1_180_252_20181222034607684277.jpg",hotScore:'6.3',titleHot:'黄金兄弟',contentHot:'古惑仔江湖再聚首'},
        {img:"images/thumb_1_180_252_20181214012254774714.jpg",hotScore:'6.5',titleHot:'西虹市首富',contentHot:'开心麻花特笑大片',hotFree:'全网热播'},
        {img:"images/thumb_1_180_252_20181218090811314504.jpg",hotScore:'7.0',titleHot:'阿拉姜色',contentHot:'容中尔甲陪妻朝圣'},
        {img:"images/thumb_1_180_252_20181217034346379467.jpg",hotScore:'7.4',titleHot:'快把我哥带走',contentHot:'青春喜剧笑中带泪',hotFree:'全网热播'},
        {img:"images/thumb_1_180_252_20181217035937480265.jpg",hotScore:'5.6',titleHot:'龙虾刑警',contentHot:'王千源喜剧新尝试'},
    ];
    var frameRoom = document.querySelector('.frame-room');
    var ul = document.querySelector('.frame-hot ul');
    var hotScore = document.querySelector('.hot-score');
    var titleHot = document.querySelector('.title-hot');
    var hotFree = document.querySelector('.hot-free');
    var contentHot= document.querySelector('.content-hot');
    var list = document.querySelectorAll('li');

    var htmlArr=[];
    for (var i = 0; i < dataArr.length; i++) {
        // 循环遍历内部
        var item=dataArr[i];
        if (i===1||i===3){
            htmlArr.push(' <li>\n' +
                '                    <div class="frame-room pr">\n' +
                '                        <a href="#" target="_blank">\n' +
                '                            <img src="'+item.img+'" alt="" title='+item.titleHot+'>\n' +
                '                            <span class="hot-score">'+item.hotScore+'</span>\n' +
                '                            <span class="hot-free">'+item.hotFree+'</span>\n' +
                '                        </a>\n' +
                '                    </div>\n' +
                '                    <p class="title-hot"><a href="" target="_blank">'+item.titleHot+'</a></p>\n' +
                '                    <p class="content-hot">'+item.contentHot+'</p>\n' +
                '                </li>')

        }else{
            htmlArr.push('<li>\n' +
            '                    <div class="frame-room pr">\n' +
            '                        <a href="#" target="_blank">\n' +
            '                            <img src="'+item.img+'" alt="" title='+item.titleHot+'>\n' +
            '                            <span class="hot-score">'+item.hotScore+'</span>\n' +
            '                        </a>\n' +
            '                    </div>\n' +
            '                    <p class="title-hot"><a href="" target="_blank">'+item.titleHot+'</a></p>\n' +
            '                    <p class="content-hot">'+item.contentHot+'</p>\n' +
            '                </li>')
    }
    ul.innerHTML = htmlArr.join('');
    }
// 播大片+友链结束
})









