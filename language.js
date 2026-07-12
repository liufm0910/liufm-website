const content = {


zh:{


name:"刘丰鸣",

title:"学生 | 金融方向 | 波兰留学",



"nav-home":"首页",

"nav-experience":"经历",

"nav-blog":"博客",

"nav-contact":"联系",




"about-title":"关于我",

about:

"你好，我是刘丰鸣，来自中国。目前正在准备前往波兰华沙大学开启新的学习阶段。我对金融、经济以及国际商业领域有浓厚兴趣，同时喜欢探索不同国家的文化和城市。",






"education-title":"教育经历",

education:

"华沙大学 University of Warsaw\n\n2026年至今\nFoundation Program（预科课程）\n\n未来学习方向：金融 Finance",






"interest-title":"兴趣领域",

interest:[

"金融与经济",

"国际商业",

"欧洲文化与历史",

"旅行与城市探索",

"科技与数字化"

],







"goal-title":"个人目标",

goal:

"希望通过国际化学习环境提升专业知识、语言能力以及跨文化交流能力。未来希望在金融领域继续深造，并积累国际化学习和工作经验。",







"blog-title":"博客",

blog-content:

"这里将记录我的留学生活、欧洲旅行经历、金融学习过程以及个人成长记录。",






"contact-title":"联系方式",

"contact-content":

"邮箱：fengming@liufm.top"



},






en:{


name:"Liu Fengming",

title:"Student | Finance | Study in Poland",



"nav-home":"Home",

"nav-experience":"Experience",

"nav-blog":"Blog",

"nav-contact":"Contact",





"about-title":"About Me",

about:

"Hello, I am Liu Fengming from China. I am preparing for my academic journey at the University of Warsaw. I am interested in finance, economics and international business. I also enjoy exploring different cultures and cities around the world.",






"education-title":"Education",

education:

"University of Warsaw\n\n2026 - Present\nFoundation Program\n\nFuture Major: Finance",






"interest-title":"Interests",

interest:[

"Finance and Economics",

"International Business",

"European Culture and History",

"Travel and City Exploration",

"Technology"

],






"goal-title":"Goals",

goal:

"I hope to improve my professional knowledge, language skills and cross-cultural communication abilities through international education. In the future, I would like to continue developing in the finance field.",







"blog-title":"Blog",

blog-content:

"This section will record my study abroad life, European travels, finance learning journey and personal growth.",






"contact-title":"Contact",

"contact-content":

"Email: fengming@liufm.top"


}


};








function changeLanguage(lang){



document.getElementById("name").innerText =
content[lang].name;



document.getElementById("title").innerText =
content[lang].title;



document.getElementById("nav-home").innerText =
content[lang]["nav-home"];



document.getElementById("nav-experience").innerText =
content[lang]["nav-experience"];



document.getElementById("nav-blog").innerText =
content[lang]["nav-blog"];



document.getElementById("nav-contact").innerText =
content[lang]["nav-contact"];




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

.map(i=>`<li>${i}</li>`)

.join("");





document.getElementById("goal-title").innerText =
content[lang]["goal-title"];



document.getElementById("goal").innerText =
content[lang].goal;






document.getElementById("blog-title").innerText =
content[lang]["blog-title"];



document.getElementById("blog-content").innerText =
content[lang]["blog-content"];






document.getElementById("contact-title").innerText =
content[lang]["contact-title"];



document.getElementById("contact-content").innerText =
content[lang]["contact-content"];



}



changeLanguage("zh");
