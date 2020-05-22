/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Jon Robertson",
                Photo: "Jon Robertson.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Quiere desarrollar una aplicación que cree que puede tener futuro",
                touch1: "Web",
                feel1: "2",
                con1: "No tiene un espacio de trabajo en el que poder trabajar tranquilo y sin distracciones",
                ima1: "cartoon-PChard.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Le comentan lo que es el coworking y decide buscar alguna web que se dedique a ello",
                touch2: "Web",
                feel2: "4",
                con2: "Le da un poco de miedo probar esta idea de coworking pero a la vez le parece interesante",
                ima2: "cartoon-speaking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra la web de Cubikate y le parece bastante interesante la idea",
                touch3: "Web",
                feel3: "2",
                con3: "En la web no especifican tarfias ni precios",
                ima3: "cartoon-PCangry.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Se pone en contacto con la empresa para preguntar por sus tarifas",
                touch4: "Whatsapp",
                feel4: "2",
                con4: "Tardan mucho en contestarle mostrando los precios",
                ima4: "cartoon-phoneAssistan.jpg",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Cuando recibe los precios le parecen un poco altos",
                touch5: "Whatsapp",
                feel5: "2",
                con5: "No tiene un trabajo estable y el precio es excesivo",
                ima5: "cartoon-thinking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Finalmente decide invertir en la idea porque cree que las cosas positivas que pude traerle el coworking merecen la pena",
                touch6: "Ordenador",
                feel6: "4",
                con6: "Decide contratar",
                ima6: "cartoon-teamthinking.png",
                
            }
            // ,
			// {	
            //     /*************************************/
            //     /**** SEGUNDO USER JOURNEY MAP *******/
            //     /***      Cambiar datos        *******/
            //     /*************************************/
                
			// 	Id: 1,
			// 	Name: "Dana Coleman",
            //     Photo: "Dana Coleman.jpg",
                
			// 	 /*** PASO #1: INSPIRACION ***/ 
            //     goal1: "Quiere conocer España al completo y se lo propone a sus dos mejores amigas de Barcelona",
            //     touch1: "Móvil (Instagram)",
            //     feel1: "5",
            //     con1: "Una amiga está trabajando y tiene que cuadrar las fechas del viaje con los días libres",
            //     ima1: "cartoon-teamthinking.png",
                
            //     /*** PASO #2: DECICION ***/ 
            //     goal2: "Deciden ir a una agencia para organizar su viaje",
            //     touch2: "Servicio (agencia)",
            //     feel2: "3",
            //     con2: "Encuentran un viaje interesante pero es bastante caro",
            //     ima2: "cartoon-reading.png",
                
            //     /*** PASO #3: ACTUA ***/ 
                
            //     goal3: "Van a reservar el viaje",
            //     touch3: "Servicio (agencia)",
            //     feel3: "1",
            //     con3: "Sus amigas opinan que es muy caro y que no van a poder asumir ese coste. Estas abandonan el plan",
            //     ima3: "cartoon-KO.png",
                
            //     /*** PASO #4: OBSERVA ***/ 
                
            //     goal4: "Decide continuar con el plan, esta vez en solitario. Está buscando una web en la que poder unirse a un viaje y conocer gente nueva",
            //     touch4: "Ordenador",
            //     feel4: "3",
            //     con4: "Está triste por no poder viajar con sus amigas, pero por otra parte es una gran ocasión para hacer amigos",
            //     ima4: "cartoon-deciding2.png",
                
            //      /*** PASO #5: ANALIZA ***/ 
                
            //     goal5: "Encuentra un viaje por el norte de España",
            //     touch5: "Ordenador",
            //     feel5: "3",
            //     con5: "Quedan pocas plazas para el viaje, tiene que decidir rápidamente",
            //     ima5: "cartoon-deciding.png",

                
            //     /*** PASO #6: CONCLUSION ***/ 
                
            //     goal6: "Finalmente hace la reserva, va a ser un viaje muy divertido a pesar de no hacerlo con sus amigas",
            //     touch6: "Ordenador",
            //     feel6: "4",
            //     con6: "Tiene un poco de miedo ya que no sabe cómo serán las otras personas con las que viajará",
            //     ima6: "cartoon-resting.png",
                
                
                
			// }
		];
        
		$scope.model = $scope.Journeys[0];

	}])



