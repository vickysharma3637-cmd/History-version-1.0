const questions = [
  {
    question: "भारत पर मोहम्मद बिन कासिम का पहला सफल आक्रमण किस वर्ष हुआ था?",
    options: ["712 AD", "622 AD", "1001 AD", "1192 AD"],
    correct: 0
  },
  {
    question: "भारत में अरबों द्वारा पहली महत्वपूर्ण विजय कौन सी थी?",
    options: ["मुल्तान", "देबल", "ब्रह्मणाबाद", "अरबोर"],
    correct: 1
  },
  {
    question: "मोहम्मद  बिन कासिम के आक्रमण के समय सिंध का शासक कौन था?",
    options: ["दाहिर", "पृथ्वीराज चौहान", "हर्षवर्धन", "समुद्रगुप्त"],
    correct: 0
  },
  {
    question: "मोहम्मद  बिन कासिम ने किस खलीफा के अधीन भारत पर आक्रमण किया था?",
    options: ["उम्मैयद खलीफा", "अब्बासिद खलीफा", "फातिमिद खलीफा", "तुर्क राजवंश"],
    correct: 0
  },
  {
    question: "भारत में अरब आक्रमण का मुख्य लक्ष्य कौन सा क्षेत्र था?",
    options: ["सिंध", "पंजाब", "गुजरात", "बंगाल"],
    correct: 0
  },
  {
    question: "मोहम्मद  बिन कासिम के भारत आक्रमण का एक मुख्य तात्कालिक कारण क्या था?",
    options: ["इस्लाम का प्रसार", "व्यापार मार्गों को नियंत्रित करना", "देबल बंदरगाह पर समुद्री डाकुओं द्वारा जहाज लूटना", "भारत से धन लूटना"],
    correct: 2
  },
  {
    question: "भारत में अरब आक्रमण के बारे में जानकारी का एक महत्वपूर्ण प्राथमिक स्रोत कौन सा है?",
    options: ["अल-बिलादुरी", "फिरदौसी", "इब्न बतूता", "अल-बरुनी"],
    correct: 0
  },
  {
    question: "सिंध में दाहिर का शासक वंश मुख्य रूप से किस वर्ग से संबंधित था?",
    options: ["राजपूत", "पल्लव", "ब्राह्मण", "गुर्जर-प्रतिहार"],
    correct: 2
  },
  {
    question: "अरबों द्वारा सिंध में गैर-मुस्लिमों पर कौन सा विशेष कर लगाया गया था?",
    options: ["जिज़्या", "जकात", "खराज", "खम्स"],
    correct: 0
  },
  {
    question: "भारत में अरब आक्रमण का दीर्घकालिक परिणाम क्या था?",
    options: [
      "काफी समय तक रहा और भारत के बड़े हिस्से को प्रभावित किया",
      "सिंध तक ही सीमित रहा और इसका भारतीय राजनीति पर सीमित प्रभाव पड़ा",
      "तुरंत समाप्त हो गया क्योंकि वे हार गए थे",
      "भारत में एक बड़े मुस्लिम साम्राज्य की नींव रखी"
    ],
    correct: 1
  },
  {
    question: "प्रारंभिक अरब आक्रमण मुख्य रूप से किस भारतीय नदी के बेसिन तक सीमित था?",
    options: ["सिंधु नदी", "गंगा नदी", "ब्रह्मपुत्र नदी", "गोदावरी नदी"],
    correct: 0
  },
  {
    question: "जिस समय मोहम्मद  बिन कासिम ने आक्रमण किया, उस समय उम्मैयद खलीफा कौन था?",
    options: ["खलीफा वलीद I", "खलीफा उमर", "खलीफा हारून अल-रशीद", "खलीफा अली"],
    correct: 0
  },
  {
    question: "सिंध में अरब आक्रमणकारियों के लिए कौन सा शहर एक महत्वपूर्ण बंदरगाह और प्रवेश बिंदु था?",
    options: ["देबल", "कालीकट", "सूरत", "गोवा"],
    correct: 0
  },
  {
    question: "भारत पर अरब आक्रमण के सांस्कृतिक प्रभावों में से एक क्या था?",
    options: [
      "भारतीय खगोल विज्ञान और गणित का अरब दुनिया में प्रसार",
      "इस्लामी वास्तुकला का भारत में तेजी से विकास",
      "पूरे भारत में बड़े पैमाने पर इस्लाम का धर्मान्तरण",
      "स्थानीय भारतीय संस्कृतियों का पूर्ण विनाश"
    ],
    correct: 0
  },
  {
    question: "सिंध में अरबों द्वारा प्रशासनिक और धार्मिक भाषा के रूप में कौन सी भाषा शुरू की गई थी?",
    options: ["अरबी", "फ़ारसी", "तुर्की", "उर्दू"],
    correct: 0
  },
  {
    question: "मोहम्मद  बिन कासिम और राजा दाहिर के बीच की निर्णायक लड़ाई कौन सी थी?",
    options: ["चौसा का युद्ध", "तर-ओर का युद्ध", "तराइन का पहला युद्ध", "पानीपत का पहला युद्ध"],
    correct: 1
  },
  {
    question: "देबल के बाद मोहम्मद  बिन कासिम ने किस महत्वपूर्ण शहर पर विजय प्राप्त की?",
    options: ["ब्राह्मणबाद", "लोहना", "मुल्तान", "अलौर"],
    correct: 0
  },
  {
    question: "मोहम्मद  बिन कासिम को भारत से कब वापस बुलाया गया था?",
    options: ["715 AD", "720 AD", "700 AD", "730 AD"],
    correct: 0
  },
  {
    question: "मोहम्मद  बिन कासिम को भारत पर आक्रमण करने का आदेश किसने दिया था?",
    options: ["अल-हज्जाज", "खालिद बिन वलीद", "तारिक बिन ज़ियाद", "अबू बक्र"],
    correct: 0
  },
  {
    question: "मोहम्मद  बिन कासिम की वापसी के बाद सिंध में अरबों की शक्ति का क्या हुआ?",
    options: ["अब्बासिद खलीफा", "तुर्की शासक", "स्थानीय भारतीय शासक", "मंगोल"],
    correct: 2
  },
  {
    question: "भारत में अरब आक्रमण का सबसे महत्वपूर्ण अल्पकालिक परिणाम क्या था?",
    options: ["सिंध पर अरबों का स्थायी नियंत्रण", "पूरे उत्तर भारत पर अरबों का नियंत्रण", "इस्लाम का भारत से पूर्ण निष्कासन", "नए भारतीय साम्राज्यों का उदय"],
    correct: 0
  },
  {
    question: "अरबों ने भारत से कौन सी महत्वपूर्ण अवधारणा सीखी और उसे पश्चिमी दुनिया में फैलाया?",
    options: ["अरबी संख्या प्रणाली का परिचय", "कागज के निर्माण का परिचय", "छाप-खाना (Printing Press) का परिचय", "बारूद का परिचय"],
    correct: 0
  },
  {
    question: "सिंध में अरब शासन के तहत एक महत्वपूर्ण प्रशासनिक परिवर्तन क्या था?",
    options: ["भारतीय व्यापारियों द्वारा व्यापार बंद करना", "नया भूमि कर प्रणाली की शुरुआत", "सोने के सिक्कों का प्रचलन बंद करना", "दास व्यापार का अंत"],
    correct: 1
  },
  {
    question: "सिंध में अरब विजय का एक महत्वपूर्ण सामाजिक प्रभाव क्या था?",
    options: ["सिंध में इस्लामी विद्वानों का आगमन", "सभी हिंदू मंदिरों का विनाश", "स्थानीय भाषाओं का पूर्ण प्रतिस्थापन", "नए विश्वविद्यालयों की स्थापना"],
    correct: 0
  },
  {
    question: "भारतीय उपमहाद्वीप में अरबों का क्षेत्रीय विस्तार मुख्य रूप से कहाँ तक सीमित था?",
    options: ["गंगा नदी तक", "पूरे भारतीय उपमहाद्वीप तक", "केवल सिंध प्रांत तक", "राजपूत राज्यों तक"],
    correct: 2
  },
  {
    question: "अरब आक्रमण के समय सिंध में किस राजवंश का शासन था?",
    options: ["पाल वंश", "चच वंश", "राष्ट्रकूट वंश", "प्रतिहार वंश"],
    correct: 1
  },
  {
    question: "दाहिर के पिता का क्या नाम था जिन्होंने सिंध में ब्राह्मण शासन की स्थापना की थी?",
    options: ["राजा चच", "राजा राय साहसी", "राजा हर्षवर्धन", "राजा विक्रमादित्य"],
    correct: 0
  },
  {
    question: "अरबों ने भारत को किस नाम से संबोधित किया था?",
    options: ["हिंदुस्तान", "अल-हिंद", "भारतवर्ष", "जंबुद्वीप"],
    correct: 1
  },
  {
    question: "मोहम्मद  बिन कासिम द्वारा सिंध पर विजय का मुख्य उद्देश्य क्या था?",
    options: ["बौद्ध धर्म का प्रसार", "व्यापारिक मार्गों पर नियंत्रण और धन की प्राप्ति", "कृषि का विकास", "सांस्कृतिक आदान-प्रदान"],
    correct: 1
  },
  {
    question: "मोहम्मद  बिन कासिम के आक्रमण के समय देबल बंदरगाह पर किन समुद्री डाकुओं ने अरब जहाजों को लूटा था?",
    options: ["जाट और मेद", "राजपूत और गुर्जर", "अफगान और तुर्क", "मुगल और मराठा"],
    correct: 0
  },
  {
    question: "सिंध विजय के बाद मोहम्मद बिन कासिम ने मुल्तान पर भी विजय प्राप्त की। मुल्तान को किस नाम से जाना जाता था?",
    options: ["स्वर्ण नगरी", "मंदिरों का शहर", "सफेद शहर", "लाल शहर"],
    correct: 0
  },
  {
    question: "अरब आक्रमण के बाद सिंध में कौन सी नई कर प्रणाली लागू की गई?",
    options: ["एकता प्रणाली", "जागीरदारी प्रणाली", "जिज़्या और खराज", "मनसबदारी प्रणाली"],
    correct: 2
  },
  {
    question: "मोहम्मद बिन कासिम की मृत्यु किस खलीफा के आदेश पर हुई मानी जाती है?",
    options: ["खलीफा सुलेमान", "खलीफा उमर II", "खलीफा अब्बास", "खलीफा अल-मंसूर"],
    correct: 0
  },
  {
    question: "सिंध में अरबों द्वारा स्थापित की गई पहली मस्जिद कौन सी थी?",
    options: ["कराची की मस्जिद", "मुल्तान की मस्जिद", "देबल की मस्जिद", "मनसूरा की मस्जिद"],
    correct: 2
  },
  {
    question: "अरबों के आक्रमण के समय सिंध की राजधानी क्या थी?",
    options: ["देबल", "मुल्तान", "अलौर", "ब्राह्मणाबाद"],
    correct: 2
  },
  {
    question: "अरबों के सिंध विजय का तात्कालिक परिणाम क्या था?",
    options: [
      "पूरे भारत में मुस्लिम शासन की स्थापना",
      "सिंध में एक नया प्रशासनिक और सांस्कृतिक केंद्र स्थापित हुआ",
      "हिंदू धर्म का पूर्णतः उन्मूलन",
      "व्यापार मार्गों का पूर्णतः विनाश"
    ],
    correct: 1
  },
  {
    question: "मोहम्मद बिन कासिम किस आयु में सिंध पर आक्रमण करने आया था?",
    options: ["15 वर्ष", "17 वर्ष", "20 वर्ष", "25 वर्ष"],
    correct: 1
  },
  {
    question: "सिंध विजय के बाद अरबों ने मुल्तान पर विजय क्यों प्राप्त की?",
    options: [
      "सांस्कृतिक महत्व के कारण",
      "व्यापारिक महत्व और सोने के लिए",
      "धार्मिक कारणों से",
      "सामरिक दृष्टि से इसका कोई महत्व नहीं था"
    ],
    correct: 1
  },
  {
    question: "अरबों के सिंध पर आक्रमण का भारतीय इतिहास पर क्या सीमित प्रभाव पड़ा?",
    options: [
      "यह एक अस्थायी घटना थी जिसका कोई दीर्घकालिक प्रभाव नहीं था।",
      "इसने पूरे उत्तर भारत को प्रभावित किया।",
      "यह सिंध तक ही सीमित रहा और शेष भारत पर इसका सीधा प्रभाव कम रहा।",
      "इसने भारत में एक बड़ा मुस्लिम साम्राज्य स्थापित किया।"
    ],
    correct: 2
  },
  {
    question: "मोहम्मद बिन कासिम द्वारा सिंध विजय के समय बगदाद के खलीफा कौन थे?",
    options: [
      "यह अब्बासिद काल था, उम्मैयद नहीं।",
      "बगदाद तब तक इस्लामी खलीफा की राजधानी नहीं बना था।",
      "अबू जाफर अल-मंसूर",
      "हारून अल-रशीद"
    ],
    correct: 1
  },
  {
    question: "अरबों के आक्रमण से पहले सिंध में बौद्ध धर्म की स्थिति कैसी थी?",
    options: [
      "पूरी तरह से समाप्त हो चुका था।",
      "प्रमुख धर्म के रूप में प्रचलित था।",
      "हाशिए पर था, लेकिन कुछ अनुयायी थे।",
      "शासक वर्ग का धर्म था।"
    ],
    correct: 1
  },
  {
    question: "दाहिर ने अपनी राजधानी अलौर से कहाँ स्थानांतरित कर दी थी, जब मोहम्मद बिन कासिम ने आक्रमण किया?",
    options: ["मुल्तान", "देबल", "राओर (ब्राह्मणाबाद के पास)", "कराची"],
    correct: 2
  },
  {
    question: "अरबों द्वारा भारत से सीखे गए कौन से ज्ञान को यूरोप तक पहुंचाया गया?",
    options: [
      "आयुर्वेद और सर्जरी",
      "दशमलव प्रणाली और भारतीय अंक",
      "युद्ध नीतियां",
      "ज्योतिष और जादू-टोना"
    ],
    correct: 1
  },
  {
    question: "अरब आक्रमण के बाद सिंध में किस प्रकार के प्रशासन की स्थापना की गई?",
    options: [
      "पूरी तरह से इस्लामी शरीयत कानून पर आधारित",
      "स्थानीय कानूनों और परंपराओं को बनाए रखते हुए",
      "केवल सैन्य प्रशासन",
      "सामंती व्यवस्था"
    ],
    correct: 1
  },
  {
    question: "मोहम्मद बिन कासिम की मृत्यु का कारण क्या था?",
    options: [
      "युद्ध में मारा गया",
      "बीमारी से मृत्यु",
      "खलीफा के आदेश पर निष्पादित किया गया",
      "प्राकृतिक मृत्यु"
    ],
    correct: 2
  },
  {
    question: "किस भारतीय विद्वान ने 'सिद्धांत' और 'ब्रह्मस्फुटसिद्धांत' जैसे ग्रंथों का अरबी में अनुवाद किया, जिससे अरब खगोल विज्ञान और गणित प्रभावित हुए?",
    options: ["आर्यभट्ट", "ब्रह्मगुप्त", "वराहमिहिर", "भास्कराचार्य"],
    correct: 1
  },
  {
    question: "अरबों के लिए सिंध क्यों रणनीतिक रूप से महत्वपूर्ण था?",
    options: [
      "कृषि उपज के लिए",
      "भारत में प्रवेश का द्वार और व्यापारिक मार्गों पर नियंत्रण के लिए",
      "धार्मिक प्रचार के लिए",
      "सैन्य भर्ती के लिए"
    ],
    correct: 1
  },
  {
    question: "मोहम्मद बिन कासिम के आक्रमण को किस इतिहासकार ने 'एक अप्रत्याशित और अस्थायी जीत' बताया है?",
    options: ["आर.सी. मजूमदार", "एच.एम. इलियट", "लेनपूल", "सतीश चंद्र"],
    correct: 2
  },
  {
    question: "मोहम्मद बिन कासिम के आक्रमण के समय सिंध के शासक दाहिर को किस नदी के तट पर हराया गया था?",
    options: ["सिंधु नदी", "झेलम नदी", "रावी नदी", "चेनाब नदी"],
    correct: 0
  },
  {
    question: "अरब आक्रमण के बाद सिंध में कौन सा नया शहर बसाया गया जो इस्लामी शिक्षा और संस्कृति का केंद्र बना?",
    options: ["कराची", "लाहौर", "मनसूरा", "फैसलाबाद"],
    correct: 2
  },
  {
    question: "सिंध में मोहम्मद बिन कासिम के आगमन से पहले, अरबों ने भारत पर कई छोटे-मोटे हमले किए थे। ये हमले किस क्षेत्र में केंद्रित थे?",
    options: ["दक्षिण भारत", "गुजरात और बलूचिस्तान के तटीय क्षेत्र", "उत्तर भारत", "पूर्वी भारत"],
    correct: 1
  },
  {
    question: "मोहम्मद बिन कासिम की सफलताओं का एक मुख्य कारण क्या था?",
    options: [
      "भारतीय शासकों की एकता",
      "उसकी विशाल सेना",
      "दाहिर और उसके राज्यों के बीच आंतरिक संघर्ष और अरबों की बेहतर रणनीति",
      "भारतीय सेना की कमजोरी"
    ],
    correct: 2
  },
  {
    question: "अरब आक्रमण के बाद सिंध में विकसित हुई इस्लामी कला और वास्तुकला की शैली को क्या कहा जाता है?",
    options: ["मुगल शैली", "द्रविड़ शैली", "इंडो-इस्लामिक शैली (इसका प्रारंभिक रूप)", "गोथिक शैली"],
    correct: 2
  },
  {
    question: "सिंध विजय के बाद, मोहम्मद बिन कासिम ने स्थानीय प्रशासन में कौन से सुधार किए?",
    options: [
      "उसने पूरी तरह से अरब प्रणाली लागू की।",
      "उसने स्थानीय हिंदू अधिकारियों को पद पर बने रहने की अनुमति दी।",
      "उसने सभी गैर-मुस्लिमों को सिंध से निष्कासित कर दिया।",
      "उसने केवल सैन्य प्रशासन स्थापित किया।"
    ],
    correct: 1
  },
  {
    question: "अरबों द्वारा भारत से प्रभावित होकर शुरू की गई चिकित्सा प्रणाली का क्या नाम था?",
    options: ["यूनानी चिकित्सा", "एलोपैथी", "आयुर्वेदिक चिकित्सा (जिसके सिद्धांतों को उन्होंने अपनाया)", "सिद्ध चिकित्सा"],
    correct: 2
  },
  {
    question: "मोहम्मद बिन कासिम के अभियान को 'भारतीय इतिहास का एक प्रसंग मात्र' क्यों माना जाता है?",
    options: [
      "क्योंकि वह भारत में अधिक समय तक नहीं रहा।",
      "क्योंकि इसका प्रभाव केवल सिंध तक सीमित रहा और इसने भारत के बड़े हिस्से को प्रभावित नहीं किया।",
      "क्योंकि उसने कोई बड़ी लूट नहीं की।",
      "क्योंकि वह राजा दाहिर से हार गया था।"
    ],
    correct: 1
  },
  {
    question: "मोहम्मद बिन कासिम के आक्रमण का मुख्य कारण क्या था जो सीधे खलीफा को प्रभावित कर रहा था?",
    options: ["धार्मिक प्रचार", "भारत की धन-संपदा", "व्यापारिक जहाजों की सुरक्षा और लूटपाट का बदला", "साम्राज्य का विस्तार"],
    correct: 2
  }

];

