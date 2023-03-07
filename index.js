// function sendmail(){
//     var params ={
//         from_name : document.getElementById("fullname").value,
//         email_id : document.getElementById("email_id").value,
//         message : document.getElementById("message").value,
//     }
//     emailjs.send("service_ge92dpa","template_3fh7o9l", params).then(function(res){
//         alert("success! " + res.status);
//     })
// }

// $('button').click(function() {
//   $(this).toggleClass('clicked');
//   $('button p').text(function(i, text) {
//     return text === "Sent!" ? "Send" : "Sent!";
//   });
// });
// $(document).ready(function() {
//   $('button').on( "click", function() {
//     $('.plane').addClass('fly');
//     $('.hidden').addClass('visible');
//     $('.replace').removeClass('fa-paper-plane').addClass('fa-check');
//     $('span').text('SENT').addClass('fade');
//     $(this).addClass('done');
//   });
// });
// $(document).ready(function() {
//   $('#btn').on( "click", function() {
//   $('.plane').addClass('fly');
//   $('.hidden').addClass('visible');
//   $('.replace').removeClass('fa-paper-plane').addClass('fa-check');
//   $('span').text('SENT').addClass('fade');
//   $(this).addClass('done');
//   });
//   });

const glide = document.querySelector('.glide');

if(glide)
new Glide(glide, {
  type: "carousel",
  startAt: 0,
  perView: 3,
  gap: 30,
  hoverpause: true,
  autoplay: 2000,
  animationDuration: 800,
  animationTimingFunc: 'linear',
  breakpoints: {
    996: {
      perView: 2
    },
    768: {
      perView: 1
    },
  }
}).mount()

const menu = document.querySelector('.menu');
const navOpen = document.querySelector('.hamburger');
const navClose = document.querySelector('.close');


const navLeft = menu.getBoundingClientRect().left;
navOpen.addEventListener('click', ()=>{
  if(navLeft < 0){
    menu.classList.add('show');
    document.body.classList.add('show');
    navBar.classList.add('show')
  }
})

navClose.addEventListener('click', ()=>{
   if(navLeft < 0){
    menu.classList.remove('show');
    document.body.classList.remove('show');
    navBar.classList.remove('show')
  }
})

// Fix nav

const navBar = document.querySelector('.nav');
const navHeight = navBar.getBoundingClientRect().height;
const control = document.querySelector('.control');


window.addEventListener('scroll', ()=>{
  const scrollHeight = window.pageYOffset;
  if(scrollHeight > navHeight){
    navBar.classList.add('fix-nav')
  }else{
        navBar.classList.remove('fix-nav')
  }

  control.classList.remove('open')
})


// Colors 

const widget = document.querySelector('.widget');

widget.addEventListener('click', ()=>{
  control.classList.toggle('open')
})

const colors = [...document.querySelectorAll('.colors span')];
document.querySelector(':root').style.setProperty('--customColor','#0044ff')


colors.forEach(color=>{
  color.addEventListener('click', ()=>{
    const currentColor = color.dataset.id;
    document.querySelector(':root').style.setProperty('--customColor',currentColor)

  })
})


// Scroll to link

const links = [...document.querySelectorAll('.scroll-link')]
links.map(link=>{
  link.addEventListener('click',e=>{
    e.preventDefault();

    const id = e.target.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    const fixNav = navBar.classList.contains('fix-nav')
    let position = el.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0
    })
  })
})

// Typeit

new TypeIt('#type1', {
  speed: 120,
  loop: true,
  waitUntilVisible: true
}).type('Designer',{delay: 400})
.pause(500)
.delete(9)
.type("Developer",{delay: 400})
.pause(500)
.delete(9).go()

new TypeIt('#type2', {
  speed: 120,
  loop: true,
  waitUntilVisible: true
}).type('Designer',{delay: 400})
.pause(500)
.delete(9)
.type("Developer",{delay: 400})
.pause(500)
.delete(9).go()

gsap.from('.logo', {opacity: 0, duration: 1, delay: .5, y: -10})
gsap.from('.hamburger', {opacity: 0, duration: 1, delay: 1, x: 20})
gsap.from('.banner', {opacity: 0, duration: 1, delay: 1.5, x: -200})
gsap.from('.hero h3', {opacity: 0, duration: 1, delay: 2, y: -50})
gsap.from('.hero h1', {opacity: 0, duration: 1, delay:2.5, y: -45})
gsap.from('.hero h4', {opacity: 0, duration: 1, delay: 3, y: -30})
gsap.from('.hero a', {opacity: 0, duration: 1, delay: 3.5, y: 50})
gsap.from('.nav-item', {opacity: 0, duration: 1, delay: 3, x: -30,stagger: .2})
gsap.from('.icons span', {opacity: 0, duration: 1, delay: 3, x: -30,stagger: .2})

