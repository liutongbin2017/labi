/**
 * Created by liutongbin on 2017/10/17.
 */
;(function($){
    $(function(){
        var arr = ["./images/wKgCMFApt9GNPaJmAAJGWgwLhEo105=C192x192+1+1.jpg","./images/wKgCO1Apt9G5mTeSAAH0q-tDsg4281=C192x192+1+1.jpg","./images/wKgCO1Apt82sNcBeAACUY9xf8CM109=C192x192+1+1.jpg","./images/wKgCO1Apt86_HltIAALH6ZFlk2A716=C192x192+1+1.jpg","./images/wKgCO1Apt829uEDGAAHSULufwik967=C192x192+1+1.jpg"];
        // var data = [
        //     {
        //         id: 11,
        //         url: "",
        //         oriUrl: ""
        //     }
        // ]
        var pageNumber = 2;
        var page_count = Math.ceil(arr.length/pageNumber);
        var pageCurrent = 1;
        var current = 0;
        var last = arr.length - 1;
        var $con = $(' .photo-list-view');
        function render(pageCurrent){
            // var data = arr;
            var data = arr.slice((pageCurrent-1)*2,pageCurrent*2);
            var str = "";
            for(var i = 0;i <= (data.length-1);i++){
                str +="<li class='photo-view-li' data-idx="+ i +">" +
                    "<div class='shadow'>" +
                    "<div class='share'>分享到：" +
                    "<a class='sina-share' title='新浪微博' share-pic='http://img.labi.com/group2/M00/AE/D7/wKgCMFApt8zUFIuxAAGpWLG8nfw112=640x640.jpg'>新浪微博</a>" +
                    "<a class='tencent-share' title='腾讯微博' share-pic='http://img.labi.com/group2/M00/AE/D7/wKgCMFApt8zUFIuxAAGpWLG8nfw112=640x640.jpg'>腾讯微博</a>" +
                    "<a class='kaixin001-share' title='开心网' share-pic='http://img.labi.com/group2/M00/AE/D7/wKgCMFApt8zUFIuxAAGpWLG8nfw112=640x640.jpg'>开心网</a>" +
                    "<a class='renren-share' title='人人网' share-pic='http://img.labi.com/group2/M00/AE/D7/wKgCMFApt8zUFIuxAAGpWLG8nfw112=640x640.jpg'>人人网</a>" +
                    "<a class='tencent-qzone-share' title='QQ空间' share-pic='http://img.labi.com/group2/M00/AE/D7/wKgCMFApt8zUFIuxAAGpWLG8nfw112=640x640.jpg'>QQ空间</a>" +
                    "</div>" +
                    "</div>" +
                    "<div class='photo-view-li-content'>" +
                    "<a class='pics-img-container'><img data-idx="+ i +"  src="+data[i]+"></a>" +
                    "<div class='viewer-pics-to-save'></div>" +
                    "<a class='viewer-pics-to-save-link'></a>" +
                    "<div class='viewer-pics-to-del'></div>" +
                    "<a class='viewer-pics-to-del-link'></a>" +
                    "</div>" +
                    "</li>";
            }

            // console.log(str);
            $con.html(str);

        }

        render(pageCurrent);



        function ren(index){

            var $comment = $(".albums-slide-photo-content");

            index = index ? index: 0; 
            var data =arr;
            var str = "";
            // for{(var i = 0;i<=(data.length-1);i++)
            str +="<li>" +
                "<img src="+data[index]+">"+
                "</li>";
            // }
            $comment.html(str);
        }
        // ren(index);
        $(".photo-view-li").click(function(){
            $(".albums-slide-container").css('display','block');
            $(".albums-slide-close-btn").css('z-index','145');
            var path = $(this).data("idx");

            current = path;
            // var arr = ["./images/wKgCMFApt9GNPaJmAAJGWgwLhEo105=C192x192+1+1.jpg","./images/wKgCO1Apt9G5mTeSAAH0q-tDsg4281=C192x192+1+1.jpg","./images/wKgCO1Apt82sNcBeAACUY9xf8CM109=C192x192+1+1.jpg","./images/wKgCO1Apt86_HltIAALH6ZFlk2A716=C192x192+1+1.jpg","./images/wKgCO1Apt829uEDGAAHSULufwik967=C192x192+1+1.jpg"];
            
            ren(current);

            // $(".albums-slide-photo-content li").css("display","none");

            // $(".albums-slide-photo-content li img").attr('src','path');
        });

        $(".albums-slide-close-btn").click(function(){
            $(".albums-slide-container").fadeToggle();
            $(".albums-slide-close-btn").css('z-index','-10');

        });
        $(".albums_slide_handler_left").click(function(){
            current--;
            if(current>=0){
                ren(current);
            }else{
                return false;
            }
        })
        $(".albums_slide_handler_right").click(function(){
            current++;
            if(current<=page_count){
                ren(current);
            }else{
                return false;
            }
        })
        $(".next").click(function(){
            pageCurrent++;
            if(pageCurrent<=page_count){
                render(pageCurrent);
            }else{
                return false;
            }
        })
        $(".prev").click(function(){
            pageCurrent--;
            if(pageCurrent>0){
                render(pageCurrent);
            }else{
                return false;
            }
        })












    })
})(jQuery);