let current = 0;
let score = 0;
let userAnswers = [];
let learnerName = "";
let timer;
let markedForReview = [];
let timeExpired = false;
let remainingTime = 0;

// Shuffle questions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Save state
function saveProgress() {
  const data = {
    current,
    score,
    userAnswers,
    questions,
    learnerName,
    markedForReview,
    timeExpired,
    remainingTime
  };
  localStorage.setItem("quizProgress", JSON.stringify(data));
}

// Load state
function loadProgress() {
  const saved = localStorage.getItem("quizProgress");
  if (!saved) return false;
  const data = JSON.parse(saved);

  current = data.current;
  score = data.score;
  userAnswers = data.userAnswers;
  questions = data.questions;
  learnerName = data.learnerName;
  markedForReview = data.markedForReview;
  timeExpired = data.timeExpired;
  remainingTime = data.remainingTime;

  document.getElementById("welcome-screen").style.display = "none";
  document.querySelector(".container").style.display = "block";
  document.getElementById("progress").innerText = `👋 Welcome, ${learnerName}!`;

  showQuestion();
  renderNavigator();
  return true;
}

// Start quiz
function startQuiz() {
  const nameInput = document.getElementById("learner-name").value.trim();
  if (!nameInput) {
    alert("कृपया अपना नाम दर्ज करें।");
    return;
  }
  learnerName = nameInput;
  localStorage.setItem("learnerName", learnerName);

  // Only initialize new quiz if not resuming
  if (!localStorage.getItem("quizProgress")) {
    shuffle(questions);
    markedForReview = Array(questions.length).fill(false);
    userAnswers = Array(questions.length).fill(null);
    current = 0;
    score = 0;
    timeExpired = false;
    remainingTime = 1800; // 30 minutes
  }

  document.getElementById("welcome-screen").style.display = "none";
  document.querySelector(".container").style.display = "block";
  document.getElementById("progress").innerText = `👋 Welcome, ${learnerName}!`;

  showQuestion();
  startTimer(remainingTime);
  saveProgress();
}

