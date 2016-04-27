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
  $scope.deck=["empty","empty","empty","empty","empty","empty"];
  $scope.background="../img/Tower.svg";
  $scope.globalpotions=[];
  $scope.globalpotionseasy=[];
  $scope.globalpotionsdiff=[];
  $scope.potions=[];
  $scope.foret=[];
  $scope.marecage=[];
  $scope.desert=[];
  $scope.lac=[];
  $scope.grotte=[];
  $scope.montagne=[];
  $scope.custom;
  $scope.custompotion;
  $scope.effetpos=[];
  $scope.effetneg=[];
  $scope.globaltrap=[];
  $scope.searchtrap="";




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

    if(ingredient.type != "ingredient"){
      $scope.globaltrap.push(ingredient);
      //$scope.deck.push(ingredient);
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
    if(rarity == 2){
      $scope.globalpotionsdiff.push(potion);

    }
    else{
      $scope.globalpotionseasy.push(potion);
    }
    //$scope.potions.push(potion);
    //console.log($scope.potions[0]);
  }


  //Mousse, Feuille Palmier, Feuille fougère, Epine cactus, Résine sapin, Grume bois, Poil sanglier
// Poil dromadaire, Algue, Vase putride, Huile de roche, eau d'oasis, Crai, Sable, Corne bouqueetin, Ecaille poiss, 
//Charbon, Vase, Minerai, Plume magique

//Ingrédients de la forêt
createCard("Poil de sanglier", "ingredient", 1, "FeuilleChene.png", "Un poil de sanglier perdu dans la forêt.", "foret", null, null);
//createCard("Champignon vénéneux", "ingredient", 2, "FeuilleChene.png", "Un gros champignon rouge et blanc.", "foret", null, null);
//createCard("Plume magique", "ingredient", 2, "FeuilleChene.png", "Une plume tombée d'un oiseau mystérieux.", "foret", null, null);
//createCard("Mousse", "ingredient", 1, "FeuilleChene.png", "De la mousse fantastique.", "foret", null, null);
createCard("Feuille de chêne", "ingredient", 1, "FeuilleChene.png", "Une feuille tombée d'un grand chêne après une tempête de vent.", "foret", null, null);
//createCard("Résine de sapin", "ingredient", 1, "FeuilleChene.png", "La résine d'un très grand arbre.", "foret", null, null);
//createCard("Feuille de fougère royale", "ingredient", 1, "FeuilleChene.png", "Une feuille de la plus belle fougère de la forêt.", "foret", null, null);
//createCard("Noisette", "ingredient", 1, "FeuilleChene.png", "Une noisette oubliée par un écureuil volant.", "foret", null, null);

createCard("Piège forestier", "selftrap", 1, "PiegeSelf.png", "", "foret", "Vous devez défausser une carte.", null);
createCard("Piège à écureuil", "trap", 1, "PiegeThrow.png", "", "foret", "Vous devez passer votre tour.", null);


/*
Piège : perdre carte - 
peut pas jouer au prochain tour - 

téléporter l’adversaire vers la case choisie - 
donner une de ses cartes à l’adversaire - 
*/


//Ingrédients du lac
//createCard("Vase", "ingredient", 1, "FeuilleChene.png", "De la bourbe déposée au fond du lac", "lac", null, null);
//createCard("Coquillage", "ingredient", 1, "FeuilleChene.png", "Un coquillage perdu au fond de l'eau", "lac", null, null);
createCard("Algue", "ingredient", 1, "FeuilleChene.png", "Une algue qui s'est décrochée du fond du lac", "lac", null, null);
//createCard("Larve", "ingredient", 1, "FeuilleChene.png", "Une larve venant d'éclore", "lac", null, null);
//createCard("Roseau", "ingredient", 1, "FeuilleChene.png", "Une plante qui pousse au bord de l'eau", "lac", null, null);
createCard("Écaille de poisson", "ingredient", 1, "FeuilleChene.png", "Une écaille laissée par un poisson qui se baladait", "lac", null, null);

createCard("Piège aquatique", "selftrap", 1, "PiegeSelf.png", "", "lac", "Vous devez passer votre tour.", null);
createCard("Piège à crabe", "trap", 1, "PiegeThrow.png", "", "lac", "Défaussez une carte.", null);



