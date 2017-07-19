$('#curriculumCSE' ).on( 'click', function () {
	var curriculumCSE = {
		curcse1: {
			html:'<h3>Curriculum</h3><p>Curriculum of CSE Department includes all the computer science and engineering subjects</p>',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){
				if(v){
					e.preventDefault();
					$.prompt.goToState('curcse2');
					return false;
				}
				$.prompt.close();
			}
		},
		curcse2: {
			html:'<h3>Other Curriculum</h3><p><ul><li>Computer Organisation and Architecture</li><li>Software Testing  and QA</li><li>Embedded System</li><li>E-Commerce & ERP</li><li>Web Engineering</li><li>Network Security</li><li>Mobile Communication</li><li>Artificial Intelligence</li><li>Advanced Computer Networks</li></ul></p>',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('curcse1');
				else if(v==1)
					$.prompt.goToState('curcse3');
			}
		},
		curcse3: {
			html:'<h3>Other Curriculum</h3><p><ul><li>Advanced Computer Architecture</li><li>Compiler Construction</li><li>Mobile Computing</li><li>VLSI Design</li><li>Digital Image Processing</li><li>Microprocessor Systems</li><li>Digital Signal Processing</li><li>Data Warehousing & Data Mining</li><li>Digital Circuits & Systems</li><li>Java Programming and Website Design</li><li>Computer Architecture</li><li>Linux and X-Windows Programming</li><li>Software Engineering</li><li>Algorithm Analysis & Design</li><li>Object Oriented Programming using C++</li><li>Communication Systems</li><li>Computer Graphics</li><li>Operating Systems</li><li>Analog Electronics</li><li>Circuits and Systems</li><li>And various other subjects.</li></ul></p>',
			buttons: { Back: -1, Exit: 0 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('curcse2');
			}
		}
	};
	$.prompt(curriculumCSE); 
});

$('#facultyCSE' ).on( 'click', function () {
	var facultyCSE = {
		faccse1: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/profile/Dr_OP_Verma_CSE.jpg" alt="" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. O. P. Verma</h4> <h5>Professor, <br> Principal <br> PhD (DU)<br>M, Tech (IIT Delhi)<br> B. E. (MNIT Jaipur) </h5> <p>Specialiazation: Image Processing, Soft Computing, Machine learning, Evolutionary Computing.</p> <a href="mailto:opverma@dce.ac.in" target="_blank">opverma@dce.ac.in	</a> <p><a href="Dr_OP_Verma.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){
				if(v){
					e.preventDefault();
					$.prompt.goToState('faccse2');
					return false;
				}
				$.prompt.close();
			}
		},
		faccse2: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/profile/SUNITA_CSE.png" alt="" width="120" height="140px"/> </div><!--icon box top --> <h4>Ms. Sunita Kumari</h4> <h5>Assistant Professor<br> HOD (CSE) <br> M.Tech.(MDU Rohtak)<br>B.Tech.(MDU Rohtak) NET (2009) <br></h5> <p>Specialiazation: Operating Systems</p> <a href="mailto:sunita2009@gmail.com" target="_blank">sunita2009@gmail.com	</a> <p><a href="#"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse1');
				else if(v==1)
					$.prompt.goToState('faccse3');
			}
		},
		faccse3: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="" alt="Mr.Amit Khaparde" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr.Amit Khaparde</h4> <h5>Assistant Professor<br><br></h5> <p>Specialiazation: </p> <a href="mailto:khaparde.amit@gmail.com" target="_blank">khaparde.amit@gmail.com</a> <p><a href="#"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse2');
				else if(v==1)
					$.prompt.goToState('faccse4');
			}
		},
		faccse4: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/Dr_Anu_Saini_CSE.jpg" alt="Dr Anu Saini" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr Anu Saini</h4> <h5>Assistant Professor<br>  PhD (JNU)<br>M.Tech(MDU Rohtak)<br> B.Tech(MDU Rohtak) <br> </h5> <p>Specialiazation: Web Services, D.B.M.S, Software Testing</p> <a href="mailto:anuanu16@gmail.com" target="_blank">anuanu16@gmail.com </a> <p><a href="#"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse3');
				else if(v==1)
					$.prompt.goToState('faccse5');
			}
		},
		faccse5: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/Jatin_cse.jpg" alt="Mr. Jatin Verma" width="120" height="140px" /> </div><!--icon box top --> <h4>Mr.Jatin Verma</h4> <h5>Assistant Professor<br> M.Tech.(GGSIPU)<br> B.Tech.(MDU Rohtak)<br> </h5> <p>Specialiazation: Computer Networks, Cryptography</p> <a href="mailto:vjatin83@gmail.com" target="_blank">vjatin83@gmail.com </a> <p><a href="assets/images/Faculty_Profile/CSE/jatin_verma_cse.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse4');
				else if(v==1)
					$.prompt.goToState('faccse6');
			}
		},
		faccse6: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/Jyoti_Tripathi_CSE.jpg" alt="Ms. Jyoti Tripathi" width="120" height="140px"/> </div><!--icon box top --> <h4>Ms. Jyoti Tripathi</h4> <h5>Assistant Professor<br> M.Tech (Banasthali Vidyapeeth) <br>B.Tech (B R Ambedkar Univ.)<br> </h5> <p>Specialiazation: Natural Language Processing and Information Retrieval</p> <a href="mailto:loginjyoti@gmail.com" target="_blank">loginjyoti@gmail.com </a> <p><a href="#"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse5');
				else if(v==1)
					$.prompt.goToState('faccse7');
			}
		},
		faccse7: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/KundanKumar_Chandan_CSE.jpg" alt="Mr. Kundan Kumar Chandan" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Kundan Kumar Chandan</h4> <h5>Assistant Professor<br> M.Tech.(Jamia Hamdard)<br> B.Tech.(GGSIPU Delhi)<br> </h5> <p>Specialiazation: Algorithms and Theoratical Computer Science</p> <a href="mailto:kundankrchandan@gmail.com" target="_blank">kundankrchandan@gmail.com </a> <p><a href="assets/images/Faculty_Profile/CSE/Kundan_Chandan_CSE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse6');
				else if(v==1)
					$.prompt.goToState('faccse8');
			}
		},
		faccse8: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/Dr_Mamta_Mittal_CSE.jpg" alt="Dr. Mamta Mittal" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Mamta Mittal</h4> <h5>Assistant Professor<br> Ph.D.(Thapar Univ)<br>M.Tech.(YMCA,MDU Univ)<br> B.Tech.(Kurukshetra Univ.) <br></h5> <p>Specialiazation: Data Mining, DBMS, Big Data and Machine Learning</p> <a href="mailto:mittalmamta@rediffmail.com" target="_blank">mittalmamta@rediffmail.com</a> <p><a href="assets/images/Faculty_Profile/CSE/Dr_Mamta_Mittal_CSE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse7');
				else if(v==1)
					$.prompt.goToState('faccse9');
			}
		},
		faccse9: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/Dr_Manisha_Manjul_CSE.jpg" alt="Dr. Manisha Manjul" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Manisha Manjul</h4> <h5>Assistant Professor<br> PhD (GBU)<br>M.Tech.(NIT Jalandhar)<br> B.Tech.(KNIT Sultanpur) <br> </h5> <p>Specialiazation:COMPUTER NETWORK</p> <a href="mailto:bhavikamanisha@gmail.com" target="_blank">bhavikamanisha@gmail.com</a> <p><a href="#"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse8');
				else if(v==1)
					$.prompt.goToState('faccse10');
			}
		},
		faccse10: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/ManjeetPangtey_CSE.jpg" alt="Mr. Manjeet Singh Pangtey" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Manjeet Singh Pangtey</h4> <h5>Assistant Professor<br> M.Tech.(IIT Bombay)<br> B.Tech.(G B Pant Univ) <br> </h5> <p>Specialiazation:Web Engineering, Software Engineering</p> <a href="mailto:man74pangtey@gmail.com" target="_blank">man74pangtey@gmail.com</a> <p><a href="assets/images/Faculty_Profile/CSE/Manjeet_Pangtey_CSE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse9');
				else if(v==1)
					$.prompt.goToState('faccse11');
			}
		},
		faccse11: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/Sunita_Tiwari_CSE.jpg" alt="Ms. Sunita Tiwari" width="120" height="140px"/> </div><!--icon box top --> <h4>Ms. Sunita Tiwari</h4> <h5>Assistant Professor<br> PhD (Pursuing from IIT Delhi)<br>M. Tech (IIT Delhi)<br>MBA(DAVV Indore) <br> B. E. (RGPV Bhopal)<br> </h5> <p>Specialiazation:Recommender Systems, Location Based Services, Data Mining</p> <a href="mailto:sutiwari@gmail.com" target="_blank">sutiwari@gmail.com</a> <p><a href="assets/images/Faculty_Profile/CSE/Sunita_Tiwari_CSE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse10');
				else if(v==1)
					$.prompt.goToState('faccse12');
			}
		},
		faccse12: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/CSE/sushil_kumar_cse.jpg" alt="Mr.Sushil Kumar" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr.Sushil Kumar</h4> <h5>Assistant Professor<br> PhD (Pursuning from Thapar Univ.)<br>M.E. (Thapar Univ.)<br> B.Tech (UPTU)<br> </h5> <p>Specialiazation:Vehicular Adhoc Networks, Sensor Networks</p> <a href="mailto:sushilyadav.thapar@gmail.com" target="_blank">sushilyadav.thapar@gmail.com</a> <p><a href="assets/images/Faculty_Profile/CSE/sushil_kumar_cse.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Exit: 0 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse11');
			}
		}
	};
	$.prompt(facultyCSE);
});


