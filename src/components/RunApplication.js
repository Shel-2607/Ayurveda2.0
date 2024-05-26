import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './RunApplication.css';
// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const RunApplication = () => {
  const [step, setStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [selectedBox, setSelectedBox] = useState('');
  const [boxVisible, setBoxVisible] = useState(false);
  const [selections, setSelections] = useState({});
  const [vikritiSelection, setVikritiSelection] = useState('');
  const [vayaSelection, setVayaSelection] = useState('');
  const [sarSelection, setSarSelection] = useState('');
  const [samSelection, setSamSelection] = useState('');
  const [pramSelection, setPramSelection] = useState('');
  const [satmSelection, setSatmSelection] = useState('');
  const [satvSelection, setSatvSelection] = useState('');
  const [ahaSelection, setAhaSelection] = useState('');
  const [vySelection, setVySelection] = useState('');
  const [urSelection, setUrSelection] = useState('');
  const [faSelection, setFaSelection] = useState('');
  const [toSelection, setToSelection] = useState('');
  const [soSelection, setSoSelection] = useState('');
  const [eySelection, setEySelection] = useState('');
  const [akSelection, setAkSelection] = useState('');
  const [naSelection, setNaSelection] = useState('');
  const [ssSelection, setSsSelection] = useState('');
  const [stressLevel, setStressLevel] = useState('');
const [digestiveIssuesDuringStress, setDigestiveIssuesDuringStress] = useState('');
const [stressSymptoms, setStressSymptoms] = useState('');
const [financialConcerns, setFinancialConcerns] = useState('');
const [desiresBeyondNeed, setDesiresBeyondNeed] = useState('');
const [fearAnxiety, setFearAnxiety] = useState('');
const [recentLoss, setRecentLoss] = useState('');
const [toiletAfterEating, setToiletAfterEating] = useState('');
const [toiletFrequency, setToiletFrequency] = useState('');
  const [years, setYears] = useState('');
  const [months, setMonths] = useState('');
  const [days, setDays] = useState('');
  const [processedFood, setProcessedFood] = useState(false);
const [deviations, setDeviations] = useState(false);
const [coldFood, setColdFood] = useState(false);
const [curdMilk, setCurdMilk] = useState(false);
const [incompatibleFoods, setIncompatibleFoods] = useState([]);
const [dryFoods, setDryFoods] = useState(false);
  const [liquidFoods, setLiquidFoods] = useState(false);
  const [friedFood, setFriedFood] = useState(false);
  const [spicyFood, setSpicyFood] = useState(false);
  const [digestiveIssues, setDigestiveIssues] = useState(false);
  // Define state variables and setter functions
const [sunTime, setSunTime] = useState('');
const [sunTimeHours, setSunTimeHours] = useState('');
const [prolongedSitting, setProlongedSitting] = useState('');
const [prolongedSittingHours, setProlongedSittingHours] = useState('');
const [fasting, setFasting] = useState('');
const [fastingTimes, setFastingTimes] = useState('');
const [physicalActivityHours, setPhysicalActivityHours] = useState('');
const [alcohol, setAlcohol] = useState('');
const [alcoholFrequency, setAlcoholFrequency] = useState('');
const [sexuallyActive, setSexuallyActive] = useState('');
const [sexActivityFrequency, setSexActivityFrequency] = useState('');
const [fatigue, setFatigue] = useState('');
const [diseaseName, setDiseaseName] = useState('');
const [selectedSymptoms, setSelectedSymptoms] = useState({});
const [diagnose, setDiagnose] = useState(false); // State to track if user wants to diagnose
//const [diagnosisResult, setDiagnosisResult] = useState(''); // State to store diagnosis result
const getHighestPercentageDisease = (data) => {
  let maxPercentage = 0;
  let highestPercentageDisease = '';

  data.forEach((percentage, index) => {
    if (percentage > maxPercentage) {
      maxPercentage = percentage;
      highestPercentageDisease = chartData.labels[index];
    }
  });

  return highestPercentageDisease;
};
// Assuming `getSymptomPercentage` and other functions are defined elsewhere

const [showChart, setShowChart] = useState(false);
const [showTextArea, setShowTextArea] = useState(false);
const [userDiagnosis, setUserDiagnosis] = useState('');
const specificSymptomData = [
  {
    disease: 'अरूचि ',
    severities: {
      वातज: [
        { symptom: 'दन्त हर्ष', description: '(Hypers sensitivity of teeth) ' },
        { symptom: 'मुख का कषाय रस युक्त होना ', description: 'Bitter taste of mouth' }
       
      ],
      पित्तज: [
        { symptom: 'मुख का स्वाद कद', description: 'अम्ल तथा उष्ण होना (Bitter taste of mouth' },
        { symptom: 'मुख में विरसता होना', description: 'Tastelessness of mouth' },
        { symptom: 'अम्ल तथा उष्ण होना ', description: 'acidic taste of mouth' }
       
      ],
      कफज: [
        { symptom: ' मुखमाधुर्य ', description: 'Sweet taste of mouth' },
        { symptom: 'पिच्छिलता या कफस्त्राव ', description: 'Salivation' },
        { symptom: 'गौरव एवं शैत्यता', description: 'Heaviness and feeling of cold' },
        { symptom: 'विबन्ध', description: 'Constipation' }
      ]
    },
  },
  {
    disease: 'अग्निमांद्य लक्षण',
    severities: {
      वातज: [
        { symptom: ' उदर शूल', description: 'Pain in abdomen ' },
        { symptom: 'तोद  ', description: 'Pricking pain in the abdomen' },
        { symptom: 'दौर्बल्य ', description: 'Weakness' },
        { symptom: 'विबन्ध तथा आध्मान  ', description: 'Constipation and Tympanitis' },
        { symptom: 'अंगमर्द ', description: 'Bodyache' },
        { symptom: 'मुखशोष', description: 'Dryness of mouth' }
       
      ],
      पित्तज: [
        { symptom: 'अरूचि ', description: 'Anorexia' },
        { symptom: 'तृष्णा तथा दाह ', description: 'Polydypsia and burning sensation' },
        { symptom: 'अत्यधिक स्वेद  ', description: 'Excessive perspiration' },
        { symptom: 'अम्लोद्‌गार   ', description: 'Acidic eructations' }
      ],
      कफज: [
        { symptom: 'उत्क्लेश ', description: 'Nausea' },
        { symptom: 'छर्दि ', description: 'Vomiting' },
        { symptom: 'कपोल तथा नेत्र कूट में शोथ', description: 'Swelling over eyes and face' },
        { symptom: 'मुख माधुर्य', description: 'Sweet taste of mouth' },
        { symptom: 'क्लम', description: 'Tiredness without exertion' },
        { symptom: 'आलस्य', description: 'Lassitude' },
        { symptom: 'स्तब्धता', description: 'Stiffness' },
        { symptom: 'शरीर में भारीपन', description: 'Heaviness in the body' }
      ]
    },
  },
  {
    disease: 'अजीर्ण लक्षण',
    severities: {
      वातज: [
        { symptom: ' नेत्र तथा कपोल शोथ', description: 'Swelling over eyes and face' },
        { symptom: 'सद्योभुक्त आहार के समानगन्ध रस युक्त उद्गार' },
        { symptom: 'प्रसेक ', description: 'Salivation' },
        { symptom: ',उत्क्लेश', description: 'Nausea' },
        { symptom: 'अंगों में भारीपन', description: 'Heaviness in the body' }
        
       
      ],
      पित्तज: [
        { symptom: ' भ्रम', description: 'Vertigo' },
        { symptom: 'मूर्च्छा ', description: 'Fainting' },
        { symptom: 'तृष्णा तथा दाह', description: 'Polydypsia and Burning senjation' },
        { symptom: 'सघूम अम्लोद्गार', description: 'Acidic eructations' },
        { symptom: 'हृदय प्रदेश में दाह', description: 'Burning sensation in the chest region' },
        { symptom: 'स्वेदाधिक्य', description: '(Excessive sweating' }
      ],
      कफज: [
        { symptom: 'शूल' , description: 'Pain' },
        { symptom: 'विबन्ध', description: 'Constipation' },
        { symptom: 'आध्मान', description: 'Flatulance' },
        { symptom: 'अंगमर्द ', description: 'Bodyache' },
        { symptom: 'मूर्च्छा ', description: 'Fainting' },
        { symptom: 'मल तथा अधोवाय की अप्रवत्ति', description: 'No passage of faecal matter and flatus' },
       
      ]
    },
  },
  {
    disease: 'आनाह लक्षण',
    severities: {
      वातज: [
        { symptom: ' कटि तथा पृष्ठ की स्तब्धता ', description: 'Stiffness in back' },
        { symptom: 'मूत्र तथा पुरीषावरोध', description: 'Obstruction of urine and faece' },
        { symptom: 'शूल', description: 'Pain' },
        { symptom: 'मूर्च्छा', description: 'Fainting' },
        { symptom: 'श्वास में पुरीष की गन्ध आना' },
        { symptom: 'अलसक' }

      ],
      पित्तज: [
        { symptom: 'आमाशय में शूल', description: 'Pain in abdomen' },
        { symptom: 'उद्गार विघात', description: 'No Belching' },
        { symptom: 'तृष्णा ', description: 'Polydypsia' },
        { symptom: 'शिरोदाह', description: 'Burning in Head' }

      ],
      कफज: [
        { symptom: ' गौरव', description: 'Heaviness' },
        { symptom: 'प्रतिश्याय', description: 'Running nose' },
        { symptom: 'हृद स्तम्भ', description: 'Stiffness in ches' }
        
      ]
    },
  },
  {
    disease: 'आध्मान लक्षण	',
    severities: {
      वातज: [
        { symptom: 'पक्वाशय में वात संचय होना ', description: 'प्रत्याध्मान-वात तथा कफ की वृद्धि के कारण उदर के ऊर्ध्व भाग में वायु का संचय होने के कारण आटोप तथा उदर का फूलना।' },
       
      ],
      
    },
  },
  {

    disease: 'आटोप लक्षण',
    severities: {
      वातज: [
        { symptom: 'उदर का फूलना', description: 'Distension of abdomen' },
        { symptom: ' गुड़गुड़ाहट', description: '(Gargling sound in abdomen' },
        
      ],
      कफज: [
        { symptom: ' हृललास', description: 'Nausea' },
        
      ]
    },
  },
  {
    disease: 'ग्रहणी लक्षण',
    severities: {
      वातज: [
        { symptom: 'ग्रहण किये गये अन्न का कष्टपूर्वक पाक होना ', description: 'Difficulty in digestion' },
        { symptom: 'अन्न का अम्लपाक ', description: 'Increased acidic secreations' },
        { symptom: 'खराङ्गता', description: 'Dryness in the body parts' },
        { symptom: 'मुख तथा कण्ठ मे शोष', description: 'Dryness of mouth and throat' },
        { symptom: 'क्षुधा एवं तृष्णा की अधिकता ', description: 'Polyphagia and polydypsia' },
        { symptom: 'तिमिर ', description: 'Black outs' },
        { symptom: 'कर्णनाद', description: 'Tinnitus' },
        { symptom: 'विसूचिका', description: 'Dysentery' },
        { symptom: ',मुखवैरस्य ', description: 'Bitter tase of mouth' },
        { symptom: 'हृदपीड़ा', description: 'Chest pain' },
        { symptom: 'कार्श्य एवं दौर्बल्य ', description: 'Weight loss and weakness' },
        { symptom: 'गुदा में कर्तनवत् पीड़ा', description: 'Cutting pain in Anus' },
        { symptom: 'सर्वरस भक्षण की इच्छा होना', description: 'Desire to eat various types of food' },
        { symptom: 'भोजन के पच जाने पर तथा पाचन काल में आध्मान होना ', description: 'Flatulance, Tympanitis' },
        { symptom: 'थोड़ा भोजन करने पर स्वास्थ्य की प्रतीति होना', description: '(Healthy feeling after consuming little food' },
        { symptom: 'वातगुल्म, हृदरोग तथा प्लीहारोग की शंका उत्पन्न होना', description: 'Possibilities of accurence of abdomenal lumps, cardiac disorders or diseases of speen' }
      ],
      पित्तज: [
        { symptom: ' रोगी का पीताभ वर्ण होना', description: 'Yellowish discolouration of patient' },
        { symptom: 'अजीर्ण ', description: 'Indigestion' },
        { symptom: 'नील पीताभ वर्ण के मल का निस्सरण', description: 'Expulsion of Bluish-yellow- ish stool' },
        { symptom: 'पूययुक्त अम्लोद्‌गार', description: 'Acid eructations with foul smell' },
        { symptom: 'हृदय तथा कण्ठ में दाह', description: 'Burning sensation in chest and thorat' },
        { symptom: 'अरूचि तथा तृष्णा', description: 'Anorexia and Polydypsia' }
        
      ],
      कफज: [
        { symptom: 'खाये हुए आहार का कठिनता से पाचन', description: 'Difficulty in digestion of food consumed' },
        { symptom: 'हल्लास तथा छर्दि', description: 'Nausea and vomiting' },
        { symptom: 'अरूचि', description: 'Anorexia' },
        { symptom: 'मुख के भीतर मललिप्तता', description: 'Coating inside the mouth' },
        { symptom: 'कास, ष्ठीवन तथा पीनस', description: 'Cough, sputum expectoration and Rhinitis' },
        { symptom: 'मुखमाधुर्य', description: 'Sweet taste of mouth' },
        { symptom: 'उदर गौरव ', description: 'Heaviness in the abdomen' },
        { symptom: 'सदन', description: 'Loosene of body, Letharginess' },
        { symptom: 'मैथुन में अनिच्छा', description: 'Loss of Libido' },
        { symptom: 'पतला, आम, गुरु तथा कफयुक्त मल का निस्सरण', description: 'Passage of Loose,mucoid, undigested, heavy stools)' },
        { symptom: 'पीड़ित व्यक्ति कृश नहीं होता परन्तु दुर्बलता रहती है', description: 'No cachexia, but patient is weak' }
     


      ]
    },
  },
  {
    
    disease: 'छर्दि लक्षण',
    severities: {
      वातज: [
        { symptom: 'हृदय तथा पार्श्व में वेदना', description: 'Pain in chest and costal region' },
        { symptom: 'मस्तक, नाभि में पीड़ा के साथ कास, स्वरभेद तथा शरीर में सुई चुभोने सी पीड़ा', description: 'Bouts of cough, hoarseness of voice with pain in head, umbilical region and needling sensation in body' },
        { symptom: 'वेगयुक्त डकार सशब्द निकलना', description: 'Forceful, noisy belching' },
        { symptom: 'वमन फेनयुक्त, विच्छिन्न, काला, पतला तथा कसैला होना', description: 'Thin, frothy and blackish vomitus' },
        { symptom: 'अत्यधिक वेग के साथ वमन आना', description: 'Forceful vomiting' }
      ],
      पित्तज: [
        { symptom: 'मूर्च्छा', description: 'Fainting' },
        { symptom: 'पिपासा तथा मुख शोष', description: 'Polydypsia and dryness of mouth' },
        { symptom: 'शिर, तालु तथा नेत्रों में जलन', description: 'Burning sensation in head, throat and eyes' },
        { symptom: 'तमः प्रवेश (आँखों के सामने अन्धकार होना)', description: 'Black outs' },
        { symptom: 'भ्रम', description: 'Vertigo' },
        { symptom: 'वमन पीत-हरित वर्ण वाला, उष्ण तथा तिक्तरसयुक्त होना', description: 'Yellowish, greenish, hot, bitter taste of vomitus' },
        { symptom: 'धूम्र तथा जलनयुक्त वमन होना', description: 'Smoky and burning vomitus' }
      ],
      कफज: [
        { symptom: 'तन्द्रा', description: 'Drowsiness' },
        { symptom: 'मुख का मधुर स्वाद होना', description: 'Sweet taste of mouth' },
        { symptom: 'भोजन के संतोष या तृप्ति', description: 'Feeling of fullness' },
        { symptom: 'कफ प्रसेक', description: 'Excessive salivation' },
        { symptom: 'अतिनिद्रा', description: 'Excessive sleepiness' },
        { symptom: 'वमन स्निग्ध, धन तथा मधुर रसयुक्त होना', description: 'Sticky, solid and sweet vomitus' }
      ]
    },
  },
  {
    disease: 'गुल्म लक्षण',
    severities: {
      वातज: [
        { symptom: 'स्थान विकल्प युक्त गुल्म अर्थात् चल गुल्म', description: 'Mobile Lump' },
        { symptom: 'विषम आकृति युक्त गुल्म', description: 'Disfigure Lump' },
        { symptom: 'सदा एक समान रूजा का न होना अर्थात् कभी अत्यधिक रूजा तथा कभी अत्यल्प रूजा होना', description: 'Variations in the intensity of pain' },
        { symptom: 'मल तथा अपानवायु का अवरोध', description: 'Obstruction in the passage of faeces and flatus' },
        { symptom: 'मुख तथा गले में शोष', description: 'Dryness of mouth and throat' },
        { symptom: 'शीत लगकर ज्वर की प्रवृत्ति', description: 'Fever with chills' }
      ],
      पित्तज: [
        { symptom: 'ज्वर', description: 'Fever' },
        { symptom: 'भोजन की पाकावस्था में तीव्र शूल का होना', description: 'Increased pain during digestive phage of food' },
        { symptom: 'तृष्णा तथा स्वेदाधिक्य', description: 'Polydypsia and excessive perspiration' },
        { symptom: 'मुख तथा शरीर का रक्तवर्ण युक्त होना', description: 'Reddish texture of face and body' },
        { symptom: 'उदर में दाहाधिक्य', description: 'Burning sensation in abdomen' },
        { symptom: 'व्रण के समान गुल्म का स्पर्शासह्य होना', description: 'Tenderness over lump' }
      ],
      कफज: [
        { symptom: 'शीत ज्वर', description: 'Fever with chills' },
        { symptom: 'स्तैमित्य', description: 'Feeling of being covered with wet cloth' },
        { symptom: 'शरीर में शिथिलता', description: 'Looseness of the body' },
        { symptom: 'हल्लास', description: 'Nausea' },
        { symptom: 'कास', description: 'Cough' },
        { symptom: 'अरूचि तथा गौरव', description: 'Anorexia and Heaviness in body' },
        { symptom: 'शरीर का शीतल होना', description: 'Feeling of cold' },
        { symptom: 'गुल्म प्रदेश में अल्प वेदना', description: 'Mild pain in the region of lump' },
        { symptom: 'गुल्म उत्सेधयुक्त तथा कठिन होना', description: 'Prominent and hard lump' }
      ]
    },
  },
  {
    disease: 'अन्नद्रवशूल लक्षण',
    severities: {
      वातज: [
        { symptom: 'भोजन के जीर्ण होने पर, जीर्णावस्था में एवं जीर्ण होने से पूर्व किसी भी समय शूल होना', description: 'Pain in abdomen after digestion, during digestion or before meals or any time' },
        { symptom: 'पथ्य तथा अपथ्य सेवन से नियमपूर्वक शान्त न होना', description: 'Not relieved by specific dietetic regimen' },
        { symptom: 'भोजन करने अथवा न करने से भी शूल की शान्ति न होना', description: 'Pain not relieved by taking or avoiding food' },
        { symptom: 'कभी-कभी वमन के द्वारा दूषित पित्त के निष्कासन से शूल का शमन', description: 'Sometimes relief in pain by vomiting' }
      ]
    }
  },
  {
    disease: 'परिणाम शूल लक्षण',
    severities: {
      वातज: [
        { symptom: 'उदर का फूलना', description: 'Tympanitis' },
        { symptom: 'आटोप', description: 'Flatulence' },
        { symptom: 'मल तथा मूत्र का अवरोध होना', description: 'Cessation of the urge to defaecate or micturate' },
        { symptom: 'अरति तथा कम्पन', description: 'Restlessness and tremors' }
      ],
      पित्तज: [
        { symptom: 'तृष्णा', description: 'Polydypsia' },
        { symptom: 'दाह', description: 'Burning sensation' },
        { symptom: 'बेचैनी', description: 'Restlessness' },
        { symptom: 'अत्यधिक स्वेद की प्रवृत्ति', description: 'Excessive sweating' },
        { symptom: 'कटु, अम्ल तथा लवण रस युक्त पदार्थों के सेवन से शूल में वृद्धि होना', description: 'Pain increases after consuming spicy food' },
        { symptom: 'शीतोपचार से शान्ति', description: 'Relief in pain after consuming cold food stuff' }
      ],
      कफज: [
        { symptom: 'वमन', description: 'Vomiting' },
        { symptom: 'हल्लास', description: 'Nausea' },
        { symptom: 'मोह', description: 'Fainting/Confusion' },
        { symptom: 'चिरकाल तक थोड़ी-थोड़ी पीड़ा का बने रहना', description: 'Prolonged mild pain in the abdomen' },
        { symptom: 'कटु तथा तिक्त रस युक्त पदार्थों के सेवन से शूल की शान्ति', description: 'Relief in pain by consuming bitter food stuff' }
      ]
    },
  },
  {
    disease: 'अम्लफ्ति लक्षण',
    severities: {
      वातज: [
        { symptom: 'भ्रम तथा मोह', description: 'Vertigo, confusion and delusion' }
      ],
      पित्तज: [
        { symptom: 'तृष्णा', description: 'Polydypsia' },
        { symptom: 'दाह तथा मूर्च्छा', description: 'Burning sensation and fainting' },
        { symptom: 'विविध वर्ण युक्त पित्त का अधोमार्ग से स्राव होना', description: 'Discharge of different coloured bilious substance from the rectum' },
        { symptom: 'अग्निसाद', description: 'Indigestion' },
        { symptom: 'हर्ष तथा स्वेद की प्रवृत्ति', description: 'Horripitation and sweating' },
        { symptom: 'पीताङ्गता', description: 'Yellowish discolouration of the body' }
      ],
      कफज: [
        { symptom: 'हरित-पीत-नील-कृष्ण-रक्त तथा अम्लयुक्त वमन की प्रवृत्ति', description: 'Greenish, yellowish, bluish, blackish and acidic vomitus containing blood' },
        { symptom: 'अति पिच्छिल, विविध रस युक्त तथा मांस के धोवन के समान वमन होना', description: 'Excessive sticky containing different rasas and resembling water in which meat is being washed, vomitus' },
        { symptom: 'भोजन के पश्चात् या बिना भोजन ग्रहण किये ही वमन होना', description: 'Vomitus after or without consuming meals' },
        { symptom: 'अम्लोद्गार तथा कण्ठ प्रदेश में दाह', description: 'Acidic eructations and burning sensation in throat' },
        { symptom: 'हस्तपाद में दाह तथा उष्णता का होना', description: 'Burning sensation in hands and feet' },
        { symptom: 'हृदय प्रदेश में दाह तथा शिरः शूल', description: 'Burning sensation in heart and headache' }
      ]
    },
  },
  {
    disease: 'उदर रोग लक्षण',
    severities: {
      वातज: [
        { symptom: 'कुक्षि प्रदेश, पाणि पाद तथा अण्डो में गाथ', description: 'Pain in abdomen, palms, feet and testis' },
        { symptom: 'उदर में विपाटन (चरिने) सी पीड़ा', description: 'Cutting pain in abdomen' },
        { symptom: 'उदर तथा पाश्र्वशूल', description: 'Pain in abdomen and loin' },
        { symptom: 'अंगमर्द तथा पर्वभेद', description: 'Bodyache and pain in joints' },
        { symptom: 'शुष्क कास', description: 'Dry cough' },
        { symptom: 'कृश्ता', description: 'Emaciation' },
        { symptom: 'अरोचक तथा अविपाक', description: 'Anorexia and indigestion' },
        { symptom: 'अषः प्रदेश में भारीपन', description: 'Heaviness in lower abdomen' },
        { symptom: 'मल-मूत्र तथा अपानवायु की स्कावट', description: 'Obstruction of urine and flatus' },
        { symptom: 'नख-नेत्र, त्वचा, मुख, मूत्र, पुरीष, काले होना', description: 'Blackish nails, eyes, skin, mouth, urine and faeces' }
      ],
      पित्तज: [
        { symptom: 'शारीरिक दाह तथा ज्वर', description: 'Burning sensation and fever' },
        { symptom: 'तृष्णा', description: 'Polydypsia' },
        { symptom: 'मूर्च्छा', description: 'Fainting' },
        { symptom: 'अतिसार', description: 'Diarrhoea' },
        { symptom: 'भ्रम', description: 'Vertigo' },
        { symptom: 'कटुकास्यता', description: 'Bitter taste of mouth' },
        { symptom: 'नख, नेत्र, मुख, त्वचा, मूत्र तथा पूरीष का वर्ण पीत-हरा होना', description: 'Yellowish green coloured nails, eyes, mouth, skin, urine and faeces' },
        { symptom: 'हरित तथा ताम्र वर्ण की रेखाओं उदर प्रदेश में नील पीत हारिद्र की उत्पनि', description: 'Green and copper coloured lines in the abdomen' },
        { symptom: 'उदर में दाह, संताप तथा उष्मा वृद्धि', description: 'Burning sensation and raised body temperature' },
        { symptom: 'उदर का स्पर्श में कोमल तथा शीघ्रपाकी होना', description: 'Soft touch of abdomen and tendency for inflammation' }
      ],
      कफज: [
        { symptom: 'शरीर में गुरुता', description: 'Heaviness of body' },
        { symptom: 'अरोचक तथा अविपाक', description: 'Anorexia and indigestion' },
        { symptom: 'अंगमर्द तथा शून्यता', description: 'Bodyache and numbness' },
        { symptom: 'उदर स्पर्श में शीत, भारी, स्थिर तथा श्वेत सिराओं से व्याप्त', description: 'Cold, heavy, steady abdomen with white veins' },
        { symptom: 'हस्त, पाद, अण्डकोष व उरु में शोथ', description: 'Oedema over hand, feet, thighs and testis' },
        { symptom: 'कास तथा श्वास', description: 'Cough and dyspnea' },
        { symptom: 'उत्क्लेश', description: 'Nausea' },
        { symptom: 'निद्राधिक्य', description: 'Excessive sleepiness' },
        { symptom: 'उदर स्तिमित तथा नेत्र, मुख, त्वचा व पुरीष में श्वेतता', description: 'Feeling of being covered with wet cloth and whitish eyes, mouth, skin and faeces' }
      ]
    },

  },
  // Add more diseases here
];


  const handleSymptomClick = (disease, severity, symptom) => {
    setSelectedSymptoms(prevSelected => {
      const diseaseSelections = prevSelected[disease] || {};
      const severitySelections = diseaseSelections[severity] || [];

      if (severitySelections.includes(symptom)) {
        // If the symptom is already selected, remove it
        return {
          ...prevSelected,
          [disease]: {
            ...diseaseSelections,
            [severity]: severitySelections.filter(s => s !== symptom)
          }
        };
      } else {
        // If the symptom is not selected, add it
        return {
          ...prevSelected,
          [disease]: {
            ...diseaseSelections,
            [severity]: [...severitySelections, symptom]
          }
        };
      }
    });
  };

  const isSymptomSelected = (disease, severity, symptom) => {
    return selectedSymptoms[disease]?.[severity]?.includes(symptom);
  };
  const getSymptomPercentage = (disease) => {
    const severities = specificSymptomData.find(d => d.disease === disease)?.severities;
    if (!severities) return 0;

    let totalCount = 0;
    let selectedCount = 0;

    ['वातज', 'पित्तज', 'कफज'].forEach(severity => {
      const symptoms = severities[severity] || [];
      totalCount += symptoms.length;
      selectedCount += symptoms.filter(({ symptom }) => isSymptomSelected(disease, severity, symptom)).length;
    });

    return totalCount === 0 ? 0 : Math.round((selectedCount / totalCount) * 100);
  };
  const diseasePercentages = specificSymptomData.map(({ disease }) => ({
    disease,
    percentage: getSymptomPercentage(disease),
  }));
  
  const chartData = {
    labels: diseasePercentages.map(dp => dp.disease),
    datasets: [{
      label: 'Selected Symptoms Percentage',
      data: diseasePercentages.map(dp => dp.percentage),
      backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    }],
  };
  
  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'rgb(255, 99, 132)',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        titleFont: { size: 16 },
        bodyFont: { size: 14 },
        footerFont: { size: 12 },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgba(75, 192, 192, 1)',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'rgba(75, 192, 192, 1)',
        },
      },
    },
  };

  const nextStep = () => {
    setShowForm(false);
    setTimeout(() => {
      setStep(step + 1);
      setShowForm(true);
    }, 300);
  };
  const handleIncompatibleChange = (e) => {
    const value = e.target.value;
    setIncompatibleFoods((prev) =>
      prev.includes(value)
        ? prev.filter((food) => food !== value)
        : [...prev, value]
    );
  };
  const prevStep = () => {
    setShowForm(false);
    setTimeout(() => {
      setStep(step - 1);
      setShowForm(true);
    }, 300);
  };
  const handleYearChange = (e) => {
    const value = e.target.value;
    if (value.length <= 4) {
      setYears(value);
    }
  };

  const handleMonthChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setMonths(value);
    }
  };

  const handleDayChange = (e) => {
    const value = e.target.value;
    if (value.length <= 2) {
      setDays(value);
    }
  };

  useEffect(() => {
    setShowForm(true);
  }, [step]);

  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        setBoxVisible(true);
      }, 500);
    } else {
      setBoxVisible(false);
    }
  }, [step]);

  const handleSelection = (category, option) => {
    setSelections((prev) => ({
      ...prev,
      [category]: option,
    }));
  };
  
  const tableData = [
    {
      category: 'Your body constituency is',
      options: ['Lean', 'Moderate', 'Slightly Obese'],
    },
    {
      category: 'Your complexion is',
      options: ['Dark and brown', 'Reddish & Fair', 'Fair and bright'],
    },
    {
      category: 'Your skin is',
      options: ['Rough and Dry', 'Oily and hot', 'Oily and cold'],
    },
    {
      category: 'Your veins are',
      options: ['More prominent', 'Less prominent', 'Not visible'],
    },
    {
      category: 'Your eyes are',
      options: ['Small, and darkish', 'Medium and brown', 'Big, attractive '],
    },
    {
      category: 'Your nails are',
      options: ['Thin, Rough', 'Thin, Soft', 'Thick, Smooth'],
    },
    {
      category: 'Your hair is',
      options: ['Rough, dry and less', 'Soft, oily and Premature graying', 'Black, thick and strong'],
    },
    {
      category: 'Your Eye brows are',
      options: ['Thin, irregular', 'Thin', 'Thin, regular'],
    },
    {
      category: 'Your forehead is',
      options: ['Narrow', 'Medium', 'Broad'],
    },
    {
      category: 'Your appetite is',
      options: ['Variable  and  scanty', 'Good and excessive', 'Constant and less'],
    },
    {
      category: 'Quantity of food',
      options: ['Variable', 'More', 'less'],
    },
    {
      category: 'Habit of taking food',
      options: ['Fast', 'Frequent', 'Slow'],
    },
    {
      category: 'Your thirst is',
      options: ['Variable', 'Excessive', 'Scanty'],
    },
    {
      category: 'The food you like',
      options: ['Light, warm, sweet, sour and salt tastes', 'Cold, sweet, bitter and astringent taste', 'Hot, pungent, bitter and   astringent taste'],
    },
    {
      category: 'You perspire (sweat)',
      options: ['Less', 'More', 'Foul smelling'],
    },
    {
      category: 'Your sleep is',
      options: ['Scanty and Disturbed ', 'Little but sound', 'Deep'],
    },
    {
      category: 'Do you get tensed during difficulties',
      options: ['Always', 'Occasionally', 'Never'],
    },
    {
      category: ' You start the work',
      options: ['Quickly', 'After thinking', 'After detailed thinking'],
    },
    {
      category: 'Grasping power',
      options: ['Excellent', 'Moderate', 'Medium'],
    },
    {
      category: 'Your memory',
      options: ['Poor', 'Excellent', 'Good'],
    },
    {
      category: 'Your anger',
      options: ['For a short span', 'For more time', 'Less'],
    },
    {
      category: 'You talk to the unknown persons',
      options: ['More', 'As per need', 'Less'],
    },
    {
      category: 'You dream about',
      options: ['Running, flying, falling.', 'Shining objects like lightening, fire and violence', 'River, greenery, swimming.'],
    },
    {
      category: 'Physical activity of your body is',
      options: ['Very active', 'Moderate As per need', 'Less active'],
    },
    {
      category: ' You speak',
      options: ['Fast, talkative', 'Clear cut', 'Slow'],
    },
    {
      category: 'Your mood',
      options: ['Changes quickly', 'Changes slowly', 'Unchangable'],
    },
    {
      category: 'Your resistance to disease',
      options: ['Poor', 'Average', 'Good'],
    },
    {
      category: 'Competitive capacity',
      options: ['Don’t like', 'Excellent competitor', 'Handle stress easily'],
    },
    {
      category: 'Your financial status is',
      options: ['Poor, spends money quickly', 'Moderate, spends on luxuries', 'Rich, money saver, spends on Food'],
    },
    {
      category: 'Do you feel discomfort while working',
      options: ['In rainy season', 'In summer season', 'In winter season'],
    },
    // Add more rows as needed
  ];

  const boxes = [
    'Prakriti', 'Vikriti', 'Sara', 'Samhanana', 'Pramana', 'Satmya', 'Satva', 
    'Ahara shakti', 'Vyayam shakti', 'Vaya', 'Pulse', 'Urine', 'Faeces', 
    'Tongue', 'Sound', 'Touch', 'Eye', 'Akriti'
  ];
  const boxes2 = [
    'Most Suffered Symptom', 'Duration', 'Diet and Eating Habbit','Most Specific Symptoms', 'Food Quality', 'LifeStyle', 'Stress and Environmental Health','Investigation'
  ];
 
  const calculatePercentages = () => {
    const counts = { VATTA: 0, PITRA: 0, KAPHA: 0 };
    const totalSelections = Object.keys(selections).length;

    Object.values(selections).forEach(option => {
      if (option === 'Lean' || option === 'Dark and brown' || option === 'In rainy season'|| option === 'Poor, spends money quickly'|| option === 'Don’t like'|| option === 'Poor'|| option === 'Changes quickly'|| option === 'Fast, talkative'|| option === 'Very active'|| option === 'Running, flying, falling.'|| option === 'More'|| option === 'For a short span'|| option === 'Poor'|| option === 'Excellent'|| option === 'Quickly'|| option === 'Less'|| option === 'Always'|| option === 'Scanty and Disturbed'|| option === 'Light, warm, sweet, sour and salt tastes'|| option === 'Variable'|| option === 'Variable'|| option === 'Variable  and  scanty'|| option === 'Fast'|| option === 'Narrow'|| option === 'Thin'|| option === 'Rough, dry and less'|| option === 'Thin, Rough'|| option === 'Rough and Dry'|| option === 'Small, and darkish') counts.VATTA++;
      if (option === 'Moderate'|| option === 'Reddish & Fair'|| option === 'Oily and hot'|| option === 'Less prominent'|| option === 'Medium and brown'|| option === 'Thin, Soft'|| option === 'Soft, oily and Premature graying'|| option === 'Thin'|| option === 'Medium'|| option === 'Good and excessive'|| option === 'More'|| option === 'Frequent'|| option === 'Cold, sweet, bitter and astringent taste'|| option === 'Excessive'|| option === 'More'|| option === 'Little but sound'|| option === 'Occasionally'|| option === 'After thinking'|| option === 'Moderate'|| option === 'Excellent'|| option === 'For more time'|| option === 'As per need'|| option === 'Shining objects like lightening, fire and violence'|| option === 'Moderate As per need'|| option === 'Clear cut'|| option === 'Changes slowly'|| option === 'Average'|| option === 'Excellent competitor'|| option === 'Moderate, spends on luxuries'|| option === 'In summer season'  ) counts.PITRA++;
      if (option === 'Slightly Obese' || option === 'Fair and bright' || option === 'Oily and cold'|| option === 'Not visible'|| option === 'Big, attractive '|| option === 'Thick, Smooth'|| option === 'Black, thick and strong'|| option === 'Thick and regular'|| option === 'Broad'|| option === 'Constant and less'|| option === 'Less'|| option === 'Slow'|| option === 'Hot, pungent, bitter and   astringent taste'|| option === 'Scanty'|| option === 'Foul smelling'|| option === 'Deep'|| option === 'Never'|| option === 'After detailed thinking'|| option === 'Medium'|| option === 'Good'|| option === 'Less'|| option === 'Less'|| option === 'River, greenery, swimming.'|| option === 'Less active'|| option === 'Slow'|| option === 'Unchangeable'|| option === 'Good'|| option === 'Handle stress easily'|| option === 'Rich, money saver, spends on Food'|| option === 'In winter season') counts.KAPHA++;
    });

    return {
      VATTA: ((counts.VATTA / totalSelections) * 100).toFixed(2),
      PITRA: ((counts.PITRA / totalSelections) * 100).toFixed(2),
      KAPHA: ((counts.KAPHA / totalSelections) * 100).toFixed(2),
    };
  };

  const percentages = calculatePercentages();

  return (
    <div className="run-application">
      <h2></h2>
      {step === 1 && (
        <div className={`form-container ${showForm ? 'show' : ''}`}>
          <h1 className="heading1">Personal Details</h1>
          <form>
            {/* Form fields here */}
            <div className="form-group">
              <label>Name:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label>Age/Sex:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label>Blood Group:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label>Height (C.M):</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label>Weight:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label>Education:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label>Occupation:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label htmlFor="mother-name">Mother's Name:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label htmlFor="marital-status">Marital Status:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label htmlFor="environmental-history">Environmental History:</label>
              <textarea id="environmental-history" name="environmental-history" />
            </div>
            <div className="form-group">
              <label htmlFor="family-history">Family History:</label>
              <textarea id="family-history" name="family-history" />
            </div>
            <div className="form-group">
              <label htmlFor="past-illness">History of Past Illness:</label>
              <textarea id="past-illness" name="past-illness" />
            </div>
            <div className="form-group">
              <label htmlFor="medicinal-history">Medicinal History:</label>
              <textarea id="medicinal-history" name="medicinal-history" />
            </div>
            <div className="form-group">
              <label>Address:</label>
              <textarea rows="3"></textarea>
            </div>
            <button type="button" className="blinking" onClick={nextStep}>Next</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className={`clinical-investigation ${boxVisible ? 'visible' : ''}`}>
          <h1 className="heading1">Clinical Investigation-1</h1>
          <div className="box-container">
            {boxes.map((box, index) => (
              <React.Fragment key={index}>
                <div 
                  className={`box ${selectedBox === box ? 'selected' : ''}`} 
                  onClick={() => setSelectedBox(box)}
                >
                  <p>{box}</p>
                </div>
                {selectedBox === 'Prakriti' && selectedBox === box && (
                  <div className="table-container">
                    <table>
                    <thead>
                    <tr>
                      <th>Category</th>
                      <th>VATTA</th>
                      <th>PITRA</th>
                      <th>KAPHA</th>
                    </tr>
                  </thead>
                      <tbody>
                        {tableData.map((row, rowIndex) => (
                          <tr key={rowIndex} className="table-row">
                            <td className="table-category">{row.category}</td>
                            {row.options.map((option, optionIndex) => (
                              <td
                                key={optionIndex}
                                className={`table-option ${
                                  selections[row.category] === option ? 'selected-option' : ''
                                }`}
                                onClick={() => handleSelection(row.category, option)}
                              >
                                {option}
                              </td>
                            ))}
                          </tr>
                        ))}
                        <tr>
                        <td className="table-category">Percentage</td>
                        <td>{percentages.VATTA}%</td>
                        <td>{percentages.PITRA}%</td>
                        <td>{percentages.KAPHA}%</td>
                      </tr>
                      </tbody>
                    </table>
                   
                  </div>
                )}
                {selectedBox === 'Vikriti' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Vataj', 'Pitaj', 'Kafaj'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${vikritiSelection === option ? 'selected' : ''}`}
                        onClick={() => setVikritiSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Vaya' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Child', 'Adult', 'Old'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${vayaSelection === option ? 'selected' : ''}`}
                        onClick={() => setVayaSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Sara' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Twak','Rakt','Mansh','Medh','Majja', 'Asthi','Sukra', 'Satva'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${sarSelection === option ? 'selected' : ''}`}
                        onClick={() => setSarSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Samhanana' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Pravar','Madhyam','Avar'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${samSelection === option ? 'selected' : ''}`}
                        onClick={() => setSamSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Pramana' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Pravar','Madhyam','Avar'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${pramSelection === option ? 'selected' : ''}`}
                        onClick={() => setPramSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Satmya' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Pravar','Madhyam','Avar'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${satmSelection === option ? 'selected' : ''}`}
                        onClick={() => setSatmSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Satva' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Pravar','Madhyam','Avar'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${satvSelection === option ? 'selected' : ''}`}
                        onClick={() => setSatvSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Ahara shakti' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Pravar','Madhyam','Avar'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${ahaSelection === option ? 'selected' : ''}`}
                        onClick={() => setAhaSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Vyayam shakti' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Vataj', 'Pitaj', 'Kafaj'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${vySelection === option ? 'selected' : ''}`}
                        onClick={() => setVySelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Pulse' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Vataj', 'Pitaj', 'Kafaj'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${naSelection === option ? 'selected' : ''}`}
                        onClick={() => setNaSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Urine' && selectedBox === box && (
                  <div className="vikriti-options">
                    {[ 'Visam', 'Prakrat'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${urSelection === option ? 'selected' : ''}`}
                        onClick={() => setUrSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Faeces' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Sam', 'Niram'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${faSelection === option ? 'selected' : ''}`}
                        onClick={() => setFaSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Tongue' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Sam', 'Niram'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${toSelection === option ? 'selected' : ''}`}
                        onClick={() => setToSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Sound' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Visam' ,'Prakrat'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${soSelection === option ? 'selected' : ''}`}
                        onClick={() => setSoSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Touch' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Cold', 'Warm', 'Mixed'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${toSelection === option ? 'selected' : ''}`}
                        onClick={() => setToSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Eye' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Visam' , 'Prakrat'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${eySelection === option ? 'selected' : ''}`}
                        onClick={() => setEySelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Akriti' && selectedBox === box && (
                  <div className="vikriti-options">
                    {['Visam' , 'Prakrat'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box ${akSelection === option ? 'selected' : ''}`}
                        onClick={() => setAkSelection(option)}
                      >
                        <p>{option}</p>
                      </div>
                    ))}
                    
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          <button type="button"  onClick={prevStep}>Prev</button>
          <button type="button" className="blinking" onClick={nextStep}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div className={`clinical-investigation ${boxVisible ? 'visible' : ''}`}>
          <h1 className="heading1">Clinical Investigation-2</h1>
          <div className="box-container">
            {boxes2.map((box, index) => (
              <React.Fragment key={index}>
                <div 
                  className={`box ${selectedBox === box ? 'selected' : ''}`} 
                  onClick={() => setSelectedBox(box)}
                >
                  <p>{box}</p>
                </div>
                {selectedBox === 'Prakriti' && selectedBox === box && (
                  <div className="table-container">
                    <table>
                    <thead>
                    <tr>
                      <th>Category</th>
                      <th>VATTA</th>
                      <th>PITRA</th>
                      <th>KAPHA</th>
                    </tr>
                  </thead>
                      <tbody>
                        {tableData.map((row, rowIndex) => (
                          <tr key={rowIndex} className="table-row">
                            <td className="table-category">{row.category}</td>
                            {row.options.map((option, optionIndex) => (
                              <td
                                key={optionIndex}
                                className={`table-option ${
                                  selections[row.category] === option ? 'selected-option' : ''
                                }`}
                                onClick={() => handleSelection(row.category, option)}
                              >
                                {option}
                              </td>
                            ))}
                          </tr>
                        ))}
                        <tr>
                        <td className="table-category">Percentage</td>
                        <td>{percentages.VATTA}%</td>
                        <td>{percentages.PITRA}%</td>
                        <td>{percentages.KAPHA}%</td>
                      </tr>
                      </tbody>
                    </table>
                   
                  </div>
                )}
                {selectedBox === 'Most Suffered Symptom' && selectedBox === box && (
                  <div className="vikriti-options2">
                    {['अरूचि (Anorexia)', 'अग्निमांद्य (Digestive Insufficiency)', 'अजीर्ण (Indigestion)','आनाह (Constipation)','आध्मान(Tympanitis)','आटोप (Flatulence)','ग्रहणी रोग (Malabsorption Syndrome)','छर्दि (Vomiting)','गुल्म रोग (Painful Lump)','अम्लपित्त (Hyperacidity)','अन्नद्रव शूल एवं परिणामशूल','उदर रोग (Abdominal Swellings)'].map((option, index) => (
                      <div
                        key={index}
                        className={`vikriti-box2 ${ssSelection === option ? 'selected' : ''}`}
                        onClick={() => setSsSelection(option)}
                      >
                        <p>{option}</p>
                       
                      </div>
                    ))}
                    
                  </div>
                )}
                {selectedBox === 'Duration' && selectedBox === box &&(
                  <div className="vikriti-duration">
                    <div className="duration-input">
                      <label htmlFor="years">Years</label>
                      <input
                        type="number"
                        id="years"
                        name="years"
                        placeholder="YYYY"
                        value={years}
                        onChange={handleYearChange}
                        min="1000" /* Minimum value for year */
                        max="9999" /* Maximum value for year */
                      />
                    </div>
                    <div className="duration-input">
                      <label htmlFor="months">Months</label>
                      <input
                        type="number"
                        id="months"
                        name="months"
                        placeholder="MM"
                        value={months}
                        onChange={handleMonthChange}
                        min="1" /* Minimum value for month */
                        max="12" /* Maximum value for month */
                      />
                    </div>
                    <div className="duration-input">
                      <label htmlFor="days">Days</label>
                      <input
                        type="number"
                        id="days"
                        name="days"
                        placeholder="DD"
                        value={days}
                        onChange={handleDayChange}
                        min="1" /* Minimum value for day */
                        max="31" /* Maximum value for day */
                      />
                    </div>
                  </div>
                )}
                {selectedBox === 'Diet and Eating Habbit' && selectedBox === box && (
                  <div className="diet-questions" style={{ textAlign: 'left', marginLeft: 'auto' }}>
                    <div className="question">
                      <label>Q1: How many times do you eat in a day?</label>
                      <input type="text" placeholder="Enter number of times" />
                    </div>
                    <div className="question">
                      <label>Q2: Do you eat processed or fast food?</label>
                      <label>
                        Yes <input type="radio" name="processedFood" value="yes" onChange={() => setProcessedFood(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="processedFood" value="no" onChange={() => setProcessedFood(false)} />
                      </label>
                      {processedFood && (
                        <div className="sub-question">
                          <label>If yes, how many times a week?</label>
                          <input type="text" placeholder="Enter number of times" />
                        </div>
                      )}
                    </div>
                    <div className="question">
                      <label>Q3: Can you list the times you typically eat?</label>
                      <div className="sub-question">
                        <label>Breakfast</label>
                        <input type="text" placeholder="Enter time" />
                      </div>
                      <div className="sub-question">
                        <label>Lunch</label>
                        <input type="text" placeholder="Enter time" />
                      </div>
                      <div className="sub-question">
                        <label>Dinner</label>
                        <input type="text" placeholder="Enter time" />
                      </div>
                      <label>Are there any significant deviations from this schedule?</label>
                      <label>
                        Yes <input type="radio" name="deviations" value="yes" onChange={() => setDeviations(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="deviations" value="no" onChange={() => setDeviations(false)} />
                      </label>
                      {deviations && (
                        <div className="sub-question">
                          <label>If yes, please explain:</label>
                          <input type="text" placeholder="Enter details" />
                        </div>
                      )}
                    </div>
                    <div className="question">
                      <label>Q4: Do you drink large amounts of water before, during, or after meals?</label>
                      <div className="sub-question">
                        <label>Before</label>
                        <input type="text" placeholder="Enter details" />
                      </div>
                      <div className="sub-question">
                        <label>During</label>
                        <input type="text" placeholder="Enter details" />
                      </div>
                      <div className="sub-question">
                        <label>After</label>
                        <input type="text" placeholder="Enter details" />
                      </div>
                    </div>
                    <div className="question">
                      <label>Q5: Are you aware of any incompatible food combinations you might consume? If so, please list them:</label>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Fruit + Milk" onChange={handleIncompatibleChange} />
                          Fruit + Milk
                        </label>
                      </div>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Fruit shakes + Salty food" onChange={handleIncompatibleChange} />
                          Fruit shakes + Salty food
                        </label>
                      </div>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Grains + Fruits" onChange={handleIncompatibleChange} />
                          Grains + Fruits
                        </label>
                      </div>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Egg + Milk/Fruits/Yogurt" onChange={handleIncompatibleChange} />
                          Egg + Milk/Fruits/Yogurt
                        </label>
                      </div>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Yogurt + Cheese/Hot drinks/Sour fruits/Milk/Mangoes" onChange={handleIncompatibleChange} />
                          Yogurt + Cheese/Hot drinks/Sour fruits/Milk/Mangoes
                        </label>
                      </div>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Yogurt + Salad vegetables" onChange={handleIncompatibleChange} />
                          Yogurt + Salad vegetables
                        </label>
                      </div>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Cooked honey" onChange={handleIncompatibleChange} />
                          Cooked honey
                        </label>
                      </div>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Honey + Ghee" onChange={handleIncompatibleChange} />
                          Honey + Ghee
                        </label>
                      </div>
                      <div className="sub-question">
                        <label>
                          <input type="checkbox" name="incompatible" value="Excessive cold water + food" onChange={handleIncompatibleChange} />
                          Excessive cold water + food
                        </label>
                      </div>
                    </div>
                    <div className="question">
                      <label>Q6: How many times a day do you drink tea/coffee?</label>
                      <input type="text" placeholder="Enter number of times" />
                    </div>
                    <div className="question">
                      <label>Q7: Do you regularly eat cold food?</label>
                      <label>
                        Yes <input type="radio" name="coldFood" value="yes" onChange={() => setColdFood(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="coldFood" value="no" onChange={() => setColdFood(false)} />
                      </label>
                    </div>
                    <div className="question">
                      <label>Q8: How would you rate your salt intake on a scale of 1 to 5?</label>
                      <input type="text" placeholder="Enter a number between 1 and 5" />
                    </div>
                    <div className="question">
                      <label>Q9: Do you eat more curd and milk in your diet?</label>
                      <label>
                        Yes <input type="radio" name="curdMilk" value="yes" onChange={() => setCurdMilk(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="curdMilk" value="no" onChange={() => setCurdMilk(false)} />
                      </label>
                      {curdMilk && (
                        <div className="sub-question">
                          <label>If yes, how many times a day?</label>
                          <input type="text" placeholder="Enter number of times" />
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div className="food-quality-container">
                {selectedBox === 'Food Quality' && selectedBox === box && (
                  <div className="food-quality-questions" style={{ textAlign: 'left', color: 'black'  }}>
                    <div className="question">
                      <label>Q1: Do you prefer eating dry foods?</label>
                      <label>
                        Yes <input type="radio" name="dryFoods" value="yes" onChange={() => setDryFoods(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="dryFoods" value="no" onChange={() => setDryFoods(false)} />
                      </label>
                      {dryFoods && (
                        <div className="sub-question">
                          <label>If yes, how many times a day?</label>
                          <input type="text" placeholder="Enter number of times" />
                        </div>
                      )}
                    </div>
                    <div className="question">
                      <label>Q2: Do you prefer eating liquid foods?</label>
                      <label>
                        Yes <input type="radio" name="liquidFoods" value="yes" onChange={() => setLiquidFoods(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="liquidFoods" value="no" onChange={() => setLiquidFoods(false)} />
                      </label>
                      {liquidFoods && (
                        <div className="sub-question">
                          <label>If yes, how many times a day?</label>
                          <input type="text" placeholder="Enter number of times" />
                        </div>
                      )}
                    </div>
                    <div className="question">
                      <label>Q3: How frequently do you eat oily/fried food?</label>
                      <label>
                        Yes <input type="radio" name="friedFood" value="yes" onChange={() => setFriedFood(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="friedFood" value="no" onChange={() => setFriedFood(false)} />
                      </label>
                      {friedFood && (
                        <div className="sub-question">
                          <label>If yes, how many times a day?</label>
                          <input type="text" placeholder="Enter number of times" />
                        </div>
                      )}
                    </div>
                    <div className="question">
                      <label>Q4: How often do you consume spicy foods?</label>
                      <label>
                        Yes <input type="radio" name="spicyFood" value="yes" onChange={() => setSpicyFood(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="spicyFood" value="no" onChange={() => setSpicyFood(false)} />
                      </label>
                      {spicyFood && (
                        <div className="sub-question">
                          <label>If yes, how many times a day?</label>
                          <input type="text" placeholder="Enter number of times" />
                        </div>
                      )}
                    </div>
                    <div className="question">
                      <label>Q5: Do you notice any digestive issues after eating them?</label>
                      <label>
                        Yes <input type="radio" name="digestiveIssues" value="yes" onChange={() => setDigestiveIssues(true)} />
                      </label>
                      <label>
                        No <input type="radio" name="digestiveIssues" value="no" onChange={() => setDigestiveIssues(false)} />
                      </label>
                      {digestiveIssues && (
                        <div className="sub-question">
                          <label>If yes, specify the disease name:</label>
                          <input type="text" placeholder="Enter disease name" />
                        </div>
                      )}
                    </div>
                    <div className="question">
                      <label>Q6: Which type of taste of food do you eat the most?</label>
                      <div className="taste-options">
                        {['Sweet', 'Salty', 'Sour', 'Bitter', 'Astringent', 'Pungent'].map((option, index) => (
                          <div key={index} className="taste-box">
                            <input type="checkbox" id={`taste-${index}`} name="taste" value={option} />
                            <label htmlFor={`taste-${index}`}>{option}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                </div>
                {selectedBox === 'LifeStyle' && selectedBox === box && (
                  <div className="lifestyle-questions"style={{ textAlign: 'left', color: 'black'  }}>
                    {/* Q1 */}
                    <div className="question">
                      <p>Q1- Do you spend much time in the sun in your business?</p>
                      <div className="options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={sunTime === 'yes'}
                            onChange={() => setSunTime('yes')}
                          />
                          Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={sunTime === 'no'}
                            onChange={() => setSunTime('no')}
                          />
                          No
                        </label>
                        {sunTime === 'yes' && (
                          <input
                            type="text"
                            placeholder="Enter hours"
                            value={sunTimeHours}
                            onChange={(e) => setSunTimeHours(e.target.value)}
                          />
                        )}
                      </div>
                    </div>
                
                    {/* Q2 */}
                    <div className="question">
                      <p>Q2- Do you spend prolonged periods sitting without physical movements?</p>
                      <div className="options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={prolongedSitting === 'yes'}
                            onChange={() => setProlongedSitting('yes')}
                          />
                          Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={prolongedSitting === 'no'}
                            onChange={() => setProlongedSitting('no')}
                          />
                          No
                        </label>
                        {prolongedSitting === 'yes' && (
                          <input
                            type="text"
                            placeholder="Enter hours"
                            value={prolongedSittingHours}
                            onChange={(e) => setProlongedSittingHours(e.target.value)}
                          />
                        )}
                      </div>
                    </div>
                
                    {/* Q3 */}
                    <div className="question">
                      <p>Q3- How often do you fasting?</p>
                      <div className="options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={fasting === 'yes'}
                            onChange={() => setFasting('yes')}
                          />
                          Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={fasting === 'no'}
                            onChange={() => setFasting('no')}
                          />
                          No
                        </label>
                        {fasting === 'yes' && (
                          <input
                            type="text"
                            placeholder="Enter times/month"
                            value={fastingTimes}
                            onChange={(e) => setFastingTimes(e.target.value)}
                          />
                        )}
                      </div>
                    </div>
                
                    {/* Q4 */}
                    <div className="question">
                      <p>Q4- How much physical activity or exercise do you get in a week?</p>
                      <div className="options">
                        {/* Radio buttons for options */}
                        <input
                          type="text"
                          placeholder="Enter hours"
                          value={physicalActivityHours}
                          onChange={(e) => setPhysicalActivityHours(e.target.value)}
                        />
                      </div>
                    </div>
                
                    {/* Q5 */}
<div className="question">
<p>Q5- Have you experienced fatigue, lack of appetite, or unexplained weight loss recently?</p>
<div className="options">
  <label>
    <input
      type="radio"
      value="yes"
      checked={fatigue === 'yes'}
      onChange={() => setFatigue('yes')}
    />
    Yes
  </label>
  <label>
    <input
      type="radio"
      value="no"
      checked={fatigue === 'no'}
      onChange={() => setFatigue('no')}
    />
    No
  </label>
  {fatigue === 'yes' && (
    <input
      type="text"
      placeholder="Enter disease name"
      value={diseaseName}
      onChange={(e) => setDiseaseName(e.target.value)}
    />
  )}
</div>
</div>

{/* Q6 */}
<div className="question">
<p>Q6- Do you take alcohol?</p>
<div className="options">
  <label>
    <input
      type="radio"
      value="yes"
      checked={alcohol === 'yes'}
      onChange={() => setAlcohol('yes')}
    />
    Yes
  </label>
  <label>
    <input
      type="radio"
      value="no"
      checked={alcohol === 'no'}
      onChange={() => setAlcohol('no')}
    />
    No
  </label>
  {alcohol === 'yes' && (
    <input
      type="text"
      placeholder="Enter times/week"
      value={alcoholFrequency}
      onChange={(e) => setAlcoholFrequency(e.target.value)}
    />
  )}
</div>
</div>

{/* Q7 */}
<div className="question">
<p>Q7- Are you sexually active?</p>
<div className="options">
  <label>
    <input
      type="radio"
      value="yes"
      checked={sexuallyActive === 'yes'}
      onChange={() => setSexuallyActive('yes')}
    />
    Yes
  </label>
  <label>
    <input
      type="radio"
      value="no"
      checked={sexuallyActive === 'no'}
      onChange={() => setSexuallyActive('no')}
    />
    No
  </label>
  {sexuallyActive === 'yes' && (
    <input
      type="text"
      placeholder="Enter times/week"
      value={sexActivityFrequency}
      onChange={(e) => setSexActivityFrequency(e.target.value)}
    />
  )}
</div>
</div>

                
                  </div>
                )}
                {selectedBox === 'Stress and Environmental Health' && selectedBox === box && (
                  <div className="lifestyle-questions" style={{ textAlign: 'left', marginLeft: 'auto' }}>
                    <div className="lifestyle-question">
                      <p>Q1 - How would you rate your daily stress levels on a scale 1-10?</p>
                      <input
                        type="text"
                        value={stressLevel}
                        onChange={(e) => setStressLevel(e.target.value)}
                        placeholder="1-10"
                      />
                    </div>
                
                    <div className="lifestyle-question">
                      <p>Q2 - Do you experience worsening digestive issues during periods of high stress or emotional disturbance?</p>
                      <div className="lifestyle-options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={digestiveIssuesDuringStress === 'yes'}
                            onChange={() => setDigestiveIssuesDuringStress('yes')}
                          /> Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={digestiveIssuesDuringStress === 'no'}
                            onChange={() => setDigestiveIssuesDuringStress('no')}
                          /> No
                        </label>
                        {digestiveIssuesDuringStress === 'yes' && (
                          <input
                            type="text"
                            value={stressSymptoms}
                            onChange={(e) => setStressSymptoms(e.target.value)}
                            placeholder="Symptoms"
                          />
                        )}
                      </div>
                    </div>
                
                    <div className="lifestyle-question">
                      <p>Q3 - Has there been any change in your financial situation that concerns you in everyday life?</p>
                      <div className="lifestyle-options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={financialConcerns === 'yes'}
                            onChange={() => setFinancialConcerns('yes')}
                          /> Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={financialConcerns === 'no'}
                            onChange={() => setFinancialConcerns('no')}
                          /> No
                        </label>
                      </div>
                    </div>
                
                    <div className="lifestyle-question">
                      <p>Q4 - Do you often find yourself wanting more than your need whether it's food, possessions, or other desires?</p>
                      <div className="lifestyle-options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={desiresBeyondNeed === 'yes'}
                            onChange={() => setDesiresBeyondNeed('yes')}
                          /> Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={desiresBeyondNeed === 'no'}
                            onChange={() => setDesiresBeyondNeed('no')}
                          /> No
                        </label>
                      </div>
                    </div>
                
                    <div className="lifestyle-question">
                      <p>Q5 - Do you frequently experience fear or anxiety about aspects of life?</p>
                      <div className="lifestyle-options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={fearAnxiety === 'yes'}
                            onChange={() => setFearAnxiety('yes')}
                          /> Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={fearAnxiety === 'no'}
                            onChange={() => setFearAnxiety('no')}
                          /> No
                        </label>
                      </div>
                    </div>
                
                    <div className="lifestyle-question">
                      <p>Q6 - Have you recently experienced a loss or had to offer condolences to someone close to you?</p>
                      <div className="lifestyle-options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={recentLoss === 'yes'}
                            onChange={() => setRecentLoss('yes')}
                          /> Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={recentLoss === 'no'}
                            onChange={() => setRecentLoss('no')}
                          /> No
                        </label>
                      </div>
                    </div>
                
                    <div className="lifestyle-question">
                      <p>Q8 - Do you often go to the toilet after eating food?</p>
                      <div className="lifestyle-options">
                        <label>
                          <input
                            type="radio"
                            value="yes"
                            checked={toiletAfterEating === 'yes'}
                            onChange={() => setToiletAfterEating('yes')}
                          /> Yes
                        </label>
                        <label>
                          <input
                            type="radio"
                            value="no"
                            checked={toiletAfterEating === 'no'}
                            onChange={() => setToiletAfterEating('no')}
                          /> No
                        </label>
                        {toiletAfterEating === 'yes' && (
                          <input
                            type="text"
                            value={toiletFrequency}
                            onChange={(e) => setToiletFrequency(e.target.value)}
                            placeholder="Times/day"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                )}
                {selectedBox === 'Investigation' && selectedBox === box && (
                  <div className="chart-container">
                   <Bar data={chartData} options={chartOptions} />
                   <p>Would you like to diagnose?</p>
                    <button onClick={() => setShowTextArea(true)}>Yes</button>
                    <button onClick={() => setShowTextArea(false)}>No</button>
                  
                  {showTextArea ? (
                    <textarea
                      placeholder="Write your diagnosis here..."
                      value={userDiagnosis}
                      onChange={(e) => setUserDiagnosis(e.target.value)}
                    />
                  ) : (
                    <p>{getHighestPercentageDisease(chartData.datasets[0].data)}</p>
                  )}
                    </div>
                )}
                {selectedBox === 'Most Specific Symptoms' && selectedBox === box && (
                  <div className="symptom-table">
                  <table>
                  <thead>
                    <tr>
                      <th className="disease-header">Disease</th>
                      <th className="severity-header">वातज</th>
                      <th className="severity-header">पित्तज</th>
                      <th className="severity-header">कफज</th>
                      <th className="percentage-header">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {specificSymptomData.map(({ disease, severities }) => {
                      const percentage = getSymptomPercentage(disease);
                      return (
                        <tr key={disease}>
                          <td className="disease-name">{disease}</td>
                          {['वातज', 'पित्तज', 'कफज'].map(severity => (
                            <td key={severity}>
                              {severities[severity]?.map(({ symptom, description }) => (
                                <div
                                  key={symptom}
                                  className={`symptom-box ${isSymptomSelected(disease, severity, symptom) ? 'selected' : ''}`}
                                  onClick={() => handleSymptomClick(disease, severity, symptom)}
                                >
                                  {symptom}
                                  <div className="tooltip">{description}</div>
                                </div>
                              ))}
                            </td>
                          ))}
                          <td className="percentage-cell">{percentage}%</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
                  </div>
                )}
                
                
                
               
              
               
              </React.Fragment>
            ))}
            
          </div>
          <button type="button" className="blinking" onClick={prevStep}>Prev</button>
        </div>
      )}
    </div>
  );
};

export default RunApplication;
