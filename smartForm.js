// Your jQuery goes here

var userData = {
  name:'',
  email:''
  html: {likes[], dislikes: []},
  css: {likes[], dislikes: []},
  js: {likes[], dislikes: []},
  strength: {css: '', js: '', html: ''},
  currentQuestion: '#welcome'
};

 $('#start').click(function(){
   $('#welcome').hide();
   $('#q1').show();
 });

 $('#name').change(function(event){
   console.log($('#name').val());
 });

 $('#q1next').click(function(){
   if($('#name').val() && $('#email').val()){
   userData.name= $('#name').val();
   userData.email= $('#email').val();
   $('#q2').show();
   $('#q1').hide();
 }else{
   alert('Please enter user name and email')
 }
 });
