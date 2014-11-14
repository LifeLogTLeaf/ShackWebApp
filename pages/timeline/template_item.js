/**
 * Created by yoonsKim on 14. 10. 21..
 */
'use strict';

app.directive('items', function () {
    return function (scope, iElement, iAttrs, controller) {
        var post = scope.arrPost[iAttrs.post];

        var date = post.start;
            //다이어리를 이쪽으로 빼야함, true형으로 바꿔야한다
            if (post.type != 'diary') {
                iElement.html(
                        '<i class="fa fa-book bg-green"></i>' +
                        '<span class="text-white">' +
                        '    '+date.getFullYear()+'/'+date.getMonth()+'/'+date.getDay()+' '+date.getHours()+':' +date.getMinutes()+
                        '</span>' +
                        '<div class="timeline-item bg-green">' +
                        '   <h3 style="padding: 15px 20px 0 20px;" class="timeline-header text-green  no-border">' +
                        '        <h3 class="text-white" style="margin-left: 27px;"><i class="fa fa-fw fa-pencil trans-icon"></i>'+post.title+'</h3>' +
                        '    </h3>' +
                        '    <hr class="col-xs-5 col-lg-6"  style="float: left;margin: -3px 0 0 28px; ">   '+
                        '    <h4 class="timeline-body" style="padding:10px 30px; margin-top: 18px;"><b>' +
                        '        '+post.body+'' +
                        '    </b></h4>' +
                        '</div>'
                );

            } else if (post.type == 'facebook') {
                iElement.html(
                  '<i class="fa fa-facebook bg-blue"></i>' +
                  '<span>' +
                  '     <strong>'+ post.type + '&nbsp;&nbsp;</strong>from<i> &nbsp;&nbsp;'+ post.name + '</i>' +
                  '     <small>'+ post.date + '</small>' +
                  '</span>' +
                  '<div class="timeline-item bg-white">' +
                  '     <h3 style="padding: 15px 20px 0 20px;" class="timeline-header text-white  no-border">' +
                  '         <span class="text-gray"><i class="fontello-users-outline"></i>&nbsp;&nbsp;Friends List</span>' +
                  '         <span class="text-white pull-right fa fa-cogs"></span>' +
                  '     </h3>' +
                  '     <div class="timeline-body">' +
                  '         <img src="'+post.imgUrl +'" width="200px">' +
                  '     </div>' +
                  '</div>'

                );
            }


    };
});