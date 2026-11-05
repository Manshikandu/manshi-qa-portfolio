
export const profile = {
  name: 'Manshi Kandu',
  role: 'Junior QA Engineer | Quality Engineering & Test Automation',
  location: 'Kathmandu, Nepal',
  email: 'manshikandu@gmail.com',
  linkedin: 'https://linkedin.com/in/manshi-kandu',
  github: 'https://github.com/Manshikandu',
  cv: '/Manshi_Kandu_Resume.pdf',
  intro: 'I explore real product workflows, investigate unexpected behavior, and help create reliable software. My focus is QA engineering, with growing interests in automation and full-stack development.',
  about: 'I am a Junior QA Engineer with hands-on experience testing web-based and SaaS products. My work spans functional, UI, regression, API, performance, and end-to-end testing. I enjoy understanding product workflows, investigating unexpected behavior, writing clear, reproducible bug reports, and collaborating with developers to improve product quality. Alongside QA, my BSc. CSIT background and exposure to React, Node.js, Express.js, JavaScript, and databases help me understand how web applications are built.',
  focus: [
    'Functional & exploratory testing',
    'API & Validation',
    'Regression & UI testing',
    'Playwright E2E automation',
    'Performance testing with JMeter',
    'Understanding user workflows'
  ]
};

export const education = [
{
  degree: 'Bachelor of Science in Computer Science and Information Technology (BSc. CSIT)',
  college: 'Sagarmatha College of Science and Technology',
  period: '2021 – 2026',
  location: 'Kathmandu, Nepal',
  mark: 'BSc. CSIT'
},
{
   
    degree: 'Higher Secondary Education (+2)',
    college: 'Tilottama Secondary School',
    period: '2020 - 2021',
    location: 'Butwal, Nepal',
    mark: '+2'
  
}

]

export const skillGroups = [
  {
    title: 'Testing',
    items: ['Manual Testing', 'Functional Testing', 'Exploratory Testing', 'UI Testing', 'Regression Testing', 'API Testing', 'Performance Testing', 'Load Testing', 'End-to-End Testing', 'Test Case Design', 'Defect Tracking']
  },
  {
    title: 'Automation',
    items: ['Playwright', 'JavaScript', 'Cypress']
  },
  {
    title: 'API & Performance',
    items: ['Postman', 'Swagger', 'Apache JMeter']
  },
  {
    title: 'Development',
    items: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS', 'Tailwind CSS', 'SQL', 'MySQL']
  },
  {
    title: 'Tools',
    items: ['Jira', 'ClickUp', 'Lark', 'Trello', 'GitHub', 'VS Code', 'Figma']
  }
];

export const experience = [
  {
    role: 'Junior QA Engineer | Quality Engineering & Test Automation',
    company: 'Voxcrow Pvt. Ltd.',
    period: 'March 2026 – Present',
    place: 'Kathmandu, Nepal',
    bullets: [
      'Perform manual, functional, API, UI, regression, and exploratory testing across web-based and VoIP products.',
      'Test end-to-end workflows across call handling, agent management, outbound campaigns, contact groups, dashboards, and reporting.',
      'Design and execute test cases and scenarios based on product requirements and user workflows.',
      'Report defects with clear reproduction steps and collaborate with developers during investigation and verification.',
      'Use Postman and Swagger for API validation and Apache JMeter for performance and load testing.',
      'Create and execute Playwright end-to-end automation scenarios using JavaScript.'
    ]
  },
  {
    role: 'QA Intern',
    company: 'Rewa Soft Pvt. Ltd.',
    period: 'September 2025 – January 2026',
    place: 'Kathmandu, Nepal',
    bullets: [
      'Performed manual, functional, UI, and regression testing across CRM, travel, healthcare, and e-commerce applications.',
      'Reviewed requirements and prepared test cases and scenarios for application workflows.',
      'Performed API testing using Postman and Swagger.',
      'Reported defects, attached reproduction details, and tracked issues using ClickUp and Lark.',
      'Collaborated with developers and participated in client demonstrations and feedback discussions.'
    ]
  }
];

export const qaSamples = [
  {
    title: 'Sample test case',
    label: 'Functional testing',
    description: 'A structured example of validating a sign-in workflow.',
    steps: [
      'Navigate to the sign-in page.',
      'Enter valid registered credentials.',
      'Select the Sign in button.'
    ],
    expected: 'The user should be authenticated and redirected to the expected landing page.'
  },
  {
    title: 'Sample bug report',
    label: 'Defect documentation',
    description: 'An example of concise, reproducible defect reporting.',
    steps: [
      'Open the relevant dashboard.',
      'Compare the displayed call count with the Call Detail Report.',
      'Check whether answer dispositions are included consistently.'
    ],
    expected: 'Dashboard and report counts should follow the same documented counting rules.'
  },
  {
    title: 'Automation approach',
    label: 'Playwright',
    description: 'A practical outline of an end-to-end test.',
    steps: [
      'Open the application using a configured test environment.',
      'Locate elements using resilient role or label locators.',
      'Perform the user action and wait for a meaningful state.'
    ],
    expected: 'Verify the resulting UI state and capture useful failure evidence.'
  }
];

