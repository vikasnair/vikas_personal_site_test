$("h1").click(function() {
	var colors = ["orange","yellow","red", "green","blue","purple"];
	var colorChoice = colors[Math.floor(Math.random() * colors.length)];
	$('h1').css('color', colorChoice);
});

$("#title").click(function() {
	var names = ["Chris", "Vikas", "Dasha", "Nikita", "Denisa"];
	var nameChoice = names[Math.floor(Math.random() * names.length)];
	$('#title').html("Hi, my name is " + nameChoice + ".");
});

$("#subtitle").click(function() {
	var hobbies = ["martial arts", "fly fishing", "chess", "photography", "jet skiing", "vlogging", "drawing", "yoga", "coffee tasting"];
	var hobbyChoice = hobbies[Math.floor(Math.random() * hobbies.length)];
	$('#subtitle').html("Master of " + hobbyChoice + ".");
});