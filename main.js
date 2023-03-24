//sort
		let library=[
				{f_n:"John",
				 l_n:'Doe',
				 age:27,
				 joinedDate:"December 15 2017",
				},
				{f_n:"Ana",
				 l_n:'Rosy',
				 age:25,
				 joinedDate:"Janury 15 2019",
				},
				{f_n:"Zion",
				 l_n:'Albert',
				 age:30,
				 joinedDate:"February 15 2011",
				},
				
		]
	
		
		  
		library.sort(function (a,b){
			return a.age - b.age ;
		})
		library.forEach((e) =>{
		 console.log(e);
		});
		