(function(){
	angular.module("CoronaQuiz",[])
	.controller("CoronaQuizController",CoronaQuizController);

CoronaQuizController.$inject=[];
function CoronaQuizController(){
	var ctrl=this;
	ctrl.message='correct';
	ctrl.score=0;
	ctrl.response=[];
	ctrl.resultofResponse=[0,0,0,0,0,0,0,0,0,0,0]
	ctrl.correctSequence=["Give it a start","All of the above are correct","More than 200","Monkeys","T-cell","BNT162","Plasma Therapy","All the above are correct","Both A and B","Due to their crown-like projections","Cover your nose and mouth when sneezing"];
	ctrl.quesBank=[
					{
						"question":"Which of the following statement is/are correct about Favipiravir? ",
						"options":[" Favipiravir is an antiviral COVID-19 drug","Glenmark Pharmaceuticals under the brand name FabiFlu has launched an antiviral drug Favipiravir","It is India's first COVID-19 drug launched, priced at Rs 103 per tablet","All of the above are correct"],
						"id":"1"
						
					},
					{
						"question":" How many countries, areas or territories are suffering from novel coronavirus outbreak in the World? ",
						"options":["More than 50"," More than 100","More than 150","More than 200"],
						"id":"2"
						
					},
					{
						"question":"Thailand announced that it has proceeded to test its novel coronavirus vaccine on which animal/bird? ",
						"options":["Monkeys","Hens","Kites","Lizards"],
						"id":"3"
						
					},
					{
						"question":"In a study, which cells are found in COVID-19 patients 'bode well' for long term immunity? ",
						"options":["P-cell","D-cell","T-cell","Endothelial Cells"],
						"id":"4"
						
					},
					{
						"question":"Name the vaccine that is jointly developed by the German company BioNTech and US pharma giant Pfizer for COVID-19? ",
						"options":["BNT162","PIVOTY","Both A and B"," Neither A nor B"],
						"id":"5"
						
					},
					{
						"question":"Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition? ",
						"options":["Plasma Therapy","Solidarity","Remdesivir","Hydroxychloroquine"],
						"id":"6"
						
					},
					{
						"question":"In which age group the COVID-19 spreads?",
						"options":["COVID-19 occur in all age groups"," Coronavirus infection is mild in children"," Older person and persons with pre-existing medical conditions are at high risk to develop serious illness","All the above are correct"],
						"id":"7"
						
					},
					{
						"question":"Which of the following diseases are related to coronavirus?",
						"options":["MERS","SARS","Both A and B","Neither A and B"],
						"id":"8"
						
					},
					{
						"question":"From where coronavirus got its name?",
						"options":["Due to their crown-like projections","Due to their leaf-like projections","Due to their surface structure of bricks"," None of the above"],
						"id":"9"
						
					},
					{
						"question":"What are the precautions that need to be taken to protect from the coronavirus?",
						"options":["Cover your nose and mouth when sneezing","Add more garlic into your diet"," Visit your doctor for antibiotics treatment","Wash your hands after every hour"],
						"id":"10"
						
					}
				  ];

	ctrl.submit=function(){
		console.log(ctrl.response);
		console.log(ctrl.correctSequence);
		for(var a in ctrl.correctSequence){

			if(ctrl.correctSequence[a]===ctrl.response[a]){
				ctrl.resultofResponse[a]=1;
				ctrl.score++;
			}
		}
	}
	ctrl.afterresult=function(){
		ctrl.score=0;
	}
}



})();