import React, { useEffect, useState } from 'react';
import './RunApplication.css';

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


const specificSymptomData = [
  {
    disease: 'अरूचि ',
    severities: {
      Mild: [
        { symptom: 'दन्त हर्ष', description: '(Hypers sensitivity of teeth) ' },
        { symptom: 'मुख का कषाय रस युक्त होना ', description: 'Bitter taste of mouth' }
       
      ],
      Moderate: [
        { symptom: 'मुख का स्वाद कद', description: 'अम्ल तथा उष्ण होना (Bitter taste of mouth' },
        { symptom: 'मुख में विरसता होना', description: 'Tastelessness of mouth' },
        { symptom: 'अम्ल तथा उष्ण होना ', description: 'acidic taste of mouth' }
       
      ],
      Serious: [
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
      Mild: [
        { symptom: ' उदर शूल', description: 'Pain in abdomen ' },
        { symptom: 'तोद  ', description: 'Pricking pain in the abdomen' },
        { symptom: 'दौर्बल्य ', description: 'Weakness' },
        { symptom: 'विबन्ध तथा आध्मान  ', description: 'Constipation and Tympanitis' },
        { symptom: 'अंगमर्द ', description: 'Bodyache' },
        { symptom: 'मुखशोष', description: 'Dryness of mouth' }
       
      ],
      Moderate: [
        { symptom: 'अरूचि ', description: 'Anorexia' },
        { symptom: 'तृष्णा तथा दाह ', description: 'Polydypsia and burning sensation' },
        { symptom: 'अत्यधिक स्वेद  ', description: 'Excessive perspiration' },
        { symptom: 'अम्लोद्‌गार   ', description: 'Acidic eructations' }
      ],
      Serious: [
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
      Mild: [
        { symptom: ' नेत्र तथा कपोल शोथ', description: 'Swelling over eyes and face' },
        { symptom: 'सद्योभुक्त आहार के समानगन्ध रस युक्त उद्गार' },
        { symptom: 'प्रसेक ', description: 'Salivation' },
        { symptom: ',उत्क्लेश', description: 'Nausea' },
        { symptom: 'अंगों में भारीपन', description: 'Heaviness in the body' }
        
       
      ],
      Moderate: [
        { symptom: ' भ्रम', description: 'Vertigo' },
        { symptom: 'मूर्च्छा ', description: 'Fainting' },
        { symptom: 'तृष्णा तथा दाह', description: 'Polydypsia and Burning senjation' },
        { symptom: 'सघूम अम्लोद्गार', description: 'Acidic eructations' },
        { symptom: 'हृदय प्रदेश में दाह', description: 'Burning sensation in the chest region' },
        { symptom: 'स्वेदाधिक्य', description: '(Excessive sweating' }
      ],
      Serious: [
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
    disease: 'आध्मान लक्षण',
    severities: {
      Moderate: [
        { symptom: 'प्राणवाहिनी आक्रमण', description: 'Invading the respiratory passages' },
        { symptom: 'अम्लवात की उत्कृष्टता', description: 'Pre-eminence of acid and wind' },
        { symptom: 'चाहे जो आहार सुखा हो तथा कठिन वस्तु अच्छी लगती हो', description: 'Even though food may be dry and hard' }
      ],
      Serious: [
        { symptom: 'प्रस्तावना के आधिक्य', description: 'Excessive salivation' },
        { symptom: 'अत्यधिक पेटदाह', description: 'Excessive burning sensation in the stomach' },
        { symptom: 'हृदय प्रदेश में दाह', description: 'Burning sensation in the chest region' }
      ]
    },
    disease: 'आटोप लक्षण',
    severities: {
      Mild: [
        { symptom: 'पित्त और कफ', description: 'Bile and phlegm' },
        { symptom: 'मध्यम शक्ति का भोजन और उपयोग', description: 'Moderate food and usage' },
        { symptom: 'प्रस्तावना', description: 'Salivation' }
      ],
      Moderate: [
        { symptom: 'किंवदंति दुर्बलता', description: 'Weakness of the teeth and gums' },
        { symptom: 'वायुपुरी की प्रवृत्ति', description: 'Tendency towards flatulence' },
        { symptom: 'गलगन्ध में बदलाव', description: 'Change in the odor of sweat' }
      ],
      Serious: [
        { symptom: 'तीव्रता तथा समयानुसार उपाय', description: 'Severity and timely treatment' },
        { symptom: 'चाहे जो आहार सुखा हो तथा कठिन वस्तु अच्छी लगती हो', description: 'Even though food may be dry and hard' },
        { symptom: 'उच्च', description: 'Fever' }
      ]
    },
  },
  {
    disease: 'ग्रहणी लक्षण',
    severities: {
      Moderate: [
        { symptom: 'शोथ', description: 'Swelling' },
        { symptom: 'रुधिरापचय का निषेध', description: 'Prohibition of blood digestion' },
        { symptom: 'श्लेष्मपित्त', description: 'Phlegm and bile' }
      ],
      Serious: [
        { symptom: 'अग्निदाह की वृद्धि', description: 'Increase in acid burning' },
        { symptom: 'मलाशय और पित्त की प्रवृत्ति', description: 'Tendency towards intestines and bile' },
        { symptom: 'शुष्कांत में उत्कृष्टता', description: 'Pre-eminence of dryness at the end' }
      ]
    },
    disease: 'छर्दि लक्षण',
    severities: {
      Moderate: [
        { symptom: 'किमिद्वयं', description: 'Burning sensation' },
        { symptom: 'अम्लपित्त', description: 'Acidic bile' },
        { symptom: 'अत्यन्तं तामसं', description: 'Excessive lethargy' }
      ],
      Serious: [
        { symptom: 'मलविपाकात्मक उद्गार', description: 'Faecal regurgitation' },
        { symptom: 'तामसं तथा तैलिक', description: 'Lethargy and oily' },
        { symptom: 'संपर्कात्मक व्याधि', description: 'Infectious diseases' }
      ]
    },
  },
  {
    disease: 'गुल्म लक्षण',
    severities: {
      Mild: [
        { symptom: 'प्रवाह', description: 'Flowing' },
        { symptom: 'आमगन्ध उद्गार', description: 'Common odor belching' },
        { symptom: 'सदाम्लपित्त', description: 'Always acidic bile' }
      ],
      Moderate: [
        { symptom: 'महादाह', description: 'Great burning sensation' },
        { symptom: 'क्लान्ति', description: 'Fatigue' },
        { symptom: 'अन्योन्य गर्भाशय', description: 'Mutual uterus' }
      ],
      Serious: [
        { symptom: 'अत्यन्तं शूल', description: 'Excessive pain' },
        { symptom: 'अत्यधिक मल', description: 'Excessive excretion' },
        { symptom: 'उत्तेजन', description: 'Agitation' }
      ]
    },
  },
  {
    disease: 'अन्नद्रवशूल लक्षण',
    severities: {
      Moderate: [
        { symptom: 'क्रियाशक्तिविकृतिः', description: 'Activity distortion' },
        { symptom: 'मलोद्गार', description: 'Eructations' },
        { symptom: 'चारकं शूलम्', description: 'Four-sided pain' }
      ],
      Serious: [
        { symptom: 'ग्राही', description: 'Absorptive' },
        { symptom: 'वायुविकारः', description: 'Wind disorder' },
        { symptom: 'प्रवाहिनी क्रिया', description: 'Flowing activity' }
      ]
    },
  },
  {
    disease: 'परिणाम शूल लक्षण',
    severities: {
      Mild: [
        { symptom: 'प्रवाह', description: 'Flowing' },
        { symptom: 'मल', description: 'Excretion' },
        { symptom: 'अवसादम्', description: 'Depression' }
      ],
      Moderate: [
        { symptom: 'शूल', description: 'Pain' },
        { symptom: 'अतिदाह', description: 'Excessive burning' },
        { symptom: 'अत्यधिकम् मल', description: 'Excessive excretion' }
      ],
      Serious: [
        { symptom: 'स्वास्थ्य लक्षण', description: 'Health symptoms' },
        { symptom: 'क्लान्ति', description: 'Fatigue' },
        { symptom: 'आम्लोद्गार', description: 'Acidic eructations' }
      ]
    },
  },
  {
    disease: 'अम्लफ्ति लक्षण',
    severities: {
      Moderate: [
        { symptom: 'विकृति व्यापारः', description: 'Distortion activity' },
        { symptom: 'मल', description: 'Excretion' },
        { symptom: 'प्रदाहः', description: 'Burning' }
      ],
      Serious: [
        { symptom: 'अत्यधिकम्', description: 'Excessive' },
        { symptom: 'अजीर्ण उपचयः', description: 'Indigestion' },
        { symptom: 'मलोद्गार', description: 'Eructations' }
      ]
    },
  },
  {
    disease: 'उदर रोग लक्षण',
    severities: {
      Mild: [
        { symptom: 'प्राणिनाम्', description: 'Creatures' },
        { symptom: 'प्रवाहिनी आक्रमण', description: 'Invading the respiratory passages' },
        { symptom: 'प्रत्युत्क्रामः', description: 'Counterattack' }
      ],
      Moderate: [
        { symptom: 'मूत्रम्', description: 'Urine' },
        { symptom: 'चारकम्', description: 'Four-sided' },
        { symptom: 'मांसः', description: 'Flesh' }
      ],
      Serious: [
        { symptom: 'भूषणम्', description: 'Ornament' },
        { symptom: 'गुर्वम्', description: 'Heavy' },
        { symptom: 'क्षुत्पिपासः', description: 'Hunger and thirst' }
      ]
    }
  





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
    'Most Suffered Symptom', 'Duration', 'Diet and Eating Habbit','Most Specific Symptoms', 'Food Quality', 'LifeStyle', 'Stress and Environmental Health'
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
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Age/Sex:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Blood Group:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Height (C.M):</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Weight:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Education:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label>Occupation:</label>
              <input type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="father-name">Father's Name:</label>
              <input type="text" id="father-name" name="father-name" />
            </div>
            <div className="form-group">
              <label htmlFor="mother-name">Mother's Name:</label>
              <input type="text" id="mother-name" name="mother-name" />
            </div>
            <div className="form-group">
              <label htmlFor="marital-status">Marital Status:</label>
              <input type="text" id="marital-status" name="marital-status" />
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
                {selectedBox === 'Most Specific Symptoms' && selectedBox === box && (
                  <div className="symptom-table">
                  <table>
                  <thead>
                  <tr>
                    <th>Disease</th>
                    <th>Mild</th>
                    <th>Moderate</th>
                    <th>Serious</th>
                  </tr>
                </thead>
                <tbody>
                  {specificSymptomData.map(({ disease, severities }) => (
                    <tr key={disease}>
                      <td>{disease}</td>
                      {['Mild', 'Moderate', 'Serious'].map(severity => (
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
                    </tr>
                  ))}
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
