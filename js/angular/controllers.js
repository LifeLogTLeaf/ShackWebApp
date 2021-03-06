﻿/**
 *
 * Responsive website using AngularJS
 * http://www.script-tutorials.com/responsive-website-using-angularjs/
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Script Tutorials
 * http://www.script-tutorials.com/
 */

'use strict';

// optional controllers
function HeaderCtrl($rootScope, $scope){
//    console.log('HeaderCtrl 부터...'+$rootScope.loginStatus);




}
function HomeCtrl($scope, $http) {


}

function ProjectCtrl($scope, $http) {}

function MailCtrl($rootScope, $scope, $http, $timeout) {
    console.log('mailCtrl 로부터 ...'+$rootScope.loginStatus);
}

function GeneralCtrl($scope, $http, $timeout) {}

function IconsCtrl($scope, $http, $timeout) {}

function SliderCtrl($scope, $http, $timeout) {}

function MorrisCtrl($scope, $http) {}

function EditorsCtrl($scope, $http) {}

function AboutCtrl($scope, $http, $timeout) {}

function AdvancedCtrl($scope, $http, $timeout) {}

function GeneralElementCtrl($scope, $http, $timeout) {}

function DataTableCtrl($scope, $http, $timeout) {}

function TableCtrl($scope, $http, $timeout) {}

function ButtonCtrl($scope, $http, $timeout) {}

function TyphographyCtrl($scope, $http, $timeout) {}

function CalendarCtrl($scope, $http, $timeout) {}

function InvoiceCtrl($scope, $http, $timeout) {}

function MasonryCtrl($scope, $http, $timeout) {}

function MapCtrl($scope, $http, $timeout) {}

function ErrorCtrl($scope, $http, $timeout) {}

function TimeLineCtrl($rootScope, $scope, $http, $timeout, $window) {


    $scope.type='twitter';
    $scope.check=false;
    $scope.arrPost=[];
    dataLoad();


    $scope.loadMore = function() {
//        $scope.arrPost.push({'type': 'diary','name' : 'Jennifer Paijo', 'date' : '2014/6/25' , 'body': '안드로이드 소켓프로그래밍을 하고있는데요!같은 apk파일인데다른폰으로는 다 송수신되는데\n제 핸드폰은 송신만되고 수신이 안되요 ㅜ\n제가 의심해볼만한 사항은 뭔가요?? ㅠㅜ'},{'type': 'facebook','name':'메롱', 'date' : '2014/6/25' , 'body':'안돼 안돼 빨리 들어가야돼'});
//        $scope.arrPost.push({'type': 'facebook','name' : 'Bruce Wyne', 'date' : '2014/6/25' , 'body':'인간의 욕심은 끝이 없고 같은 실수를 반복한다.\n(Feat. 리퀴 과다)', 'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/1525587_548733518590706_3836701947769924532_n.jpg?oh=0fe243489a8d6d03ed035a341c94399e&oe=54BC7B55&__gda__=1420846696_b571cc5023b632a941d5dfef2c0c128f'});
    };

    function dataLoad() {
        $http({method: 'GET',
            url: 'http://14.63.171.66:8081/tleafstructure/api/user/logs',
            headers: {'Content-Type': 'application/json', 'X-Tleaf-User-Id':'344bc889c8bb44dd6e4bb845d40007b9', 'X-Tleaf-Application-Id': '6b22f647ef8f2f3278a1322d8b000f81', 'X-Tleaf-Access-Token':'6b22f647ef8f2f3278a1322d8b000210'}


        }).success(function(data, status, headers, config) {
            console.log('데이터 불러오기 성공');
            var length = data.logs.length;

            for(var i=0;i<length;i++){
                //시간 변환에 들어간다.
                data.logs[i].data.start= new Date(data.logs[i].data.start);

                var inputData =data.logs[i].data;
                console.log(inputData);

                $scope.arrPost.push(inputData);
            }

            // this callback will be called asynchronously
            // when the response is available
        }).
            error(function(data, status, headers, config) {

                console.log('실패');
                console.log(data);

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });


    }

}
function SnsCtrl($scope,$http) {
    //scope변수 정의부
    $scope.postNum = 40;
    $scope.likeNum = 958;
    $scope.commentNum = 152;
    //scope변수 정의 끝

    var $post = $("#postNum");
    var $like = $("#likeNum");
    var $comment = $("#commentNum");

    increaseCount($post,$scope.postNum);
    increaseCount($like,$scope.likeNum);
    increaseCount($comment,$scope.commentNum);


    //숫자 동적 카운팅을 시행
    function increaseCount($el,max) {
        var duration = 1000+(max/2);
        $({ val : 0 }).animate({ val : max }, {
            duration: duration,
            step: function() {
                $el.text(Math.floor(this.val));
            },
            complete: function() {
                $el.text(Math.floor(this.val));
            }
        });
    }




    $scope.type='twitter';
    $scope.check=false;
    $scope.arrPost=[];
    dataLoad();


    $scope.loadMore = function() {
//        $scope.arrPost.push({'type': 'diary','name' : 'Jennifer Paijo', 'date' : '2014/6/25' , 'body': '안드로이드 소켓프로그래밍을 하고있는데요!같은 apk파일인데다른폰으로는 다 송수신되는데\n제 핸드폰은 송신만되고 수신이 안되요 ㅜ\n제가 의심해볼만한 사항은 뭔가요?? ㅠㅜ'},{'type': 'facebook','name':'메롱', 'date' : '2014/6/25' , 'body':'안돼 안돼 빨리 들어가야돼'});
//        $scope.arrPost.push({'type': 'facebook','name' : 'Bruce Wyne', 'date' : '2014/6/25' , 'body':'인간의 욕심은 끝이 없고 같은 실수를 반복한다.\n(Feat. 리퀴 과다)', 'imgUrl':'https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/1525587_548733518590706_3836701947769924532_n.jpg?oh=0fe243489a8d6d03ed035a341c94399e&oe=54BC7B55&__gda__=1420846696_b571cc5023b632a941d5dfef2c0c128f'});
    };

    function dataLoad() {
        $http({method: 'GET',
            url: 'http://14.63.171.66:8081/tleafstructure/api/user/logs',
            headers: {'Content-Type': 'application/json', 'X-Tleaf-User-Id':'344bc889c8bb44dd6e4bb845d40007b9', 'X-Tleaf-Application-Id': '6b22f647ef8f2f3278a1322d8b000f81', 'X-Tleaf-Access-Token':'6b22f647ef8f2f3278a1322d8b000210'}


        }).success(function(data, status, headers, config) {
            console.log('데이터 불러오기 성공');
            var length = data.logs.length;

            for(var i=0;i<length;i++){
                //시간 변환에 들어간다.
                data.logs[i].data.start= new Date(data.logs[i].data.start);

                var inputData =data.logs[i].data;
                console.log(inputData);

                $scope.arrPost.push(inputData);
            }

            // this callback will be called asynchronously
            // when the response is available
        }).
            error(function(data, status, headers, config) {

                console.log('실패');
                console.log(data);

                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });


    }

}

function ServiceCtrl($scope, $http, $timeout) {}

function BlogListCtrl($scope, $http, $timeout) {}

function BlogDetailCtrl($scope, $http, $timeout) {}

function FloatCtrl($scope, $http, $timeout) {}

function ShopCtrl($scope, $http, $timeout) {}

function ShopDetailCtrl($scope, $http, $timeout) {}

function ShopListCtrl($scope, $http, $timeout) {}

function PetaCtrl($scope, $http, $timeout) {}

function SideBarCtrl($scope) {



}


