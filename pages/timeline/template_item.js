/**
 * Created by yoonsKim on 14. 10. 21..
 */
'use strict';

app.directive('items', function () {
    return function (scope, iElement, iAttrs, controller) {
        var post = scope.arrPost[iAttrs.post];

        console.log(post);

            if (post.type == 'diary') {
                iElement.html(
                        '<i class="fa fa-book bg-green"></i>' +
                        '<span>' +
                        '    <strong>'+post.type+'&nbsp;&nbsp;</strong>from<i> &nbsp;&nbsp;'+post.name+'</i>' +
                        '    <small>'+post.date+'</small>' +
                        '</span>' +
                        '<div class="timeline-item bg-white">' +
                        '   <h3 style="padding: 15px 20px 0 20px;" class="timeline-header text-white  no-border">' +
                        '        <span class="text-gray"><i class="fontello-pen"></i>&nbsp;&nbsp;My post</span>' +
                        '        <span class="text-white pull-right fa fa-cogs"></span>' +
                        '    </h3>' +
                        '    <div class="timeline-body">' +
                        '        '+post.body+'' +
                        '    </div>' +
                        '    <div class="timeline-footer">' +
                        '        <a class="btn bg-green btn-xs">Read more</a>' +
                        '        <a class="btn btn-danger btn-xs">Delete</a>' +
                        '    </div>' +
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