// Show question
function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;

  const opts = document.getElementById("options");
  opts.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(i);
    if (userAnswers[current] === i) btn.style.backgroundColor = "#d1e7dd";
    opts.appendChild(btn);
  });

  document.getElementById("progress").innerText =
    `👋 Welcome, ${learnerName}! | प्रश्न ${current + 1} / ${questions.length}`;
  document.getElementById("prev-btn").disabled = current === 0;
  document.getElementById("next-btn").disabled = current === questions.length - 1;

  renderNavigator();
  saveProgress();
}

// Select answer
function selectAnswer(selected) {
  if (timeExpired) return;
  userAnswers[current] = selected;
  const correct = questions[current].correct;
  if (selected === correct) score += 2;
  else score -= 0.5;
  saveProgress();
  showQuestion();
}

// Navigation
function goToPrevious() {
  if (timeExpired || current === 0) return;
  current--;
  saveProgress();
  showQuestion();
}

function goToNext() {
  if (timeExpired) return;
  if (current < questions.length - 1) {
    current++;
    saveProgress();
    showQuestion();
  } else {
    clearInterval(timer);
    showResult();
  }
}

// Review mark
function toggleReview() {
  if (timeExpired) return;
  markedForReview[current] = !markedForReview[current];
  saveProgress();
  renderNavigator();
}

