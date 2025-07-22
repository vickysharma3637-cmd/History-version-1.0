const questions = [
  {
    question: "अरबों ने सर्वप्रथम भारत पर कब आक्रमण किया?",
    options: ["711 ईस्वी में", "714 ईस्वी में", "713 ईस्वी में", "712 ईस्वी में"],
    correct: 3,
  },
  {
    question: "अरबों ने भारत में सर्वप्रथम किस स्थान पर अधिकार किया था?",
    options: ["सिंध", "दिल्ली", "पंजाब", "मुल्तान"],
    correct: 0,
  },
  {
    question: "किसके शासनकाल में मुहम्मद बिन कासिम ने सिंध पर आक्रमण किया था?",
    options: ["दाहिर", "हर्षवर्धन", "समुद्रगुप्त", "चंद्रगुप्त"],
    correct: 0,
  },
  {
    question: "मुहम्मद बिन कासिम का संबंध किस वंश से था?",
    options: ["गजनवी वंश", "अब्बासी वंश", "तुर्क वंश", "उमय्यद वंश"],
    correct: 3,
  },
  {
    question: "मुहम्मद बिन कासिम ने भारत पर कब आक्रमण किया?",
    options: ["1011 ई.", "1000 ई.", "1191 ई.", "712 ई."],
    correct: 3,
  },
  {
    question: "मुहम्मद बिन कासिम का सिंध अभियान कब संपन्न हुआ?",
    options: ["711 ईस्वी", "713 ईस्वी", "717 ईस्वी", "715 ईस्वी"],
    correct: 1,
  },
  {
    question: "भारत पर अरब आक्रमण का प्रत्यक्ष प्रभाव क्या था?",
    options: ["राजनीतिक एकता", "हिन्दू धर्म का अंत", "ईसाई धर्म का आगमन", "इस्लाम धर्म का प्रचार"],
    correct: 3,
  },
  {
    question: "अरबों ने किस भारतीय नगर को 'शेहर-मुखुशान' कहा था?",
    options: ["मुल्तान", "लाहौर", "दिल्ली", "उज्जैन"],
    correct: 0,
  },
  {
    question: "मुल्तान को अरबों द्वारा किस नाम से जाना जाता था?",
    options: ["शेहर-ए-सिंध", "शेहर-ए-नूर", "शेहर-ए-हिंद", "शेहर-मुखुशान"],
    correct: 3,
  },
  {
    question: "सिंध पर अरबों के आक्रमण के समय भारत में कौन-सा धर्म प्रमुख था?",
    options: ["बौद्ध धर्म", "इस्लाम धर्म", "जैन धर्म", "हिन्दू धर्म"],
    correct: 3,
  },
  {
    question: "अरबों का भारत पर प्रभाव मुख्यतः किस क्षेत्र में पड़ा?",
    options: ["साहित्य", "धर्म", "संगीत", "कला"],
    correct: 1,
  },
  {
    question: "भारत में इस्लाम धर्म का प्रवेश सर्वप्रथम किसके माध्यम से हुआ?",
    options: ["तुर्कों", "अरबों", "मुगलों", "अफगानों"],
    correct: 1,
  },
  {
    question: "अरबों द्वारा सिंध विजय का प्रमुख उद्देश्य क्या था?",
    options: ["धर्म प्रचार", "व्यापार", "राजनीतिक विस्तार", "प्रतिशोध"],
    correct: 2,
  },
  {
    question: "अरबों ने भारत में किस भाषा का प्रचार किया?",
    options: ["अरबी", "फारसी", "संस्कृत", "तुर्की"],
    correct: 0,
  },
  {
    question: "अरबों के भारत आने से किस धर्म का प्रभाव बढ़ा?",
    options: ["बौद्ध धर्म", "ईसाई धर्म", "हिन्दू धर्म", "इस्लाम धर्म"],
    correct: 3,
  },
  {
    question: "मुहम्मद बिन कासिम के आक्रमण का वर्णन किस ग्रंथ में है?",
    options: ["किताबुल हिन्द", "तहकीक-ए-हिन्द", "चचनामा", "तारिख-ए-फिरोजशाही"],
    correct: 2,
  },
  {
    question: "‘चचनामा’ किस भाषा में लिखा गया है?",
    options: ["अरबी", "उर्दू", "फारसी", "संस्कृत"],
    correct: 2,
  },
  {
    question: "‘चचनामा’ में वर्णित है:",
    options: ["पृथ्वीराज चौहान का युद्ध", "अलाउद्दीन का अभियान", "मुहम्मद बिन कासिम का सिंध आक्रमण", "महमूद गजनवी का आक्रमण"],
    correct: 2,
  },
  {
    question: "मुहम्मद बिन कासिम ने किस राजा को हराया?",
    options: ["समुद्रगुप्त", "हर्षवर्धन", "दाहिर", "विक्रमादित्य"],
    correct: 2,
  },
  {
    question: "मुहम्मद बिन कासिम ने किस नगर को राजधानी बनाया?",
    options: ["मुल्तान", "देबल", "लाहौर", "कराची"],
    correct: 0,
  },
  {
    question: "अरबों का सिंध में शासन कब तक रहा?",
    options: ["1010 ई. तक", "1026 ई. तक", "900 ई. तक", "1100 ई. तक"],
    correct: 2,
  },
  {
    question: "भारत में अरबों के बाद किसने आक्रमण किया?",
    options: ["तुर्क", "मंगोल", "मुगल", "अफगान"],
    correct: 0,
  },
  {
    question: "अरबों के भारत पर आक्रमण का ऐतिहासिक महत्त्व क्या था?",
    options: ["व्यापार का विकास", "धर्म का अंत", "इस्लाम का प्रचार और स्थायित्व", "हिन्दू धर्म का विस्तार"],
    correct: 2,
  },
  {
    question: "सिंध पर अरबों का शासन कितने वर्षों तक रहा?",
    options: ["लगभग 300 वर्ष", "लगभग 100 वर्ष", "लगभग 50 वर्ष", "लगभग 200 वर्ष"],
    correct: 0,
  },
  {
    question: "अरबों ने भारत पर कितने बार आक्रमण किया?",
    options: ["3", "1", "4", "2"],
    correct: 1,
  },
  {
    question: "अरबों ने भारत में सबसे पहले किस धर्म को फैलाया?",
    options: ["ईसाई धर्म", "इस्लाम धर्म", "बौद्ध धर्म", "जैन धर्म"],
    correct: 1,
  },
  {
    question: "अरबों ने सिंध को भारत से जोड़ने के लिए किसका सहारा लिया?",
    options: ["व्यापार", "धार्मिक उत्सव", "युद्ध", "सांस्कृतिक मेल"],
    correct: 0,
  },
  {
    question: "अरब आक्रमण के समय भारत में कौन-सा प्रमुख राजनीतिक संगठन था?",
    options: ["गुप्त वंश", "राजपूत", "चोल वंश", "मौर्य वंश"],
    correct: 1,
  },
  {
    question: "अरब आक्रमण के दौरान भारत की सामाजिक स्थिति कैसी थी?",
    options: ["समानता", "सम्पूर्ण एकता", "वर्ग व्यवस्था आधारित", "साम्यवादी"],
    correct: 2,
  },
  {
    question: "भारत पर अरबों के आक्रमण का प्रमुख कारण क्या था?",
    options: ["सांस्कृतिक आदान-प्रदान", "धार्मिक एकता", "व्यापारिक लाभ और राजनीतिक विस्तार", "कला का प्रचार"],
    correct: 2,
  },
  {
    question: "अरब आक्रमण के समय भारत की प्रमुख भाषा क्या थी?",
    options: ["अरबी", "संस्कृत", "उर्दू", "फारसी"],
    correct: 1,
  },
  {
    question: "अरबों ने भारत से कौन-से वैज्ञानिक ज्ञान को अपनाया?",
    options: ["शून्य और दशमलव पद्धति", "योग", "तंत्र विद्या", "संगीत"],
    correct: 0,
  },
  {
    question: "मुहम्मद बिन कासिम ने देबल पर कब कब्जा किया?",
    options: ["710 ई.", "712 ई.", "714 ई.", "716 ई."],
    correct: 1,
  },
  {
    question: "अरबों का भारत में कौन-सा प्रशासनिक सुधार उल्लेखनीय था?",
    options: ["दास प्रथा", "भूमि सुधार", "धार्मिक सहिष्णुता", "समान कर नीति"],
    correct: 3,
  },
  {
    question: "अरब आक्रमण का भारतीय शिक्षा प्रणाली पर क्या प्रभाव पड़ा?",
    options: ["तबाही", "इस्लामिक शिक्षा की शुरुआत", "गुरुकुल व्यवस्था समाप्त", "विदेशी शिक्षा पद्धति"],
    correct: 1,
  },
  {
    question: "अरबों ने सिंध में कौन-सी कर प्रणाली लागू की?",
    options: ["जजिया", "भूमिकर", "समान कर", "दशमांश कर"],
    correct: 0,
  },
  {
    question: "अरबों के बाद भारत में कौन-सी शक्ति उभरी?",
    options: ["राजपूत", "सल्तनत", "मुगल", "गुप्त"],
    correct: 1,
  },
  {
    question: "अरबों ने भारतीय तट पर व्यापार हेतु कौन-सा प्रमुख बंदरगाह चुना?",
    options: ["मुम्बई", "देबल", "कोच्चि", "सूरत"],
    correct: 1,
  },
  {
    question: "अरब आक्रमण के बाद कौन-से धर्म के अनुयायी बढ़े?",
    options: ["बौद्ध", "हिन्दू", "ईसाई", "इस्लाम"],
    correct: 3,
  },
  {
    question: "भारत में अरबों की स्थायी बसावट कहाँ हुई?",
    options: ["बंगाल", "महाराष्ट्र", "सिंध और मुल्तान", "दक्कन"],
    correct: 2,
  },
  {
    question: "अरबों की किस नीति से हिन्दू जनता प्रभावित हुई?",
    options: ["धार्मिक कट्टरता", "सांस्कृतिक निषेध", "सहिष्णु शासन", "साम्राज्य विस्तार"],
    correct: 2,
  },
  {
    question: "सिंध में अरबों की सैन्य शक्ति का प्रमुख आधार क्या था?",
    options: ["हाथी", "घुड़सवार", "नाविक", "तोप"],
    correct: 1,
  },
  {
    question: "अरबों के भारत में आने से किस पद्धति का प्रचार हुआ?",
    options: ["मदरसों की शिक्षा", "गुरुकुल", "वेदशाला", "तोल माप"],
    correct: 0,
  },
  {
    question: "अरब-भारतीय संपर्क से किस विषय पर ग्रंथ लिखे गए?",
    options: ["इतिहास", "गणित और खगोलशास्त्र", "साहित्य", "योग"],
    correct: 1,
  },
  {
    question: "अरब आक्रमण से भारत को कौन-सी क्षति नहीं हुई?",
    options: ["धार्मिक असहिष्णुता", "शिक्षा का अंत", "राजनीतिक एकता", "प्राकृतिक संपत्ति की हानि"],
    correct: 2,
  },
  {
    question: "अरबों का सबसे प्रसिद्ध सेनापति कौन था?",
    options: ["महमूद गजनवी", "मुहम्मद गोरी", "मुहम्मद बिन कासिम", "अलाउद्दीन खिलजी"],
    correct: 2,
  },
  {
    question: "अरबों ने भारत में कौन-से वैज्ञानिक विचार लाए?",
    options: ["तर्क और प्रयोग", "ज्योतिष", "अंधविश्वास", "जादू-टोना"],
    correct: 0,
  },
  {
    question: "भारत में अरब शासन की भाषा क्या थी?",
    options: ["उर्दू", "अरबी", "संस्कृत", "फारसी"],
    correct: 1,
  },
  {
    question: "अरब आक्रमण ने भारत में किस शासन प्रणाली को जन्म दिया?",
    options: ["भक्ति आंदोलन", "सल्तनत", "गुलाम वंश", "आधुनिकता"],
    correct: 1,
  },
  {
    question: "किसने सिंध विजय के बाद वहां इस्लाम स्थापित किया?",
    options: ["कुतुबुद्दीन ऐबक", "गोरी", "महमूद", "मुहम्मद बिन कासिम"],
    correct: 3,
  },
  {
    question: "गुलाम वंश की स्थापना किसने की?",
    options: ["इल्तुतमिश", "कुतुबुद्दीन ऐबक", "गोरी", "बलबन"],
    correct: 1,
  },
  {
    question: "कुतुबुद्दीन ऐबक किसके अधीन था?",
    options: ["मुहम्मद गोरी", "गजनी", "इल्तुतमिश", "महमूद"],
    correct: 0,
  },
  {
    question: "भारत का पहला मुस्लिम शासक कौन था?",
    options: ["इल्तुतमिश", "कुतुबुद्दीन ऐबक", "गोरी", "खिलजी"],
    correct: 1,
  },
  {
    question: "कुतुब मीनार का निर्माण किसने शुरू किया?",
    options: ["इल्तुतमिश", "गोरी", "कुतुबुद्दीन ऐबक", "बलबन"],
    correct: 2,
  },
  {
    question: "कुतुबुद्दीन ऐबक की मृत्यु कैसे हुई?",
    options: ["युद्ध में", "घोड़े से गिरकर", "बीमारी से", "विष देने से"],
    correct: 1,
  },
  {
    question: "कुतुबुद्दीन ऐबक को किस उपाधि से जाना जाता था?",
    options: ["लाख बख्श", "गुलाम सम्राट", "शाह-ए-हिंद", "कुतुब शाह"],
    correct: 0,
  },
  {
    question: "गुलाम वंश के वास्तविक संस्थापक कौन माने जाते हैं?",
    options: ["कुतुबुद्दीन ऐबक", "इल्तुतमिश", "गोरी", "बलबन"],
    correct: 1,
  },
  {
    question: "इल्तुतमिश ने किसे अपना उत्तराधिकारी घोषित किया?",
    options: ["रजिया सुल्तान", "नासिरुद्दीन", "बलबन", "आराम शाह"],
    correct: 0,
  },
  {
    question: "दिल्ली सल्तनत की पहली महिला शासक कौन थी?",
    options: ["नूरजहाँ", "रजिया सुल्तान", "रूकैया बेगम", "गौहर जहाँ"],
    correct: 1,
  },
  {
    question: "रजिया सुल्तान को क्यों हटाया गया?",
    options: ["कमज़ोर शासन", "स्त्री होने के कारण", "धार्मिक मतभेद", "सैन्य विद्रोह"],
    correct: 1,
  },
  {
    question: "बलबन ने शासन में किस नीति को अपनाया?",
    options: ["कड़ी अनुशासन नीति", "धार्मिक सहिष्णुता", "लोकतंत्र", "सामंती व्यवस्था"],
    correct: 0,
  },
  {
    question: "बलबन ने किस पद की स्थापना की?",
    options: ["नायब-ए-मुल्क", "दीवान-ए-रियासत", "मुख्य वज़ीर", "दीवान-ए-अर्ज़"],
    correct: 0,
  },
  {
    question: "गुलाम वंश की अंतिम प्रमुख घटना क्या थी?",
    options: ["मंगोल आक्रमण", "खिलजी विद्रोह", "महमूद का आना", "सल्तनत का पतन"],
    correct: 1,
  },
  {
    question: "कुतुब मीनार का निर्माण किसने पूरा करवाया?",
    options: ["कुतुबुद्दीन", "गोरी", "इल्तुतमिश", "बलबन"],
    correct: 2,
  },
  {
    question: "गुलाम वंश का अंतिम शासक कौन था?",
    options: ["काईकुबाद", "बलबन", "नासिरुद्दीन", "इल्तुतमिश"],
    correct: 0,
  },
  {
    question: "बलबन का असली नाम क्या था?",
    options: ["गियासुद्दीन बलबन", "अलाउद्दीन", "महमूद", "कुतुबुद्दीन"],
    correct: 0,
  },
  {
    question: "इल्तुतमिश की बेटी कौन थी?",
    options: ["रजिया सुल्तान", "रूखसाना बेगम", "गौहर जहाँ", "रूकैया सुल्ताना"],
    correct: 0,
  },
  {
    question: "कुतुब मीनार कहाँ स्थित है?",
    options: ["लाहौर", "दिल्ली", "गुजरात", "आगरा"],
    correct: 1,
  },
  {
    question: "कुतुबुद्दीन ऐबक का मकबरा कहाँ है?",
    options: ["दिल्ली", "लाहौर", "गुजरात", "अजमेर"],
    correct: 1,
  },
  {
    question: "गुलाम वंश का शासन काल कब से कब तक था?",
    options: ["1206–1290", "1200–1300", "1210–1280", "1190–1275"],
    correct: 0,
  },
  {
    question: "गोरी की मृत्यु कब हुई?",
    options: ["1206 ई.", "1192 ई.", "1210 ई.", "1186 ई."],
    correct: 0,
  },
  {
    question: "किसने दिल्ली को राजधानी बनाया?",
    options: ["इल्तुतमिश", "कुतुबुद्दीन", "बलबन", "गोरी"],
    correct: 0,
  },
  {
    question: "गुलाम वंश का सबसे शक्तिशाली शासक कौन था?",
    options: ["इल्तुतमिश", "रजिया", "बलबन", "काईकुबाद"],
    correct: 2,
  },
  {
    question: "किस वंश का उदय गुलाम वंश के बाद हुआ?",
    options: ["खिलजी वंश", "लोधी वंश", "मुगल वंश", "तुगलक वंश"],
    correct: 0,
  },
  {
    question: "रजिया सुल्तान की मृत्यु कहाँ हुई?",
    options: ["दिल्ली", "कन्नौज", "भटिंडा", "लाहौर"],
    correct: 2,
  },
  {
    question: "बलबन किस सुल्तान के अधीन गुलाम था?",
    options: ["इल्तुतमिश", "नासिरुद्दीन महमूद", "काईकुबाद", "कुतुबुद्दीन"],
    correct: 1,
  },
  {
    question: "इल्तुतमिश को दिल्ली का सुल्तान कब घोषित किया गया?",
    options: ["1211 ई.", "1206 ई.", "1220 ई.", "1210 ई."],
    correct: 0,
  },
  {
    question: "रजिया सुल्तान के शासन काल में सबसे बड़ा विरोध किससे था?",
    options: ["तुर्क अमीरों से", "विदेशियों से", "मंगोलों से", "हिंदू शासकों से"],
    correct: 0,
  },
  {
    question: "बलबन ने अपने शासन में किस नीति पर बल दिया?",
    options: ["कठोर अनुशासन", "धार्मिक सहिष्णुता", "सांस्कृतिक विकास", "जन कल्याण"],
    correct: 0,
  },
  {
    question: "गुलाम वंश में 'नायब-ए-मुल्क' की पदवी किसे मिली?",
    options: ["बलबन", "रजिया", "नासिरुद्दीन", "इल्तुतमिश"],
    correct: 0,
  },
  {
    question: "रजिया सुल्तान ने किसे अपना विश्वस्त अमीर बनाया?",
    options: ["याकूत", "नासिर", "बलबन", "गयासुद्दीन"],
    correct: 0,
  },
  {
    question: "इल्तुतमिश की शासन प्रणाली किस पर आधारित थी?",
    options: ["ईमानदारी", "धार्मिक सहिष्णुता", "केंद्रीकरण", "लोकतंत्र"],
    correct: 2,
  },
  {
    question: "गोरी और पृथ्वीराज चौहान के बीच कौन सी निर्णायक लड़ाई हुई?",
    options: ["तराइन की दूसरी लड़ाई", "तराइन की पहली लड़ाई", "कन्नौज की लड़ाई", "बठिंडा युद्ध"],
    correct: 0,
  },
  {
    question: "गोरी ने किस साल पृथ्वीराज को पराजित किया?",
    options: ["1192 ई.", "1191 ई.", "1206 ई.", "1186 ई."],
    correct: 0,
  },
  {
    question: "इल्तुतमिश किस वंश का था?",
    options: ["तुर्क", "गजनी", "मंगोल", "अरब"],
    correct: 0,
  },
  {
    question: "इल्तुतमिश ने किसको मिर्जा-ए-मुस्तखराज नियुक्त किया?",
    options: ["जियाउद्दीन बरनी", "अमीर याकूत", "निज़ामुद्दीन", "ख्वाजा मिनहाज"],
    correct: 3,
  },
  {
    question: "रजिया सुल्तान के काल में तुर्क अमीरों का संघ क्या कहलाता था?",
    options: ["चालीसगण", "सुल्तानी सभा", "दरबार-ए-खास", "शाही परिषद"],
    correct: 0,
  },
  {
    question: "बलबन ने किस नीति से चालीसगण को समाप्त किया?",
    options: ["सामंतों को दंड देना", "धर्म नीति", "दण्ड और भय", "विवाह नीति"],
    correct: 2,
  },
  {
    question: "किस गुलाम वंशीय शासक के शासनकाल में मंगोलों का भय सबसे अधिक था?",
    options: ["बलबन", "इल्तुतमिश", "कुतुबुद्दीन", "रजिया"],
    correct: 0,
  },
  {
    question: "किसने ‘दण्ड और भय’ की नीति अपनाई?",
    options: ["बलबन", "इल्तुतमिश", "गोरी", "काईकुबाद"],
    correct: 0,
  },
  {
    question: "गुलाम वंश का सबसे कमजोर शासक कौन माना जाता है?",
    options: ["काईकुबाद", "रजिया", "नासिर", "आराम शाह"],
    correct: 3,
  },
  {
    question: "बलबन के समय भारत में किसका आक्रमण हुआ था?",
    options: ["मंगोल", "अरब", "गजनी", "पार्थियन"],
    correct: 0,
  },
  {
    question: "रजिया सुल्तान की मृत्यु किस वर्ष में हुई?",
    options: ["1240 ई.", "1236 ई.", "1250 ई.", "1245 ई."],
    correct: 0,
  },
  {
    question: "बलबन ने अपने शासन के दौरान किस तुगलकी सिद्धांत को खारिज किया?",
    options: ["ईश्वर की प्रतिनिधि की अवधारणा", "जजिया कर", "समान न्याय", "वाणिज्य नीति"],
    correct: 0,
  },
  {
    question: "गुलाम वंश के दौरान किस प्रशासनिक पद की शुरुआत हुई?",
    options: ["दीवान-ए-रसालत", "नायब-ए-मुल्क", "दीवान-ए-अर्ज़", "सदर-ए-सदूर"],
    correct: 1,
  },
  {
    question: "बलबन का सबसे प्रसिद्ध पुत्र कौन था?",
    options: ["महमूद", "नासिर", "काईकुबाद", "फिरोज"],
    correct: 0,
  },
  {
    question: "गुलाम वंश के किस शासक ने सिक्के जारी किए?",
    options: ["इल्तुतमिश", "रजिया", "बलबन", "काईकुबाद"],
    correct: 0,
  },
  {
    question: "इल्तुतमिश ने किस विदेशी आक्रमण से भारत को बचाया?",
    options: ["मंगोल", "अफगान", "अरब", "तुर्क"],
    correct: 0,
  },
  {
    question: "बलबन का शासनकाल कब से कब तक था?",
    options: ["1266–1287", "1236–1240", "1250–1266", "1270–1290"],
    correct: 0,
  },
  {
    question: "गुलाम वंश के पतन के बाद सत्ता किसके हाथ में गई?",
    options: ["खिलजी वंश", "तुगलक वंश", "मुगल", "लोधी वंश"],
    correct: 0,
  },
];

