<?

// From processing takes place here. message displayed here too
require('form/form.class.php');
$form = new Form();
$form->processForm(

	'wellkodamarketing.com' // Put you mail domain here
	, 
	'Crochet A Day' // Put your site name / form name here
	, 
	'clewis13@ufl.edu' // Where will the form notification be sent?
	, 
	'noreply@wellkodamarketing.com' // This what the form FROM: address wil be, if the form submissions doesn't contain an email field
	
);


?>