//Ingrédients du désert
createCard("Sable", "ingredient", 2, "FeuilleChene.png", "Des grains de sable à perte de vue", "desert", null, null);
createCard("Épine de cactus", "ingredient", 1, "FeuilleChene.png", "Une épine de plante grasse", "desert", null, null);
//createCard("Eau d'oasis", "ingredient", 2, "FeuilleChene.png", "Une ressource rare dans le désert", "desert", null, null);
//createCard("Poil de dromadaire", "ingredient", 1, "FeuilleChene.png", "Un poil de cet animal à une bosse", "desert", null, null);
//createCard("Feuille de palmier", "ingredient", 1, "FeuilleChene.png", "Une feuille tombée d'un beau palmier", "desert", null, null);

createCard("Sables mouvants", "trap", "", "PiegeThrow.png", "", "desert", "Vous téléportez votre adversaire.", null);
createCard("Cactus piégé", "selftrap", "", "PiegeSelf.png", "", "desert", "Vous donnez une carte à votre adversaire.", null);



//Ingrédients de la grotte
//createCard("Craie", "ingredient", 2, "FeuilleChene.png", "Un morceau de cette roche blanche", "grotte", null, null);
createCard("Fossile", "ingredient", 1, "FeuilleChene.png", "Un fossile retrouvé au fond de la grotte", "grotte", null, null);
//createCard("Huile de roche", "ingredient", 2, "FeuilleChene.png", "De la roche mise en miette pour former de l'huile", "grotte", null, null);
//createCard("Ardoise", "ingredient", 1, "FeuilleChene.png", "Un morceau d'ardoise trouvé dans la grotte", "grotte", null, null);
//createCard("Charbon", "ingredient", 1, "FeuilleChene.png", "Un morceau de charbon pour faire un petit feu", "grotte", null, null);
createCard("Minerai", "ingredient", 1, "FeuilleChene.png", "Un roche contenant de beaux mineraux", "grotte", null, null);

createCard("Chauve-souris enragée", "selftrap", 1, "PiegeSelf.png", "", "grotte", "Défaussez une carte.", null);
createCard("Faux diamant", "trap", 1, "PiegeThrow.png", "", "grotte", "Défaussez une carte.", null);




//Ingrédients de la montagne
//createCard("Aiguille de pin", "ingredient", 1, "FeuilleChene.png", "Une aiguille d'un sapin surplombant la montagne", "montagne", null, null);
createCard("Corne de bouquetin", "ingredient", 2, "FeuilleChene.png", "Une corne perdue par un bouquetin", "montagne", null, null);
createCard("Flocon de neige", "ingredient", 1, "FeuilleChene.png", "Un flocon tombé du ciel lors d'une tempête de neige", "montagne", null, null);
//createCard("Campanule", "ingredient", 1, "FeuilleChene.png", "Une jolie fleur violette", "montagne", null, null);
//createCard("Plume d'aigle", "ingredient", 1, "FeuilleChene.png", "Une plume perdue pendant un vol majestueux", "montagne", null, null);

createCard("Avalanche", "selftrap", 1, "PiegeSelf.png", "", "montagne", "Vous passez votre tour.", null);
createCard("Yéti", "trap", 1, "PiegeThrow.png", "", "montagne", "Vous êtes téléporté.", null);



//Ingrédients des marécages
//createCard("Grume de bois mort", "ingredient", 1, "FeuilleChene.png", "Une grume restée trop longtemps dans les marécages", "marecage", null, null);
createCard("Vase putride", "ingredient", 1, "FeuilleChene.png", "Une accumulation de vase pendant des années", "marecage", null, null);
createCard("Goudron", "ingredient", 1, "FeuilleChene.png", "Du goudron obtenu depuis diverses matières", "marecage", null, null);

createCard("Moustiques", "selftrap", 1, "PiegeSelf.png", "", "marecage", "Défaussez une carte", null);
createCard("Odeur putride", "trap", 1, "PiegeThrow.png", "", "marecage", "Vous passez votre tour.", null);


