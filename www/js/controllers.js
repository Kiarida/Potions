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

.controller('LogoCtrl', function($scope, $state) {
  $scope.goTo=function(){
    $state.go('dashboard');
    

  }
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
      case "marecage":
      $scope.marecage.push(ingredient);
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
    //$scope.deck.push(ingredient); 
    //$scope.deck.push(ingredient);

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
    //$scope.potions.push(potion);
    //console.log($scope.potions[0]);
  }

//Ingrédients de la forêt
createCard("Poil de sanglier", "ingredient", 1, "poil de sanglier.png", "Un poil de sanglier perdu dans la forêt", "foret", null, null);
createCard("Champignon vénéneux", "ingredient", 2, "champignon 1.png", "Un gros champignon rouge et blanc", "foret", null, null);
createCard("Plume magique", "ingredient", 2, "plume 3.png", "Une plume tombée d'un oiseau mystérieux", "foret", null, null);
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
createCard("Grume de bois mort", "ingredient", 1, "grume de bois mort.png", "Une grume restée trop longtemps dans les marécages", "marecage", null, null);
createCard("Vas putride", "ingredient", 1, "vase putride.png", "Une accumulation de vase pendant des années", "marecage", null, null);
createCard("Goudron", "ingredient", 1, "goudron.jpg", "Du goudron obtenu depuis diverses matières", "marecage", null, null);


//Potions de niveau 2
var ingredientpotion1 = [{"name":"Huile de roche", "zone":"Grotte"}, {"name":"Eau d'oasis", "zone":"Désert"}];
createCardPotion("Potion exotique", 2, "potion1.jpg", "Vous pouvez récolter deux fois plus d'ingrédients pendant deux tours", "Une potion violette qui pétille", ingredientpotion1);

var ingredientpotion2 = [{"name":"Craie", "zone":"Grotte"}, {"name":"Sable", "zone":"Désert"}];
createCardPotion("Potion craieuse", 2, "potion2.jpg", "Vous pouvez avancer de deux cases et récolter l'ingrédient de la dernière case pendant deux tours", "Une potion pas très liquide", ingredientpotion2);

var ingredientpotion3 = [{"name":"Fossile", "zone":"Grotte"}, {"name":"Écaille de poisson", "zone":"Lac"}];
createCardPotion("Potion de la mer", 2, "potion3.jpg", "Vous pouvez jouer pendant deux tours", "Une potion qui sent le poisson", ingredientpotion3);

var ingredientpotion4 = [{"name":"Charbon", "zone":"Grotte"}, {"name":"Vase", "zone":"Lac"}];
createCardPotion("Potion noire", 2, "potion4.jpg", "Vous pouvez passer une fois sur un volcan", "Une potion sombre", ingredientpotion4);

var ingredientpotion5 = [{"name":"Minerai", "zone":"Grotte"}, {"name":"Plume magique", "zone":"Forêt"}];
createCardPotion("Potion colorée", 2, "potion5.jpg", "Vous pouvez contrer les pièges pendant trois tours", "Une potion qui en fait voir de toutes les couleurs", ingredientpotion5);

var ingredientpotion6 = [{"name":"Champignon vénéneux", "zone":"Grotte"}, {"name":"Larve", "zone":"Lac"}];
createCardPotion("Potion gluante", 2, "potion4.jpg", "Vous pouvez garder sept cartes dans votre sac à dos pendant deux tours", "Une potion qui colle aux mains", ingredientpotion6);

//Potions de niveau 1
var ingredientpotion7 = [{"name":"Mousse", "zone":"Forêt"}, {"name":"Feuille de palmier", "zone":"Désert"}];
createCardPotion("Potion verte", 1, "potion7.jpg", "Vous pouvez récolter deux fois plus d'ingrédients", "Une potion riche en chlorophylle", ingredientpotion7);

var ingredientpotion8 = [{"name":"Feuille de fougère royale", "zone":"Forêt"}, {"name":"Épine de cactus", "zone":"Désert"}];
createCardPotion("Potion piquante", 1, "potion8.jpg", "Vous pouvez avancer de deux cases et récolter l'ingrédient de la dernière case pendant deux tours", "Une potion qui déchire", ingredientpotion8);

var ingredientpotion9 = [{"name":"Résine de baobab", "zone":"Forêt"}, {"name":"Grume de bois mort", "zone":"Marécage"}];
createCardPotion("Potion boisée", 1, "potion9.jpg", "Vous pouvez jouer pendant deux tours", "Une potion qui sent le bois", ingredientpotion9);

var ingredientpotion10 = [{"name":"Poil de sanglier", "zone":"Forêt"}, {"name":"Poil de dromadaire", "zone":"Désert"}];
createCardPotion("Potion animale", 1, "potion10.jpg", "Vous pouvez passer une fois sur un volcan", "Une potion poilue", ingredientpotion10);

var ingredientpotion11 = [{"name":"Algue", "zone":"Lac"}, {"name":"Vase putride", "zone":"Marécage"}];
createCardPotion("Potion odorante", 1, "potion11.jpg", "Vous pouvez contrer les pièges pendant trois tours", "Une potion à l'odeur forte", ingredientpotion11);

var ingredientpotion12 = [{"name":"Noisette", "zone":"Forêt"}, {"name":"Coquillage", "zone":"Lac"}];
createCardPotion("Potion à coquilles", 1, "potion12.jpg", "Vous pouvez garder sept cartes dans votre sac à dos pendant deux tours", "Une potion dure pour les dents", ingredientpotion12);

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
            console.log("blibli");
            $scope.random = Math.floor((Math.random() * ($scope.globalpotions.length -1)));
            $scope.potions.push($scope.globalpotions[$scope.random]);
          
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
 piocherdebut();
 
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
