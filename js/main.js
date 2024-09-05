$(document).ready(function () {
    var ua = navigator
        .userAgent
        .toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            // Chrome
            $("body").addClass("chrome")
        } else {
            // Safari
            $("body").addClass("safari")
        }
    }

    var body = $("body"),
        header = $("header"),
        menuOpen = $(".menuOpen"),
        menuClose = $(".menuClose"),
        allMenu = $(".allMenu"),
        snb = $("#snb");
    sns = $("#m_sns");

    // snb
    header
        .find("#gnb > li")
        .clone()
        .appendTo($("#snb, #fnb"));
    snb
        .children("li")
        .each(function () {
            $(this)
                .find(".depth2")
                .appendTo($(this));
        });

    header
        .find("#sns_box > li")
        .clone()
        .appendTo($("#m_sns"));
    sns
        .children("li")
        .each(function () {
            $(this)
                .find(".sns_box")
                .appendTo($(this));
        });

    // menu
    menuOpen.on("click", function () {
        body.addClass("bodyOn");
        header.addClass("menuOn");
        allMenu
            .stop()
            .fadeIn();
        allMenu.addClass("on");
    })
    menuClose.on("click", function () {
        body.removeClass("bodyOn");
        header.removeClass("menuOn");
        allMenu
            .stop()
            .fadeOut();
        allMenu.removeClass("on");
    })

    // desktop
    function initEvent_pc(val) {
        console.log(val);

        header
            .find(".depth1 > li")
            .on("mouseenter mouseleave", function (e) {
                var type = e.type,
                    depth2 = $(this).find(".depth2");
                if (type == "mouseenter") {
                    $(this).addClass("white");
                    depth2.addClass("on");
                } else if (type == "mouseleave") {
                    $(this).removeClass("white");
                    depth2.removeClass("on");
                }
            });
    };

    // mobile
    function initEvent_m(val) {
        console.log(val);
    };

    function hdlr_switch(val) {
        if (val > 1200) {
            initEvent_pc(val);
        } else {
            initEvent_m(val);
        };
    };

    $(window).on("load resize", function () {
        var doc_width = $(window).width();
        hdlr_switch(doc_width);

        if (doc_width > 961) {
            snb
                .children("li")
                .find("img")
                .remove();
        } else {
            snb
                .children("li")
                .children("a")
                .off();
            snb
                .children("li")
                .children("a")
                .on("click", function (e) {
                    var depth2 = $(this).siblings(".depth2");
                    if (depth2.length) {
                        e.preventDefault();
                        depth2
                            .stop()
                            .slideToggle();
                        $("#snb > li > a")
                            .not(this)
                            .siblings("ul")
                            .stop()
                            .slideUp();
                        $(this)
                            .closest("li")
                            .toggleClass("on")
                        snb
                            .children("li")
                            .children("a")
                            .not(this)
                            .closest("li")
                            .removeClass("on");
                    }
                });
            snb
                .children("li")
                .each(function () {
                    var arrow = $("<img class='svg' src='./img/icon/arrow.svg' alt='icon'>");
                    if (!$(this).children("a").find("img").length) {
                        arrow.appendTo($(this).children("a"));
                    }
                })
        }
    });

    // 100vh
    let vh = window.innerHeight * 0.01;
    document
        .documentElement
        .style
        .setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01;
        document
            .documentElement
            .style
            .setProperty('--vh', `${vh}px`);
    });
});

$OBJ = {
    'win': $(window),
    'doc': $(document),
    'html': $('html')
}

function winW() { //창 너비
    return $OBJ
        .win
        .width();
}

function winH() { // 창 높이
    return $OBJ
        .win
        .height();
}

function winSh() { // 스크롤 값
    return $OBJ
        .win
        .scrollTop();
}

var gotop = {
    init: function () {
        this.action();
    },
    action: function () {
        var a = $('#gotop');

        function gotopFix() {
            if (winSh() > 50) {
                a.addClass('fix');
            } else {
                a.removeClass('fix');
            }
        }

        a.on('click', function () {
            $.scrollTo($('#wrap'), 300);
        });

        $OBJ
            .win
            .on('load scroll', function () {
                gotopFix();
            });

    }
}

$OBJ
    .doc
    .ready(function () {
        AOS.init({duration: 1500, delay: 300, once: true});
        gotop.init();
    });