('#facultyECE' ).on( 'click', function () {
	var facultyece = {
		facece1: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Sanjay_Kumar_ECE.jpg" alt="Mr. Sanjay Kumar" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Sanjay Kumar</h4> <h5>Assistant Professor<br> HOD (ECE) <br>M.Tech.(VTU, BELGAUM, KARNATAKA)<br>  B.Tech.(IETE, DELHI) <br> </h5> <p>Specialiazation: </p> <a href="mailto:skdalal.vlsi@gmail.com" target="_blank">skdalal.vlsi@gmail.com	</a> <p><a href="assets/images/Faculty_Profile/ECE/Sanjay_Kumar_ECE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){
				if(v){
					e.preventDefault();
					$.prompt.goToState('facece2');
					return false;
				}
				$.prompt.close();
			}
		},
		facece2: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Dr_Vibhakr_Shrimali_ECE.jpg" alt="Dr. Vibhakar Shrimali" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Vibhakar Shrimali</h4> <h5><br>Associate Professor <br>Ph.D. (IIT Roorkee)<br>ME(DCE Delhi)<br> BE(JNV University Jodhpur) <br> </h5> <p>Specialiazation:Signal and Image Processing </p> <a href="mailto:vibhakar.shrimali@gmail.com" target="_blank">vibhakar.shrimali@gmail.com</a> <p><a href="assets/images/Faculty_Profile/ECE/Dr_Vibhakar_Shrimali.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece1');
				else if(v==1)
					$.prompt.goToState('facece3');
			}
		},
		facece3: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Dr_Krishna_Singh_ECE.jpg" alt="Dr. Krishna Singh" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Krishna Singh</h4> <h5><br>Associate Professor<br>PhD (IIT Rorkee)<br>M.Tech (MNNIT Allahabad)<br> B.E. (Electronics)<br></h5> <p>Specialiazation: Vehicular Adhoc Networks, Sensor Networks</p> <a href="mailto:singhkrishna5@gmail.com" target="_blank">singhkrishna5@gmail.com</a> <p><a href="assets/images/Faculty_Profile/ECE/Dr_Krishna_Singh_ECE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece2');
				else if(v==1)
					$.prompt.goToState('facece4');
			}
		},
		facece4: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Abdul_Rehman_ECE.jpg" alt="Mr. Abdul Rehman" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Abdul Rehman</h4> <h5>Assistant Professor<br>  M.Tech. (MDU Rohtak)<br>B.Tech (Dr. B R Ambedkar Univ.) <br> </h5> <p>Specialiazation: Electronics and Communication</p> <a href="mailto:rehmangbpec@gmail.com" target="_blank">rehmangbpec@gmail.com </a> <p><a href="assets/images/Faculty_Profile/ECE/ABDUL_REHMAN_ECE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece3');
				else if(v==1)
					$.prompt.goToState('facece5');
			}
		},
		facece5: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Aman_Saini_ECE.png" alt="Ms. Aman Saini" width="120" height="140px" /> </div><!--icon box top --> <h4>Ms. Aman Saini</h4> <h5>Assistant Professor<br> M.Tech. (LPU Phagwara)<br> B.Tech (PTU Jalandar)<br> </h5> <p>Specialiazation:</p> <a href="mailto:aman.saini17@gmail.com" target="_blank">aman.saini17@gmail.com </a> <p><a href="assets/images/Faculty_Profile/ECE/Aman_Saini.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece4');
				else if(v==1)
					$.prompt.goToState('facece6');
			}
		},
		facece6: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/ChandraMohan_Dharmapuri_ECE.jpg" alt="Mr. Chandra Mohan Dharmapuri" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Chandra Mohan Dharmapuri</h4> <h5>Assistant Professor<br> M.Tech (BSIT Chevella Rangareddy)<br> B.Tech. (Jatipita College of Engineering, Adilabad)<br> </h5> <p>Specialiazation: VLSI, Communication</p> <a href="mailto:chandu.dharmapuri@gmail.com" target="_blank">chandu.dharmapuri@gmail.com </a> <p><a href="assets/images/Faculty_Profile/ECE/ChandraMohan_Dharmapuri_ECE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece5');
				else if(v==1)
					$.prompt.goToState('facece7');
			}
		},
		facece7: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Deepak_Sant.jpg" alt="Mr. Deepak Sant" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Deepak Sant</h4> <h5>Assistant Professor<br> PhD (Pursuing from IIT Bombay)<br>M.Tech (SRM University - Katankulathur)<br> B.Tech (University of Rajasthan - Jaipur)<br> </h5> <p>Specialiazation: GNSS, INS, KF, Communication Systems,<br> Multisensor Integrated System, <br>Navigation, Matlab, Simulink,<br> Python</p> <a href="mailto:deepaksantgbpec@gmail.com" target="_blank">deepaksantgbpec@gmail.com </a> <p><a href="#"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece6');
				else if(v==1)
					$.prompt.goToState('facece8');
			}
		},
		facece8: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Mamta._Sinha_ECE.png" alt="Ms. Mamta" width="120" height="140px"/> </div><!--icon box top --> <h4>Ms. Mamta</h4> <h5>Assistant Professor<br> M.Tech.(GGSIPU)<br>B.Tech.(UPTU Lucknow)<br></h5> <p>Specialiazation: </p> <a href="mailto:mamtasinha15@gmail.com" target="_blank">mamtasinha15@gmail.com</a> <p><a href="assets/images/Faculty_Profile/ECE/Mamta_sinha_ECE.docx"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece7');
				else if(v==1)
					$.prompt.goToState('facece9');
			}
		},
		facece9: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Padam_Saini_ECE.png" alt="Mr. Padam Saini" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Padam Saini</h4> <h5>Assistant Professor<br> M.Tech.(DIET Jhansi)<br> B.Tech. (KNMIET university, Modinagar) <br> </h5> <p>Specialiazation:</p> <a href="mailto:sainipadam@gmail.com" target="_blank">sainipadam@gmail.com</a> <p><a href="assets/images/Faculty_Profile/ECE/Padam_singh_ECE.docx"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece8');
				else if(v==1)
					$.prompt.goToState('facece10');
			}
		},
		facece10: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Rohit_Anand_ECE.png" alt="Mr. Rohit Anand" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Rohit Anand</h4> <h5>Assistant Professor<br> M.Tech.(PTU Jalandhar)<br> B.Tech. (MDU Rohtak) <br> </h5> <p>Specialiazation:Electronics & Communication</p> <a href="mailto:roh_anand@rediffmail.com" target="_blank">roh_anand@rediffmail.com</a> <p><a href="assets/images/Faculty_Profile/ECE/Rohit_Anand_ECE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece9');
				else if(v==1)
					$.prompt.goToState('facece11');
			}
		},
		facece11: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Dr_Smriti_Agarwal_ECE.png" alt="Dr. Smriti Agarwal" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Smriti Agarwal</h4> <h5>Assistant Professor<br> PhD (IIT Roorkee)<br>M.Tech.(UPTU Lucknow)<br> B.Tech. (Dr. R M L Avadh University, Faizabad)<br> </h5> <p>Specialiazation:Millimeter and microwave Radar imaging,<br> Through Wall Imaging, Stand-off target detection and Identification,<br> Electromagnetic Field & Wave Propagation, <br>High Frequency Antenna Design</p> <a href="mailto:smritiagarwal127@gmail.com" target="_blank">smritiagarwal127@gmail.com</a> <p><a href="#"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece10');
				else if(v==1)
					$.prompt.goToState('facece12');
			}
		},
		facece12: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/Vadthya_Bheemudu_ECE.jpg" alt="Mr. Vadthya Bheemudu" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Vadthya Bheemudu</h4> <h5>Assistant Professor<br> M.Tech.(MNNIT ALLAHABAD)<br> B.Tech.(Osmania Unversity Hyderabad)<br> </h5> <p>Specialiazation:Vehicular Adhoc Networks, Sensor Networks <a href="mailto:bheema.vadthya@gmail.com" target="_blank">bheema.vadthya@gmail.com</a> <p><a href="#"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece11');
				else if(v==1)
					$.prompt.goToState('facece13');
			}
		},
		facece13: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/ECE/P_Venkateshwari_ECE.jpg" alt="Ms. Venkateshwari P" width="120" height="140px"/> </div><!--icon box top --> <h4>Ms. Venkateshwari P</h4> <h5>Assistant Professor<br> M.Tech.(Anna Univ.)<br> B.Tech. (Anna Univ.)<br> </h5> <p>Specialiazation:</p> <a href="mailto:srivenkateshwari90@gmail.com" target="_blank">srivenkateshwari90@gmail.com</a> <p><a href="assets/images/Faculty_Profile/ECE/P_Venkateshwari_ECE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Exit: 0 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facece12');
			}
		}
	};
	$.prompt(facultyece);
});


