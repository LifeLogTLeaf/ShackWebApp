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

function HomeCtrl($scope, $http) {


}

function ProjectCtrl($scope, $http) {}

function MailCtrl($scope, $http, $timeout) {}

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

function TimeLineCtrl($scope, $http, $timeout) {
    $scope.type='twitter';
    $scope.arrPost=[{'type': 'diary','name' : 'Jennifer Paijo', 'date' : '2014/6/25' , 'body': '안드로이드 소켓프로그래밍을 하고있는데요!같은 apk파일인데다른폰으로는 다 송수신되는데\n제 핸드폰은 송신만되고 수신이 안되요 ㅜ\n제가 의심해볼만한 사항은 뭔가요?? ㅠㅜ'},
                    {'type': 'twitter','name' : 'Agus Anak Baik', 'date' : '2014/6/23' , 'body':'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'},
        {'type': 'facebook','name' : 'Bruce Wyne', 'date' : '2014/6/25' , 'body':"'you're get a new friend!'"},
        {'type': 'diary','name' : 'Jennifer Paijo', 'date' : '2014/6/25' , 'body': 'Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles, weebly ning heekya handango imeem plugg dopplr jibjab, movity jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle quora plaxo ideeli hulu weebly balihoo...'},
        {'type': 'twitter','name' : 'Agus Anak Baik', 'date' : '2014/6/23' , 'body':'Take me to your leader! Switzerland is small and neutral! We are more like Germany, ambitious and misunderstood!'},
        {'type': 'facebook','name' : 'Bruce Wyne', 'date' : '2014/6/25' , 'body':"'you're get a new friend!'"}

    ];
    console.log($scope.type);
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


