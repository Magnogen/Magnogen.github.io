var quotes = [
	["Don't cry because it's over, smile because it happened.", "Dr. Seuss"],
	["Be yourself; everyone else is already taken.", "Oscar Wilde"],
	["Two things are infinite: The Universe and human stupidity; and I'm not sure about The Universe.", "Albert Einstein"],
	["You know you're in love when you can't fall asleep because reality is finally better than your dreams.", "Dr. Seuss"],
	["Be the change that you wish to see in the world.", "Mahatma Gandhi"],
	["A friend is someone who knows all about you and still loves you.", "Elbert Hubbard"],
	["Always forgive your enemies; nothing annoys them so much.", "Oscar Wilde"],
	["My batteries are low, and it's getting dark.", "Mars Rover"],
	["Dear Math, please grow up and solve your own problems, I'm tired of solving them for you.", "Anonymous"],
	["I try to contain my craziness, but the lid keeps popping off.", "Anonymous"],
	["I'm not stubborn, my way is just better than yours.", "Anonymous"],
	["Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.", "Albert Einstein"],
	["Teamwork - working together towards a common goal... Until a 'difference of opinion' gets someone dropped into molten lava.", "Anonymous"],
	["When you fall, get back up. Otherwise you're stuck on the ground wondering what you did wrong.", "Anonymous"],
	["There's a snake in my boot.", "Woody Pride"],
	["42.", "Deep Thought"],
	["Life is fun.", "Odd1sOut"],
	["RIP Milo 2019 - 2019.", "Wilbur Soot"],
	["If I won the award for laziness, I would send somebody to pick it up for me.", "Anonymous"],
	["Why do they call it beauty sleep when you wake up looking terrible?", "Anonymous"],
	["Some people aren't just missing a screw, the whole toolbox is gone.", "Anonymous"],
	["Stop worrying about the world ending today. It's already tomorrow in Australia.", "Charles M. Schulz"],
	["A mind is like a parachute. It doesn't work if it is not open.", "Frank Zappa"],
	["A cop pulled me over and told me \"Papers\", so I said \"Scissors, I win!\" and drove off.", "Anonymous"],
	["The difference between stupidity and genius is that genius has its limits.", "Anonymous"],
	["If what you've done is stupid but it works, then it really isn't that stupid at all.", "David Letterman"],
	["I told the doctor I broke my leg in two places. He told me to quit going to those places.", "Henny Youngman"],
	["Flying is learning how to throw yourself at the ground and miss.", "Douglas Adams"],
	["A girl asked me once if I was married, I said: \"No, I'm alone in this life, you?\"", "Anonymous"],
	["What are you delivering? Get outta here; I'm delivering people - the most valuable of all goods.", "Wilbur Soot"],
	["The best way to make your dreams come true is to wake up.", "Paul Valery"],
	["Hello World!", "My First Working Computer Program"],
	["SyntaxError: invalid syntax on line 1", "My First Computer Program"],
	["Meow.", "Nyan Cat"],
	["Until man duplicates a blade of grass, nature can laugh at his so-called scientific knowledge.", "Thomas Alva Edison"],
	["Very simple ideas lie within the reach only of complex minds.", "Remy de Gourmant"],
	["Blind faith in your leaders, or in anything, will get you killed.", "Bruce Springsteen"],
	["Everybody wants to be Cary Grant. Even I want to be Cary Grant.", "Cary Grant"],
	["Spring is when you feel like whistling even with a shoe full of slush.", "Doug Larson"],
	["To be or not to be?", "Shakespeare"],
	["There's no way I'm giving you a quote to make a stupid quote thing.", "Lucas Lehman"],
	["If a pregnant woman swims, she is a human submarine.", "Anonymous"],
	["I can picture in my mind a world without war, a world without hate. And I can picture us attacking that world because they'd never expect it.", "Anonymous"],
	["For some reason, the crows keep calling my name. I don't know why.", "Caw Jackson"],
	["If the mind is quiet, the soul will speak.", "Anonymous"],
	["Inside every person you know there's a lot of different organs.", "Anonymous"],
	["There is a light at the end of every tunnel, just pray it's not a train.", "Anonymous"],
	["I dream of a better tomorrow, where chickens can cross the road and not be questioned about their motives.", "Ralph Waldo Emerson"],
	["Can you identify yourself? Certainly. I'd know me anywhere.", "Terry Pratchett"],
	["One of the great things about books is sometimes there are some fantastic pictures.", "George W. Bush"],
	["If you shoot a duck, I'll be scared of toasters.", "Anonymous"],
	["In the future, people will write all kinds of nonsense and claim that I said it.", "Albert Einstein"],
	["I'm not perfect, but I'm starting to get comfortable, like a sweater you want to wear all the time.", "Leslie Jones"],
	["Those who critisise our generation forget who rasied it.", "Millennials"],
	["I believe knowledge and observation must precede action.", "Stephen Strange"],
	["Alone is what I have. Alone protects me.", "Sherlock Holmes"],
	["You shouldn't use a straw. I know, I know, it's bad for the environment. It's just a weird way to eat spaghetti.", "Wilbur Soot and Jshlatt"],
	["AAAAAAAAAAAAAAAAAAAAA", "Jshlatt"],
	["Oh, look at that, your tie matches the lava.", "FitMC"],
	["Friends are like birds, they die if you kill them.", "Sandra Przekoracka"],
	["Friends are like birds, they fly away if you get too close.", "Tegan Gailor"],
	["Instead of calling me a snack, call me a candle because I am warm and smell good and I might burn your house down if you forget about me for too long", "Anonymous"],
	["I'm sarcastic because punching people is frowned upon.", "Taryn Reddy"],
	["You're cuter than a baby hedgehog wearing a stripey knitted cardigan and a party hat.", "Google Assistant, in response to \"Am I cute?\""],
	["I need to be taken out. On a date or by a sniper, I don't really care - suprise me.", "Taryn Reddy"],
	["Suicide is the one mistake you won't live to regret.", "Sherlock Holmes"],
	["Taking your own life. Interesting expression. Taking it from who? Once it's over, it's not you who will miss it...", "Sherlock Holmes"],
	["Uh oh spaghettio", "Skeppy"],
	["I'm an excellent housekeeper. Every time I get a divorce, I keep the house.", "Zsa Zsa Gabor"],
	["Happiness is something that comes into our lives through doors we don't even remember leaving open.", "Rose Lane"],
	["There is only one blasphemy, and that is the refusal to experience joy.", "Paul Rudnick"],
	["If this was adulthood the only improvement she could detect in her situation was that she could now eat dessert without eating her vegetables.", "Lisa Alther"],
	["You're not a finished product. You're still in the process of being created.", "Alfred Osmond"],
	["I pretended to be somebody I wanted to be until finally I became that person. Or he became me.", "Cary Grant"],
	["I don't understand a word you just said.", "Anonymous"],
	["It's much more difficult to play tennis with a bowling ball than it is to bowl with a tennis ball.", "<a href=\"https://inspirobot.me/\">InspiroBot.me</a>"],
	["Make it so that wisdom becomes your dream girl, and your dream girl becomes your cat.", "<a href=\"https://inspirobot.me/\">InspiroBot.me</a>"],
	["Stop it. Stop pretending you're not smart.","<a href=\"https://inspirobot.me/\">InspiroBot.me</a>"],
	["We are friends... Right Agnes?", "Jens"],
	["Don't be racist. Hate everyone equally and don't forget to wear a mask.","aaa bbb"],
	["Yoo dude this slaps hard, anxiety never sounded so good before", "Dani"],
	["i am are have stupid", "Anonymous"],
	["right after the choom choom i like to have some wetness into some dry donk", "Eliminate"],
	["Reaching for perfection, we will always come up short; but perhaps, we can manage to get closer in the process.", "Anonymous"],
	["Don't believe everything you read on the internet.", "Abraham Lincoln"],
	["Men don't cry for themselves but for their comrades.", "Final Fantasy Crisis Core"],
	["A man just attacked me with some cheese and milk! How dairy!!!", "Unknown"],
	["If the girls get one look at my masterful physique, they'll never let me alone.", "Shaggy"],
	["Peace was never an option.", "The Goose"],
	["You see, Tommy, you're speaking words. But the thing about this world, Tommy, is that the only universal language is violence, and we've had that discussion.", "Technoblade"],
	["Even if you don't like halloween, you have to appreciate its position as the sole thing keeping Christmas from advancing even earlier into the year like a cancerous growth.", "Kvitoya"],
	["Hard times happen, but every day is a new day. Keep moving forward.", "Anonymous"],
	["I'm not sure what World War 3 will be fought with, but in World War 4 they will fight with sticks and stones.", "Albert Einstein"],
	["Aspire to success. Don't just embrace your dark side.", "<a href=\"https://inspirobot.me/\">InspiroBot.me</a>"],
	["X is always the unknown, Let us use W to make it seem as though we have advanced above the usual!", "Richard Feynman"],
	["The problem with developing a perpetual motion machine, is that it would take forever to test it.", "Professor Kompressor"],
	["You're canonically a villager now.", "Technoblade"],
	["E", "E"],
	["It's just the microchip taking effect, don't worry", "Spider2153"],
	["chovekus", "LobsterSir"],
	["fight an ancient beings...with a <i><b>S P O O N</b></i>", "edmord"],
	["sometimes you just gotta bend the spacetime continuum to get it out the box", "Chovek"],
	["And eventually you'll realise your life has become a math problem", "Chovek"],
	["contained nuclear waste is significantly less dangerous than spraying CO2 everywhere", "Sire John"],
	["Yo dudes, The Empire's pretty chill. Maybe you could, like, join it or something.", "Darth Vader <a href=\"https://youtu.be/EWTYnsikfWE\">(Danksolutely)</a>"],
	["lemon, would you please edit that", "Chovek"], 
        ["I hate the Internet", "skadoodly_dave"],
	["itd about those spheres", "LobsterSir"],
	["There are time when a psychic is just a psychic.", "<a href=\"https://inspirobot.me/\">InspiroBot.me</a>"],
	["Say no to. Be insecure about. Transcend. Bow down to. Expose.", "<a href=\"https://inspirobot.me/\">InspiroBot.me</a>"],
	["You shouldn't let the scientific method mess up your date", "<a href=\"https://inspirobot.me/\">InspiroBot.me</a>"],
	["I got a jar of dirt. I got a jar of dirt. And guess whats inside it?", "Jack Sparrow"],
	["Somehow Palpatine returned", "Poe Dameron but it's bad writing"],
	["We should pull some Holdo maneuver, do some real damage", "Meriadoc \"Merry\" Brandybuck"],
	["C'mon that move is one in a million", "Finn"],
	["The dark side of the force is a pathway to many abilities, some considered to be unnatural", "Palpatine"],
	["The dark side of the force is a pathway to many abilities, some considered to be unnatural", "Plagiarism"],
	["I don't like sand", "Anakin Skywalker"],
	["words are dumb, let us continue to communicate by telepathy", "Magnogen :)"],
	["Cancel culture should cancel itself", "Magnogen"],
	["hey don't worry about it, if a fat slob like me can get a gf, anyone can", "MELOD"],
        ["There are a thousand ways of saying \"no\", and only some of them mean \"yes\".", "Athos"]
];