('#facultyMAE' ).on( 'click', function () {
	var facultymae = {
		facmae1: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Dr_Ajay_Singholi_MAE.jpg" alt="Dr. Ajay Singholi" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Ajay Singholi</h4> <h5>Associate Professor<br> HOD (MAE) <br>Ph.D.<br>  </h5> <p>Specialiazation: Mechanical Engineering</p> <a href="mailto:ajay.igit@gmail.com" target="_blank">ajay.igit@gmail.com</a> <p><a href="assets/images/Faculty_Profile/MAE/Dr_Ajay_Singholi_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){
				if(v){
					e.preventDefault();
					$.prompt.goToState('facmae2');
					return false;
				}
				$.prompt.close();
			}
		},
		facmae2: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Dr_Arindam_Kumar_Chanda_MAE.jpg" alt="Dr. Arindam Kumar Chanda" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Arindam Kumar Chanda</h4> <h5><br>Associate Professor <br>Ph.D. <br> </h5> <p>Specialiazation:Mechanical Engineering </p> <a href="mailto:akcped@yahoo.com" target="_blank">akcped@yahoo.com</a> <p><a href="assets/images/Faculty_Profile/MAE/Profile-Dr-Arindam-Kumar-Chanda.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae1');
				else if(v==1)
					$.prompt.goToState('facmae3');
			}
		},
		facmae3: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/ANIL_KUMAR_MAE.jpg" alt="Mr. Anil Kumar" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Anil Kumar</h4> <h5><br>Assistant Professor<br>M. Tech (GGSIPU)</br>B. Tech (Kurukshetra Univ)<br></h5> <p>Specialiazation: Manufacturing & Automation</p> <a href="mailto:anilritu84@gmail.com" target="_blank">anilritu84@gmail.com</a> <p><a href="assets/images/Faculty_Profile/MAE/ANIL_KUMAR_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0) 
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae2');
				else if(v==1)
					$.prompt.goToState('facmae4');
			}
		},
		facmae4: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Dr_Anurag_Dixit_MAE.jpg" alt="Dr. Anurag Dixit" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Anurag Dixit</h4> <h5>Assistant Professor<br> PhD (GBU)</br>M. Tech (IIT Delhi)</br>B. Tech (Agra Univ)<br> </h5> <p>Specialiazation: Finite Element Analysis of Textile Composites, Design Engg, Stress Analysis</p> <a href="mailto:anuragdixitiitd@gmail.com" target="_blank">anuragdixitiitd@gmail.com </a> <p><a href="assets/images/Faculty_Profile/MAE/Dr_Anurag_Dixit_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae3');
				else if(v==1)
					$.prompt.goToState('facmae5');
			}
		},
		facmae5: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Bhajneet_Singh_MAE.jpg" alt="Mr. Bhajneet Singh" width="120" height="140px" /> </div><!--icon box top --> <h4>Mr. Bhajneet Singh</h4> <h5>Assistant Professor<br> M. Tech (NIT Jalandhar)</br>B. Tech (PTU Jalandhar)<br> </h5> <p>Specialiazation:Thermal Engineering</p> <a href="mailto:singh84b@gmail.com" target="_blank">singh84b@gmail.com</a> <p><a href="assets/images/Faculty_Profile/MAE/Bhajneet_Singh_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae4');
				else if(v==1)
					$.prompt.goToState('facmae6');
			}
		},
		facmae6: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/mae/ChandraMohan_Dharmapuri_mae.jpg" alt="Mr. Chandra Mohan Dharmapuri" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Chandra Mohan Dharmapuri</h4> <h5>Assistant Professor<br> M.Tech (BSIT Chevella Rangareddy)<br> B.Tech. (Jatipita College of Engineering, Adilabad)<br> </h5> <p>Specialiazation: VLSI, Communication</p> <a href="mailto:chandu.dharmapuri@gmail.com" target="_blank">chandu.dharmapuri@gmail.com </a> <p><a href="assets/images/Faculty_Profile/mae/ChandraMohan_Dharmapuri_mae.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae5');
				else if(v==1)
					$.prompt.goToState('facmae7');
			}
		},
		facmae7: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Dayanidhi_Krishana_Pathak_MAE.jpg" alt="Mr. Dayanidhi Krishana Pathak" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Dayanidhi Krishana Pathak</h4> <h5>Assistant Professor<br> M. Tech (MNNIT Allahbad)</br>B. Tech (UPTU Lucknow)<br> </h5> <p>Specialiazation: Unconventional Machining Processes, Finite Element Analysis<br> <a href="mailto:dayanidhikrishana@gmail.com" target="_blank">dayanidhikrishana@gmail.com</a> <p><a href="assets/images/Faculty_Profile/MAE/Dayanidhi_Krishana_Pathak_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae6');
				else if(v==1)
					$.prompt.goToState('facmae8');
			}
		},
		facmae8: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Irwin_Osmond_Toppo_MAE.jpg" alt="Mr. Irwin Osmond Toppo" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Irwin Osmond Toppo</h4> <h5>Assistant Professor<br> M. E. (IISC Banglore)</br>B. Tech (MIT Muzaffarpur Bihar)<br></h5> <p>Specialiazation: Power Plant, Fluid Meachnics & Heat Transfer</p> <a href="mailto:irwinosmond@gmail.com" target="_blank">irwinosmond@gmail.com</a> <p><a href="assets/images/Faculty_Profile/MAE/Irwin_Osmond_Toppo_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae7');
				else if(v==1)
					$.prompt.goToState('facmae9');
			}
		},
		facmae9: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Jayant_Supale_MAE.jpg" alt="Mr. Jayant Supale" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Jayant Supale</h4> <h5>Assistant Professor<br> M. Tech (MNNIT Allahbad)</br>B. Tech (Nagpur Univ.) <br> </h5> <p>Specialiazation:Manufacturing & Automation</p> <a href="mailto:jayant.supale@gmail.com" target="_blank">jayant.supale@gmail.com</a> <p><a href="assets/images/Faculty_Profile/MAE/Jayant_Supale_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae8');
				else if(v==1)
					$.prompt.goToState('facmae10');
			}
		},
		facmae10: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Jitendra_Kumar_MAE.jpg" alt="Mr. Jitendra Kumar" width="120" height="140px"/> </div><!--icon box top --> <h4>Mr. Jitendra Kumar</h4> <h5>Assistant Professor<br> M. Tech (Delhi Technological University, Delhi)</br>B. Tech (GBPUAT Pantnagar)<br> </h5> <p>Specialiazation:Thermodynamics and Heat Transfer</p> <a href="mailto:roh_anand@rediffmail.com" target="_blank">roh_anand@rediffmail.com</a> <p><a href="assets/images/Faculty_Profile/MAE/Jitendra_Kumar_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae9');
				else if(v==1)
					$.prompt.goToState('facmae11');
			}
		},
	facmae11: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/Faculty_Profile/MAE/Dr_Rishu_Sharma_MAE.jpg" alt="Dr. Rishu Sharma" width="120" height="140px"/> </div><!--icon box top --> <h4>Dr. Rishu Sharma</h4> <h5>Assistant Professor<br> PhD (DU)<br>M. Tech (DCE, DElhi) <br> B. Tech (GGSIPU)<br> </h5> <p>Specialiazation:</p>Production and Industrial Engineering <a href="mailto:sharma.rishu@gmail.com" target="_blank">sharma.rishu@gmail.com</a> <p><a href="assets/images/Faculty_Profile/MAE/Dr_Rishu_Sharma_MAE.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Exit: 0 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('facmae10');
			}
		}
	};
	$.prompt(facultymae);
});
$('#facultyHAS' ).on( 'click', function () {
	var facultyCSE = {
		faccse1: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/profile/Dr_OP_Verma_CSE.jpg" alt="" /> </div><!--icon box top --> <h4>Dr. O. P. Verma</h4> <h5>Professor, <br> Principal <br> PhD (DU)<br>M, Tech (IIT Delhi)<br> B. E. (MNIT Jaipur) </h5> <p>Specialiazation: Image Processing, Soft Computing, Machine learning, Evolutionary Computing.</p> <a href="mailto:opverma@dce.ac.in" target="_blank">opverma@dce.ac.in	</a> <p><a href="Dr_OP_Verma.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){
				if(v){
					e.preventDefault();
					$.prompt.goToState('faccse2');
					return false;
				}
				$.prompt.close();
			}
		},
		faccse2: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/profile/SUNITA_CSE.png" alt="" /> </div><!--icon box top --> <h4>Ms. Sunita Kumari</h4> <h5>Assistant Professor<br> HOD (CSE) <br> M.Tech.(MDU Rohtak)<br>B.Tech.(MDU Rohtak) NET (2009)</h5> <p>Specialiazation: Operating Systems</p> <a href="mailto:mailto:sunita2009@gmail.com" target="_blank">sunita2009@gmail.com	</a> <p><a href="Dr_OP_Verma.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse1');
				else if(v==1)
					$.prompt.goToState('faccse3');
			}
		},
		faccse3: {
			html:'<h3>Other Curriculum</h3><p><ul><li>Advanced Computer Architecture</li><li>Compiler Construction</li><li>Mobile Computing</li><li>VLSI Design</li><li>Digital Image Processing</li><li>Microprocessor Systems</li><li>Digital Signal Processing</li><li>Data Warehousing & Data Mining</li><li>Digital Circuits & Systems</li><li>Java Programming and Website Design</li><li>Computer Architecture</li><li>Linux and X-Windows Programming</li><li>Software Engineering</li><li>Algorithm Analysis & Design</li><li>Object Oriented Programming using C++</li><li>Communication Systems</li><li>Computer Graphics</li><li>Operating Systems</li><li>Analog Electronics</li><li>Circuits and Systems</li><li>And various other subjects.</li></ul></p>',
			buttons: { Back: -1, Exit: 0 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('faccse2');
			}
		}
	};
	$.prompt(facultyCSE);
});

