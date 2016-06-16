// Random Integer Generator

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Card Draw Function

function cardDraw() {
    var qCard = questions[getRandomInt(0,questions.length -1)];
    var qType = qCard[0];
    var qText = qCard[1];
    document.getElementById("black-card-text").innerHTML = qText;
    var wct = document.getElementById("white-card-text");
    wct.setAttribute("style", "color: black; position: absolute; top: 105px; left:297px; width: 200px; height:280px; font-family: 'Arimo', sans-serif; line-height: 1.4; font-size: large; text-align: left");
    if (qType == "cheekyQuestion") {
      wct.innerHTML = straightAnswers[getRandomInt(0,straightAnswers.length -1)];
    } else {
      wct.innerHTML = cheekyAnswers[getRandomInt(0,cheekyAnswers.length -1)];
    }
  
}

function jah() {

// Card Draw Action

  document.getElementById("white-card-text").setAttribute("onclick", "cardDraw()");
  document.getElementById("black-card-text").setAttribute("onclick", "cardDraw()");

// Create SVG space

  window.onload=function(){
    var mySVG=document.createElementNS("http://www.w3.org/2000/svg", "svg");
    mySVG.setAttribute("width",540);
    mySVG.setAttribute("height",360);
    mySVG.setAttribute("id","deck");
    mySVG.setAttribute("viewBox", "0 0 540 360");

    document.getElementById("card-container").appendChild(mySVG);

// Create Black Question Card

    var devBlack=document.createElementNS("http://www.w3.org/2000/svg", "rect");
    devBlack.setAttribute("class","dev-black");
    devBlack.setAttribute("width",250);
    devBlack.setAttribute("height",350);
    devBlack.setAttribute("x", 5);
    devBlack.setAttribute("y", 5);
    devBlack.setAttribute("rx", 15);
    devBlack.setAttribute("ry", 15);
    devBlack.setAttribute("fill", "black");
    devBlack.setAttribute("stroke", "black");
    devBlack.setAttribute("stroke-width",2);
    mySVG.appendChild(devBlack);

// Create Answer Card (White)

    var devWhite=document.createElementNS("http://www.w3.org/2000/svg", "rect");
    devWhite.setAttribute("class","dev-white");
    devWhite.setAttribute("width",250);
    devWhite.setAttribute("height",350);
    devWhite.setAttribute("x", 275);
    devWhite.setAttribute("y", 5);
    devWhite.setAttribute("rx", 15);
    devWhite.setAttribute("ry", 15);
    devWhite.setAttribute("fill", "white");
    devWhite.setAttribute("stroke", "black");
    devWhite.setAttribute("stroke-width",2);

    mySVG.appendChild(devWhite);

// Question Arrays

    questions = [
      ["cheekyQuestion", "If _____ is the answer, you are asking the wrong question."], 
      ["cheekyQuestion", "The universe was brought into existence by _____."], 
      ["cheekyQuestion", "_____ brought the orgy to a grinding halt"], 
      ["cheekyQuestion", "_____ is the gift that keeps on giving."], 
      ["cheekyQuestion", "When all else fails, I can always masturbate to _______."], 
      ["cheekyQuestion", "I'd rather stick my dick in _____."], 
      ["cheekyQuestion", "My Kingdom for _____."], 
      ["cheekyQuestion", "Would you like _____ with that?"], 
      ["cheekyQuestion", "_____? We've got that."], 
      ["cheekyQuestion", "_____ is bringing sexy back"], 
      ["cheekyQuestion", "Science will never explain _____."], 
      ["cheekyQuestion", "It turns out that _____ wasn't a suitable birthday gift for my OH."], 
      ["cheekyQuestion", "And I would have gotten away with it, too, if it hadn't been for ________."], 
      ["cheekyQuestion", "Maybe she's born with it, maybe it's _____"], 
      ["cheekyQuestion", "Anthropologists have recently discovered a primitive tribe that worships _____."], 
      ["cheekyQuestion", "It's a pity that kids these days are all getting involved with _____."], 
      ["cheekyQuestion", "During Picasso's often-overlooked Brown Period, he produced hundreds of paintings of _____."], 
      ["cheekyQuestion", "Alternative medicine is now embracing the curative powers of ______."], 
      ["cheekyQuestion", "And the Academy Award for _____ goes to ______."], 
      ["cheekyQuestion", "I drink to forget ______."], 
      ["cheekyQuestion", "This is the way the world ends. Not with a bang but with _____."], 
      ["cheekyQuestion", "What's a girl's best friend?"], 
      ["cheekyQuestion", "TSA guidelines now prohibit _____ on aeroplanes."], 
      ["cheekyQuestion", "______.  That's how I want to die."], 
      ["cheekyQuestion", "For my next trick, I will pull _____ out of _____."], 
      ["cheekyQuestion", "In the new Disney Channel Original Movie, Hannah Montana struggles with _____ for the first time."], 
      ["cheekyQuestion", "_____ is a slippery slope that leads to _____."], 
      ["cheekyQuestion", "Dear Agony Aunt, I'm having some trouble with _____ and would like your advice."], 
      ["cheekyQuestion", "Instead of coal, Santa now gives the bad children _____."], 
      ["cheekyQuestion", "What's the most emo?"], 
      ["cheekyQuestion", "In 1,000 years when paper money is but a distant memory, _____ will be our currency."], 
      ["cheekyQuestion", "What's the next superhero/sidekick duo?"], 
      ["cheekyQuestion", "In M. Night Shyamalan's new movie, Bruce Willis discovers that he had really been _____ all along."], 
      ["cheekyQuestion", "A romantic, candlelit dinner would be incomplete without _____."], 
      ["cheekyQuestion", "_____.  Betcha can't have just one!"], 
      ["cheekyQuestion", "_____.  Oh well done you."], 
      ["cheekyQuestion", "Next from J.K. Rowling: Harry Potter and the Chamber of _."], 
      ["cheekyQuestion", "In a world ravaged by _____, our only solace is _____."], 
      ["cheekyQuestion", "War!  What is it good for?"], 
      ["cheekyQuestion", "During sex, I like to think about _____."], 
      ["cheekyQuestion", "What are my parents hiding from me?"], 
      ["cheekyQuestion", "_____ will always get you laid. Probably."], 
      ["cheekyQuestion", "In L.A. County Jail, word is you can trade 200 cigarettes for _____."], 
      ["cheekyQuestion", "In the distant future, historians will agree that ________ marked the beginning of humanity's decline."], 
      ["cheekyQuestion", "As a _____, I want _____."], 
      ["cheekyQuestion", "Pro tip: Don't put _____ as your relationship status."], 
      ["cheekyQuestion", "_____.  It's a trap!"], 
      ["cheekyQuestion", "Coming to the West End this season, _____: The Musical."], 
      ["cheekyQuestion", "But before I kill you, Mr. Bond, I must show you _____."], 
      ["cheekyQuestion", "_____ gives me uncontrollable gas"], 
      ["cheekyQuestion", "The class field trip was completely ruined by _____."], 
      ["cheekyQuestion", "When Pharaoh remained unmoved, Moses called down a Plague of _____."], 
      ["cheekyQuestion", "My secret power is _____"], 
      ["cheekyQuestion", "There will be no _____ in heaven"], 
      ["cheekyQuestion", "Vin Diesel eats _____ for breakfast"], 
      ["cheekyQuestion", "_____: good to the last drop."], 
      ["cheekyQuestion", "Why am I sticky?"], 
      ["cheekyQuestion", "_____ gets better with age."], 
      ["cheekyQuestion", "What's the hipsterest?"], 
      ["cheekyQuestion", "_____ should consider euthanasia"], 
      ["cheekyQuestion", "Studies show that lab rats navigate mazes 50% faster after being exposed to _____."], 
      ["cheekyQuestion", "I do not know with what weapons World War III will be fought, but World War IV will be fought with _____."], 
      ["cheekyQuestion", "Why do I hurt all over?"], 
      ["cheekyQuestion", "I am giving up _____ for Lent."], 
      ["cheekyQuestion", "In an attempt to reach a wider audience, Natural History Museum has opened an interactive exhibit on _____."], 
      ["cheekyQuestion", "When I am President of the universe, I will create the Department of _____."], 
      ["cheekyQuestion", "Tonight Matthew, I'm going to be _____"], 
      ["cheekyQuestion", "When I am a billionaire, I shall erect a 50-foot statue to commemorate _____."], 
      ["cheekyQuestion", "When I was tripping on acid, _____ turned into _____."], 
      ["cheekyQuestion", "That's right, I killed _____.  How, you ask?  _____."], 
      ["cheekyQuestion", "_____ is my antidote"], 
      ["cheekyQuestion", "_____ + _____ = _____."], 
      ["cheekyQuestion", "____ never fails to liven up the party."], 
      ["cheekyQuestion", "_____ is the the new fad diet"], 
      ["cheekyQuestion", "My plan for world domination begins with _____."], 
      ["cheekyQuestion", "I learned the hard way that you can't cheer up a grieving friend with _____."], 
      ["cheekyQuestion", "An international tribunal has found _____ guilty of _____."], 
      ["cheekyQuestion", "The socialist governments of Scandinavia have declared that access to _____ is a basic human right."], 
      ["cheekyQuestion", "In his new self-produced album, Kanye West raps over the sounds of ______."], 
      ["straightQuestion", "_____ is giving me problems in production"], 
      ["straightQuestion", "Tell them that _____ is a feature, not a bug"], 
      ["straightQuestion", "The internet is for cat memes and _____"], 
      ["straightQuestion", "The Internet of Things will be controlled by _____."], 
      ["straightQuestion", "_____ is unsupported in Internet Explorer"], 
      ["straightQuestion", "Susie from production asked for _____ so I gave her _____."], 
      ["straightQuestion", "We need to optimise _____"], 
      ["straightQuestion", "______ is highly available, idempotent, and load balancing."], 
      ["straightQuestion", "It's not a bug it's _____."], 
      ["straightQuestion", "Fuctional programming can solve the problem of _____."], 
      ["straightQuestion", "No one knows as much about _______ as the beardy dev in the corner"], 
      ["straightQuestion", "My pull request was rejected because of _____"], 
      ["straightQuestion", "My stacktrace revealed _____"], 
      ["straightQuestion", "_____, because who needs monitoring. "], 
      ["straightQuestion", "You can totally replace testing with _____"], 
      ["straightQuestion", "Uncommented code leads to _____"], 
      ["straightQuestion", "_____ gave me more errors than I started with"], 
      ["straightQuestion", "_____ invalidated all our assumptions"], 
      ["straightQuestion", "_____ wasted thousands of dollars"], 
      ["straightQuestion", "No one can authenticate because of ______"], 
      ["straightQuestion", "Everyone on the dev team had to work late bcause of ____"], 
      ["straightQuestion", "_____ is mission critical"], 
      ["straightQuestion", "I never truly understood eXtreme programming until I encountered _____."], 
      ["straightQuestion", "The Agile Manifesto taught me to pick _____ over _____"], 
      ["straightQuestion", "_____ is more relaible than _____"], 
      ["straightQuestion", "End-to-end _____"], 
      ["straightQuestion", "Javascript is the best language ever, thanks to _____"], 
      ["straightQuestion", "Last night while drunk, the W3C declared _____ as a new web standard."], 
      ["straightQuestion", "Only two things in deployment are certain, missed deadlines and ______."], 
      ["straightQuestion", "_____ -driven development"], 
      ["straightQuestion", "_____ ate all my memory."], 
      ["straightQuestion", "_____ is always a good practice."], 
      ["straightQuestion", "It's easy! Just run _____"], 
      ["straightQuestion", "I assure you _____ is secure!"], 
      ["straightQuestion", "Our backup policy is _____."], 
      ["straightQuestion", "There are whisperings that the Google Headquarters has a secret room devoted to _____"], 
      ["straightQuestion", "In a pinch, _______ can be a suitable substitute for _______."], 
      ["straightQuestion", "In its new tourism campaign, Silicon Valley proudly proclaims that it has finally eliminated ________"], 
      ["straightQuestion", "I bet the person who wrote this uses _____."], 
      ["straightQuestion", "I enjoy _____, while my code is compiling."], 
      ["straightQuestion", "Don't worry, we have unit tests for _____."], 
      ["straightQuestion", "Blaming dev intern for _____"], 
      ["straightQuestion", "_____ is my favourite thing about _____"], 
      ["straightQuestion", "Dev morale would be improved if we had _____ in our office"], 
      ["straightQuestion", "I've once been so drunk that _____ actually made sense"], 
      ["straightQuestion", "To understand _____ you must first understand _____."], 
      ["straightQuestion", "Multiple backend penetration  is achieved with _____"], 
      ["straightQuestion", "You can force kill your children by _____"], 
      ["straightQuestion", "_____ corrupts your children's memory"], 
      ["straightQuestion", "_____ behaves like a dangling socket"], 
      ["straightQuestion", "Before you penetrate someone's backend, you first must _____"], 
      ["straightQuestion", "I upload my worm to _____"], 
      ["straightQuestion", "I fork my children with _____"], 
      ["straightQuestion", "My shared socket connects to ____'s backend"], 
      ["straightQuestion", "I can't believe you improved ______ by deleting __________"], 
      ["straightQuestion", "The only thing more dangerous than _____ is a programmer with ________."], 
      ["straightQuestion", "1.  ________ 2. _________  3. Profit."], 
      ["straightQuestion", "Monads are easy! Just think of them as _______"], 
      ["straightQuestion", "_____: powered by the cloud."], 
      ["straightQuestion", "insertBerfore ______."], 
      ["straightQuestion", "I once made a robot around the concept of _____."], 
      ["straightQuestion", "According to trends on Github, the next big thing is _____."], 
      ["straightQuestion", "It took over 40 hours to document _____. "], 
      ["straightQuestion", "// TODO: _____."], 
      ["straightQuestion", "npm install _____."], 
      ["straightQuestion", "Support for _____ has finally arrived."], 
      ["straightQuestion", "I got 99 github Issues but _____ ain't one"], 
      ["straightQuestion", "_____: Doing it the Production way"], 
      ["straightQuestion", "_____ : I like to do it functionally"], 
      ["straightQuestion", "I think _____ needs tests."], 
      ["straightQuestion", "I'll be working late because _____ is about to catch fire."], 
      ["straightQuestion", "We wrote our own build tool based on _____."], 
      ["straightQuestion", "We can't pay you, but we can offer _____ in compensation."], 
      ["straightQuestion", "Development is 90% _____ and 10% _____."], 
      ["straightQuestion", "Cowsay _____."], 
      ["straightQuestion", "_____ worked in development."], 
      ["straightQuestion", "We took the plunge and rewrote _______ in Go."], 
      ["straightQuestion", "Implementing _____________ should take only 2 lines of code."], 
      ["straightQuestion", "Learn _____ the hard way."], 
      ["straightQuestion", "It's just a hack to make _____ run."], 
      ["straightQuestion", "It's been 91 days since _____ was updated"], 
      ["straightQuestion", "_____ is Turing complete."]
        ]; 

    cheekyQuestions = [
      "If _____ is the answer, you are asking the wrong question."
        , "The universe was brought into existence by _____."
        , "_____ brought the orgy to a grinding halt"
        , "_____ is the gift that keeps on giving."
        , "When all else fails, I can always masturbate to _______."
        , "I'd rather stick my dick in _____."
        , "My Kingdom for _____."
        , "Would you like _____ with that?"
        , "_____? We've got that."
        , "_____ is bringing sexy back"
        , "Science will never explain _____."
        , "It turns out that _____ wasn't a suitable birthday gift for my OH."
        , "And I would have gotten away with it, too, if it hadn't been for ________."
        , "Maybe she's born with it, maybe it's _____"
        , "Anthropologists have recently discovered a primitive tribe that worships _____."
        , "It's a pity that kids these days are all getting involved with _."
        , "During Picasso's often-overlooked Brown Period, he produced hundreds of paintings of _____."
        , "Alternative medicine is now embracing the curative powers of _____."
        , "And the Academy Award for _____ goes to ______."
        , "I drink to forget ______."
        , "This is the way the world ends. Not with a bang but with _."
        , "What's a girl's best friend?"
        , "TSA guidelines now prohibit _____ on aeroplanes."
        , "______.  That's how I want to die."
        , "For my next trick, I will pull _____ out of _____."
        , "In the new Disney Channel Original Movie, Hannah Montana struggles with _____ for the first time."
        , "_____ is a slippery slope that leads to _____."
        , "Dear Agony Aunt, I'm having some trouble with _____ and would like your advice."
        , "Instead of coal, Santa now gives the bad children _____."
        , "What's the most emo?"
        , "In 1,000 years when paper money is but a distant memory, _____ will be our currency."
        , "What's the next superhero/sidekick duo?"
        , "In M. Night Shyamalan's new movie, Bruce Willis discovers that he had really been _____ all along."
        , "A romantic, candlelit dinner would be incomplete without _____."
        , "_____.  Betcha can't have just one!"
        , "_____.  Oh well done you."
        , "Next from J.K. Rowling: Harry Potter and the Chamber of _."
        , "In a world ravaged by _____, our only solace is _____."
        , "War!  What is it good for?"
        , "During sex, I like to think about _____."
        , "What are my parents hiding from me?"
        , "_____ will always get you laid. Probably."
        , "In L.A. County Jail, word is you can trade 200 cigarettes for _____."
        , "In the distant future, historians will agree that ________ marked the beginning of humanity's decline."
        , "As a _____, I want _____."
        , "Pro tip: Don't put _____ as your relationship status."
        , "_____.  It's a trap!"
        , "Coming to the West End this season, _____: The Musical."
        , "But before I kill you, Mr. Bond, I must show you _____."
        , "_____ gives me uncontrollable gas"
        , "The class field trip was completely ruined by _____."
        , "When Pharaoh remained unmoved, Moses called down a Plague of _____."
        , "My secret power is _____"
        , "There will be no _____ in heaven"
        , "Vin Diesel eats _____ for breakfast"
        , "_____: good to the last drop."
        , "Why am I sticky?"
        , "_____ gets better with age."
        , "What's the hipsterest?"
        , "_____ should consider euthanasia"
        , "Studies show that lab rats navigate mazes 50% faster after being exposed to _____."
        , "I do not know with what weapons World War III will be fought, but World War IV will be fought with _____."
        , "Why do I hurt all over?"
        , "I am giving up _____ for Lent."
        , "In an attempt to reach a wider audience, Natural History Museum has opened an interactive exhibit on _____."
        , "When I am President of the universe, I will create the Department of _____."
        , "Tonight Matthew, I'm going to be _____"
        , "When I am a billionaire, I shall erect a 50-foot statue to commemorate _____."
        , "When I was tripping on acid, _____ turned into _____."
        , "That's right, I killed _____.  How, you ask?  _____."
        , "_____ is my antidote"
        , "_____ + _____ = _____."
        , "____ never fails to liven up the party."
        , "_____ is the the new fad diet"
        , "My plan for world domination begins with _____."
        , "I learned the hard way that you can't cheer up a grieving friend with _____."
        , "An international tribunal has found _____ guilty of _____."
        , "The socialist governments of Scandinavia have declared that access to _____ is a basic human right."
        , "In his new self-produced album, Kanye West raps over the sounds of ______."
        ];

    cheekyAnswers = [
      "my penis"
        , "Justin Timberlake"
        , "Flying sex snakes."
        , "Gloria Gaynor"
        , "German dungeon porn."
        , "Snoop Dog"
        , "Kligons on the starboard bow"
        , "Tasteful sideboob."
        , "Captain James T Kirk"
        , "One ring to rule them all"
        , "Naked hippies"
        , "Being a motherfucking sorcerer."
        , "A disappointing birthday party."
        , "Puppies!"
        , "A windmill full of corpses."
        , "Guys who don't call."
        , "Lingerie for men"
        , "Dying."
        , "Vintage Abba costumes"
        , "Being on fire."
        , "A lifetime of sadness."
        , "An erection that lasts longer than four hours."
        , "Onion induced tears"
        , "firehooping ninjas"
        , "The Rapture."
        , "Pterodactyl eggs."
        , "Crippling debt."
        , "Eugenics."
        , "Mr. Tickle"
        , "Dying of dysentery."
        , "Roofies."
        , "Getting naked and watching TVAM."
        , "The forbidden fruit."
        , "Snatch"
        , "The Big Bang."
        , "Anal beads."
        , "morning sex"
        , "Morgan Freeman"
        , "Voice-over's by David Attenborough"
        , "Charisma."
        , "Panda sex."
        , "Taking off your shirt."
        , "Morgan Freeman's voice."
        , "Breaking out into song and dance."
        , "Masturbation."
        , "Hormone injections."
        , "Incest."
        , "Scalping."
        , "Pac Man"
        , "Edible underpants."
        , "The Hustle."
        , "Intelligent design."
        , "Nocturnal emissions."
        , "trendy undercuts"
        , "Unfathomable stupidity."
        , "Repression."
        , "Attitude."
        , "The American Dream"
        , "Puberty."
        , "Testicular torsion."
        , "The folly of man."
        , "U2"
        , "Swooping."
        , "Goats eating cans."
        , "Kamikaze pilots."
        , "Horrifying laser hair removal accidents."
        , "taking modafinil and staying up all night"
        , "A look-see."
        , "Doing the right thing."
        , "The taint; the grundle; the fleshy fun-bridge."
        , "Lactation."
        , "Powerful thighs."
        , "Saxophone solos."
        , "Self loathing"
        , "A middle-aged man on roller skates."
        , "A foul mouth."
        , "The thing that electrocutes your abs."
        , "Heteronormativity."
        , "Cuddling."
        ];

    straightQuestions = [
      "_____ is giving me problems in production"
        , "Tell them that _____ is a feature, not a bug"
        , "The internet is for cat memes and _____"
        , "The Internet of Things will be controlled by _____."
        , "_____ is unsupported in Internet Explorer"
        , "Susie from production asked for _____ so I gave her _____."
        , "We need to optimise _____"
        , "______ is highly available, idempotent, and load balancing."
        , "It's not a bug it's _____."
        , "Fuctional programming can solve the problem of _____."
        , "No one knows as much about _______ as the beardy dev in the corner"
        , "My pull request was rejected because of _____"
        , "My stacktrace revealed _____"
        , "_____, because who needs monitoring. "
        , "You can totally replace testing with _____"
        , "Uncommented code leads to _____"
        , "_____ gave me more errors than I started with"
        , "_____ invalidated all our assumptions"
        , "_____ wasted thousands of dollars"
        , "No one can authenticate because of ______"
        , "Everyone on the dev team had to work late bcause of ____"
        , "_____ is mission critical"
        , "I never truly understood eXtreme programming until I encountered _____."
        , "The Agile Manifesto taught me to pick _____ over _____"
        , "_____ is more relaible than _____"
        , "End-to-end _____"
        , "Javascript is the best language ever, thanks to _____"
        , "Last night while drunk, the W3C declared _____ as a new web standard."
        , "Only two things in deployment are certain, missed deadlines and ______."
        , "_____ -driven development"
        , "_____ ate all my memory."
        , "_____ is always a good practice."
        , "It's easy! Just run _____"
        , "I assure you _____ is secure!"
        , "Our backup policy is _____."
        , "There are whisperings that the Google Headquarters has a secret room devoted to _____"
        , "In a pinch, _______ can be a suitable substitute for _______."
        , "In its new tourism campaign, Silicon Valley proudly proclaims that it has finally eliminated ________"
        , "I bet the person who wrote this uses _____."
        , "I enjoy _____, while my code is compiling."
        , "Don't worry, we have unit tests for _____."
        , "Blaming dev intern for _____"
        , "_____ is my favourite thing about _____"
        , "Dev morale would be improved if we had _____ in our office"
        , "I've once been so drunk that _____ actually made sense"
        , "To understand _____ you must first understand _____."
        , "Multiple backend penetration  is achieved with _____"
        , "You can force kill your children by _____"
        , "_____ corrupts your children's memory"
        , "_____ behaves like a dangling socket"
        , "Before you penetrate someone's backend, you first must _____"
        , "I upload my worm to _____"
        , "I fork my children with _____"
        , "My shared socket connects to ____'s backend"
        , "I can't believe you improved ______ by deleting __________"
        , "The only thing more dangerous than _____ is a programmer with ________."
        , "1.  ________ 2. _________  3. Profit."
        , "'Monads are easy! Just think of them as _______'"
        , "_____: powered by the cloud."
        , "insertBerfore ______."
        , "I once made a robot around the concept of _____."
        , "According to trends on Github, the next big thing is _____."
        , "It took over 40 hours to document _____. "
        , "// TODO: _____."
        , "npm install _____."
        , "Support for _____ has finally arrived."
        , "I got 99 github Issues but _____ ain't one"
        , "_____: Doing it the Production way"
        , "_____ : I like to do it functionally"
        , "I think _____ needs tests."
        , "I'll be working late because _____ is about to catch fire."
        , "We wrote our own build tool based on _____."
        , "We can't pay you, but we can offer _____ in compensation."
        , "Development is 90% _____ and 10% _____."
        , "Cowsay _____."
        , "_____ worked in development."
        , "We took the plunge and rewrote _______ in Go."
        , "Implementing _____________ should take only 2 lines of code."
        , "Learn _____ the hard way."
        , "It's just a hack to make _____ run."
        , "It's been 91 days since _____ was updated"
        , "_____ is Turing complete."
        ];

    straightAnswers = [
      "a MEAN developer stack"
        , "'413: Entity Too Large' Errors"
        , "Removing PHP from the development stack"
        , "Flash"
        , "Slower broadband speeds"
        , "Faster upload time"
        , "Code optimisation"
        , "Refactoring"
        , "a trendy young startup"
        , "The Cult of Mac"
        , "The fucking JVM"
        , "Morning Standups"
        , "The \<body\> tag"
        , "Munging"
        , "That goddam paperclip"
        , "The smell of the guy from sysadmin"
        , "syntactic sugar"
        , "Sudo rm-rf /"
        , "Inappropriately contracted variable names"
        , "Spaces not tabs"
        , "Discovering Stackoverflow is down!!!??!!!!"
        , "Ruby"
        , "Sinatra"
        , "// What does this even do?"
        , "Slackware"
        , "Rack"
        , "Short Stroking"
        , "Someone not reading fucking manual"
        , "Replacing all dev's machines with Raspberry Pis"
        , "Regular Expressions"
        , "Rebasing Master"
        , "Git Force"
        , "Git Push"
        , "Pull requests"
        , "Re-writing deployment scripts at 2 AM"
        , "Read-only Fridays"
        , "Programming while drunk"
        , "Profanity in the git log"
        , "Production"
        , "PHP"
        , "Patch Tuesday"
        , "Linters"
        , "Minimum Viable Product"
        , "NPM"
        , "Node"
        , "Multiple measurement systems"
        , "Mutation of immutable data"
        , "Neckbeards"
        , "Monads"
        , "Women In Tech"
        , "Merge Conflicts"
        , "Filter-Map-Reduce"
        , "Deleting more lines than you add"
        , "a shared root password"
        , "Mac OSX"
        , "The ship-it squirrel"
        , "Little Bobby Tables"
        , "Legacy Code"
        , "Linus Torvalds"
        , "Kill -9"
        , "Kernal panic"
        , "Internet Explorer compatability hacks"
        , "Infinite loops"
        , "Github Issues"
        , "Haskell"
        , "Hate driven development"
        , "The Mainframe"
        , "Server Hum"
        , "Cowsay Moo"
        , "CEOs with root access"
        , "command line options"
        , "Commenting every line of code"
        , "Committing from the bar."
        , "// TO DO"
        , "Continuous testing"
        , "The Blue Screen of Death"
        , "Tail recursion"
        , "Object permanence."
        , "recruiters"
        , "Python"
        , "the Bourne Again Shell"
        , "The Apple start-up sound"
        , "Windows NT"
        , "Internet Explorer"
        , "Elixir"
        ];
  };
}

jah();
