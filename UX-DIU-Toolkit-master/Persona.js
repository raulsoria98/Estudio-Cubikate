/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit               */                        
/*          ver 1.0, 2019                  */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Jon Robertson",
				Photo: "Jon Robertson.jpg",
				Quote: "Ser fuerte ante las adversidades",
				Age: 26,
				Occupation: "Ingeniero Informático",
				Family: "Soltero",
				Location: "Granada",
				Character: "Se propone objetivos y no para hasta conseguirlos",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 1 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Formar una familia", "Conocer mundo", "Crear una aplicación exitosa"],
				Frustrations: ["No tiene un ambiente agradable en casa para poder trabajar", "Quiere aprender idiomas pero le cuestan"],
				Bio: "Estudió Ingeniería Informática en la UGR. En su trabajo de fin de grado planteó una aplicación que su tutor le animó para que la crease y dedicara tiempo a ella porque podría tener éxito. Ahora mismo está intentando crear dicha aplicación pero en su casa no tiene tranquilidad ni un buen ambiente para trabajar. Además le vendría bien conocer gente que estuviese interesada en trabajar en el proyecto.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Movil", Value: 5 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos: "Quiere encontrar un lugar de trabajo tranquilo en el que poder centrarse en la aplicación que está desarrollando.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 3 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
			//,
			// {	
                
            //     /*************************************/
            //     /**** SEGUNDA PERSONA          *******/
            //     /*** Cambiar datos             *******/
            //     /*************************************/
                
                
			// 	Id: 1,
			// 	Name: "Dana Coleman",
			// 	Photo: "Dana Coleman.jpg",
			// 	Quote: "Todo lo que puedas imaginar, es real",
			// 	Age: 22,
			// 	Occupation: "Estudiante de ADE en la UGR",
			// 	Family: "Mantiene una relación sentimental",
			// 	Location: "Barcelona",
			// 	Character: "Le gusta pasar tiempo con sus amigos",
			// 	PersonalityTraits: [
			// 		{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 5 },
			// 		{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 4 },
			// 		{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
			// 		{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
			// 	], 
			// 	Goals: ["Terminar la carrera siendo la primera de su promoción", "Hacer más deporte", "Ir a Disneyland Paris", "Leer más"],
			// 	Frustrations: ["Quiere ser más organizada y sacar más tiempo para estudiar", "Le cuesta concentrarse a la hora de estudiar", "No gastar toda la paga en ropa para poder ahorrar"],
			// 	Bio: "Nació en Barcelona (l'Hospitalet de Llobregat) donde estudió bachillerato. Dado que la nota de corte no le daba para estudiar en su ciudad natal decidió ir a Granada a vivir con sus tíos ayudándoles en su bar por las tardes.",
			// 	Tech: [
			// 		{ Name: "TIC/Internet", Value: 2 },
			// 		{ Name: "Mobile", Value: 4 },
			// 		{ Name: "RRSS", Value: 5 },
			// 		{ Name: "Software", Value: 1 }
					
			// 	], 
            //     Contextos:   "Quiere recorrer y conocer España" ,
			// 	PreferredChannels: [
			// 		{ Name: "Publicidad Tradicional (Ads)", Value: 2 },
			// 		{ Name: "Online & Social Media", Value: 5 },
			// 		{ Name: "Recomendaciones & sugerencias", Value: 3 },
			// 		{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
			// 	]
			// }
		];
		$scope.model = $scope.Personas[0];

	}])