const archiveEvents = [
    {
    date: { month: "OCT", day: "31" },
    title: "Seerah Trivia Night",
    timeRange: "After Maghreb",
    location: "ICSP - Community Hall",
    description:
        "Another chance to test your Seerah knowledge and have fun with friends. Don’t miss out!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "27" },
    title: "Sisters’ Charity Pilates",
    timeRange: "11:00 AM – 1:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Join us for a pilates session for charity. Strengthen your body and support a good cause!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "26" },
    title: "Brothers’ Charity UFC Watch Along / Sisters’ Charity Movie Night",
    timeRange: "6:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Brothers enjoy a UFC Watch Along, and sisters enjoy a movie night, all for a charitable cause!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "25" },
    title: "Bake Sale & Charity Chai, Halaqa, & Challenge Night",
    timeRange: "3:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Enjoy homemade treats at our bake sale and participate in Halaqa and Challenge Night for charity.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "24" },
    title: "Brothers’ Charity Soccer Tournament",
    timeRange: "4:00 PM – 7:00 PM",
    location: "ICSP - Community Hall",
    description:
        "A soccer tournament for charity! Brothers, bring your A-game to support a great cause!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "23" },
    title: "Giveback",
    timeRange: "12:00 PM – 4:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Join us for a day of giving back to the community. Various activities and opportunities to help!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "22" },
    title: "MSA Charity Week Tabling",
    timeRange: "1:00 PM – 4:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Our Charity Week continues! Stop by to show your support and learn more about our projects.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "21" },
    title: "MSA Charity Week Tabling",
    timeRange: "11:00 AM – 2:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Support MSA Charity Week! Stop by our table to learn more and contribute to a good cause.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "19" },
    title: "Alumni Tailgate",
    timeRange: "4:00 PM – 7:00 PM",
    location: "ICSP - Community Hall",
    description:
        "A fun tailgate event with alumni! Join us for food, games, and school spirit.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "18" },
    title: "Alumni Dinner & Chai Night",
    timeRange: "7:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Welcoming alumni back to join us for dinner and chai. Reconnect and reminisce together!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "12" },
    title: "Culture Fest, MSA Carnival",
    timeRange: "5:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Celebrate diversity with our Culture Fest! Enjoy food, games, and activities at the MSA Carnival!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "10" },
    title: "Seerah Trivia Night",
    timeRange: "After Maghreb",
    location: "ICSP - Community Hall",
    description:
        "Test your knowledge of Seerah with friends. An interactive trivia night to learn and connect!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "05" },
    title: "Sisters’ Cooking with a Chef / Brothers’ Field Day",
    timeRange: "2:00 PM – 6:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Sisters, enjoy a cooking session with a chef! Brothers, join us for an exciting field day filled with activities!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "04" },
    title: "Chai Night",
    timeRange: "7:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Unwind with chai and great conversations. Join us for a relaxing and social evening.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "OCT", day: "01" },
    title: "1st Fiqh Session",
    timeRange: "6:00 PM – 8:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Kickstart our Fiqh sessions to deepen your understanding of Islamic jurisprudence in a welcoming environment.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "SEP", day: "27" },
    title: "Challenge Chai Night",
    timeRange: "7:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "An exciting evening with chai and challenges! Bring your friends for a night of games and fun competitions.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "SEP", day: "26" },
    title: "South Plains Fair College Night",
    timeRange: "5:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Celebrate College Night at the South Plains Fair! A night of fun and exploration with friends.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "SEP", day: "20" },
    title: "Imam Anwar Chai Night",
    timeRange: "7:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Join us for an inspiring evening with Imam Anwar, enjoying chai and deep discussions about faith and life.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "SEP", day: "14" },
    title: "Sisters’ Paint & Coffee Meet & Mingle / Brothers’ Pool Party",
    timeRange: "3:30 PM – 6:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Sisters enjoy painting and coffee, while brothers join us for a pool party! Relax, socialize, and make memories with friends.",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "SEP", day: "13" },
    title: "Chai Night",
    timeRange: "7:00 PM – 9:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Enjoy an evening of chai, conversations, and connections. A cozy night to unwind and socialize!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "SEP", day: "08" },
    title: "Memorization Goal",
    timeRange: "4:00 PM – 5:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Set a personal goal for Quran memorization and join us for a motivational session on how to achieve it. Let’s make spiritual growth a community effort!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "SEP", day: "07" },
    title: "Park Kickoff",
    timeRange: "3:00 PM – 6:00 PM",
    location: "ICSP - Community Hall",
    description:
        "Kick off the semester with a fun day at the park! Join us for games, food, and activities to meet new friends and start the semester strong!",
    venue: "ICSP - Community Hall",
    },
    {
    date: { month: "SEP", day: "06" },
    title: "First Friday Chai Night",
    timeRange: "After Maghreb",
    location: "ICSP - Community Hall",
    description:
        "The first chai night of the semester! Bring friends for an evening of chai, relaxation, and socializing.",
    venue: "ICSP - Community Hall",
    },
];

export default archiveEvents;