//Potions de niveau 2
var ingredientpotion1 = [{"name":"Minerai", "zone":"Grotte"}, {"name":"Épine de cactus", "zone":"Désert"}];
createCardPotion("Potion exotique", 2, "Potion1.png", "Vous pouvez récolter deux fois plus d'ingrédients pendant deux tours", "Une potion violette qui pétille", ingredientpotion1);

var ingredientpotion2 = [{"name":"Fossile", "zone":"Grotte"}, {"name":"Épine de cactus", "zone":"Désert"}];
createCardPotion("Potion craieuse", 2, "Potion10.png", "Vous pouvez avancer de deux cases et récolter l'ingrédient de la dernière case pendant deux tours", "Une potion pas très liquide", ingredientpotion2);

var ingredientpotion3 = [{"name":"Corne de bouquetin", "zone":"Montagne"}, {"name":"Écaille de poisson", "zone":"Lac"}];
createCardPotion("Potion de la mer", 2, "Potion11.png", "Vous pouvez jouer pendant deux tours", "Une potion qui sent le poisson", ingredientpotion3);

var ingredientpotion4 = [{"name":"Fossile", "zone":"Grotte"}, {"name":"Écaille de poisson", "zone":"Lac"}];
createCardPotion("Potion noire", 2, "Potion2.png", "Vous pouvez passer une fois sur un volcan", "Une potion sombre", ingredientpotion4);

var ingredientpotion5 = [{"name":"Minerai", "zone":"Grotte"}, {"name":"Feuille de chêne", "zone":"Forêt"}];
createCardPotion("Potion colorée", 2, "Potion12.png", "Vous pouvez contrer les pièges pendant trois tours", "Une potion qui en fait voir de toutes les couleurs", ingredientpotion5);

/*var ingredientpotion6 = [{"name":"Champignon vénéneux", "zone":"Grotte"}, {"name":"Larve", "zone":"Lac"}];
createCardPotion("Potion gluante", 2, "potion4.jpg", "Vous pouvez garder sept cartes dans votre sac à dos pendant deux tours", "Une potion qui colle aux mains", ingredientpotion6);
*/




//Potions de niveau 1
var ingredientpotion7 = [{"name":"Poil de sanglier", "zone":"Forêt"}, {"name":"Sable", "zone":"Désert"}];
createCardPotion("Potion verte", 1, "Potion13.png", "Vous pouvez récolter deux fois plus d'ingrédients", "Une potion riche en chlorophylle", ingredientpotion7);

var ingredientpotion8 = [{"name":"Feuille de chêne", "zone":"Forêt"}, {"name":"Sable", "zone":"Désert"}];
createCardPotion("Potion piquante", 1, "Potion14.png", "Vous pouvez avancer de deux cases et récolter l'ingrédient de la dernière case pendant deux tours", "Une potion qui déchire", ingredientpotion8);

var ingredientpotion9 = [{"name":"Poil de sanglier", "zone":"Forêt"}, {"name":"Goudron", "zone":"Marécage"}];
createCardPotion("Potion boisée", 1, "Potion15.png", "Vous pouvez jouer pendant deux tours", "Une potion qui sent le bois", ingredientpotion9);

var ingredientpotion10 = [{"name":"Poil de sanglier", "zone":"Forêt"}, {"name":"Sable", "zone":"Désert"}];
createCardPotion("Potion animale", 1, "Potion3.png", "Vous pouvez passer une fois sur un volcan", "Une potion poilue", ingredientpotion10);

var ingredientpotion11 = [{"name":"Algue", "zone":"Lac"}, {"name":"Vase putride", "zone":"Marécage"}];
createCardPotion("Potion odorante", 1, "Potion8.png", "Vous pouvez contrer les pièges pendant trois tours", "Une potion à l'odeur forte", ingredientpotion11);

/*var ingredientpotion12 = [{"name":"Noisette", "zone":"Forêt"}, {"name":"Coquillage", "zone":"Lac"}];
createCardPotion("Potion à coquilles", 1, "potion12.jpg", "Vous pouvez garder sept cartes dans votre sac à dos pendant deux tours", "Une potion dure pour les dents", ingredientpotion12);
*/


var debut = true;
var compteur = 0;
$scope.random =-1;
$scope.rotate=true;
$scope.nicecard="";

