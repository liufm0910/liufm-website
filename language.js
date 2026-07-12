const content={


zh:{


name:"刘丰鸣",

title:"学生 | 金融方向 | 波兰留学",



"about-title":"关于我",

about:
"大家好，我叫刘丰鸣，来自中国四川省成都市。\n\n我的家乡以大熊猫和四川美食闻名。成都每年吸引很多来自不同地方的游客，这让我从小接触到不同文化，也培养了我了解世界的兴趣。\n\n我刚刚结束高中生活，目前正在为大学学习做准备。\n\n我的兴趣爱好是旅游和打羽毛球。虽然我的羽毛球水平不是专业级，但是运动让我保持健康，也让我放松自己。",




"education-title":"教育经历",

education:
"成都市成华区嘉祥外国语学校\n2023 - 2026\n高中\n\n华沙大学 University of Warsaw\n2026 - 至今\nFoundation Program（预科课程）\n\n未来学习方向：金融 Finance",





"interest-title":"兴趣爱好",

interest:[

"旅游与探索不同文化",

"羽毛球",

"金融与经济",

"欧洲历史文化",

"地理科学"

],





"travel-title":"喜欢的旅游景点",

travel:
"我最喜欢的旅游城市之一是香港。去年我曾经去过香港，它是一座现代化国际城市，同时也拥有丰富的历史文化。\n\n香港有很多著名景点，例如维多利亚港、太平山顶和尖沙咀。维多利亚港的夜景非常美丽。\n\n我喜欢香港不仅因为它的城市景观，也因为它体现了不同文化之间的交流。未来来到欧洲学习以后，我也希望探索更多欧洲城市。",




"plan-title":"未来学习规划",

plan:
"我的学习规划主要分为三个阶段。\n\n第一，在预科阶段，我希望提高英语能力，尤其是听力和口语。\n\n第二，在本科阶段，我计划学习金融相关知识，包括金融市场、经济学、会计和投资分析。\n\n第三，在完成本科以后，我希望继续提升专业能力，考虑攻读硕士学位或者寻找金融领域实习机会。",




"contact-title":"联系方式",

contact:
"邮箱：fengming@liufm.top"


},





en:{


name:"Liu Fengming",

title:"Student | Finance | Study in Poland",




"about-title":"About Me",

about:
"Hello, my name is Liu Fengming and I come from Chengdu, Sichuan Province, China.\n\nMy hometown is famous for pandas and Sichuan cuisine. Chengdu attracts many visitors from different places, which helped me become interested in different cultures.\n\nI have just finished senior high school and I am preparing for my university studies.\n\nMy hobbies are travelling and playing badminton. Although I am not a professional player, I enjoy this sport because it helps me stay healthy and relaxed.",





"education-title":"Education",

education:
"Chengdu Chenghua Jiahua Foreign Language School\n2023 - 2026\nHigh School\n\nUniversity of Warsaw\n2026 - Present\nFoundation Programme\n\nFuture Study Direction: Finance",





"interest-title":"Interests",

interest:[

"Travelling and exploring cultures",

"Badminton",

"Finance and Economics",

"European History and Culture",

"geography"

],





"travel-title":"Favourite Tourist Attraction",

travel:
"One of my favourite tourist destinations is Hong Kong. I visited Hong Kong last year and it became one of my favourite cities.\n\nHong Kong is a modern international city with rich historical and cultural traditions.\n\nFamous places include Victoria Harbour, Victoria Peak and Tsim Sha Tsui.\n\nI like Hong Kong because it shows communication between different cultures. In the future, I hope to explore more European cities.",





"plan-title":"Future Study Plan",

plan:
"My study plan has three stages.\n\nFirst, during the Foundation Programme, I want to improve my English skills, especially listening and speaking.\n\nSecond, during my bachelor's degree, I plan to study finance-related subjects, including financial markets, economics, accounting and investment analysis.\n\nFinally, after graduation, I hope to continue improving my professional skills and consider a master's degree or finance-related internship.",





"contact-title":"Contact",

contact:
"Email: fengming@liufm.top"


}


};





function changeLanguage(lang){


document.getElementById("name").innerText=content[lang].name;


document.getElementById("title").innerText=content[lang].title;


document.getElementById("about-title").innerText=content[lang]["about-title"];

document.getElementById("about").innerText=content[lang].about;



document.getElementById("education-title").innerText=content[lang]["education-title"];

document.getElementById("education").innerText=content[lang].education;



document.getElementById("interest-title").innerText=content[lang]["interest-title"];

document.getElementById("interest").innerHTML=

content[lang].interest.map(i=>`<li>${i}</li>`).join("");



document.getElementById("travel-title").innerText=content[lang]["travel-title"];

document.getElementById("travel").innerText=content[lang].travel;



document.getElementById("plan-title").innerText=content[lang]["plan-title"];

document.getElementById("plan").innerText=content[lang].plan;



document.getElementById("contact-title").innerText=content[lang]["contact-title"];

document.getElementById("contact").innerText=content[lang].contact;


}



changeLanguage("zh");
