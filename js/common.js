$('body')
.prepend('<header></header>')
.append('<footer></footer>');

// $('header').load(url[, data][, complete]);
// $('body').prepend().load('inc.html header');
$('header').load('inc.html header >div');
$('footer').load('inc.html footer >div');