// Navigator
function renderNavigator() {
  const panel = document.getElementById("navigator-panel");
  panel.innerHTML = "";
  questions.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.innerText = i + 1;
    if (markedForReview[i]) btn.classList.add("marked");
    btn.onclick = () => {
      if (timeExpired) return;
      current = i;
      saveProgress();
      showQuestion();
    };
    panel.appendChild(btn);
  });
}

// Show result
function showResult() {
  clearInterval(timer);
  timeExpired = true;
  document.getElementById("options").style.display = "none";
  document.getElementById("question").innerText = "Quiz समाप्त हुआ!";
  localStorage.removeItem("quizProgress");

  const total = questions.length;
  const maxScore = total * 2;
  const pct = Math.max(0, Math.round((score / maxScore) * 100));
  document.getElementById("score").innerText =
    `आपके अंक: ${score} / ${maxScore} (${pct}%)`;

  showBadge(pct);
  updateLeaderboard();
  document.getElementById("retry").style.display = "inline-block";

  let table = `<h3>🧾 उत्तर विश्लेषण</h3><table border="1" style="margin:auto">
    <tr><th>#</th><th>प्रश्न</th><th>आपका उत्तर</th><th>सही उत्तर</th><th>स्थिति</th></tr>`;
  questions.forEach((q, i) => {
    const ua = userAnswers[i];
    const ci = q.correct;
    const ut = ua !== null ? q.options[ua] : "—";
    const ct = q.options[ci];
    const st = ua === ci ? "✅ सही" : "❌ गलत";
    table += `<tr><td>${i + 1}</td><td>${q.question}</td><td>${ut}</td><td>${ct}</td><td>${st}</td></tr>`;
  });
  table += "</table>";
  document.getElementById("summary").innerHTML = table;

  const dl = document.createElement("button");
  dl.innerText = "परिणाम डाउनलोड करें";
  dl.onclick = downloadResult;
  document.getElementById("summary").appendChild(dl);
}

