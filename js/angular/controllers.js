/**
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
function HeaderCtrl($rootScope, $scope, Facebook, GooglePlus){
//    console.log('HeaderCtrl 부터...'+$rootScope.loginStatus);



    $rootScope.$on('Facebook:statusChange', function(ev, data) {
        console.log('"HeaderCtrl 부터... " Facebook Status: ', JSON.stringify(data));
        console.log('"headerCtrl 부터... facebook status check : '+ data.status);
        $rootScope.loginStatus = data.status;
        if($rootScope.loginStatus != 'connected'){
            console.log('HeaderCtrl 부터...로그인이 안되어 있습니다');
        location.replace("http://localhost/pages/login.html");
        }
    });

    $rootScope.$on('GooglePlus:statusChange', function(ev, data) {
        console.log('Google Status: ', data);
        if (data.status == 'connected') {


        } else if (data.status == 'loggin') {

        }
    });


    $scope.facebooklogin = function(){
//        1. facebook로그인을 진행한다

//        UserService.Logout('FACEBOOK');
//        Facebook.logout();
        Facebook.login(function(response) {
            Facebook.api('/me', function(response) {
                console.log('페이스북 데이터 목록 \n'+JSON.stringify(response));
            });
        });



//          1. 끝

//        2.구글 로그인을 진행한다
        //UserService.Logout('GOOGLE');

//        GooglePlus.logout();
//        GooglePlus.login().then(function (authResult) {
//            console.log(JSON.stringify(authResult));
//        }, function (err) {
//            console.log(err);
//        });
//        2.끝
    }


    $scope.$on('Logout', function(event) {
        event.stopPropagation();

        Logout();
    });

    $scope.facebookLogout = function () {
        Facebook.logout();

    }


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

function BlankCtrl($scope, $http, $timeout) {}

function BlogListCtrl($scope, $http, $timeout) {}

function BlogDetailCtrl($scope, $http, $timeout) {}

function FloatCtrl($scope, $http, $timeout) {}

function ShopCtrl($scope, $http, $timeout) {}

function ShopDetailCtrl($scope, $http, $timeout) {}

function ShopListCtrl($scope, $http, $timeout) {}

function PetaCtrl($scope, $http, $timeout) {}

function SideBarCtrl($scope) {


    $scope.index=0;
    $scope.user=[{'name':'yoonsub Kim','img' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p320x320/10514709_602094559909057_545461442979457188_n.jpg?oh=2fa5ccf656478e20f37f08f8d56c78aa&oe=54F728FD&__gda__=1425365052_5d932c680b0f0e771d7a7f667aedbc16'},
        {'name': 'youngjin chang', 'img' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/t31.0-1/c62.230.769.769/s320x320/901772_424374224309284_412640333_o.jpg'},
        {'name': 'seulgi choi', 'img' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/c0.0.320.320/p320x320/10415620_719012588170326_459503906262402156_n.jpg?oh=73beb95a3ea261085f66a3cf26ff3c2a&oe=54F3B978&__gda__=1422157115_63d0b0e00833a4250af7b906676a76e3'},
        {'name': 'susu Choi', 'img' : 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c74.0.320.320/p320x320/10518680_403773109769752_6922407977535480476_n.jpg?oh=c7a9e5236d5ed569828cb8003ad6af4b&oe=54ACD96F&__gda__=1422001448_4228f090ad6c046cbe760a790c83ce77'}

    ];
    $scope.addIndex = function () {
        if($scope.index<$scope.user.length-1){
            $scope.index +=1;
        }else{
            $scope.index =0;
        }

    }

}


