const content = {


zh:{


name:"刘丰鸣",

title:"学生 | 金融方向 | 波兰留学",


"about-title":"关于我",

about:
"你好，我是刘丰鸣，来自中国。目前正在准备前往波兰华沙大学学习。我对金融、经济以及国际商业领域有浓厚兴趣，同时喜欢探索不同国家的文化和城市。",


"education-title":"教育经历",

education:
"华沙大学 University of Warsaw\n2026年至今\n预科课程 Foundation Program\n未来方向：金融 Finance",



"interest-title":"兴趣领域",

interest:[
"金融与经济",
"国际商业",
"欧洲文化",
"旅行与城市探索",
"科技"
],


"goal-title":"个人目标",

goal:
"希望通过国际化学习环境提升专业能力、语言能力以及跨文化交流能力，未来在金融领域继续发展。",


"contact-title":"联系方式",

contact:
"邮箱：fengming@liufm.top"


},



en:{


name:"Liu Fengming",

title:"Student | Finance | Study in Poland",


"about-title":"About Me",

about:
"Hello, I am Liu Fengming from China. I am preparing for my academic journey at the University of Warsaw. I am interested in finance, economics and international business. I also enjoy exploring different cultures and cities.",


"education-title":"Education",

education:
"University of Warsaw\n2026 - Present\nFoundation Program\nFuture Major: Finance",


"interest-title":"Interests",

interest:[
"Finance and Economics",
"International Business",
"European Culture",
"Travel and City Exploration",
"Technology"
],


"goal-title":"Goals",

goal:
"I hope to improve my professional knowledge, language skills and cross-cultural communication abilities through international education.",


"contact-title":"Contact",

contact:
"Email: fengming@liufm.top"


}


};



function changeLanguage(lang){


document.getElementById("name").innerText =
content[lang].name;


document.getElementById("title").innerText =
content[lang].title;


document.getElementById("about-title").innerText =
content[lang]["about-title"];


document.getElementById("about").innerText =
content[lang].about;


document.getElementById("education-title").innerText =
content[lang]["education-title"];


document.getElementById("education").innerText =
content[lang].education;


document.getElementById("interest-title").innerText =
content[lang]["interest-title"];


document.getElementById("interest").innerHTML =
content[lang].interest
.map(item=>`<li>${item}</li>`)
.join("");



document.getElementById("goal-title").innerText =
content[lang]["goal-title"];


document.getElementById("goal").innerText =
content[lang].goal;



document.getElementById("contact-title").innerText =
content[lang]["contact-title"];


document.getElementById("contact").innerText =
content[lang].contact;


}



changeLanguage("zh");