$('#labCSE' ).on( 'click', function () {
	var labCSE = {
		labcse1: {
			html:'<header> <h1 class="title"> <a href="cse-labfacilities.php" style="font-size:28px">DATABASE MANAGEMENT SYSTEM LAB </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> is supporting novel, advanced applications that expand the limits of traditional databases, especially transaction systems. Its main aim is to enhance performance and functionality of applications such as workflow and information retrieval that require or can benefit from transactional support. </p>',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){
				if(v){
					e.preventDefault();
					$.prompt.goToState('labcse2');
					return false;
				}
				$.prompt.close();
			}
		},
		labcse2: {
			html:' <header> <h1 class="title"> <a href="cse-labfacilities.php" style="font-size:28px">MICROPROCESSOR LAB </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> is equipped with Digital Millimeters, PC based on Microprocessor Interfacing stations, a variety of Microcontroller Kits, accessories, an assortment of Digital/Analogue Components, Consumables, on Bench Illuminations Lights, Engineering Software, a C.D. Database and various advanced sets of Technical manuals. </p>', 
			buttons: { Back: -1, Next: 1 }, focus: 1, submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('labcse1');
				else if(v==1)
					$.prompt.goToState('labcse3');
			}
		},
		labcse3: {
			html:'<header> <h1 class="title"> <a href="cse-labfacilities.php" style="font-size:28px">COMPUTER NETWORKING LAB  </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> is engaged in research and education in the areas of high Speed Networks, Wireless Communication, Quality of Service, Security, Simulation, Multimedia and more. </p>', 
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('labcse2');
				else if(v==1)
					$.prompt.goToState('labcse4');
			}
		},
		labcse4: {
			html:' <header> <h1 class="title"> <a href="cse-labfacilities.php" style="font-size:28px">PROGRAMMING LAB  </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> LAB is equipped with high configuration computer systems connected via LAN. The lab is very much instrumental in helping students develop strong programming skills.  It has C, C++, JAVA Software for developing object oriented programming and compiler programming. </p>',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('labcse3');
				else if(v==1)
					$.prompt.goToState('labcse5');
			}
		},
		labcse5: {
			html:'<div class=""> <div class="newsBox"> <div class="thumbnail"> <div class="caption maxheight2"> <div class="box_inner"> <div class="box"> <h2 id="aboutus">OTHER LABORATORIES</h2> <p><ul style="margin: 10px 10px 10px 40px"> <li> Analog Electronics Lab</li> <li> Software Engineering Lab</li> <li> Algorithm Analysis & Design Lab</li> <li> Digital Circuits & Systems Lab</li> <li> Application & System Software Lab</li> <li> Computer Networking Lab</li> <li> LAN & Networking Lab</li> </ul></p> </div> </div> </div> </div> </div> </div>',
			buttons: { Back: -1, Exit: 0 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('labcse4');
			}
		}
	};
	$.prompt(labCSE);
});


