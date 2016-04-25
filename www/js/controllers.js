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

.controller('DeckCtrl', function($scope, $ionicModal, $document){
  $scope.deck=[];
  $scope.globalpotions=[];
  $scope.potions=[];
  $scope.foret=[];
  $scope.plaine=[];
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

//Ingrédients de la forêt
createCard("Poil de sanglier", "ingredient", 1, "poil de sanglier.png", "Un poil de sanglier perdu dans la forêt", "foret", null, null);
createCard("Champignon vénéneux", "ingredient", 1, "champignon 1.png", "Un gros champignon rouge et blanc", "foret", null, null);
createCard("Plume magique", "ingredient", 1, "plume 3.png", "Une plume tombée d'un oiseau mystérieux", "foret", null, null);
createCard("Mousse", "ingredient", 1, "mousse.png", "De la mousse fantastique", "foret", null, null);
createCard("Feuille de chêne", "ingredient", 1, "feuille de chêne.png", "Une feuille tombée d'un grand chêne après une tempête de vent", "foret", null, null);
createCard("Résine de baobab", "ingredient", 1, "résine de baobab.png", "La résine d'un très grand arbre", "foret", null, null);
createCard("Feuille de fougère royale", "ingredient", 1, "feuille de fougère royale.png", "Une feuille de la plus belle fougère de la forêt", "foret", null, null);
createCard("Noisette", "ingredient", 1, "noisette.png", "Une noisette oubliée par un écureuil volant", "foret", null, null);

//Ingrédients du lac
createCard("Vase", "ingredient", 1, "vase.png", "De la bourbe déposée au fond du lac", "lac", null, null);
createCard("Coquillage", "ingredient", 1, "coquillage.png", "Un coquillage perdu au fond de l'eau", "lac", null, null);
createCard("Algue", "ingredient", 1, "algue.png", "Une algue qui s'est décrochée du fond du lac", "lac", null, null);
createCard("Larve", "ingredient", 1, "larve.png", "Une larve venant d'éclore", "lac", null, null);
createCard("Roseau", "ingredient", 1, "roseau.png", "Une plante qui pousse au bord de l'eau", "lac", null, null);
createCard("Écaille de poisson", "ingredient", 1, "écaille de poisson.png", "Une écaille laissée par un poisson qui se baladait", "lac", null, null);

//Ingrédients du désert
createCard("Sable", "ingredient", 1, "sable.png", "Des grains de sable à perte de vue", "desert", null, null);
createCard("Épine de cactus", "ingredient", 1, "épine de cactus.png", "Une épine de plante grasse", "desert", null, null);
createCard("Eau d'oasis", "ingredient", 1, "eau d'oasis.png", "Une ressource rare dans le désert", "desert", null, null);
createCard("Poil de dromadaire", "ingredient", 1, "poil de dromadaire.png", "Un poil de cet animal à une bosse", "desert", null, null);
createCard("Feuille de palmier", "ingredient", 1, "feuille de palmier.png", "Une feuille tombée d'un beau palmier", "desert", null, null);

//Ingrédients de la grotte
createCard("Craie", "ingredient", 1, "craie.png", "Un morceau de cette roche blanche", "grotte", null, null);
createCard("Fossile", "ingredient", 1, "fossile.png", "Un fossile retrouvé au fond de la grotte", "grotte", null, null);
createCard("Huile de roche", "ingredient", 1, "huile de roche.png", "De la roche mise en miette pour former de l'huile", "grotte", null, null);
createCard("Ardoise", "ingredient", 1, "ardoise.jpg", "Un morceau d'ardoise trouvé dans la grotte", "grotte", null, null);
createCard("Charbon", "ingredient", 1, "charbon.png", "Un morceau de charbon pour faire un petit feu", "grotte", null, null);
createCard("Minerai", "ingredient", 1, "minerai.png", "Un roche contenant de beaux mineraux", "grotte", null, null);

//Ingrédients de la montagne
createCard("Aiguille de pin", "ingredient", 1, "aiguille de pin.png", "Une aiguille d'un sapin surplombant la montagne", "montagne", null, null);
createCard("Corne de bouquetin", "ingredient", 1, "corne de bouquetin.png", "Une corne perdue par un bouquetin", "montagne", null, null);
createCard("Flocon de neige", "ingredient", 1, "flocon de neige.jpg", "Un flocon tombé du ciel lors d'une tempête de neige", "montagne", null, null);
createCard("Campanule", "ingredient", 1, "campanule.png", "Une jolie fleur violette", "montagne", null, null);
createCard("Plume d'aigle", "ingredient", 1, "plume d'aigle.png", "Une plume perdue pendant un vol majestueux", "montagne", null, null);

//Ingrédients des marécages
createCard("Grume de bois mort", "ingredient", 1, "grume de bois mort.png", "Une grumme restée trop longtemps dans les marécages", "marecage", null, null);
createCard("Vas putride", "ingredient", 1, "vase putride.png", "Une accumulation de vase pendant des années", "marecage", null, null);
createCard("Goudron", "ingredient", 1, "goudron.jpg", "Du goudron obtenu depuis diverses matières", "marecage", null, null);


var ingredientpotion1 = [{"name":"Fleur", "zone":"Montagne"}, {"name":"Caillou", "zone":"Désert"}];
createCardPotion("Potion exotique", 2, "potion1.jpg", "Vous pouvez récolter deux fois plus d'ingrédients", "Une potion violette qui pétille", ingredientpotion1);


console.log($scope.globalpotions);



  $scope.piocher=function(zone){
    if($scope.deck.length == 6){
      console.log("on doit défausser");
    }
    else{
      switch(zone){
      case "foret":
      $scope.background="../img/ForestScene-01.svg";
      break;
      case "plaine":
      
      break;
      case "desert":
      $scope.background="../img/DesertScene.svg";
      break;
      case "lac":
      
      break;
      case "grotte":
      
      break;
      case "montagne":
      $scope.background="../img/MountainScene.svg";
      break;
    }
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

  $scope.touched=function(id){
   
  }

  $scope.creerPotion=function(potion){
    potion.created=true;
  }

  $scope.userPotion=function(potion){
    potion.created=false;
  }


})