AOS.init()

let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {
  item.addEventListener('click', () => {
    const content = item.querySelector('.timeline-content');
    content.classList.toggle('active');
  });
});

// jQuery(document).ready(function($){
// 	var timelines = $('.cd-horizontal-timeline'),
// 		eventsMinDistance = 60;

// 	(timelines.length > 0) && initTimeline(timelines);

// 	function initTimeline(timelines) {
// 		timelines.each(function(){
// 			var timeline = $(this),
// 				timelineComponents = {};
// 			//cache timeline components 
// 			timelineComponents['timelineWrapper'] = timeline.find('.events-wrapper');
// 			timelineComponents['eventsWrapper'] = timelineComponents['timelineWrapper'].children('.events');
// 			timelineComponents['fillingLine'] = timelineComponents['eventsWrapper'].children('.filling-line');
// 			timelineComponents['timelineEvents'] = timelineComponents['eventsWrapper'].find('a');
// 			timelineComponents['timelineDates'] = parseDate(timelineComponents['timelineEvents']);
// 			timelineComponents['eventsMinLapse'] = minLapse(timelineComponents['timelineDates']);
// 			timelineComponents['timelineNavigation'] = timeline.find('.cd-timeline-navigation');
// 			timelineComponents['eventsContent'] = timeline.children('.events-content');

// 			//assign a left postion to the single events along the timeline
// 			setDatePosition(timelineComponents, eventsMinDistance);
// 			//assign a width to the timeline
// 			var timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
// 			//the timeline has been initialize - show it
// 			timeline.addClass('loaded');

// 			//detect click on the next arrow
// 			timelineComponents['timelineNavigation'].on('click', '.next', function(event){
// 				event.preventDefault();
// 				updateSlide(timelineComponents, timelineTotWidth, 'next');
// 			});
// 			//detect click on the prev arrow
// 			timelineComponents['timelineNavigation'].on('click', '.prev', function(event){
// 				event.preventDefault();
// 				updateSlide(timelineComponents, timelineTotWidth, 'prev');
// 			});
// 			//detect click on the a single event - show new event content
// 			timelineComponents['eventsWrapper'].on('click', 'a', function(event){
// 				event.preventDefault();
// 				timelineComponents['timelineEvents'].removeClass('selected');
// 				$(this).addClass('selected');
// 				updateOlderEvents($(this));
// 				updateFilling($(this), timelineComponents['fillingLine'], timelineTotWidth);
// 				updateVisibleContent($(this), timelineComponents['eventsContent']);
// 			});

// 			//on swipe, show next/prev event content
// 			timelineComponents['eventsContent'].on('swipeleft', function(){
// 				var mq = checkMQ();
// 				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'next');
// 			});
// 			timelineComponents['eventsContent'].on('swiperight', function(){
// 				var mq = checkMQ();
// 				( mq == 'mobile' ) && showNewContent(timelineComponents, timelineTotWidth, 'prev');
// 			});

// 			//keyboard navigation
// 			$(document).keyup(function(event){
// 				if(event.which=='37' && elementInViewport(timeline.get(0)) ) {
// 					showNewContent(timelineComponents, timelineTotWidth, 'prev');
// 				} else if( event.which=='39' && elementInViewport(timeline.get(0))) {
// 					showNewContent(timelineComponents, timelineTotWidth, 'next');
// 				}
// 			});
// 		});
// 	}

// 	function updateSlide(timelineComponents, timelineTotWidth, string) {
// 		//retrieve translateX value of timelineComponents['eventsWrapper']
// 		var translateValue = getTranslateValue(timelineComponents['eventsWrapper']),
// 			wrapperWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', ''));
// 		//translate the timeline to the left('next')/right('prev') 
// 		(string == 'next') 
// 			? translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth)
// 			: translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
// 	}

// 	function showNewContent(timelineComponents, timelineTotWidth, string) {
// 		//go from one event to the next/previous one
// 		var visibleContent =  timelineComponents['eventsContent'].find('.selected'),
// 			newContent = ( string == 'next' ) ? visibleContent.next() : visibleContent.prev();