let current = 0;
let score = 0;
let userAnswers = [];
let learnerName = "";
let timer;
let markedForReview = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function saveProgress() {
  const progressData = {
    current,
    score,
    userAnswers,
    questions,
    learnerName,
    markedForReview
  };
  localStorage.setItem("quizProgress", JSON.stringify(progressData));
}

function loadProgress() {
  const saved = localStorage.getItem("quizProgress");
  if (saved) {
    const data = JSON.parse(saved);
    current = data.current;
    score = data.score;
    userAnswers = data.userAnswers;
    questions = data.questions;
    learnerName = data.learnerName;
    markedForReview = data.markedForReview || Array(questions.length).fill(false);
    document.getElementById("welcome-screen").style.display = "none";
    document.querySelector(".container").style.display = "block";
    showQuestion();
  }
}

function startQuiz() {
  const nameInput = document.getElementById("learner-name").value.trim();
  if (!nameInput) {
    alert("कृपया अपना नाम डालें।");
    return;
  }
  learnerName = nameInput;
  localStorage.setItem("learnerName", learnerName);
  document.getElementById("welcome-screen").style.display = "none";
  document.querySelector(".container").style.display = "block";
  document.getElementById("progress").innerText = `👋 Welcome, ${learnerName}!`;
  initQuiz();
}