$('#labECE' ).on( 'click', function () {
  var labece = {
    labece1: {
      html:'<header> <h1 class="title"> <a href="ece-labfacilities.php" style="font-size:32px">Antenna Laboratory </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> is equipped with the following items that are used not only as regular teaching aids but also for consultancy and research work as the facilities developed are rarely available in the National Capital Territory of Delhi. </p> <ul style=" margin: 10px 10px 5px 30px"> <li> VNA (Vector Network Analyzer)</li> <li> Unechoic Chamber</li> <li>  IE(Integral Equation)-3D software</li> <li> Spectrum Analyzer</li> <li> RF Signal generator</li> </ul>',
      buttons: { Cancel: false, Next: true },
      focus: 1,
      submit:function(e,v,m,f){
        if(v){
          e.preventDefault();
          $.prompt.goToState('labece2');
          return false;
        }
        $.prompt.close();
      }
    },
    labece2: {
      html:' <header> <h1 class="title"> <a href="ece-labfacilities.php"style="font-size:32px">Microwave Laboratory </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> caters to all the requirement of students for experimental work as per the curriculum. It is equipped with the following instruments which can also be used for research & Development work in this area:- </p> <ul style=" margin: 10px 10px 5px 30px"> <li>  Gun Power Supply</li> <li>  Klystron Power Supply</li> <li>  Directional Coupler Isolator</li> <li>  Horn Antenna</li> <li>  Power Meter</li> <li>  Attenuator</li> <li>  Frequency Meter</li> <li>  Slotted Section</li> </ul>', buttons: { Back: -1, Next: 1 }, focus: 1, submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labece1');
        else if(v==1)
          $.prompt.goToState('labece3');
      }
    },
    labece3: {
      html:'<header> <h1 class="title"> <a href="ece-labfacilities.php" style="font-size:32px">DSP/DIP Laboratory  </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> operational with the following tools:- </p> <ul style=" margin: 10px 10px 5px 30px"> <li>  MATLAB Software</li> <li>  DSP Starter kit by Texas Instruments</li> <li>  Sony Camcorder 8.9 Megapixel</li> <li>  Camera System</li> <li>  High End Design Image Analysis Tool</li> </ul> </section> <section class="article-body" style="text-align: justify"> <p> The laboratory is being widely used by the students for their project work in signal and image processing. </p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labece2');
        else if(v==1)
          $.prompt.goToState('labece4');
      }
    },
    labece4: {
      html:'  <header> <h1 class="title"> <a href="ece-labfacilities.php" style="font-size:32px">VLSI Design   </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> The lab is being developed to provide in-depth knowledge and demonstrations related to the core area of electronics, starting from basics to higher level of analysis, synthesis and design of circuits, in addition to the exposure on latest advancements in the field. </p> <p> Students can perform analog and digital circuit simulation on the following tools:- </p> <ul style=" margin: 10px 10px 5px 30px"> <li>  Orcad P-Spice for circuit simulation</li> <li>  PCB Designing tools</li> </ul></p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labece3');
        else if(v==1)
          $.prompt.goToState('labece5');
      }
    },
    labece5: {
      html:'<header> <h1 class="title"> <a href="ece-labfacilities.php" style="font-size:32px">Microprocessor I/II Laboratory   : </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> is also equipped with 8085/8086 trainer kits, peripheral boards and 8051 trainer kits </p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labece4');
        else if(v==1)
          $.prompt.goToState('labece6');
      }
    },
    labece6: {
      html:'<header> <h1 class="title"> <a href="ece-labfacilities.php" style="font-size:32px">Optical Laboratory  : </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> This is a fully equipped laboratory with the following items:- </p> <ul style=" margin: 10px 10px 5px 30px"> <li>  Advance fiber optic breadboard trainer</li> <li>  Light Runner trainer</li> <li>  Optical Power Meter</li> <li>  OTDR Measurement trainer</li> <li>  WDM trainer</li> </ul>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labece5');
        else if(v==1)
          $.prompt.goToState('labece7');
      }
    },
      labece7: {
      html:'<header> <h1 class="title"> <a href="ece-labfacilities.php" style="font-size:32px">Embedded Systems Laboratory  : </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> In this laboratory, students are able to learn the Architecture of 8051 and interfacing of 8051 with the following trainer kits:- </p> <ul style=" margin: 10px 10px 5px 30px"> <li>  FPGA/ CPLD kits</li> <li>  8051 trainer kits</li> <li>  Peripheral boards</li> <li>  8085/8086 trainer kits</li> <li>  Keil Software</li> </ul> <p> FPGA/CPLD devices are being widely used by the students for accomplishment of their minor and major project work as per the curriculum. </p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labece6');
        else if(v==1)
          $.prompt.goToState('labece8');
      }
    },
    labece8: {
      html:'<header> <h1 class="title"> <a href="ece-labfacilities.php" style="font-size:32px">Main Electronics Laboratory  : </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> completes the requirement of basic electronics experiments of all streams. It is designed to provide practical skills by hands-on experience to the students to apply the knowledge gained on various scientific and technical courses in order to carry out curriculum based laboratory experiments. </p> <p> Here students can verify the results of various concepts studied in Analog Electronics, switching theory, control systems, signal & systems, circuit theory, Electrical Measurements & Instrumentation, Communication lab and telecommunications lab. Bread boards integrated circuits and trainer kits are available to perform the experiments. Latest oscilloscopes and function generators are also available. </p> <p> There is also a separate laboratory allotted each for digital circuit & systems, consumer electronics & project work. </p> <p> The Department is keen to develop all its laboratories to promote industrial consultancy. </p>', 
      buttons: { Back: -1, Exit: 0 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labece7');
      }
    }
  };
  $.prompt(labece);
});

$('#labMAE' ).on( 'click', function () {
  var labmae = {
    labmae1: {
      html:'<header> <h1 class="title"> <a href="mae-labfacilities.php" style="font-size:20px">Mechanical and Automation Engineering (MAE) Labs: </a> </h1> </header> <div class="clr"></div> <p> Equipped with very expensive up-to-date machines, the labs of the department are considered to be one of the best labs in Delhi region. This helps the students to be trained in the highest order to meet academic and industrial purposes. </p>',
      buttons: { Cancel: false, Next: true },
      focus: 1,
      submit:function(e,v,m,f){
        if(v){
          e.preventDefault();
          $.prompt.goToState('labmae2');
          return false;
        }
        $.prompt.close();
      }
    },
    labmae2: {
      html:'<header> <h1 class="title"> <a href="mae-labfacilities.php" style="font-size:20px">MECHANICAL WORKSHOP </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> contains number of Precision Lathe machines, bench grinders, centre less grinder, vertical drilling, Shaper, Slotter, Shear, Milling machines, MIG and electric arc welding, Induction furnace etc. </p>', 
      buttons: { Back: -1, Next: 1 }, focus: 1, submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labmae1');
        else if(v==1)
          $.prompt.goToState('labmae3');
      }
    },
    labmae3: {
      html:'<header> <h1 class="title"> <a href="mae-labfacilities.php"style="font-size:20px">REFRIGIRATION AND AIR CONDITIONING LAB  </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> has hermitically, non-hermitically sealed rotatory compressor and various other standard refrigeration and air conditioning apparatus from KTENG, Korea. </p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labmae2');
        else if(v==1)
          $.prompt.goToState('labmae4');
      }
    },
    labmae4: {
      html:'<header> <h1 class="title"> <a href="mae-labfacilities.php" style="font-size:20px">ROBOTICS LAB</a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> houses robotic arms from ISRAEL. Students are trained on this fully computerized arm with 4 axes gripper; gravity feed mechanism along with the conveyer system. It uses ROBOCELL software for accessing. </p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labmae3');
        else if(v==1)
          $.prompt.goToState('labmae5');
      }
    },
    labmae5: {
      html:' <header> <h1 class="title"> <a href="mae-labfacilities.php" style="font-size:20px">IC ENGINE LAB </a> </h1> </header>  <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> not only has good experimental facilities for UG students but also research facilities like Research engines and popular commercial engines equipped with sophisticated exhaust gas analyser, smoke meter, eddy current dynamotor and various software for combustion and flow analyses. </p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labmae4');
        else if(v==1)
          $.prompt.goToState('labmae6');
      }
    },
    labmae6: {
      html:' <header> <h1 class="title"> <a href="mae-labfacilities.php" style="font-size:20px">MECHATRONICS LAB </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> has various valves like directional control valves, solenoid and pilot valves and compressors, relays, sensors, logic gates etc. and software like PLC and AUTOSIM. </p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labmae5');
        else if(v==1)
          $.prompt.goToState('labmae7');
      }
    },
      labmae7: {
      html:' <header> <h1 class="title"> <a href="mae-labfacilities.php" style="font-size:20px">CAD/CAM, CNC LAB  </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> has high end Computer systems to support software and machines like Vertical Milling, Turning, Wire cutting and Lathe CNC. </p>', 
      buttons: { Back: -1, Next: 1 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labmae6');
        else if(v==1)
          $.prompt.goToState('labmae8');
      }
    },
    labmae8: {
      html:'<header> <h1 class="title"> <a href="mae-labfacilities.php" style="font-size:20px">And various other labs  </a> </h1> </header> <div class="clr"></div> <section class="article-body" style="text-align: justify"> <p> Engineering Mechanics, Kinematics of Machines, Metrology, SOM, Fluid Mechanics and Machines, Strength of Materials Lab, Manufacturing Machines, Quality Control and Quality Assurance,  Mechanical Vibrations, Measurement and control, Microprocessor, MATLAB and Pro-E/CREO, Power plant and Computer integrated Manufacturing labs. </p>', 
      buttons: { Back: -1, Exit: 0 },
      focus: 1,
      submit:function(e,v,m,f){
        e.preventDefault();
        if(v==0)
          $.prompt.close();
        else if(v==-1)
          $.prompt.goToState('labmae7');
      }
    }
  };
  $.prompt(labmae);
});

