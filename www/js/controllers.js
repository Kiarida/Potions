angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('DeckCtrl', function($scope, $ionicModal, $rootScope ,$state){
  $scope.deck=[];
  $scope.globalpotions=[];
  $scope.potions=[];
  $scope.foret=[];
  $scope.marecage=[];
  $scope.desert=[];
  $scope.lac=[];
  $scope.grotte=[];
  $scope.montagne=[];
  $scope.custom;
  $scope.custompotion;



    var createCard=function(name, type, rarity, img, descrip, zone, effect, effectabr){
    var ingredient={
      'name':name,
      'type':type,
      'rarity':rarity,
      'img':img,
      'descrip':descrip,
      'zone':zone,
      'effect':effect,
      "effectabr":effectabr
    }
    switch(zone){
      case "foret":
      $scope.foret.push(ingredient);
      break;
      case "plaine":
      $scope.plaine.push(ingredient);
      break;
      case "desert":
      $scope.desert.push(ingredient);
      break;
      case "lac":
      $scope.lac.push(ingredient);
      break;
      case "grotte":
      $scope.grotte.push(ingredient);
      break;
      case "montagne":
      $scope.montagne.push(ingredient);
      break;
    }
    $scope.deck.push(ingredient); 
    $scope.deck.push(ingredient);
    console.log($scope.montagne);
  }
  var createCardPotion=function(name, rarity, img, effect, desc, listing){
    var potion={
      'name':name,
      'rarity':rarity,
      'img':img,
      'effect':effect,
      'desc':desc,
      'ingredients':listing,
      'created':false
    }
    $scope.globalpotions.push(potion);
    $scope.potions.push(potion);
    //console.log($scope.potions[0]);
  }

createCard("Fleur", "ingredient", 1, "fleur.jpg", "Une petite fleur trouvée dans la montagne", "montagne", null, null);

var ingredientpotion1 = [{"name":"Fleur", "zone":"Montagne"}, {"name":"Caillou", "zone":"Désert"}];
createCardPotion("Potion exotique", 2, "potion1.jpg", "Vous pouvez récolter deux fois plus d'ingrédients", "Une potion violette qui pétille", ingredientpotion1);


var debut = true;
var compteur = 0;
$scope.random =-1;
$scope.rotate=true;

var piocherdebut = function(){
  console.log("hila");
if(debut ==true){
  console.log("bla");
  $scope.modal= $ionicModal.fromTemplateUrl('templates/modalpotions.html', {
      scope: $scope,
            animation: 'slide-in-up'
          }).then(function(modal) {
            $scope.modal = modal;
          
            $scope.modal.show();

          });

          $scope.closeModal = function() {
            
            $scope.modal.hide();
          };
          $scope.piochepaquet=function(){ 
            console.log("piochepaquet");
            console.log($scope.globalpotions.length);
            $scope.random = Math.floor((Math.random() * ($scope.globalpotions.length -1)));
            $scope.potions.push($scope.globalpotions[$scope.random]);
            console.log($scope.random);
            compteur++;
            

          }
          $scope.randomize=function(){
            
            $scope.random=-1;
            $rootScope.$broadcast('FLIP_EVENT_IN');
            if(compteur == 2){
              $scope.closeModal();
              debut=false;
            }
            //console.log("heya");
            //$scope.rotate=!$scope.rotate;
          }
          //Cleanup the modal when we're done with it!
          $scope.$on('$destroy', function() {
            
            $scope.modal.remove();
          });
        }
}

  $scope.goTo=function(){
    $state.go('dashboard');
     piocherdebut();

  }

  $scope.piocher=function(zone){
    
    
      switch(zone){
      case "foret":
      var random = Math.floor((Math.random() * ($scope.foret.length -1)));
      $scope.deck.push($scope.foret[random]);

      $scope.background="../img/ForestScene-01.svg";
      break;
      case "plaine":
      var random = Math.floor((Math.random() * ($scope.marecage.length -1)));
      $scope.deck.push($scope.marecage[random]);
      $scope.background="../img/SwampScene.svg";
      break;
      case "desert":
      var random = Math.floor((Math.random() * ($scope.desert.length -1)));
      $scope.deck.push($scope.desert[random]);
      $scope.background="../img/DesertScene.svg";
      break;
      case "lac":
      var random = Math.floor((Math.random() * ($scope.lac.length -1)));
      $scope.deck.push($scope.lac[random]);
      $scope.background="../img/LakeScene.svg";
      break;
      case "grotte":
      var random = Math.floor((Math.random() * ($scope.grotte.length -1)));
      $scope.deck.push($scope.grotte[random]);
      $scope.background="../img/CaveScene.svg";
      break;
      case "montagne":
      var random = Math.floor((Math.random() * ($scope.montagne.length -1)));
      $scope.deck.push($scope.montagne[random]);
      $scope.background="../img/MountainScene.svg";
      break;
    
    }
    
    $scope.closeModal();
  }

  $scope.useTrap=function(trap){
    if(trap.type=="selftrap"){
      //selon l'effet


     $scope.deck.splice($scope.deck.indexOf(trap), 1);      
    }
    else{
      $scope.deck.splice($scope.deck.indexOf(trap), 1);
    }
  }

  $scope.defausser=function(card){
    $scope.deck.splice($scope.deck.indexOf(card), 1);
  }

  $scope.showModal=function(){
    if($scope.deck.length == 6){
      console.log("on doit défausser");
    }
      else{
        $scope.modal= $ionicModal.fromTemplateUrl('templates/modal.html', {
      scope: $scope,
            animation: 'slide-in-up'
          }).then(function(modal) {
            $scope.modal = modal;

            $scope.modal.show();

          });

          $scope.closeModal = function() {
            
            $scope.modal.hide();
          };
          //Cleanup the modal when we're done with it!
          $scope.$on('$destroy', function() {
            
            $scope.modal.remove();
          });
      }
      
    
    

  }

  $scope.touched=function(id){
   
  }

  $scope.creerPotion=function(potion){
    potion.created=true;
  }

  $scope.userPotion=function(potion){
    potion.created=false;
  }


})