// 		if ( newContent.length > 0 ) { //if there's a next/prev event - show it
// 			var selectedDate = timelineComponents['eventsWrapper'].find('.selected'),
// 				newEvent = ( string == 'next' ) ? selectedDate.parent('li').next('li').children('a') : selectedDate.parent('li').prev('li').children('a');
			
// 			updateFilling(newEvent, timelineComponents['fillingLine'], timelineTotWidth);
// 			updateVisibleContent(newEvent, timelineComponents['eventsContent']);
// 			newEvent.addClass('selected');
// 			selectedDate.removeClass('selected');
// 			updateOlderEvents(newEvent);
// 			updateTimelinePosition(string, newEvent, timelineComponents, timelineTotWidth);
// 		}
// 	}

// 	function updateTimelinePosition(string, event, timelineComponents, timelineTotWidth) {
// 		//translate timeline to the left/right according to the position of the selected event
// 		var eventStyle = window.getComputedStyle(event.get(0), null),
// 			eventLeft = Number(eventStyle.getPropertyValue("left").replace('px', '')),
// 			timelineWidth = Number(timelineComponents['timelineWrapper'].css('width').replace('px', '')),
// 			timelineTotWidth = Number(timelineComponents['eventsWrapper'].css('width').replace('px', ''));
// 		var timelineTranslate = getTranslateValue(timelineComponents['eventsWrapper']);

//         if( (string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < - timelineTranslate) ) {
//         	translateTimeline(timelineComponents, - eventLeft + timelineWidth/2, timelineWidth - timelineTotWidth);
//         }
// 	}

// 	function translateTimeline(timelineComponents, value, totWidth) {
// 		var eventsWrapper = timelineComponents['eventsWrapper'].get(0);
// 		value = (value > 0) ? 0 : value; //only negative translate value
// 		value = ( !(typeof totWidth === 'undefined') &&  value < totWidth ) ? totWidth : value; //do not translate more than timeline width
// 		setTransformValue(eventsWrapper, 'translateX', value+'px');
// 		//update navigation arrows visibility
// 		(value == 0 ) ? timelineComponents['timelineNavigation'].find('.prev').addClass('inactive') : timelineComponents['timelineNavigation'].find('.prev').removeClass('inactive');
// 		(value == totWidth ) ? timelineComponents['timelineNavigation'].find('.next').addClass('inactive') : timelineComponents['timelineNavigation'].find('.next').removeClass('inactive');
// 	}

// 	function updateFilling(selectedEvent, filling, totWidth) {
// 		//change .filling-line length according to the selected event
// 		var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
// 			eventLeft = eventStyle.getPropertyValue("left"),
// 			eventWidth = eventStyle.getPropertyValue("width");
// 		eventLeft = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', ''))/2;
// 		var scaleValue = eventLeft/totWidth;
// 		setTransformValue(filling.get(0), 'scaleX', scaleValue);
// 	}

// 	function setDatePosition(timelineComponents, min) {
// 		for (i = 0; i < timelineComponents['timelineDates'].length; i++) { 
// 		    var distance = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][i]),
// 		    	distanceNorm = Math.round(distance/timelineComponents['eventsMinLapse']) + 2;
// 		    timelineComponents['timelineEvents'].eq(i).css('left', distanceNorm*min+'px');
// 		}
// 	}

// 	function setTimelineWidth(timelineComponents, width) {
// 		var timeSpan = daydiff(timelineComponents['timelineDates'][0], timelineComponents['timelineDates'][timelineComponents['timelineDates'].length-1]),
// 			timeSpanNorm = timeSpan/timelineComponents['eventsMinLapse'],
// 			timeSpanNorm = Math.round(timeSpanNorm) + 4,
// 			totalWidth = timeSpanNorm*width;
// 		timelineComponents['eventsWrapper'].css('width', totalWidth+'px');
// 		updateFilling(timelineComponents['timelineEvents'].eq(0), timelineComponents['fillingLine'], totalWidth);
	
// 		return totalWidth;
// 	}

// 	function updateVisibleContent(event, eventsContent) {
// 		var eventDate = event.data('date'),
// 			visibleContent = eventsContent.find('.selected'),
// 			selectedContent = eventsContent.find('[data-date="'+ eventDate +'"]'),
// 			selectedContentHeight = selectedContent.height();

