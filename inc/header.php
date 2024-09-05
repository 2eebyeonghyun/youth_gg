<header id="header" class="header">
    <div class="inner">
        <h1 class="logo">
            <a href="<?=DIR?>/" title="경기도청년주간 로고"><img src="<?=DIR?>/img/logo.png" alt="경기도청년주간 로고"></a>
        </h1>
        <nav>
            <ul id="gnb" class="depth1">
                <li><a href="#none" title="청년주간">청년주간</a></li>
                <li><a href="#none" title="프로그램">프로그램</a></li>
                <li><a href="#none" title="행사일정">행사일정</a></li>
                <li><a href="#none" title="커뮤니티">커뮤니티</a></li>
                <li>
                    <a href="#none" title="공지사항">공지사항</a>
                    <ul class="depth2 menu01">
                        <li><a href="#none" title="2022 공지사항">2022 공지사항</a></li>
                        <li><a href="#none" title="2021 공지사항">2021 공지사항</a></li>
                    </ul>
                </li>
            </ul>
        </nav>

        <div class="sns_listbox">
            <ul id="sns_box" class="sns_box">
                <li><a href="#none" target="_blank" title="유튜브"><img src="<?=DIR?>/img/icon/youtube_icon.png" alt="유튜브"></a></li>
                <li><a href="#none" target="_blank" title="카카오톡"><img src="<?=DIR?>/img/icon/kakao_icon.png" alt="카카오톡"></a></li>
                <li><a href="#none" target="_blank" title="인스타그램"><img src="<?=DIR?>/img/icon/instargram_icon.png" alt="인스타그램"></a></li>
                <li><a href="#none" target="_blank" title="네이버블로그"><img src="<?=DIR?>/img/icon/blog_icon.png" alt="네이버블로그"></a></li>
            </ul>
        </div>

        <button class="menuOpen" title="메뉴 버튼">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</header>

<div class="allMenu">
    <div class="inner">
        <div class="top">
            <button class="menuClose">
                <img src="<?=DIR?>/img/icon/close_icon.png" alt="닫기 아이콘">
            </button>
        </div>

        <div class="bg">
            <img src="<?=DIR?>/img/menuOpen_img.png" alt="청년 이미지">
        </div>

        <div class="menu">
            <ul id="snb" class="snb"></ul>
        </div>

        <div class="sns">
            <ul id="m_sns" class="m_sns"></ul>
        </div>
    </div>
</div>

<script>
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) {
                $('.header').addClass('scroll')
            } else {
                $('.header').removeClass('scroll')
            }
        })
    })
</script>