function initQuiz() {
  shuffle(questions);
  markedForReview = Array(questions.length).fill(false);
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const opts = document.getElementById("options");
  opts.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => selectAnswer(i);
    if (userAnswers[current] === i) {
      btn.style.backgroundColor = "#d1e7dd";
    }
    opts.appendChild(btn);
  });

  document.getElementById("progress").innerText = `👋 Welcome, ${learnerName}! | प्रश्न ${current + 1} / ${questions.length}`;
  document.getElementById("prev-btn").disabled = current === 0;
  document.getElementById("next-btn").disabled = current === questions.length - 1;

  renderNavigator();
  saveProgress();
}

function selectAnswer(selected) {
  userAnswers[current] = selected;
  const correctAnswer = questions[current].correct;
  if (selected === correctAnswer) {
    score += 2;
  } else {
    score -= 0.5;
  }
  showQuestion();
  saveProgress();
}

function goToPrevious() {
  if (current > 0) {
    current--;
    showQuestion();
  }
}

function goToNext() {
  if (current < questions.length - 1) {
    current++;
    showQuestion();
  } else {
    clearInterval(timer);
    showResult();
  }
}

function toggleReview() {
  markedForReview[current] = !markedForReview[current];
  alert(markedForReview[current] ? "Marked for review!" : "Unmarked.");
  saveProgress();
  renderNavigator();
}