// Badge
function showBadge(pct) {
  let badge = "";
  if (pct >= 90) badge = "🥇 Bharat Ratna Learner";
  else if (pct >= 80) badge = "🏆 Sangrami Scholar";
  else if (pct >= 60) badge = "📘 Mahavidyalayi Learner";
  else badge = "🛡️ Yoddha in Training";
  document.getElementById("result").innerHTML =
    `<p>आपका रैंक: <strong>${badge}</strong></p>`;
}

// Reset
function resetQuiz() {
  localStorage.removeItem("quizProgress");
  location.reload();
}

// Timer
function startTimer(sec) {
  remainingTime = sec;
  if (timer) clearInterval(timer);
  timer = setInterval(() => {
    const m = Math.floor(remainingTime / 60);
    const s = remainingTime % 60;
    document.getElementById("timer").innerText =
      `⏳ समय: ${m}:${s < 10 ? "0" : ""}${s}`;
    remainingTime--;
    saveProgress();
    if (remainingTime < 0) {
      clearInterval(timer);
      timeExpired = true;
      alert("समय समाप्त! आपका टेस्ट ऑटो-सबमिट किया जा रहा है।");
      showResult();
    }
  }, 1000);
}

// Download result
function downloadResult() {
  let text = `📄 The Knowledge Stream - Quiz Result\n\n`;
  text += `👤 Name: ${learnerName}\n`;
  text += `📊 Score: ${score} / ${questions.length * 2} (${Math.max(0, Math.round((score / (questions.length * 2)) * 100))}%)\n\n`;
  text += `🧾 Detailed Answers:\n\n`;
  questions.forEach((q, i) => {
    const ua = userAnswers[i], ci = q.correct;
    const ut = ua !== null ? q.options[ua] : "—";
    text += `Q${i + 1}. ${q.question}\nYour Answer: ${ut}\nCorrect Answer: ${q.options[ci]}\n\n`;
  });
  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${learnerName}_quiz_result.txt`;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}

// Leaderboard
function updateLeaderboard() {
  let lb = JSON.parse(localStorage.getItem("leaderboard") || "[]");
  lb.push({ name: learnerName, score });
  lb.sort((a, b) => b.score - a.score);
  lb = lb.slice(0, 5);
  localStorage.setItem("leaderboard", JSON.stringify(lb));
}

// On page load
window.onload = () => {
  const resumed = loadProgress();
  if (resumed && !timeExpired) {
    startTimer(remainingTime);
  }
};
