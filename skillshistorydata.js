const headerBlockData = {
    description: "Skills History for Aaron Clauson",
    linkedinprofile: "https://www.linkedin.com/in/aaron-clauson-81770144/",
    lastupdatedat: "28 Sep 2020"
};

const skillFilters = [
    { displayname: ".NET", filter: ".net"},
    { displayname: "Real-time Communications", filter: "rtc"},
];

const skillsHistory = [
    {
        name: "C#/.NET/.NET Core",
        id: ".net",
        colour: "a27bdc",
        history: [
            { period: 20203, usage: "primary" },
            { period: 20202, usage: "primary" },
            { period: 20201, usage: "primary" },
            { period: 20194, usage: "primary" },
            { period: 20193, usage: "occasional" },
            { period: 20192, usage: "occasional" },
            { period: 20191, usage: "occasional" },
            { period: 20184, usage: "occasional" },
            { period: 20183, usage: "occasional" },
            { period: 20182, usage: "occasional" },
            { period: 20181, usage: "occasional" },
            { period: 20174, usage: "occasional" },
            { period: 20173, usage: "primary" },
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20164, usage: "primary" },
            { period: 20163, usage: "primary" },
            { period: 20162, usage: "primary" },
            { period: 20161, usage: "primary" },
            { period: 20154, usage: "primary" },
            { period: 20153, usage: "primary" },
            { period: 20152, usage: "primary" },
            { period: 20151, usage: "primary" },
            { period: 20144, usage: "primary" },
            { period: 20143, usage: "primary" },
            { period: 20142, usage: "primary" },
            { period: 20141, usage: "primary" },
            { period: 20134, usage: "primary" },
            { period: 20133, usage: "primary" },
            { period: 20132, usage: "primary" },
            { period: 20131, usage: "primary" },
            { period: 20124, usage: "primary" },
            { period: 20123, usage: "primary" },
            { period: 20122, usage: "primary" },
            { period: 20121, usage: "primary" },
            { period: 20114, usage: "primary" },
            { period: 20113, usage: "primary" },
            { period: 20112, usage: "primary" },
            { period: 20111, usage: "primary" },
            { period: 20104, usage: "primary" },
            { period: 20103, usage: "primary" },
            { period: 20102, usage: "primary" },
            { period: 20101, usage: "primary" },
            { period: 20094, usage: "primary" },
            { period: 20093, usage: "primary" },
            { period: 20092, usage: "primary" },
            { period: 20091, usage: "primary" },
            { period: 20084, usage: "regular" },
            { period: 20083, usage: "regular" },
            { period: 20082, usage: "occasional" },
            { period: 20081, usage: "primary" },
            { period: 20074, usage: "primary" },
            { period: 20073, usage: "primary" },
            { period: 20072, usage: "primary" },
            { period: 20071, usage: "primary" },
            { period: 20064, usage: "primary" },
            { period: 20063, usage: "primary" },
            { period: 20062, usage: "primary" },
            { period: 20061, usage: "primary" },
            { period: 20054, usage: "primary" },
            { period: 20053, usage: "primary" },
            { period: 20052, usage: "primary" },
            { period: 20051, usage: "primary" },
            { period: 20044, usage: "primary" },
            { period: 20043, usage: "primary" },
            { period: 20042, usage: "primary" },
            { period: 20041, usage: "primary" },
            { period: 20034, usage: "primary" },
            { period: 20033, usage: "primary" },
            { period: 20032, usage: "primary" },
            { period: 20031, usage: "primary" },
            { period: 20024, usage: "primary" },
            { period: 20023, usage: "primary" },
            { period: 20022, usage: "primary" },
            { period: 20021, usage: "primary" },
            { period: 20014, usage: "occasional" },
        ],
    },
    {
        name: "WPF",
        colour: "034a88",
        parentid: ".net",
        history: [
            { period: 20171, usage: "regular" },
            { period: 20161, usage: "regular" },
        ]
    },
    {
        name: "C/C++",
        colour: "78ccf0",
        history: [
            { period: 20203, usage: "regular" },
            { period: 20202, usage: "regular" },
            { period: 20201, usage: "regular" },
            { period: 20194, usage: "regular" },
            { period: 20193, usage: "primary" },
            { period: 20192, usage: "primary" },
            { period: 20191, usage: "primary" },
            { period: 20184, usage: "primary" },
            { period: 20183, usage: "primary" },
            { period: 20182, usage: "primary" },
            { period: 20181, usage: "primary" },
            { period: 20174, usage: "primary" },
            { period: 20173, usage: "regular" },
            { period: 20172, usage: "regular" },
            { period: 20171, usage: "regular" },
            { period: 20164, usage: "regular" },
        ]
    },
    {
        name: "Dev Lead/Management",
        description: "Management and leadership",
        colour: "990099",
        history: [
            { period: 20193, usage: "occasional" },
            { period: 20192, usage: "occasional" },
            { period: 20191, usage: "occasional" },
            { period: 20184, usage: "occasional" },
            { period: 20183, usage: "occasional" },
            { period: 20182, usage: "occasional" },
            { period: 20181, usage: "occasional" },
            { period: 20174, usage: "occasional" },
            { period: 20173, usage: "primary" },
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20164, usage: "primary" },
            { period: 20163, usage: "primary" },
            { period: 20162, usage: "primary" },
            { period: 20161, usage: "primary" },
            { period: 20154, usage: "primary" },
            { period: 20153, usage: "primary" },
            { period: 20152, usage: "primary" },
            { period: 20151, usage: "primary" },
            { period: 20144, usage: "primary" },
            { period: 20143, usage: "primary" },
            { period: 20142, usage: "primary" },
            { period: 20141, usage: "primary" },
            { period: 20134, usage: "primary" },
            { period: 20133, usage: "primary" },
            { period: 20132, usage: "primary" },
            { period: 20131, usage: "primary" },
            { period: 20124, usage: "primary" },
            { period: 20123, usage: "primary" },
            { period: 20122, usage: "primary" },
            { period: 20121, usage: "primary" },
            { period: 20114, usage: "primary" },
            { period: 20113, usage: "primary" },
            { period: 20081, usage: "primary" },
            { period: 20074, usage: "primary" },
            { period: 20073, usage: "primary" },
            { period: 20072, usage: "primary" },
            { period: 20071, usage: "primary" },
            { period: 20064, usage: "primary" },
            { period: 20063, usage: "primary" },
            { period: 20062, usage: "primary" },
            { period: 20061, usage: "primary" },
            { period: 20054, usage: "primary" },
            { period: 20053, usage: "primary" },
            { period: 20052, usage: "primary" },
        ]
    },
    {
        name: "Real-time Comms",
        id: "rtc",
        description: "Real-time communications, including audio and video streaming.",
        colour: "f26722",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "WebRTC",
        parentid: "rtc",
        colour: "f26722",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "SIP",
        parentid: "rtc",
        colour: "f26722",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "Network/Sockets",
        description: "Networking",
        colour: "00695c",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "Web Apps",
        description: "Technologies related to front end web applications",
        colour: "00695c",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "Web Services",
        description: "Technologies related to back end web services",
        colour: "00695c",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "RDBMS",
        description: "Relational Database Managements Systems",
        colour: "00695c",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "Windows Dev",
        description: "Development on the Windows Operating System.",
        colour: "00695c",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "Blockchain",
        colour: "00695c",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
    {
        name: "Other",
        description: "Other technologies or programming languages.",
        colour: "00695c",
        history: [
            { period: 20172, usage: "primary" },
            { period: 20171, usage: "primary" },
            { period: 20191, usage: "regular" }
        ]
    },
];