// 		if (selectedContent.index() > visibleContent.index()) {
// 			var classEnetering = 'selected enter-right',
// 				classLeaving = 'leave-left';
// 		} else {
// 			var classEnetering = 'selected enter-left',
// 				classLeaving = 'leave-right';
// 		}

// 		selectedContent.attr('class', classEnetering);
// 		visibleContent.attr('class', classLeaving).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(){
// 			visibleContent.removeClass('leave-right leave-left');
// 			selectedContent.removeClass('enter-left enter-right');
// 		});
// 		eventsContent.css('height', selectedContentHeight+'px');
// 	}

// 	function updateOlderEvents(event) {
// 		event.parent('li').prevAll('li').children('a').addClass('older-event').end().end().nextAll('li').children('a').removeClass('older-event');
// 	}

// 	function getTranslateValue(timeline) {
// 		var timelineStyle = window.getComputedStyle(timeline.get(0), null),
// 			timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
//          		timelineStyle.getPropertyValue("-moz-transform") ||
//          		timelineStyle.getPropertyValue("-ms-transform") ||
//          		timelineStyle.getPropertyValue("-o-transform") ||
//          		timelineStyle.getPropertyValue("transform");

//         if( timelineTranslate.indexOf('(') >=0 ) {
//         	var timelineTranslate = timelineTranslate.split('(')[1];
//     		timelineTranslate = timelineTranslate.split(')')[0];
//     		timelineTranslate = timelineTranslate.split(',');
//     		var translateValue = timelineTranslate[4];
//         } else {
//         	var translateValue = 0;
//         }

//         return Number(translateValue);
// 	}

// 	function setTransformValue(element, property, value) {
// 		element.style["-webkit-transform"] = property+"("+value+")";
// 		element.style["-moz-transform"] = property+"("+value+")";
// 		element.style["-ms-transform"] = property+"("+value+")";
// 		element.style["-o-transform"] = property+"("+value+")";
// 		element.style["transform"] = property+"("+value+")";
// 	}

// 	//based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
// 	function parseDate(events) {
// 		var dateArrays = [];
// 		events.each(function(){
// 			var dateComp = $(this).data('date').split('/'),
// 				newDate = new Date(dateComp[2], dateComp[1]-1, dateComp[0]);
// 			dateArrays.push(newDate);
// 		});
// 	    return dateArrays;
// 	}

// 	function parseDate2(events) {
// 		var dateArrays = [];
// 		events.each(function(){
// 			var singleDate = $(this),
// 				dateComp = singleDate.data('date').split('T');
// 			if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
// 				var dayComp = dateComp[0].split('/'),
// 					timeComp = dateComp[1].split(':');
// 			} else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
// 				var dayComp = ["2000", "0", "0"],
// 					timeComp = dateComp[0].split(':');
// 			} else { //only DD/MM/YEAR
// 				var dayComp = dateComp[0].split('/'),
// 					timeComp = ["0", "0"];
// 			}
// 			var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
// 			dateArrays.push(newDate);
// 		});
// 	    return dateArrays;
// 	}

// 	function daydiff(first, second) {
// 	    return Math.round((second-first));
// 	}

// 	function minLapse(dates) {
// 		//determine the minimum distance among events
// 		var dateDistances = [];
// 		for (i = 1; i < dates.length; i++) { 
// 		    var distance = daydiff(dates[i-1], dates[i]);
// 		    dateDistances.push(distance);
// 		}
// 		return Math.min.apply(null, dateDistances);
// 	}

// 	/*
// 		How to tell if a DOM element is visible in the current viewport?
// 		http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
// 	*/
// 	function elementInViewport(el) {
// 		var top = el.offsetTop;
// 		var left = el.offsetLeft;
// 		var width = el.offsetWidth;
// 		var height = el.offsetHeight;

// 		while(el.offsetParent) {
// 		    el = el.offsetParent;
// 		    top += el.offsetTop;
// 		    left += el.offsetLeft;
// 		}

// 		return (
// 		    top < (window.pageYOffset + window.innerHeight) &&
// 		    left < (window.pageXOffset + window.innerWidth) &&
// 		    (top + height) > window.pageYOffset &&
// 		    (left + width) > window.pageXOffset
// 		);
// 	}

// 	function checkMQ() {
// 		//check if mobile or desktop device
// 		return window.getComputedStyle(document.querySelector('.cd-horizontal-timeline'), '::before').getPropertyValue('content').replace(/'/g, "").replace(/"/g, "");
// 	}
// });


