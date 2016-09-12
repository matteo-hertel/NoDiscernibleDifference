var position = 0;
var contentBlock = $('#content-block');

/*
	Reasons are comprised of five items
		0. (Default)  A Title Phrase (string)
		1.	An item type (integer)
			1 Text only
			2 text with image, only image file name is necessary, all files taken from /img folder
			3 text with youtube embed url, embed code not necessary
		2.	Multimedia link (if required)
		3.	text body, any insult you want to throw
		4.	button text
*/
var reasonsOmgReasons = [
	["Okay so for one...",1,"","SSDs can read and write asynchronously which is already an advantage over HDD.","But it depends on the wurrrkflow."],
	["So halp me god I will scream.",3,"http://www.youtube.com/watch?v=j84eEjP-RL4","This is not negotiable! An SSD reduces literally all latency of a computer.","SSDs are expensiveeeeeeee, A new computer will be faster."],
	["ORRRRRRRR...",2,"ssdprice.png","You could use one of the many extremely cheap, highly reliable boot drives to cure all problems quickly and move on with your life.","But I have ten years of  experi..."],
	["Yeah ok...",1,"","Have fun with that."]
];

contentBlock.on('click', ".next-button", function(e){
	e.preventDefault();
	contentBlock.empty();
	setTimeout(addContentFromReasons(position, reasonsOmgReasons, contentBlock), 0);
	position++;
});

function addContentFromReasons(position, reasonsOmgReasons, contentBlock){
	switch(reasonsOmgReasons[position][1]){
		case 2:
			processImageText(reasonsOmgReasons[position], contentBlock);
		break;
		case 3:
			processYouTubeText(reasonsOmgReasons[position], contentBlock);
		break;
		case 1:
		default:
			processText(reasonsOmgReasons[position], contentBlock);
		break;
	}
}

function processText(reason, contentBlock){
	
		if(undefined != reason[0]) {
			var title = buildNode("<h2/>",{"class":"title text-center","text":reason[0]});
		}
		if(undefined != reason[3]) {
			var text = buildNode("<h3/>",{"class":"text-center","text":reason[3]});
		}
		if(undefined != reason[4]) {
			var button = buildNode("<a/>",{"class":"btn btn-default next-button","text":reason[4]});
		}
		contentBlock.append(
			title,
			text,
			button
			);

		return;
		};

function processImageText(reason, contentBlock){

	if(undefined != reason[0]) {
		var title = buildNode("<h2/>",{"class":"title text-center","text":reason[0]});
	}
	if(undefined != reason[2]) {
		var image = buildNode("<img/>",{"class":"img-responsive image", "src":window.location.href +"img/"+reason[2]});
	}
	if(undefined != reason[3]) {
		var text = buildNode("<h3/>",{"class":"text-center","text":reason[3]});
	}
	if(undefined != reason[4]) {
		var button = buildNode("<a/>",{"class":"btn btn-default next-button","text":reason[4]});
	}
	contentBlock.append(
		title,
		image,
		text,
		button	
		);

	return;
};

function processYouTubeText(reason, contentBlock){

	if(undefined != reason[0]) {
		var title = buildNode("<h3/>",{"class":"title","text":reason[0]});
	}
	if(undefined != reason[2]) {
		var youtube = buildNode("<div/>",{"class":"embed-responsive embed-responsive-16by9"}).append(
		buildNode("<iframe/>",{"class":"embed-responsive-item","src":reason[2]}));
	}
	if(undefined != reason[3]) {
		var text = buildNode("<h3/>",{"class":"text-center","text":reason[3]});
	}
	if(undefined != reason[4]) {
		var button = buildNode("<a/>",{"class":"btn btn-default next-button","text":reason[4]});
	}
	contentBlock.append(
		title,
		youtube,
		text,
		button
		);
}

/*
	Gives you a JQuery object. And respect.
*/
function buildNode(tag, attributes){
		return $(
		tag,
			attributes
		)
}