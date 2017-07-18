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
    },
  };
  $.prompt(labece);
});

$('#resultCSE' ).on( 'click', function () {
	var text= '<div class=""> <div class="newsBox"> <div class="thumbnail"> <div class="caption maxheight2"> <div class="box_inner"> <div class="box"> <h2 id="adminstaffinfo">Results</h2> <p> <div class="list styled custom-list"> <marquee onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" direction="up" width="100%" height="120px" align="justify" style="color:black;margin:0 10px 0 0"> <ul> <li><a title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus." href="#">Mathematics and Computer Science</a></li> <li><a title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus." href="#">Mathematics and Philosophy</a></li> <li><a title="Penatibus et magnis dis parturient montes ascetur ridiculus mus." href="#">Philosophy and Modern Languages</a></li> <li><a title="Morbi nunc odio gravida at cursus nec luctus a lorem. Maecenas tristique orci." href="#">History (Ancient and Modern)</a></li> </ul> </marquee> </div> </p> </div> </div> </div> </div> </div> </div>';
	$.prompt( text, { submit: function ( e, val, $elem ) {
	      	return true;
	      }, buttons: { Close: true } });   
});

$('#syllabusCSE' ).on( 'click', function () {
	var text= '<div class=""> <div class="newsBox"> <div class="thumbnail"> <div class="caption maxheight2"> <div class="box_inner"> <div class="box"> <h2 id="adminstaffinfo">Syllabus</h2> <p> <div class="list styled custom-list"> <marquee onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" direction="up" width="100%" height="120px" align="justify" style="color:black;margin:0 10px 0 0"> <ul> <li><a title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus." href="#">Mathematics and Computer Science</a></li> <li><a title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus." href="#">Mathematics and Philosophy</a></li> <li><a title="Penatibus et magnis dis parturient montes ascetur ridiculus mus." href="#">Philosophy and Modern Languages</a></li> <li><a title="Morbi nunc odio gravida at cursus nec luctus a lorem. Maecenas tristique orci." href="#">History (Ancient and Modern)</a></li> </ul> </marquee> </div> </p> </div> </div> </div> </div> </div> </div>';
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
	var text= '<div class=""> <div class="newsBox"> <div class="thumbnail"> <div class="caption maxheight2"> <div class="box_inner"> <div class="box"> <h2 id="adminstaffinfo">Time Table</h2> <p> <div class="list styled custom-list"> <marquee onmouseover="this.stop()" onmouseout="this.start()" scrollamount="2" direction="up" width="100%" height="120px" align="justify" style="color:black;margin:0 10px 0 0"> <ul> <li><a title="Snatoque penatibus et magnis dis partu rient montes ascetur ridiculus mus." href="#">Mathematics and Computer Science</a></li> <li><a title="Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus." href="#">Mathematics and Philosophy</a></li> <li><a title="Penatibus et magnis dis parturient montes ascetur ridiculus mus." href="#">Philosophy and Modern Languages</a></li> <li><a title="Morbi nunc odio gravida at cursus nec luctus a lorem. Maecenas tristique orci." href="#">History (Ancient and Modern)</a></li> </ul> </marquee> </div> </p> </div> </div> </div> </div> </div> </div>';
	$.prompt( text, { submit: function ( e, val, $elem ) {
	      	return true;
	      }, buttons: { Close: true } });   
});