var piocherdebut = function(){

if(debut ==true){

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
            if(compteur ==0 || compteur==1 || compteur == 2){
              $scope.random = Math.floor((Math.random() * ($scope.globalpotionseasy.length -1)));
              $scope.nicecard=$scope.globalpotionseasy[$scope.random];
            }
            if(compteur ==3){
              $scope.random = Math.floor((Math.random() * ($scope.globalpotionsdiff.length -1)));
              $scope.nicecard=$scope.globalpotionsdiff[$scope.random];
            }
            
            compteur++;
            

          }
          $scope.randomize=function(){
            if(compteur==1 || compteur == 2 || compteur == 3){
                $scope.potions.push($scope.globalpotionseasy[$scope.random]);
            }
            if(compteur==4){
              $scope.potions.push($scope.globalpotionsdiff[$scope.random]);
            }
            $scope.random=-1;
            $rootScope.$broadcast('FLIP_EVENT_IN');
            if(compteur == 4){
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
    var stop=-1;
      for(var i=0; i<6; i++){
        
        if(!$scope.deck[i].name){
          
          stop=i;
          break;
        }
      }
      console.log("fin ?");
      switch(zone){
      case "foret":
      var random = Math.floor((Math.random() * ($scope.foret.length -1)));
    
      $scope.deck[stop]=$scope.foret[random];

      $scope.background="../img/ForestScene-01.svg";
      $scope.backsize="1800px";
      $scope.backpos="-350px -100px";
      break;
      case "plaine":
      var random = Math.floor((Math.random() * ($scope.marecage.length -1)));
      
      $scope.deck[stop]=$scope.marecage[random];
      $scope.background="../img/SwampScene.svg";
      $scope.backsize="1600px";
      $scope.backpos="-150px -148px";
      break;
      case "desert":
      var random = Math.floor((Math.random() * ($scope.desert.length -1)));
      $scope.deck[stop]=$scope.desert[random];
      $scope.background="../img/DesertScene.svg";
      $scope.backsize="1800px";
      $scope.backpos="-200px -150px";
      break;
      case "lac":
      var random = Math.floor((Math.random() * ($scope.lac.length -1)));
      $scope.deck[stop]=$scope.lac[random];
      $scope.background="../img/LakeScene.svg";
      $scope.backsize="1600px";
      $scope.backpos="-150px -148px";
      break;
      case "grotte":
      var random = Math.floor((Math.random() * ($scope.grotte.length -1)));
      $scope.deck[stop]=$scope.grotte[random];
      $scope.background="../img/CaveScene.svg";
      $scope.backsize="1700px";
      $scope.backpos="-220px 0px";
      break;
      case "montagne":
      var random = Math.floor((Math.random() * ($scope.montagne.length -1)));
      $scope.deck[stop]=$scope.montagne[random];
      $scope.background="../img/MountainScene.svg";
      $scope.backsize="1800px";
      $scope.backpos="-250px 0px";
      break;
    
    }
    
    $scope.closeModal();
  }

  $scope.useTrap=function(trap){
    if(trap.type=="selftrap"){
      //selon l'effet


    $scope.effetneg=[trap];

  //$scope.globaltrap=[];
     $scope.deck.splice($scope.deck.indexOf(trap), 1);  
     $scope.deck.push("empty");    
    }
    else{
      $scope.deck.splice($scope.deck.indexOf(trap), 1);
      $scope.deck.push("empty");
    }
  }

  $scope.defausser=function(card){
    console.log(card);
    //console.log($scope.deck);
    //console.log($scope.deck.indexOf(card));
    //console.log($scope.deck);
       
      $scope.deck.splice($scope.deck.indexOf(card), 1);
      $scope.deck.push("empty");
    
  }

  $scope.showModal=function(){
    if($scope.deck[5].name){
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
    $scope.effetpos.push(potion);


  }

  $scope.deleteEffectPos=function(effet){
    $scope.effetpos.splice($scope.effetpos.indexOf(effet));
  } 
  $scope.deleteEffectNeg=function(effet){
    $scope.effetneg.splice($scope.effetneg.indexOf(effet));
  } 
  $scope.ajouterpiege=function(truc){
    //console.log("HELLO");
    console.log($scope.searchtrap);
    $scope.effetneg.push(truc);
  

  }



})
