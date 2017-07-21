<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="GBPEC">
	<meta name="author" content="gbpecwebteam">
	<title>G B Pant Government Engineering College</title>
	<link rel="favicon" href="assets/images/favicon.png">
	<link rel="stylesheet" media="screen" href="http://fonts.googleapis.com/css?family=Open+Sans:300,400,700">
	<link rel="stylesheet" href="assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css"> 
	<link rel="stylesheet" href="assets/css/bootstrap-theme.css" media="screen"> 
	<link rel="stylesheet" href="assets/css/style.css">
    <link rel='stylesheet' id='camera-css'  href='assets/css/camera.css' type='text/css' media='all'> 
    <link rel="stylesheet" href="rmodal/jquery-impromptu.min.css">

    <!-- <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="bootstrap-table-master/src/bootstrap-table.css">
    <!-- <link rel="stylesheet" href="../assets/examples.css"> -->
    <link rel="stylesheet" href="bootstrap-table-master/dragtable.css">
    <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-glyphicons.css" rel="stylesheet">
	<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="assets/js/html5shiv.js"></script>
	<script src="assets/js/respond.min.js"></script>
	<![endif]-->
</head>

<body>
	<!-- Fixed navbar -->
	<?php include("header.php"); ?>
	<!-- /.navbar -->

		<header id="head" class="secondary">
            <div class="container">
                    <h1>MAE FACULTY</h1>
                    <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!</p> -->
                </div>
    </header>

    <!-- <h1>Page Under Construction</h1> -->

    <div class="container">
        <!-- <h1>Pagination Demo</h1> -->
        <table id="table"
               data-toggle="table"
               data-show-columns="true" 
			   data-search="true" 
			   data-show-toggle="true"
               /*data-pagination="true"*/
               data-url="mae_faculty.json"
			   data-reorderable-columns="true">
            <thead>
            <tr>
                <th data-field="name" data-sortable="true">Name</th>
                <th data-field="designation" data-sortable="true">Name & Designation</th>
                <th data-field="qualification" data-sortable="true">Qualification</th>
                <th data-field="specialization" data-sortable="true">Area of Specialization</th>
                <!-- <th data-field="experience" data-sortable="true">Experience</th> -->
                <th data-field="email" data-sortable="true">Email</th>
                <th data-field="profile" data-sortable="true">Profile</th>

            </tr>
            </thead>
        </table>
    </div>

 <footer id="footer">
 	<?php include("footer.php"); ?>	
 </footer>


	<!-- JavaScript libs are placed at the end of the document so the pages load faster -->
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
	<script src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
	<script src="assets/js/jquery.cslider.js"></script>
	<script src="assets/js/jquery.isotope.min.js"></script>
	<script src="assets/js/fancybox/jquery.fancybox.pack.js" type="text/javascript"></script>
	<script src="assets/js/custom.js"></script>
	<script src="rmodal/jquery-impromptu.min.js"></script>
	<!-- <script src="js/academic.js" type="text/javascript"></script> -->
	
	<!-- <script src="jquery.min.js"></script> -->
	<script src="bootstrap-table-master/dist/bootstrap-table.min.js"></script>
	<script src="bootstrap-table-master/dist/bootstrap-table.js"></script>
	<-- put your locale files after bootstrap-table.js -->
	<script src="bootstrap-table-master/dist/locale/bootstrap-table-zh-CN.js"></script>


	<!-- <script src="../assets/jquery.min.js"></script> -->
    <!-- <script src="../assets/bootstrap/js/bootstrap.min.js"></script> -->
    <script src="bootstrap-table-master/src/bootstrap-table.js"></script>
    <script src="bootstrap-table-master/src/extensions/reorder-columns/bootstrap-table-reorder-columns.js"></script>
	<script src="bootstrap-table-master/jquery-ui.js"></script>
	<script src="bootstrap-table-master/jquery.dragtable.js"></script>
    <!-- <script src="../ga.js"></script> -->
</body>
</html>