$('#resultCSE' ).on( 'click', function () {
	var text= '<div class=""> <div class="newsBox"> <div class="thumbnail"> <div class="caption maxheight2"> <div class="box_inner"> <div class="box"> <h2 id="adminstaffinfo">Results</h2> <p> <div class="list styled custom-list"> <marquee onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" direction="up" width="100%" height="120px" align="justify" style="color:black;margin:0 10px 0 0"> <ul> <li><a title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus." href="#">Mathematics and Computer Science</a></li> <li><a title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus." href="#">Mathematics and Philosophy</a></li> <li><a title="Penatibus et magnis dis parturient montes ascetur ridiculus mus." href="#">Philosophy and Modern Languages</a></li> <li><a title="Morbi nunc odio gravida at cursus nec luctus a lorem. Maecenas tristique orci." href="#">History (Ancient and Modern)</a></li> </ul> </marquee> </div> </p> </div> </div> </div> </div> </div> </div>';
	$.prompt( text, { submit: function ( e, val, $elem ) {
	      	return true;
	      }, buttons: { Close: true } });   
});

$('#syllabusCSE' ).on( 'click', function () {
	var text= '<table class="category table table-striped table-bordered"> <thead> <tr> <th class="item-title"> <a href="#" onclick="Joomla.tableOrdering("a.name","asc","");return false;" title="Click to sort by this column">Course Name</a> </th> <th class="item-Details"> <a href="#" onclick="Joomla.tableOrdering("a.con_Details","asc","");return false;" title="Click to sort by this column">Details</a> </th> <th class="item-for"> <a href="#" onclick="Joomla.tableOrdering("a.con_for","asc","");return false;" title="Click to sort by this column">For</a> </th> <th class="item-Download"> <a href="#" onclick="Joomla.tableOrdering("a.Download","asc","");return false;" title="Click to sort by this column">Download</a> </th> <th class="item-Date"> <a href="#" onclick="Joomla.tableOrdering("a.date","asc","");return false;" title="Click to sort by this column">Upadte/ Upload Date</a> </th> </tr> </thead> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php">Computer Science Engineering ( CSE )</a> </td> <td class="item-Details"> <a>The Syllabus for student of CSE </a> </td> <td class="item-for"> <a>For Old Student</a> </td> <td class="item-Download"> <a href="doc/syllabus/cse_syllabus.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php">Computer Science Engineering ( CSE )</a> </td> <td class="item-position"> <a>The Syllabus for student of Semester 1 and 2 </a> </td> <td class="item-for"> <a>For New Student (Academic Session 2014-15)</a> </td> <td class="item-suburb"> <a href="doc/syllabus/Final-Scheme-and-Syllabus-Ist-and-2nd-Semester-for-the-academic-session-2014-15.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php">Computer Science Engineering ( CSE )</a> </td> <td class="item-position"> <a>The Syllabus for student of Semester 3 to 8 </a> </td> <td class="item-for"> <a>For New Student (Academic Session 2014-15)</a> </td> <td class="item-suburb"> <a href="doc/syllabus/Final-Syllabus-CSE-3rd-Semester-4th-5th-6th-7th-8th.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> </table>';
	$.prompt( text, { submit: function ( e, val, $elem ) {
	      	return true;
	      }, buttons: { Close: true } });   
});

$('#syllabusECE' ).on( 'click', function () {
	var text= '<table class="category table table-striped table-bordered"> <thead> <tr> <th class="item-title"> <a href="#" onclick="Joomla.tableOrdering("a.name","asc","");return false;" title="Click to sort by this column">Course Name</a> </th> <th class="item-Details"> <a href="#" onclick="Joomla.tableOrdering("a.con_Details","asc","");return false;" title="Click to sort by this column">Details</a> </th> <th class="item-for"> <a href="#" onclick="Joomla.tableOrdering("a.con_for","asc","");return false;" title="Click to sort by this column">For</a> </th> <th class="item-Download"> <a href="#" onclick="Joomla.tableOrdering("a.Download","asc","");return false;" title="Click to sort by this column">Download</a> </th> <th class="item-Date"> <a href="#" onclick="Joomla.tableOrdering("a.date","asc","");return false;" title="Click to sort by this column">Upadte/ Upload Date</a> </th> </tr> </thead> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="ece-syllabus.php">Electronics & Communication Engineering ( ECE )</a> </td> <td class="item-Details"> <a>The Syllabus for student of ECE </a> </td> <td class="item-for"> <a>For Old Student</a> </td> <td class="item-Download"> <a href="doc/syllabus/ece_syllabus.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="ece-syllabus.php">Electronics & Communication Engineering ( ECE )</a> </td> <td class="item-position"> <a>The Syllabus for student of Semester 1 and 2 </a> </td> <td class="item-for"> <a>For New Student (Academic Session 2014-15)</a> </td> <td class="item-suburb"> <a href="doc/syllabus/Final-Scheme-and-Syllabus-Ist-and-2nd-Semester-for-the-academic-session-2014-15.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="ece-syllabus.php">Electronics & Communication Engineering ( ECE )</a> </td> <td class="item-position"> <a>The Syllabus for student of Semester 3 to 8 </a> </td> <td class="item-for"> <a>For New Student (Academic Session 2014-15)</a> </td> <td class="item-suburb"> <a href="doc/syllabus/Final-Syllabus-ECE-3rd-Semester-4th-5th-6th-7th-8th.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> </table>';

	$.prompt( text, { submit: function ( e, val, $elem ) {
	      	return true;
	      }, buttons: { Close: true } });   
});


$('#syllabusMAE' ).on( 'click', function () {
	var text= '<table class="category table table-striped table-bordered"> <thead> <tr> <th class="item-title"> <a href="#" onclick="Joomla.tableOrdering("a.name","asc","");return false;" title="Click to sort by this column">Course Name</a> </th> <th class="item-Details"> <a href="#" onclick="Joomla.tableOrdering("a.con_Details","asc","");return false;" title="Click to sort by this column">Details</a> </th> <th class="item-for"> <a href="#" onclick="Joomla.tableOrdering("a.con_for","asc","");return false;" title="Click to sort by this column">For</a> </th> <th class="item-Download"> <a href="#" onclick="Joomla.tableOrdering("a.Download","asc","");return false;" title="Click to sort by this column">Download</a> </th> <th class="item-Date"> <a href="#" onclick="Joomla.tableOrdering("a.date","asc","");return false;" title="Click to sort by this column">Upadte/ Upload Date</a> </th> </tr> </thead> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="mae-syllabus.php">Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-Details"> <a>The Syllabus for student of MAE </a> </td> <td class="item-for"> <a>For Old Student</a> </td> <td class="item-Download"> <a href="doc/syllabus/mae_syllabus.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="mae-syllabus.php">Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-position"> <a>The Syllabus for student of Semester 1 and 2 </a> </td> <td class="item-for"> <a>For New Student (Academic Session 2014-15)</a> </td> <td class="item-suburb"> <a href="doc/syllabus/Final-Scheme-and-Syllabus-Ist-and-2nd-Semester-for-the-academic-session-2014-15.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="mae-syllabus.php">Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-position"> <a>The Syllabus for student of Semester 3 to 8 </a> </td> <td class="item-for"> <a>For New Student (Academic Session 2014-15)</a> </td> <td class="item-suburb"> <a href="doc/syllabus/Final-Syllabus-MAE-3rd-Semester-4th-5th-6th-7th-8th.pdf" target="_blank">PDF</a> </td> <td class="item-Date"> <a>01-07-2014</a> </td> </tr> </tbody> </table>';

	$.prompt( text, { submit: function ( e, val, $elem ) {
	      	return true;
	      }, buttons: { Close: true } });   
});

