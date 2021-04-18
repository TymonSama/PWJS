var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller('GalleryListCtrl', function($scope)
{
    $scope.galleries = 
    [
        { 'title':'Dazbog, Bóg Słońca',
        'when':'Marzec 2020',
        'thumbnailUrl':'img/g1.jpg'
        },
        { 'title':'Rod, Bóg Deszczu',
        'when':'Czerwiec 2020',
        'thumbnailUrl':'img/g2.jpg'
        },
        { 'title':'Lada, Bogini Miłości',
        'when':'Październik 2020',
        'thumbnailUrl':'img/g3.jpg'
        },
        { 'title':'Perun, Bóg Nieba',
        'when':'Grudzień 2020',
        'thumbnailUrl':'img/g4.jpg'
        },
        { 'title':'Svarog, Bóg Ognia',
        'when':'Styczen 2021',
        'thumbnailUrl':'img/g5.jpg'
        },
        { 'title':'Tu akurat Afrodyta',
        'when':'Marzec 2021',
        'thumbnailUrl':'img/g6.jpg'
        }
    ];
    $scope.sortList = 
    [
        {
            'label':'Alfabetycznie',
            'value':'title'
        },
        {
            'label':'Chronologicznie',
            'value':'when'
        },
        {
            'label':'Od Najnowszych',
            'value':'-when'
        },
    ];
});