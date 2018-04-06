(function ($) {
    // 封装轮播图的构造函数
    function Carousel({el, interval = 3000}) {
        this.el = el;

        this.interval = interval;

        this.index = 0;

        // 获取图片个数
        this.img = this.el.find('.pic-img');
        this.imgs = this.img.children();


        // 创建按钮列表
        this.createBtnList();

        // 显示方向按钮
        this.control = this.el.find('.arrow');
        this.el.hover(() => {
            clearInterval(this.timer);
            this.control.css('display', 'block');
        }, () => {
            this.control.css('display', 'none');
            this.autoMove();
        });

        this.prev = this.control.children('.arrow-left');
        this.next = this.control.children('.arrow-right');

        this.prev.bind('click', function () {
            this.prevMove();
        }.bind(this));
        
        this.next.bind('click', function () {
            this.nextMove();
        }.bind(this));

        this.autoMove();
    }

    Carousel.prototype = {
        constructor: Carousel,
        createBtnList: function () {
            let oCarouselBtn = $('<div>').addClass('btn').appendTo(this.el);
            for(var i = 0; i < this.imgs.length; i++) {
                var oA = $('<a>').appendTo(oCarouselBtn);
                if(i === 0) {
                    oA.addClass('act');
                }
            }
            this.btns =  oCarouselBtn.children();

            let oThat = this;
            this.btns.bind('mouseenter', function () {
                oThat.index = $(this).index();
                
                oThat.move();
            });
        },
        autoMove: function () {
            this.timer = setInterval(() => {
                this.nextMove();
            }, this.interval);
        },
        prevMove: function () {
            this.index--;
            if (this.index < 0) {
                this.index = this.imgs.length - 1;
            }
            this.move();
        },
        nextMove: function () {
            this.index++;
            if (this.index >= this.imgs.length) {
                this.index = 0;
            }
            this.move();
        },
        move() {
            this.btns.removeClass('act').eq(this.index).addClass('act');
            this.imgs.stop(true).animate({
                opacity: 0
            }, function () {
                $(this).css('display', 'none');
            }).eq(this.index).stop(true).css('display', 'block').animate({opacity: 1});
        }
    };

    // 注册carousel方法（插件）
    $.fn.extend({
        carousel: function (options) {
            new Carousel($.extend({ el: this }, options));
        }
    });
})(jQuery);