$('#technicalCSE' ).on( 'click', function () {
	var techCSE = {
		techcse1: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/profile/Dr_OP_Verma_CSE.jpg" alt="" /> </div><!--icon box top --> <h4>Dr. O. P. Verma</h4> <h5>Professor, <br> Principal <br> PhD (DU)<br>M, Tech (IIT Delhi)<br> B. E. (MNIT Jaipur) </h5> <p>Specialiazation: Image Processing, Soft Computing, Machine learning, Evolutionary Computing.</p> <a href="mailto:opverma@dce.ac.in" target="_blank">opverma@dce.ac.in	</a> <p><a href="Dr_OP_Verma.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Cancel: false, Next: true },
			focus: 1,
			submit:function(e,v,m,f){
				if(v){
					e.preventDefault();
					$.prompt.goToState('techcse2');
					return false;
				}
				$.prompt.close();
			}
		},
		techcse2: {
			html:'<div class=""> <div class="grey-box-icon"> <div class="icon-box-top grey-box-icon-pos"> <img src="assets/images/profile/SUNITA_CSE.png" alt="" /> </div><!--icon box top --> <h4>Ms. Sunita Kumari</h4> <h5>Assistant Professor<br> HOD (CSE) <br> M.Tech.(MDU Rohtak)<br>B.Tech.(MDU Rohtak) NET (2009)</h5> <p>Specialiazation: Operating Systems</p> <a href="mailto:mailto:sunita2009@gmail.com" target="_blank">sunita2009@gmail.com	</a> <p><a href="Dr_OP_Verma.pdf"><em>See Profile →</em></a></p> </div><!--grey box --> </div><!--/span3-->',
			buttons: { Back: -1, Next: 1 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('techcse1');
				else if(v==1)
					$.prompt.goToState('techcse3');
			}
		},
		techcse3: {
			html:'<h3>Other Curriculum</h3><p><ul><li>Advanced Computer Architecture</li><li>Compiler Construction</li><li>Mobile Computing</li><li>VLSI Design</li><li>Digital Image Processing</li><li>Microprocessor Systems</li><li>Digital Signal Processing</li><li>Data Warehousing & Data Mining</li><li>Digital Circuits & Systems</li><li>Java Programming and Website Design</li><li>Computer Architecture</li><li>Linux and X-Windows Programming</li><li>Software Engineering</li><li>Algorithm Analysis & Design</li><li>Object Oriented Programming using C++</li><li>Communication Systems</li><li>Computer Graphics</li><li>Operating Systems</li><li>Analog Electronics</li><li>Circuits and Systems</li><li>And various other subjects.</li></ul></p>',
			buttons: { Back: -1, Exit: 0 },
			focus: 1,
			submit:function(e,v,m,f){
				e.preventDefault();
				if(v==0)
					$.prompt.close();
				else if(v==-1)
					$.prompt.goToState('techcse2');
			}
		}
	};

	$.prompt(techCSE);
});

$('#timetableCSE' ).on( 'click', function () {
	var text= '<table class="category table table-striped table-bordered"> <thead> <tr> <th class="item-title"> <a href="#" onclick="Joomla.tableOrdering("a.name","asc","");return false;" title="Click to sort by this column">Course Name</a> </th> <th class="item-Details"> <a href="#" onclick="Joomla.tableOrdering("a.con_Details","asc","");return false;" title="Click to sort by this column">Details</a> </th> <th class="item-date"> <a href="#" onclick="Joomla.tableOrdering("a.date","asc","");return false;" title="Click to sort by this column">Update Date</a> </th> <th class="item-Download"> <a href="#" onclick="Joomla.tableOrdering("a.Download","asc","");return false;" title="Click to sort by this column">Download</a> </th> </tr> </thead> <tbody> <!-- New Code starts here --> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php">  Computer Science Engineering ( CSE )</a> </td> <td class="item-Details"> <a>CSE Time table effective from 24 January 2017</a> </td> <td class="item-date"> <a href="#">23-Jan-2017</a> </td> <td class="item-Download"> <a href="/doc/time-table/Updated 2017-Time-Table-CSE-23-1-2017.pdf" target="_blank"> Download PDF File</a> </td> </tr> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE )</a> </td> <td class="item-Details"> <a>CSE Time table effective from 9 January 2017</a> </td> <td class="item-date"> <a href="#">23-Dec-2016</a> </td> <td class="item-Download"> <a href="/doc/time-table/2017-Time-Table-CSE-23-12-2016.pdf" target="_blank"> Download PDF File</a> </td> </tr> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE )</a> </td> <td class="item-Details"> <a>Updated CSE Time table effective from 22 August 2016 </a> </td> <td class="item-date"> <a href="#">19 Aug 2016</a> </td> <td class="item-Download"> <a href="doc/time-table/Updated 2016-Time-Table-CSE-22-08-2016.pdf" target="_blank"> Download PDF File</a> </td> </tr> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE ) </a> </td> <td class="item-Details"> <a> Updated CSE Time table effective from 8 August 2016 </a> </td> <td class="item-date"> <a href="#"> 8 Aug 2016 </a> </td> <td class="item-Download"> <a href="doc/time-table/Updated 2016-Time-Table-CSE-08-08-2016.pdf" target="_blank"> Download PDF File </a> </td> </tr> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE ) </a> </td> <td class="item-Details"> <a> CSE Time table effective from 1 August 2016 </a> </td> <td class="item-date"> <a href="#"> 29 July 2016 </a> </td> <td class="item-Download"> <a href="doc/time-table/2016-Time-Table-CSE-29-07-2016.pdf" target="_blank"> Download PDF File </a> </td> </tr> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE ) </a> </td> <td class="item-Details"> <a> Updated CSE Time table effective from 18 January 2016 </a> </td> <td class="item-date"> <a href="#"> 18 February 2016 </a> </td> <td class="item-Download"> <a href="doc/time-table/2016-Time-Table-CSE-effective-from-18-01-2016.pdf" target="_blank"> Download PDF File </a> </td> </tr> <!-- New Code ends here --> <tr class="cat-list-row0" style="background-color: #f9f9f9;"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE ) </a> </td> <td class="item-Details"> <a> Updated CSE Time table effective from 16 February 2015 </a> </td> <td class="item-date"> <a href="#"> 13th FEB 2015 </a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-CSE-effective-from-16-02-2015.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE )</a> </td> <td class="item-Details"> <a> Updated CSE Time table effective from 09 February 2015</a> </td> <td class="item-date"> <a href="#"> 06th FEB 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-CSE-06-02-2015.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE )</a> </td> <td class="item-Details"> <a>The Time Table of  Computer Science Engineering ( CSE )</a> </td> <td class="item-date"> <a href="#">29th Jan 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-CSE-29-01-2015.pdf" target="_blank">Download PDF File</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="CSE.php"> Computer Science Engineering ( CSE )</a> </td> <td class="item-Details"> <a>The Time Table of  Computer Science Engineering ( CSE )</a> </td> <td class="item-date"> <a href="#">1st Jan 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-CSE.pdf" target="_blank">Download PDF File</a> </td> </tr> </tbody> </table>'; 
	$.prompt( text, { submit: function ( e, val, $elem ) {
  		return true;
  	}, buttons: { Close: true } });   
});

