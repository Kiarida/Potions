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

.controller('DeckCtrl', function($scope, $ionicModal){
  $scope.deck=[{'name':'empty'}, {'name':'empty'}, {'name':'empty'}, {'name':'empty'}, {'name':'empty'}, {'name':'empty'}];
  $scope.globalpotions=[];
  $scope.potions=[];
  $scope.foret=[];
  $scope.plaine=[];
  $scope.desert=[];
  $scope.lac=[];
  $scope.grotte=[];
  $scope.montagne=[];

    var createCard=function(name, type, rarity, img, descrip, zone){
    var ingredient={
      'name':name,
      'type':type,
      'rarity':rarity,
      'img':img,
      'descrip':descrip,
      'zone':zone
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
  }

createCard("Fleur", "ingrédient", 1, "fleur.jpg", "Une petite fleur trouvée dans la montagne", "montagne");

var ingredientpotion1 = [{"name":"Fleur", "zone":"Montagne"}, {"name":"Caillou", "zone":"Désert"}];
createCardPotion("Potion exotique", 2, "potion1.jpg", "Vous pouvez récolter deux fois plus d'ingrédients", "Une potion violette qui pétille", ingredientpotion1);


console.log($scope.globalpotions);



  $scope.piocher=function(zone){
    
     switch(zone){
      case "foret":
      
      break;
      case "plaine":
      
      break;
      case "desert":
      
      break;
      case "lac":
      
      break;
      case "grotte":
    
      break;
      case "montagne":
      
      break;
    }
    $scope.closeModal();
  }

  $scope.showModal=function(){
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





})