function renderNavigator() {
  const panel = document.getElementById("navigator-panel");
  panel.innerHTML = "";
  questions.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.innerText = i + 1;
    btn.onclick = () => {
      current = i;
      showQuestion();
    };
    if (markedForReview[i]) btn.style.border = "2px solid orange";
    panel.appendChild(btn);
  });
}

function showResult() {
  document.getElementById("options").style.display = "none";
  document.getElementById("question").innerText = "Quiz समाप्त हुआ!";
  localStorage.removeItem("quizProgress");

  const total = questions.length;
  const maxScore = total * 2;
  const percentage = Math.max(0, Math.round((score / maxScore) * 100));
  document.getElementById("score").innerText = `आपके अंक: ${score} / ${maxScore} (${percentage}%)`;

  showBadge(percentage);
  document.getElementById("retry").style.display = "inline-block";

  let tableHTML =
    `<h3>🧾 उत्तर विश्लेषण</h3>` +
    `<table border="1" style="margin:auto">` +
    `<tr><th>#</th><th>प्रश्न</th><th>आपका उत्तर</th><th>सही उत्तर</th><th>स्थिति</th></tr>`;

  questions.forEach((q, i) => {
    const userAnsIdx = userAnswers[i];
    const correctIdx = q.correct;
    const userAnsText = typeof userAnsIdx === "number" ? q.options[userAnsIdx] : "—";
    const correctText = q.options[correctIdx];
    const status = userAnsIdx === correctIdx ? "✅ सही" : "❌ गलत";
   