$('#timetableMAE' ).on( 'click', function () {
	var text= '<table class="category table table-striped table-bordered"> <thead> <tr> <th class="item-title"> <a href="#" onclick="Joomla.tableOrdering("a.name","asc","");return false;" title="Click to sort by this column">Course Name</a> </th> <th class="item-Details"> <a href="#" onclick="Joomla.tableOrdering("a.con_Details","asc","");return false;" title="Click to sort by this column">Details</a> </th> <th class="item-date"> <a href="#" onclick="Joomla.tableOrdering("a.date","asc","");return false;" title="Click to sort by this column">Update Date</a> </th> <th class="item-Download"> <a href="#" onclick="Joomla.tableOrdering("a.Download","asc","");return false;" title="Click to sort by this column">Download</a> </th> </tr> </thead> <!-- New Code Start here --> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-Details"> <a> Updated 2017-Time-Table-MAE-10-1-2017</a> </td> <td class="item-date"> <a href="#"> 10th Jan 2017</a> </td> <td class="item-Download"> <a href="doc/time-table/2017-Time-Table-MAE-10-1-2017.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-Details"> <a> Updated 2016-Time-Table-MAE-08-08-2016 </a> </td> <td class="item-date"> <a href="#"> 8th Aug 2016</a> </td> <td class="item-Download"> <a href="doc/time-table/Updated 2016-Time-Table-MAE-08-08-2016.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-Details"> <a> MAE Time table effective from 1 August 2016</a> </td> <td class="item-date"> <a href="#"> 29th Jul 2016</a> </td> <td class="item-Download"> <a href="doc/time-table/2016-Time-Table-MAE-29-07-2016.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-Details"> <a> Updated MAE Time table effective from 7 March 2016</a> </td> <td class="item-date"> <a href="#"> 16th Mar 2016</a> </td> <td class="item-Download"> <a href="doc/time-table/2016-Time-Table-MAE-effective-from-07-03-2016.pdf.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#">Mechanical & Automation Engineering ( MAE )        </a> </td> <td class="item-Details"> <a>Updated MAE Time table effective from 15 February2016 </a> </td> <td class="item-date"> <a href="#">26th Feb 2016 </a> </td> <td class="item-Download"> <a href="doc/time-table/2016-Time-Table-MAE-effective-from-15-02-2016.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <!-- New Code Ends here --> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Mechanical & Automation Engineering ( MAE ) </a> </td> <td class="item-Details"> <a> Updated MAE Time table effective from 16 February 2015 </a> </td> <td class="item-date"> <a href="#"> 13th Feb 2015 </a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-MAE-effective-from-16-02-2015.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-Details"> <a> Updated MAE Time table effective from 09 February 2015</a> </td> <td class="item-date"> <a href="#"> 06th Feb 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-MAE-06-02-2015.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#">Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-Details"> <a>The Time Table of Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-date"> <a href="#">29th Jan 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-MAE-29-01-2015.pdf" target="_blank">Download PDF File</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#">Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-Details"> <a>The Time Table of Mechanical & Automation Engineering ( MAE )</a> </td> <td class="item-date"> <a href="#">1st Jan 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-MAE.pdf" target="_blank">Download PDF File</a> </td> </tr> </tbody> </table>';

	$.prompt( text, { submit: function ( e, val, $elem ) {
	      	return true;
	      }, buttons: { Close: true } });   
});

$('#timetableECE' ).on( 'click', function () {
	var text= '<table class="category table table-striped table-bordered"> <thead> <tr> <th class="item-title"> <a href="#" onclick="Joomla.tableOrdering("a.name","asc","");return false;" title="Click to sort by this column">Course Name</a> </th> <th class="item-Details"> <a href="#" onclick="Joomla.tableOrdering("a.con_Details","asc","");return false;" title="Click to sort by this column"> Details</a> </th> <th class="item-date"> <a href="#" onclick="Joomla.tableOrdering("a.date","asc","");return false;" title="Click to sort by this column">Update Date</a> </th> <th class="item-Download"> <a href="#" onclick="Joomla.tableOrdering("a.Download","asc","");return false;" title="Click to sort by this column">Download</a> </th> </tr> </thead> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Electronics & Communication Engineering(ECE) </a> </td> <td class="item-Details"> <a> ECE Time table effective from 2 Sept 2016 </a> </td> <td class="item-date"> <a href="#"> 7th Sept 2016 </a> </td> <td class="item-Download"> <a href="doc/time-table/Updated 2016-Time-Table-ECE-2-9-16.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Electronics & Communication Engineering (ECE) </a> </td> <td class="item-Details"> <a> ECE Time table effective from 1 August 2016 </a> </td> <td class="item-date"> <a href="#"> 29th July 2016 </a> </td> <td class="item-Download"> <a href="doc/time-table/2016-Time-Table-ECE-29-07-2016.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Electronics & Communication Engineering (ECE) </a> </td> <td class="item-Details"> <a> Updated ECE Time table effective from 18 January 2016 </a> </td> <td class="item-date"> <a href="#"> 24th Feb 2016 </a> </td> <td class="item-Download"> <a href="doc/time-table/2016-Time-Table-ECE-effective-from-18-01-2016.pdf" target="_blank"> Download PDF File</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Electronics & Communication Engineering (ECE) </a> </td> <td class="item-Details"> <a> Updated ECE Time table effective from 16 February 2015 </a> </td> <td class="item-date"> <a href="#"> 13th Feb 2015 </a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-ECE-effective-from-16-02-2015.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Electronics & Communication Engineering (ECE)</a> </td> <td class="item-Details"> <a> Updated ECE Time table effective from 09 February 2015</a> </td> <td class="item-date"> <a href="#"> 06th Feb 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-ECE-06-02-2015.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#">Electronics & Communication Engineering (ECE)</a> </td> <td class="item-Details"> <a>The Time Table of Electronics & Communication Engineering (ECE)</a> </td> <td class="item-date"> <a href="#">29th Jan 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-ECE-29-01-2015.pdf" target="_blank">Download PDF File</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#">Electronics & Communication Engineering (ECE)</a> </td> <td class="item-Details"> <a>The Time Table of Electronics & Communication Engineering (ECE)</a> </td> <td class="item-date"> <a href="#">1st Jan 2015</a> </td> <td class="item-Download"> <a href="doc/time-table/2015-Time-Table-ECE.pdf" target="_blank">Download PDF File</a> </td> </tr> </tbody> </table>';

	$.prompt( text, { submit: function ( e, val, $elem ) {
	      	return true;
	      }, buttons: { Close: true } });   
});

$('#timetableHAS' ).on( 'click', function () {
	var text= '<table class="category table table-striped table-bordered"> <thead> <tr> <th class="item-title"> <a href="#" onclick="Joomla.tableOrdering("a.name","asc","");return false;" title="Click to sort by this column">Course Name</a> </th> <th class="item-Details"> <a href="#" onclick="Joomla.tableOrdering("a.con_Details","asc","");return false;" title="Click to sort by this column">Details</a> </th> <th class="item-Date"> <a href="#" onclick="Joomla.tableOrdering("a.con_Date","asc","");return false;" title="Click to sort by this column">Date</a> </th> <th class="item-Download"> <a href="#" onclick="Joomla.tableOrdering("a.Download","asc","");return false;" title="Click to sort by this column">Download</a> </th> </tr> </thead> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Humanities and Applied Sciences </a> </td> <td class="item-Details"> <a> Time Table for 1st Year Students of Applied Sciences effective from 1 August 2016 </a> </td> <td class="item-date"> <a href="#"> 29th July 2016 </a> </td> <td class="item-Download"> <a href="doc/time-table/2016-Time-Table-HAS-29-07-2016.pdf" target="_blank"> Download PDF File </a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="#"> Humanities and Applied Sciences </a> </td> <td class="item-Details"> <a> Updated Time Table for 1st Year Students of Applied Sciences effective from 16 February 2015 </a> </td> <td class="item-date"> <a href="#"> 13th Feb 2015 </a> </td> <td class="item-Download"> <a href="doc/time-table/ First-year-time-table-effective-from-16-02-2015.pdf" target="_blank"> Download PDF File</a> </td> </tr> </tbody> <tbody> <tr class="cat-list-row0"> <td class="item-title"> <a href="Applied-Sciences.php">Humanities and Applied Sciences</a> </td> <td class="item-Details"> <a>The Time Table of 1st Year Students of Applied Sciences</a> </td> <td class="item-Date"> <a>1st Jan 2015</a> </td> <td class="item-Download"> <a href="#" target="_blank">PDF</a> </td> </tr> </tbody> </table>'; 
	$.prompt( text, { submit: function ( e, val, $elem ) {

	      	return true;
	      }, buttons: { Close: true } });   
});
