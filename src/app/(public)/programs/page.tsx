import React from 'react'
import AnimatedPara from '@/components/AnimatedPara'
import SectionHeader from '@/components/SectionHeader'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const programs = {
  en: [
    {
      id: 1,
      title: "Gau Seva",
      text: "Gau Seva, or service towards cows, is considered one of the most sacred and compassionate acts in Indian tradition. Unfortunately, thousands of stray and abandoned cows roam the streets without proper food, shelter, or medical care. Through our Gau Seva program, we work tirelessly to provide them with nutritious fodder, safe shelter in clean and secure Gaushalas, and proper healthcare facilities including medical checkups, vaccinations, and treatment for injuries or illnesses. Every cow rescued from hunger or suffering is given a dignified life filled with love and protection. By supporting Gau Seva, you are not only helping innocent animals survive but also preserving a vital part of India’s culture, spirituality, and environment. Your donation ensures that cows receive the care they deserve and live a healthy, safe, and respected life. Together, we can build a compassionate society where every cow is protected and nurtured.",
      image: "/GauSeva.png"
    },
    {
      id: 2,
      title: "Assistance for the Helpless",
      text: "Assistance for the helpless is a mission dedicated to serving those who are struggling for survival and dignity. Every day, countless poor, homeless, and underprivileged individuals suffer due to a lack of basic necessities such as food, clothing, shelter, and medical care. Through this initiative, we provide freshly cooked meals to the hungry, warm clothes to those exposed to harsh weather, and financial assistance to families battling extreme poverty. Beyond physical needs, we also extend emotional support and care, helping people regain hope and confidence in life. By donating towards Assistance for the Helpless, you become a ray of light for someone in darkness, helping them rebuild their lives with dignity and respect. Your contribution ensures that no one is left behind and that the most vulnerable members of society find love, care, and the support they truly deserve. Together, we can bring comfort, compassion, and hope to the lives of those who need it the most.",
      image: "/AH.jpg"
    },
    {
      id: 3,
      title: "Blood Donation & Health Checkup Camps",
      text: "Blood Donation and Health Checkup Camps are vital initiatives aimed at saving lives and improving community health. Many underprivileged families cannot afford basic healthcare or regular medical checkups, which often leads to serious health issues going unnoticed. Through our camps, we organize free blood donation drives to ensure availability of blood for patients in need, and conduct medical checkups for early detection of diseases. Along with this, health awareness programs educate people about hygiene, nutrition, and preventive care. By supporting this cause, you are directly contributing to a healthier society where no one is deprived of medical care due to financial struggles.",
      image: "/bd.jpg"
    },
    {
      id: 4,
      title: "Mass Marriages for Poor Girls",
      text: "Mass Marriages for Poor Girls is a program that supports underprivileged families who are unable to afford wedding expenses for their daughters. Weddings often become a financial burden for poor households, leading to stress and even exploitation. By organizing collective mass marriages, we reduce costs and provide all necessary arrangements including food, clothing, and essential support. This initiative not only brings joy to families but also ensures that girls from weaker sections of society are married with dignity and respect. Your donation directly helps in changing lives by lifting the burden of poverty and making dreams come true.",
      image: "/wedding.jpg"
    },
    { id: 5, 
      title: "Saint & Brahmin Seva", 
      text: "Saint and Brahmin Seva is rooted in the age-old Indian tradition of showing respect and hospitality towards spiritual leaders and learned individuals. Through this initiative, we serve saints and Brahmins by offering food, clothing, shelter, and care, ensuring that their invaluable service to society is honored. By preserving this tradition of hospitality, we strengthen cultural values and maintain the spiritual fabric of our community. Supporting this cause is a way of sustaining dharma and expressing gratitude to those who dedicate their lives to guiding society on the path of righteousness.", 
      image: "/sb.jpeg"
    },
    { id: 6, 
      title: "Vedic Gurukul Support", 
      text: "The Vedic Gurukul system represents the foundation of India’s ancient education and wisdom. Unfortunately, many traditional Gurukuls struggle to survive due to a lack of financial support. Through our initiative, we assist Gurukuls by providing study materials, supporting teachers, and ensuring students have access to proper resources. By helping Gurukuls, we preserve timeless knowledge of the Vedas, scriptures, and values that shape character and society. Supporting this cause is an investment in the future, ensuring that the next generation inherits not only modern education but also the ancient wisdom of Bharat.", 
      image: "/gk.jpeg" },
    { id: 7, 
      title: "Spiritual Programs", 
      text: "Spiritual Programs are organized to spread positivity, devotion, and awareness of dharma in society. Events such as satsangs, kirtans, bhajans, and discourses uplift the human spirit and encourage a life of values and compassion. These gatherings bring people together, promote peace of mind, and strengthen cultural unity. By supporting spiritual programs, you help create a society where devotion, harmony, and positive energy thrive, leading to both personal and collective well-being.", 
      image: "/sp.jpeg" },
    { id: 8, 
      title: "World Peace Yagna & Satsang", 
      text: "World Peace Yagna and Satsang are sacred efforts to create harmony, peace, and spiritual upliftment across the globe. Through havans, yagnas, and collective prayers, we channel divine energy for universal well-being. These events not only benefit participants but also radiate positive vibrations that touch countless lives. Supporting such programs is a way of contributing to world peace, reducing negativity, and fostering love and compassion in society.", 
      image: "/hawan2.jpeg"
     },
    { id: 9, 
      title: "Elderly Care", text: "Elderly Care is a compassionate service dedicated to orphans, helpless, and abandoned senior citizens who are in need of support. Many elderly people face loneliness, poverty, and health issues without anyone to care for them. Through this program, we provide safe shelter, nutritious food, medical aid, and emotional companionship to ensure they live with dignity. Your support helps us restore hope and respect in their lives, proving that they are not forgotten.", 
      image: "/ed.jpg" },
    { id: 10, 
      title: "Temple Renovation", 
      text: "Temple Renovation is an effort to restore old and damaged temples, preserving them as sacred spaces of worship and cultural heritage. Many temples are neglected and fall into disrepair, losing their sanctity and historical significance. By supporting temple renovation, you help revive traditional places of worship, maintain sacred architecture, and pass on spiritual heritage to future generations. This service ensures that temples remain centers of devotion, culture, and community gathering.", 
      image: "/temple.png" },
    { id: 11, 
      title: "Cultural & Social Programs", 
      text: "Cultural and Social Programs are conducted to promote dharma, culture, and values in society. Through festivals, awareness campaigns, and cultural events, we aim to strengthen community bonds and encourage respect for traditions. These initiatives bring people together, spread joy, and create awareness about important social issues. Supporting such programs ensures that our heritage continues to inspire future generations and that society remains rooted in values and compassion.", 
      image: "/cultural.jpeg" },
    { id: 12, 
      title: "Education for Orphans", 
      text: "Education for Orphans is one of the most powerful ways to secure the future of helpless and underprivileged children. Many orphaned children are deprived of education and basic life skills, which limits their opportunities in life. Through this initiative, we provide free education, study materials, and skill development support to ensure they grow into independent and confident individuals. Your donation directly empowers children, giving them hope and a path toward a brighter future.", 
      image: "/education.jpeg" },
  ],
  hn: [
    {
      id: 1,
      title: "गोसेवा", 
      text: "गोसेवा भारतीय संस्कृति और परंपरा का एक पवित्र कार्य है, जो करुणा और भक्ति का प्रतीक माना जाता है। आज हजारों बेसहारा और लावारिस गायें सड़कों पर भटकती हैं जिन्हें न भोजन मिलता है, न सुरक्षित आश्रय और न ही उचित चिकित्सा सुविधा। हमारी गोसेवा सेवा के माध्यम से हम इन गायों को पौष्टिक आहार, सुरक्षित और स्वच्छ गौशालाओं में आश्रय, तथा आवश्यक चिकित्सा सुविधाएँ प्रदान करते हैं जिनमें नियमित जांच, टीकाकरण और घायल या बीमार गायों का उपचार शामिल है। भूख और कष्ट से जूझ रही हर गाय को सम्मानजनक और सुरक्षित जीवन देने का हमारा प्रयास है। जब आप गोसेवा में योगदान करते हैं, तो आप न केवल गायों का जीवन बचाते हैं बल्कि हमारी संस्कृति और पर्यावरण की रक्षा में भी सहयोग करते हैं। आपका सहयोग यह सुनिश्चित करता है कि हर गाय को उचित देखभाल मिले और वह स्वस्थ, सुरक्षित और सम्मानजनक जीवन जी सके। आइए, हम सब मिलकर एक ऐसे समाज का निर्माण करें जहाँ हर गाय को प्रेम और संरक्षण मिले।",
      image: "/GauSeva.png"
    },
    {
      id: 2,
      title: "असहाय सेवा",
      text: "असहाय सेवा का उद्देश्य उन जरूरतमंद और बेसहारा लोगों की सहायता करना है जो अपनी मूलभूत आवश्यकताओं के लिए भी संघर्ष कर रहे हैं। प्रतिदिन अनगिनत गरीब, बेघर और वंचित लोग भोजन, वस्त्र, आश्रय और चिकित्सा सुविधा जैसी ज़रूरी चीज़ों से वंचित रहते हैं। हमारी इस सेवा के माध्यम से हम भूखों को ताजा भोजन, ठंड और गर्मी से जूझ रहे लोगों को वस्त्र, तथा आर्थिक तंगी झेल रहे परिवारों को सहायता प्रदान करते हैं। इसके साथ ही, हम भावनात्मक सहयोग देकर उनका आत्मविश्वास और जीवन जीने की आशा भी लौटाते हैं। जब आप असहाय सेवा में सहयोग करते हैं, तो आप किसी के अंधेरे जीवन में रोशनी बनकर उसकी गरिमा और सम्मान से जीने की राह आसान करते हैं। आपका योगदान यह सुनिश्चित करता है कि कोई भी भूखा, नंगा या निराश न रहे और हर ज़रूरतमंद को प्रेम, सहयोग और सहारा मिल सके। आइए, हम मिलकर उन जीवनों में उम्मीद और करुणा का संचार करें जिन्हें इसकी सबसे ज्यादा ज़रूरत है।",
      image: "/AH.jpg"
    },
    {
      id: 3,
      title:"ब्लड डोनेशन और हेल्थ चेकअप कैंप",
      text: "ब्लड डोनेशन और हेल्थ चेकअप कैंप जीवन बचाने और समाज के स्वास्थ्य को बेहतर बनाने का महत्वपूर्ण प्रयास है। कई गरीब और वंचित परिवार नियमित स्वास्थ्य जांच और उपचार नहीं करवा पाते, जिसके कारण गंभीर बीमारियाँ समय पर पता नहीं चल पातीं। हमारे द्वारा आयोजित इन शिविरों में निःशुल्क रक्तदान और स्वास्थ्य जांच की सुविधा दी जाती है, ताकि ज़रूरतमंद मरीजों को समय पर रक्त और इलाज मिल सके। साथ ही, स्वास्थ्य जागरूकता कार्यक्रमों के माध्यम से लोगों को स्वच्छता, पोषण और रोगों से बचाव के उपायों की जानकारी दी जाती है। आपका सहयोग यह सुनिश्चित करता है कि किसी की भी जान केवल पैसों की कमी के कारण न जाए।",
      image: "/bd.jpg"
    },
    {
      id: 4,
      title: "सामूहिक सर्वसमाज एवम गरीब कन्याओं का विवाह", 
      text: "सामूहिक विवाह कार्यक्रम गरीब परिवारों की बेटियों के विवाह की जिम्मेदारी उठाने का एक प्रयास है। कई बार शादी का खर्च गरीब परिवारों के लिए बोझ बन जाता है, जिससे वे मानसिक और आर्थिक संकट में फँस जाते हैं। सामूहिक विवाह के माध्यम से हम कम खर्च में सभी आवश्यक व्यवस्थाएँ करते हैं जिसमें भोजन, वस्त्र और अन्य सहयोग शामिल है। यह सेवा न केवल परिवारों के लिए खुशी लाती है बल्कि कन्याओं को सम्मानजनक ढंग से विवाह का अवसर भी प्रदान करती है। आपके सहयोग से हम इन परिवारों का बोझ कम कर सकते हैं और बेटियों के जीवन में नई आशा जगा सकते हैं।",
      image: "/wedding.jpg"
    },
    { id: 5, 
      title: "संत ब्राह्मण सेवा", 
      text: "संत और ब्राह्मण सेवा हमारी भारतीय परंपरा का एक अभिन्न हिस्सा है, जिसमें संतों और विद्वानों को सम्मान और आतिथ्य प्रदान किया जाता है। इस सेवा के अंतर्गत हम संतों और ब्राह्मणों को भोजन, वस्त्र, आश्रय और देखभाल उपलब्ध कराते हैं ताकि उनके समाज और धर्म के प्रति योगदान का सम्मान हो सके। यह परंपरा हमारी संस्कृति और आध्यात्मिकता को मजबूत करती है। इस सेवा में सहयोग करना न केवल धर्म की रक्षा करना है बल्कि उन महान आत्माओं के प्रति आभार व्यक्त करना है जो अपना जीवन समाज को मार्गदर्शन देने में समर्पित करते हैं।", 
      image: "/sb.jpeg" },
    { id: 6,
       title: "वैदिक गुरुकुल सेवा",
        text: "वैदिक गुरुकुल शिक्षा भारत की प्राचीन परंपरा और ज्ञान का आधार है। आज कई गुरुकुल आर्थिक सहयोग के अभाव में संघर्ष कर रहे हैं। हमारी इस सेवा के माध्यम से हम गुरुकुलों को अध्ययन सामग्री, आचार्यों के लिए सहयोग और विद्यार्थियों को आवश्यक संसाधन उपलब्ध कराते हैं। गुरुकुलों को सहयोग करना केवल शिक्षा में सहयोग नहीं है, बल्कि यह वेदों और शास्त्रों के उस अनमोल ज्ञान की रक्षा है जिसने समाज को सदियों से दिशा दी है। यह सेवा भविष्य में निवेश है ताकि आने वाली पीढ़ियाँ आधुनिक शिक्षा के साथ-साथ भारतीय संस्कृति और ज्ञान को भी आत्मसात कर सकें।", 
        image: "/gk.jpeg" },
    { id: 7, 
      title: "आध्यात्मिक कार्यक्रम", 
      text: "आध्यात्मिक कार्यक्रमों का उद्देश्य समाज में भक्ति, सकारात्मकता और धर्म की जागरूकता फैलाना है। सत्संग, कीर्तन, भजन और प्रवचन जैसे आयोजनों से मनुष्य का मनोबल बढ़ता है और जीवन में शांति एवं करुणा का संचार होता है। ये कार्यक्रम लोगों को जोड़ते हैं और समाज में सांस्कृतिक एकता और आध्यात्मिक शक्ति को मजबूत करते हैं। आध्यात्मिक कार्यक्रमों में सहयोग करके आप भक्ति और सद्भावना से भरे समाज के निर्माण में योगदान देते हैं।", 
      image: "/sp.jpeg" 
    },
    { id: 8, 
      title: "विश्व की शांति हेतु हवन यज्ञ सत्संग कथा आदि", 
      text: "विश्व शांति हेतु हवन और सत्संग का आयोजन समाज और विश्व में सौहार्द्र, शांति और आध्यात्मिक उत्थान के लिए किया जाता है। हवन, यज्ञ और सामूहिक प्रार्थनाओं के माध्यम से दिव्य ऊर्जा का संचार होता है जो समस्त जगत के कल्याण के लिए समर्पित होती है। इन कार्यक्रमों का प्रभाव केवल प्रतिभागियों तक ही नहीं बल्कि व्यापक समाज तक पहुँचता है। इस सेवा में सहयोग करना विश्व शांति और करुणा के प्रसार में योगदान देना है।", 
      image: "/hawan2.jpeg" 
    },
    { id: 9, 
      title: "अनाथ एवम असहाय बुजुर्गों की सेवा", 
      text: "अनाथ और असहाय बुजुर्गों की सेवा उन वरिष्ठ नागरिकों के लिए है जिन्हें देखभाल और सहयोग की आवश्यकता है। कई बुजुर्ग अकेलेपन, गरीबी और बीमारियों से जूझते हैं और उनके पास सहारा देने वाला कोई नहीं होता। इस सेवा के अंतर्गत हम उन्हें सुरक्षित आश्रय, पौष्टिक भोजन, चिकित्सा सुविधा और भावनात्मक सहयोग प्रदान करते हैं ताकि वे सम्मान और आत्मसम्मान के साथ जीवन जी सकें। आपका सहयोग उनके जीवन में फिर से आशा और आत्मविश्वास जगाता है।", 
      image: "/ed.jpg" 
    },
    { id: 10, 
      title: "पुराने एवम खंडित मंदिरों का नवीनीकरण और पुनर्स्थापना", 
      text: "पुराने और खंडित मंदिरों का नवीनीकरण एक महत्वपूर्ण कार्य है जिसका उद्देश्य इन पवित्र स्थलों को पुनः जीवित करना है। कई मंदिर उपेक्षा और समय के कारण जीर्ण-शीर्ण हो चुके हैं, जिससे उनकी पवित्रता और ऐतिहासिक महत्व खो जाता है। मंदिर नवीनीकरण में सहयोग करके आप इन पवित्र स्थानों को पुनः जीवंत बनाते हैं और आने वाली पीढ़ियों के लिए हमारी आध्यात्मिक और सांस्कृतिक धरोहर को सुरक्षित रखते हैं।", 
      image: "/temple.png" 

    },
    { id: 11, 
      title: "धर्म एवम संस्कृति हेतु सामाजिक कार्यक्रम", 
      text: "धार्मिक और सामाजिक कार्यक्रमों का आयोजन धर्म, संस्कृति और मूल्यों के प्रचार-प्रसार के लिए किया जाता है। त्योहारों, सामाजिक अभियानों और सांस्कृतिक आयोजनों के माध्यम से समाज में एकता और परंपराओं के प्रति सम्मान की भावना को बढ़ावा मिलता है। ये कार्यक्रम समाज को जोड़ते हैं, खुशियाँ फैलाते हैं और महत्वपूर्ण सामाजिक मुद्दों पर जागरूकता भी पैदा करते हैं। इन कार्यक्रमों में सहयोग करना हमारी धरोहर को आने वाली पीढ़ियों तक पहुँचाने का एक प्रयास है।", 
      image: "/cultural.jpeg" },
    { 
      id: 12, 
      title: "अनाथ एवम असहाय बच्चों की शिक्षा व्यवस्था", 
      text: "अनाथ और असहाय बच्चों की शिक्षा व्यवस्था भविष्य को सुरक्षित बनाने का एक महत्वपूर्ण प्रयास है। कई अनाथ बच्चे शिक्षा और जीवन कौशल से वंचित रह जाते हैं, जिससे उनके जीवन में अवसरों की कमी हो जाती है। इस सेवा के अंतर्गत हम उन्हें निःशुल्क शिक्षा, अध्ययन सामग्री और कौशल विकास की सुविधा प्रदान करते हैं ताकि वे आत्मनिर्भर और आत्मविश्वासी बन सकें। आपका सहयोग इन बच्चों के लिए आशा और उज्ज्वल भविष्य का मार्ग प्रशस्त करता है।", 
      image: "/education.jpeg" 
    },
  ],
}

type SearchParams = Promise<{ lang: string }>
const Page = async({ searchParams }: { searchParams: SearchParams }) => {
  const {lang}= await searchParams
  const data = lang === "hn" ? "hn" : "en"
  const list = programs[data]

  return (
    <>
      <Header />
      <main className="container p-4 sm:p-0 mx-auto py-12">
        <div className="py-8">
          <SectionHeader heading={lang === "hn" ? "हमारे कार्यक्रम" : "Our Programs"} />
        </div>
        <section className="space-y-16 py-20">
          {list.map((item, idx) => (
            <AnimatedPara key={item.id} section={item} index={idx} />
          ))}
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Page