export const projects = [
  {
    slug: 'getdesk',
    name: 'GetDesk',
    type: 'Cloud-Based Contact Centre Platform',
    tags: ['Functional Testing', 'Exploratory Testing', 'Regression Testing', 'Defect Investigation'],
    summary: 'QA testing of a web-based contact centre platform, focusing on end-to-end workflows, system behavior, and reporting accuracy.',
    overview: 'GetDesk is a web-based contact centre platform that brings together call handling, agent management, outbound campaigns, contact groups, dashboards, and reporting workflows.',
    scope: [
      'Tested end-to-end workflows across call handling and agent management.',
      'Validated outbound campaigns and contact group functionality.',
      'Checked dashboard statistics and reporting behavior.',
      'Performed regression testing after feature changes and defect fixes.'
    ],
    challenges: [
      'Investigated HTTP 500 errors during application workflows.',
      'Investigated outbound campaign execution failures.',
      'Identified mismatches between dashboard call counts and Call Detail Report data, including differences related to answer dispositions.'
    ],
    contribution: 'Executed functional, exploratory, and regression testing across key modules. Investigated unexpected behavior, documented reproducible defects, and worked with developers during defect verification.'
  },
  {
    slug: 'ringgaze-buel-pbx',
    name: 'RingGaze & Buel PBX',
    type: 'VoIP Products',
    tags: ['Manual QA', 'API Testing', 'JMeter', 'Regression'],
    summary: 'Testing VoIP product workflows, application behavior, API functionality, and performance under defined test conditions.',
    overview: 'A collection of VoIP product workflows where reliable call behavior, application functionality, and service performance are important.',
    scope: [
      'Performed functional testing of core VoIP workflows.',
      'Validated API behavior using Postman and Swagger.',
      'Performed regression testing after changes.',
      'Used Apache JMeter to evaluate performance and load behavior under defined conditions.'
    ],
    challenges: [],
    contribution: 'Performed manual, API, and regression testing and used JMeter to assess performance and response behavior.'
  },
  {
    slug: 'buel-bucket',
    name: 'Buel Bucket',
    type: 'Web-Based Product',
    tags: ['Playwright', 'JavaScript', 'E2E Testing', 'Regression'],
    summary: 'End-to-end and regression testing of a web-based product, including automated coverage for key user workflows.',
    overview: 'A web-based product tested through functional workflows and automated end-to-end scenarios.',
    scope: [
      'Validated important user workflows through functional testing.',
      'Created and executed end-to-end automated test scenarios using Playwright and JavaScript.',
      'Performed regression testing after feature changes.',
      'Checked that existing functionality remained stable after updates.'
    ],
    challenges: [],
    contribution: 'Worked on manual and automated testing, building Playwright coverage for key workflows and supporting regression verification.'
  },
  {
    slug: 'crm-web-application',
    name: 'CRM Web Application',
    type: 'Business Application',
    tags: ['Functional Testing', 'UI Testing', 'API Testing'],
    summary: 'Validated application functionality against business requirements through functional, UI, regression, and API testing.',
    overview: 'A business application with workflows that required validation against functional requirements and expected user behavior.',
    scope: [
      'Reviewed requirements and prepared test scenarios.',
      'Validated key application workflows.',
      'Performed UI and functional testing.',
      'Used API testing to verify application behavior where applicable.'
    ],
    challenges: [],
    contribution: 'Designed and executed test cases, reported defects, retested fixes, and supported regression testing.'
  },
  {
    slug: 'travel-management',
    name: 'Travel Management Platform',
    type: 'Web Application',
    tags: ['Workflow Testing', 'Integration', 'Regression'],
    summary: 'Tested booking workflows, user journeys, and integrations across a travel management platform.',
    overview: 'A travel-related web application where booking journeys and connected workflows needed to behave as expected.',
    scope: [
      'Validated booking and user workflows.',
      'Checked navigation and related application behavior.',
      'Performed functional and regression testing.',
      'Reported unexpected behavior and verified fixes.'
    ],
    challenges: [],
    contribution: 'Tested user journeys, documented defects, and collaborated with the team during retesting and regression.'
  },
  {
    slug: 'tilganga-healthcare',
    name: 'Healthcare Management System – Tilganga',
    type: 'Healthcare Application',
    tags: ['Functional QA', 'Requirements', 'UI Testing'],
    summary: 'Validated healthcare-related workflows and application functionality, reviewed requirements, and participated in client demonstrations.',
    overview: 'Healthcare-related application modules where functionality and user workflows needed to be checked against requirements.',
    scope: [
      'Reviewed requirements and checked application workflows.',
      'Performed manual functional testing.',
      'Validated relevant dashboard and user-facing behavior.',
      'Participated in client demonstrations and feedback discussions.'
    ],
    challenges: [],
    contribution: 'Supported testing across multiple modules, checked expected behavior, and participated in client demonstrations.'
  },
  {
    slug: 'alpine-power',
    name: 'E-commerce Website – Alpine Power',
    type: 'E-commerce',
    tags: ['UI Testing', 'Responsive Testing', 'Functional Testing'],
    summary: 'Tested product browsing, product details, cart, checkout-related functionality, and responsive layouts.',
    overview: 'An e-commerce website where the main focus was validating shopping-related user journeys and interface behavior.',
    scope: [
      'Tested product browsing and product detail pages.',
      'Checked cart and checkout-related functionality.',
      'Performed UI and responsive layout testing.',
      'Identified usability and layout issues.'
    ],
    challenges: [],
    contribution: 'Performed functional, UI, and responsive testing and reported issues affecting the shopping experience.'
  }
]