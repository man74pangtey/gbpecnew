$('#moresports' ).on( 'click', function () {
	var labCSE = {
		sport1: {
			html:'<h2>Physical Education</h2> <p> The indoor sports facilities include table tennis, chess and carom board and fitness centre. </p> <p> The outdoor sports facilities available include cricket, basketball, volleyball and badminton. Students enjoy other games such as basketball, volleyball and badminton over cemented grounds. Along with students, the college-staff also takes advantage of the sport facilities. Students actively participate in the intra-college and inter-college sports events. </p> <p> Students actively participate in the events at different levels. </p>',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){
				if(v){
					e.preventDefault();
					$.prompt.goToState('sport2');
					return false;
				}
				$.prompt.close();
			}
		},
		sport2: {
			html:'<h2>College Level</h2> <p> Every year intra-college sports festival <strong>“FORTIUS” </strong> is being organised for Students, for which students eagerly await for, that comprises of 8 sports events. Almost 50% of college students actively participate in being as participant <strong>“FORTIUS” </strong> as sport participants, co-ordinators/Volunteers for the event. The Winners and Runners up for each event is Given Certificates and Medals during Annul Function. </p>',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('sport1');
				else if(v==1)
					$.prompt.goToState('sport3');
			}
		},
		sport3: {
			html:'<h2>Intra University/State Level</h2> </p> <ol style="margin: 10px 10px 10px 30px"> <li>Athletics</li> <li>Football</li> <li>Basketball</li> <li>Volleyball</li> <li>Cricket</li> <li>Table Tennis</li> <li>Chess</li> <li>Badminton</li> <li>Arm Wrestling</li> <li>Power lifting</li> <li>Body building</li> <li>Tug-of-war</li> </ol> <br /> <p> Our college Students won many medals since 2010 in Badminton, Volleyball, Basketball, Arm Wrestling, Body building and Power Lifting, Athletics (cross country). </p>',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('sport2');
				else if(v==1)
					$.prompt.goToState('sport4');
			}
		},
		sport4: {
			html:'<h2>ALL India Intra University/NATIONAL Level</h2> <p> Despite of the Demanding nature of Engineering Studies few of our college students sports teams selected to become the part of GGSIP university team to represent at National Inter-University Competitions and other National Level Tournament. </p> <p> Physical Eduction Department is proud of our these Gems which are as : </p> <ol style="margin: 10px 10px 10px 30px"> <li>1.	Ankit Maini (MAE VIIth Sem in 2010)– Played cricket at Ranji Trophy in 2010 represented Delhi</li> <li>2.	Deepak Murari (MAE IVth Sem in 2013) played in Cross Country Running in All India Inter University Competitions in 2013.</li> <li>3.	Akash Sheoran (CSE IIIrd Sem in 2013) played in Volleyball team of GGSIPU in North Zone Inter University Competitions in 2013</li> </ol> <br /> <br /> <br /> <p>',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('sport3');
				else if(v==1)
					$.prompt.goToState('sport5');
			}
		},
		sport5: {
			html:'<h2>Data Provided by- </h2> <p> Mr. Abhishek Tanwar<br/> <br />Director Physical Edcuation <br />G.B.Pant Engineering College </p>',
			buttons: { Back: -1, Exit: 0 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('sport4');
			}
		}
	};
	$.prompt(labCSE);
});