export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  audience: 'seeker' | 'believer' | 'kids';
  audienceLabel: string;
  conceptTitle: string;
  coverImage: string;
  priceEbook: string;
  pricePaperback: string;
  isbn: string;
  featured: boolean;
  shortDescription: string;
  fullDescription: string[];
  keyTakeaways: string[];
  sampleDayTitle: string;
  sampleScripture: string;
  sampleExcerpt: string;
  sampleReflectionOrActivity: string;
  directBuyUrl: string;
  amazonUrl: string;
  googleBooksUrl: string;
}

export const AUTHOR_NAME = 'Christine A.';
export const CONTACT_EMAIL = 'contact@csashoponline.com';
export const PRESS_EMAIL = 'press@csashoponline.com';

export const BOOKS: Book[] = [
  // ==========================================
  // 1. THE SEEKER COLLECTION (5 BOOKS)
  // ==========================================
  {
    slug: 'the-prophecy-code',
    title: 'The Prophecy Code',
    subtitle: '30 Ancient Predictions That Prove the Bible is True',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptTitle: 'Concept 1: Messianic Prophecy & Mathematical Probability',
    coverImage: '/images/covers/the-prophecy-code.svg',
    priceEbook: '9.99',
    pricePaperback: '16.99',
    isbn: '979-8-89000-001-9',
    featured: true,
    shortDescription: '30 Ancient Predictions That Prove the Bible is True. We do not ask you to "just believe" - we lay out the historical and mathematical evidence.',
    fullDescription: [
      'If you are exploring spirituality, you might feel like the Bible is a closed book or a set of outdated rules. We get it. That is why The Prophecy Code does not ask you for blind faith.',
      'Instead, this 30-day investigative journey examines thirty specific, verifiable predictions written hundreds - sometimes thousands - of years before the birth of Jesus of Nazareth, preserved in ancient manuscripts including the Dead Sea Scrolls.',
      'Each daily chapter looks at the historical context, the original Hebrew wording, and the astonishing fulfillment in the first century, inviting you to weigh the evidence for yourself.'
    ],
    keyTakeaways: [
      'Explore the Dead Sea Scrolls proof that Messianic prophecies were written centuries before Christ.',
      'Examine the mathematical probability of one person fulfilling 30 distinct ancient predictions.',
      'Written with zero religious jargon - respecting your intellect, questions, and skepticism.'
    ],
    sampleDayTitle: 'Day 1: The Time-Stamped Blueprint (Daniel 9 & Isaiah 53)',
    sampleScripture: 'Isaiah 53:5 (Written ~700 BC, confirmed in the Great Isaiah Scroll)',
    sampleExcerpt: 'Imagine finding a locked vault sealed three centuries before a historical figure was born - and inside that vault is a detailed biographical sketch describing his birthplace, his betrayal for thirty pieces of silver, the exact manner of his execution before crucifixion was even invented by Rome, and the global impact of his life. In 1947, Bedouin shepherds in Qumran stumbled upon the Dead Sea Scrolls, carbon-dated prior to the first century...',
    sampleReflectionOrActivity: 'Investigative Question: If a document predates an event by centuries and describes it with surgical precision, what are the possible explanations?',
    directBuyUrl: '/contact/?book=The+Prophecy+Code',
    amazonUrl: 'https://www.amazon.com/s?k=The+Prophecy+Code+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Prophecy+Code+Christine+A'
  },
  {
    slug: 'the-1000-year-old-blueprint',
    title: 'The 1,000-Year-Old Blueprint',
    subtitle: 'Unlocking the Messianic Prophecies of the Old Testament',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptTitle: 'Concept 2: The Architectural Unity of Scripture',
    coverImage: '/images/covers/the-1000-year-old-blueprint.svg',
    priceEbook: '9.99',
    pricePaperback: '16.99',
    isbn: '979-8-89000-002-6',
    featured: false,
    shortDescription: 'Discover how 30 ancient predictions were fulfilled in one person, proving the Bible is a divine puzzle.',
    fullDescription: [
      'How could forty different authors - kings, scholars, fishermen, and prophets - writing across three continents and three languages over a span of 1,500 years construct a single, seamless portrait of one person?',
      'The 1,000-Year-Old Blueprint traces the progressive revelation of the Messiah from the opening chapters of Genesis to the closing lines of Malachi.',
      'Like an architectural blueprint where every measurement aligns across centuries, this 30-day investigation reveals an intelligence operating outside of time.'
    ],
    keyTakeaways: [
      'Trace the lineage, birthplace, and timeline prophecies from Genesis to Malachi.',
      'Understand why ancient rabbis and modern historians marvel at Psalm 22 and Zechariah 12.',
      'Designed as a 30-day intellectual investigation for curious minds.'
    ],
    sampleDayTitle: 'Day 1: Forty Authors, One Architect',
    sampleScripture: 'Psalm 22:16-18 (Written ~1,000 BC by King David)',
    sampleExcerpt: 'Centuries before the Persian or Roman empires invented crucifixion, King David penned a poem describing hands and feet being pierced, severe dehydration, and onlookers casting lots for the sufferer clothing. Why would a reigning monarch describe an execution method unknown to his culture?',
    sampleReflectionOrActivity: 'Investigative Prompt: Compare the details of Psalm 22 with first-century Roman historical accounts.',
    directBuyUrl: '/contact/?book=The+1000-Year-Old+Blueprint',
    amazonUrl: 'https://www.amazon.com/s?k=The+1000+Year+Old+Blueprint+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+1000+Year+Old+Blueprint+Christine+A'
  },
  {
    slug: 'the-ancient-shadows',
    title: 'The Ancient Shadows',
    subtitle: 'Decoding the Forgotten Rituals That Point to Christ',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptTitle: 'Concept 3: Shadows and Substance',
    coverImage: '/images/covers/the-ancient-shadows.svg',
    priceEbook: '9.99',
    pricePaperback: '16.99',
    isbn: '979-8-89000-003-3',
    featured: false,
    shortDescription: 'Uncover the hidden meaning behind the ancient festivals, temple architecture, and laws.',
    fullDescription: [
      'Most modern readers open the books of Exodus or Leviticus, encounter pages of strange rituals, gold-plated furniture, and ancient festivals, and close the book in frustration.',
      'What if those ancient rituals were never meant to be arbitrary rules, but a living, three-dimensional code?',
      'The Ancient Shadows decodes the seven biblical feasts, the architecture of the Tabernacle, the Day of Atonement, and the Passover lamb - showing how every single detail was a shadow cast by Jesus.'
    ],
    keyTakeaways: [
      'Decode the 7 ancient Hebrew feasts and their exact chronological fulfillment.',
      'See how the Tabernacle layout forms a hidden map of redemption.',
      'Turn the most "confusing" chapters of the Old Testament into "Aha!" moments.'
    ],
    sampleDayTitle: 'Day 1: Why a Shadow Proves the Sun is Shining',
    sampleScripture: 'Colossians 2:16-17 & Exodus 12:3-13',
    sampleExcerpt: 'A shadow has no independent existence; it requires both a light source and a solid object standing in the light. For fifteen centuries, the ancient Hebrew calendar revolved around rehearsals - Passover, Unleavened Bread, Firstfruits - each timed to the exact day and hour of events that would unfold in Jerusalem in 30-33 AD.',
    sampleReflectionOrActivity: 'Investigative Prompt: Examine why the Passover lamb was inspected for four days before being sacrificed at twilight on Nisan 14.',
    directBuyUrl: '/contact/?book=The+Ancient+Shadows',
    amazonUrl: 'https://www.amazon.com/s?k=The+Ancient+Shadows+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Ancient+Shadows+Christine+A'
  },
  {
    slug: 'the-secret-visitor',
    title: 'The Secret Visitor',
    subtitle: 'Uncovering the Mysterious Appearances of God in the Old Testament',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptTitle: 'Concept 4: Christophanies & Ancient Encounters',
    coverImage: '/images/covers/the-secret-visitor.svg',
    priceEbook: '9.99',
    pricePaperback: '16.99',
    isbn: '979-8-89000-004-0',
    featured: false,
    shortDescription: 'Explore the "Angel of the Lord" and the pre-incarnate appearances of Christ across the Hebrew Scriptures.',
    fullDescription: [
      'Did Jesus only appear on the scene two thousand years ago in Bethlehem - or was He walking through the pages of the Old Testament all along?',
      'Throughout the Hebrew Scriptures, a mysterious figure known as the Malak YHWH ("The Messenger/Angel of the Lord") appears in physical form, speaks as God Himself, receives worship, and reveals God face while Scripture states that no man can see God unseen essence and live.',
      'The Secret Visitor investigates thirty gripping encounters - from Abraham tent and Jacob midnight wrestling match to the fourth figure inside Nebuchadnezzar fiery furnace.'
    ],
    keyTakeaways: [
      'Investigate the ancient Jewish "Two Powers in Heaven" textual phenomenon.',
      'Examine 30 mysterious Old Testament appearances where a visible figure speaks as YHWH.',
      'Discover how the New Testament claim that "the Word became flesh" roots directly in Genesis.'
    ],
    sampleDayTitle: 'Day 1: The Stranger Who Spoke as God (Genesis 16 & 18)',
    sampleScripture: 'Genesis 16:13 - "She gave this name to the LORD who spoke to her: You are the God who sees me."',
    sampleExcerpt: 'In the desert of Shur, a runaway Egyptian servant named Hagar encounters someone called the Angel of the LORD. Yet mid-conversation, the narrator - and Hagar herself - identifies the speaker not merely as a creature, but as YHWH Himself. Who is this Messenger who is both sent by God and yet fully God?',
    sampleReflectionOrActivity: 'Investigative Prompt: Notice how Hagar, Gideon, and Manoah each react when they realize Who just spoke with them face-to-face.',
    directBuyUrl: '/contact/?book=The+Secret+Visitor',
    amazonUrl: 'https://www.amazon.com/s?k=The+Secret+Visitor+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Secret+Visitor+Christine+A'
  },
  {
    slug: 'the-scarlet-thread',
    title: 'The Scarlet Thread',
    subtitle: 'The Mathematical & Historical Case for the Rescue Plan of God',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptTitle: 'Concept 5: Redemptive Evidence Across History',
    coverImage: '/images/covers/the-scarlet-thread.svg',
    priceEbook: '9.99',
    pricePaperback: '16.99',
    isbn: '979-8-89000-005-7',
    featured: false,
    shortDescription: 'Follow the unbroken crimson line of redemption woven through archaeology, history, and ancient text.',
    fullDescription: [
      'Can a modern thinker take the overarching narrative of the Bible seriously? The Scarlet Thread puts the grand narrative of Scripture under the microscope.',
      'Over 30 days, you will follow a single crimson cord woven from the coats of skin in Eden, the crimson cord hung from Rahab window in Jericho, and the royal lineage of David straight to the cross.',
      'Combining archaeological discoveries, textual criticism, and typological patterns, this book shows why the Gospel is not an afterthought - it is the centerpiece of human history.'
    ],
    keyTakeaways: [
      'Connect archaeological findings (Tel Dan Stele, Dead Sea Scrolls, Ketef Hinnom) with biblical text.',
      'Follow the unbroken "Scarlet Thread" across 30 pivotal historical moments.',
      'A compelling final volume in the Seeker series that bridges intellect and personal transformation.'
    ],
    sampleDayTitle: 'Day 1: The Cord in the Window',
    sampleScripture: 'Joshua 2:18-21',
    sampleExcerpt: 'Why did the ancient chronicler insist on recording the color of the rope Rahab tied to her window in Jericho? In Hebrew, the word for scarlet cord (tiqvah) also carries the meaning of "expectation" or "hope." Across forty books, whenever rescue occurs through judgment, this same scarlet marker reappears...',
    sampleReflectionOrActivity: 'Investigative Prompt: Trace the recurring pattern of substitutionary rescue from Genesis 3 to the first century.',
    directBuyUrl: '/contact/?book=The+Scarlet+Thread',
    amazonUrl: 'https://www.amazon.com/s?k=The+Scarlet+Thread+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Scarlet+Thread+Christine+A'
  },

  // ==========================================
  // 2. THE NEW BELIEVER COLLECTION (5 BOOKS)
  // ==========================================
  {
    slug: 'you-can-trust-the-bible',
    title: 'You Can Trust the Bible',
    subtitle: '30 Prophecies That Prove Jesus is Who He Says He Is',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptTitle: 'Foundation 1: Building Unshakeable Confidence',
    coverImage: '/images/covers/you-can-trust-the-bible.svg',
    priceEbook: '8.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-006-4',
    featured: true,
    shortDescription: 'Stop doubting. See the undeniable evidence that the Bible is true and Jesus is who He claimed to be in warm, 5-minute daily readings.',
    fullDescription: [
      'When you first decide to follow Jesus, it is completely normal to have moments where you wonder: "Is this really true? Can I stake my life on the Bible?"',
      'You Can Trust the Bible was written to give you quiet, unshakeable peace. Without heavy academic jargon or intimidating theology terms, each 5-minute daily reading takes one Old Testament promise and shows you how Jesus fulfilled it with loving precision.',
      'By Day 30, you will not just hope the Bible is trustworthy - you will see with your own eyes how faithfully God keeps every word He speaks.'
    ],
    keyTakeaways: [
      'Warm, encouraging 5-minute daily readings designed for busy schedules.',
      'Replaces doubt and overwhelm with clear, simple proof of God faithfulness.',
      'Includes a daily one-sentence takeaway and a simple, grace-filled prayer.'
    ],
    sampleDayTitle: 'Day 1: God Always Keeps His Promises (Micah 5:2)',
    sampleScripture: 'Micah 5:2 & Matthew 2:1',
    sampleExcerpt: 'Seven hundred years before Jesus was born, a small-town prophet named Micah wrote down the exact village where the Savior would enter the world: Bethlehem Ephrathah. Why does God give us details like that? Not to show off - but so that when doubts whisper in your ear, you can look back and say: "The God who planned Bethlehem is holding my life today."',
    sampleReflectionOrActivity: 'Today Grace Prayer: "Lord Jesus, thank You that my faith rests on Your kept promises, not on my own perfection. Help me trust Your Word today. Amen."',
    directBuyUrl: '/contact/?book=You+Can+Trust+the+Bible',
    amazonUrl: 'https://www.amazon.com/s?k=You+Can+Trust+the+Bible+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=You+Can+Trust+the+Bible+Christine+A'
  },
  {
    slug: 'from-ritual-to-relationship',
    title: 'From Ritual to Relationship',
    subtitle: 'A 30-Day Guide to the Old Testament Festivals',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptTitle: 'Foundation 2: Grace Over Rules',
    coverImage: '/images/covers/from-ritual-to-relationship.svg',
    priceEbook: '8.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-007-1',
    featured: false,
    shortDescription: 'Discover how the ancient laws were just shadows pointing to a real, grace-filled relationship with Jesus.',
    fullDescription: [
      'Have you ever tried reading the Bible from page one, only to get stuck in Leviticus wondering what all the sacrifices, priests, and festivals have to do with you?',
      'Here is the liberating truth: Christianity is not a list of rules you perform to make God like you. The entire Old Testament sacrificial system was a picture book showing what Jesus would do once and for all on your behalf.',
      'From Ritual to Relationship walks you gently through 30 snapshots of the Old Testament tabernacle and festivals, turning confusing chapters into breathtaking reminders of God grace.'
    ],
    keyTakeaways: [
      'Understand why Jesus said "It is finished" - and why you never have to earn God love.',
      'Breaks down the Passover, the Scapegoat, and the High Priest in plain, everyday language.',
      'Helps new and returning believers rest in what Jesus has already done.'
    ],
    sampleDayTitle: 'Day 1: Why You Do Not Have to Climb a Ladder to God',
    sampleScripture: 'Hebrews 10:14 & John 1:29',
    sampleExcerpt: 'Every other religion in the world says: "Here is the ladder - climb up and hope you are good enough." The Gospel says the exact opposite: God knew we could never climb up to Him, so He came down to us in Jesus. Every lamb in the Old Testament was simply pointing forward to the day John the Baptist pointed at Jesus and said, "Look, the Lamb of God, who takes away the sin of the world!"',
    sampleReflectionOrActivity: 'Today Grace Prayer: "Jesus, thank You that I do not have to earn Your love today. Teach me to rest in the finished work of Your cross. Amen."',
    directBuyUrl: '/contact/?book=From+Ritual+to+Relationship',
    amazonUrl: 'https://www.amazon.com/s?k=From+Ritual+to+Relationship+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=From+Ritual+to+Relationship+Christine+A'
  },
  {
    slug: 'more-than-just-stories',
    title: 'More Than Just Stories',
    subtitle: '30 Old Testament Heroes Who Point to Jesus',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptTitle: 'Foundation 3: Seeing Jesus in Every Story',
    coverImage: '/images/covers/more-than-just-stories.svg',
    priceEbook: '8.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-008-8',
    featured: false,
    shortDescription: 'Learn how the heroes of the faith were flawed people just like you, and how their lives point to the ultimate Hero.',
    fullDescription: [
      'When many people read about Noah, Abraham, Joseph, Moses, or David, they think the Bible is saying: "Be brave like David! Be forgiving like Joseph!"',
      'While those are great examples, if the Bible is only a book of moral role models, it will eventually leave you feeling exhausted. The real secret of the Old Testament is that every human hero was flawed - and every single one points to the true Hero, Jesus.',
      'In More Than Just Stories, you will see how Jesus is the true Ark of safety, the true Joseph who forgives those who betrayed Him, and the true David who slays the giant of sin and death for us.'
    ],
    keyTakeaways: [
      'Connects all your favorite Bible stories into one single rescue narrative.',
      'Shows how God uses imperfect people with real struggles - just like us.',
      '5-minute daily readings that make the Old Testament feel like home.'
    ],
    sampleDayTitle: 'Day 1: You Are Not David - Jesus Is',
    sampleScripture: '1 Samuel 17:45-47',
    sampleExcerpt: 'When David walked into the valley to face Goliath, the frightened soldiers of Israel did not fight - they watched their champion fight for them. When David won, his victory was credited to the whole nation. That is how salvation works: Jesus stepped into the valley against sin and death as your Champion, and His victory now belongs to you.',
    sampleReflectionOrActivity: 'Today Grace Prayer: "Lord Jesus, thank You for being my Champion when I am weak. Help me walk in Your victory today. Amen."',
    directBuyUrl: '/contact/?book=More+Than+Just+Stories',
    amazonUrl: 'https://www.amazon.com/s?k=More+Than+Just+Stories+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=More+Than+Just+Stories+Christine+A'
  },
  {
    slug: 'in-the-beginning-grace',
    title: 'In the Beginning Was Grace',
    subtitle: '30 Days Through Genesis & Exodus Seeing the Heart of Your Rescuer',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptTitle: 'Foundation 4: The Rescue Story from Page One',
    coverImage: '/images/covers/in-the-beginning-grace.svg',
    priceEbook: '8.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-009-5',
    featured: false,
    shortDescription: 'See how God rescue plan started on the very first pages of the Bible - and why you are the one being rescued.',
    fullDescription: [
      'Some people think the God of the Old Testament is angry and distant, while Jesus in the New Testament is loving and gentle. Nothing could be further from the truth!',
      'In the Beginning Was Grace takes you by the hand through the first two books of the Bible - Genesis and Exodus - showing you the tender, pursuing heart of God from the very beginning.',
      'From the first promise of a Savior in the Garden of Eden to the parting of the Red Sea and bread from heaven in the wilderness, you will see Jesus on every page.'
    ],
    keyTakeaways: [
      'Dispels the myth that the Old Testament God is different from Jesus.',
      'Covers the foundational chapters of Genesis and Exodus in bite-sized 5-minute devotions.',
      'Builds deep confidence in God fatherly love and provision.'
    ],
    sampleDayTitle: 'Day 1: The First Gospel Promise in Eden',
    sampleScripture: 'Genesis 3:9 & 3:15',
    sampleExcerpt: 'The very first question God asks in the Bible after humanity messes up is not "How dare you?" It is the gentle cry of a loving Father looking for His children: "Where are you?" And before Adam and Eve even leave the garden, God promises that one day a Rescuer will come to crush the serpent head - even though His own heel will be bruised on the cross.',
    sampleReflectionOrActivity: 'Today Grace Prayer: "Father, thank You that even when I hide or fall short, You come looking for me with grace. Amen."',
    directBuyUrl: '/contact/?book=In+the+Beginning+Was+Grace',
    amazonUrl: 'https://www.amazon.com/s?k=In+the+Beginning+Was+Grace+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=In+the+Beginning+Was+Grace+Christine+A'
  },
  {
    slug: 'promises-kept',
    title: 'Every Promise Kept',
    subtitle: '30 Daily Readings on How God Covenants Secure Your Future',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptTitle: 'Foundation 5: Walking in Daily Assurance',
    coverImage: '/images/covers/promises-kept.svg',
    priceEbook: '8.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-010-1',
    featured: false,
    shortDescription: 'Discover how God ancient covenants with Noah, Abraham, and David guarantee His faithfulness to you today.',
    fullDescription: [
      'In our modern world, contracts are broken every day. So when the Bible talks about God making a "covenant" with His people, what does that actually mean for your Monday morning?',
      'Every Promise Kept explains the backbone of the Bible - God unbreakable covenants - in warm, everyday language.',
      'You will see how every promise God made in the Old Testament finds its "Yes" and "Amen" in Jesus, giving you rock-solid assurance that He will never leave you or forsake you.'
    ],
    keyTakeaways: [
      'Explains the word "Covenant" simply - showing how God binds Himself to your good.',
      'Helps new believers overcome anxiety about the future and assurance of salvation.',
      'A deeply encouraging 30-day capstone for your foundational walk with Christ.'
    ],
    sampleDayTitle: 'Day 1: A Promise That Does Not Depend on Your Grip',
    sampleScripture: '2 Corinthians 1:20 & Genesis 15:17',
    sampleExcerpt: 'When a parent crosses a busy street with a small child, the child safety does not depend on how tightly the child holds the parent hand - it depends on how tightly the parent holds the child. In Genesis 15, God made a promise to Abraham while Abraham was fast asleep, showing that salvation rests on God faithfulness, not ours.',
    sampleReflectionOrActivity: 'Today Grace Prayer: "Lord Jesus, thank You that You hold me securely in Your hands today and forever. Amen."',
    directBuyUrl: '/contact/?book=Every+Promise+Kept',
    amazonUrl: 'https://www.amazon.com/s?k=Every+Promise+Kept+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=Every+Promise+Kept+Christine+A'
  },

  // ==========================================
  // 3. THE CHILDREN'S COLLECTION (AGES 4-8) (5 BOOKS)
  // ==========================================
  {
    slug: 'the-great-prophecy-hunt',
    title: 'The Great Prophecy Hunt',
    subtitle: '30 Secret Clues That Point to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children Edition (Ages 4-8)',
    conceptTitle: 'Adventure 1: Bible Detective Clue Hunt',
    coverImage: '/images/covers/the-great-prophecy-hunt.svg',
    priceEbook: '7.99',
    pricePaperback: '13.99',
    isbn: '979-8-89000-011-8',
    featured: true,
    shortDescription: 'Your kids become detectives, following 30 ancient clues of the Bible to find the ultimate Treasure: Jesus!',
    fullDescription: [
      'Grab your magnifying glass! Long before Jesus was born in Bethlehem, God hid secret clues all across the Old Testament so His children would recognize the Savior when He arrived.',
      'In The Great Prophecy Hunt, kids ages 4-8 become Bible Detectives! Each day reveals one real biblical clue - like a special star, a tiny town, a gentle donkey, or a Good Shepherd - and shows how Jesus matched every single clue.',
      '100% clean, biblically accurate, and free from weird or worldly cartoon distractions, every day includes a short story, a hands-on object lesson, a coloring & drawing prompt, and a simple bedtime prayer.'
    ],
    keyTakeaways: [
      '100% Clean & Safe: Zero weird cartoon characters or worldly distractions.',
      'Interactive Learning: Includes 30 detective clues, family questions, and coloring prompts.',
      'Teaches 4-8 year olds that the whole Bible is true and points to Jesus.'
    ],
    sampleDayTitle: 'Sample Activity Page - Clue #1: The Tiny Town of the Great King!',
    sampleScripture: 'Micah 5:2 - "Out of you, Bethlehem, will come a Ruler for Me!"',
    sampleExcerpt: 'DETECTIVE BRIEFING: If you were looking for a mighty King, where would you look? In a giant palace in the biggest city, right? But 700 years before Jesus was born, God whispered a secret clue to a prophet named Micah: "Look in the tiny town of Bethlehem!" And where was baby Jesus born? Right in Bethlehem!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Draw a bright gold star over the little town of Bethlehem! Then find the smallest coin or toy in the room and talk about how God loves to use small things to do big miracles!',
    directBuyUrl: '/contact/?book=The+Great+Prophecy+Hunt',
    amazonUrl: 'https://www.amazon.com/s?k=The+Great+Prophecy+Hunt+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Great+Prophecy+Hunt+Christine+A'
  },
  {
    slug: 'the-big-tent-and-the-special-rules',
    title: 'The Big Tent and the Special Rules',
    subtitle: 'A 30-Day Adventure Through the Old Testament',
    audience: 'kids',
    audienceLabel: 'The Children Edition (Ages 4-8)',
    conceptTitle: 'Adventure 2: Exploring God Tabernacle',
    coverImage: '/images/covers/the-big-tent-and-the-special-rules.svg',
    priceEbook: '7.99',
    pricePaperback: '13.99',
    isbn: '979-8-89000-012-5',
    featured: false,
    shortDescription: 'A fun, interactive journey through the ancient Tabernacle showing kids how God wants to live close to His people.',
    fullDescription: [
      'When God rescued His people from Egypt and led them through the desert, He told Moses to build a very special tent right in the middle of their camp - because God wanted to live close to His children!',
      'The Big Tent and the Special Rules takes little explorers inside the golden lampstand, the warm bread table, and the cozy tent curtains, showing how every single piece was a picture of Jesus (who is the Light of the World and the Bread of Life!).',
      'Designed for parents and grandparents to read aloud in 5 minutes, complete with household object lessons and character-building prayers.'
    ],
    keyTakeaways: [
      'Makes the Tabernacle and God holiness simple, warm, and exciting for young minds.',
      'Uses everyday household items (a flashlight, a loaf of bread, a clean towel) as object lessons.',
      'Builds reverence, gratitude, and strong biblical character.'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Golden Lamp That Never Went Out',
    sampleScripture: 'John 8:12 - Jesus said, "I am the light of the world."',
    sampleExcerpt: 'Inside God special tent, there were no windows! Instead, God told Moses to make a beautiful golden lampstand with seven bright lamps. It shined in the dark so no one would stumble. Thousands of years later, Jesus told us: "I am the Light of the World!" When we follow Jesus, we never have to be afraid of the dark.',
    sampleReflectionOrActivity: 'OBJECT LESSON: Turn off the room light for 5 seconds and shine a flashlight! Talk about how one little light chases all the darkness away - just like Jesus!',
    directBuyUrl: '/contact/?book=The+Big+Tent+and+the+Special+Rules',
    amazonUrl: 'https://www.amazon.com/s?k=The+Big+Tent+and+the+Special+Rules+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Big+Tent+and+the+Special+Rules+Christine+A'
  },
  {
    slug: 'the-secret-hero',
    title: 'The Secret Hero',
    subtitle: 'How Joseph, David, and Jonah Point to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children Edition (Ages 4-8)',
    conceptTitle: 'Adventure 3: Bible Heroes & The Greatest Hero',
    coverImage: '/images/covers/the-secret-hero.svg',
    priceEbook: '7.99',
    pricePaperback: '13.99',
    isbn: '979-8-89000-013-2',
    featured: false,
    shortDescription: 'Help your kids see that the greatest heroes of the Bible were just shadows of the real Hero: Jesus!',
    fullDescription: [
      'Kids love heroes! They love hearing about Noah building the giant boat, Joseph and his colorful coat, David facing the giant Goliath, and Daniel in the lions den.',
      'But The Secret Hero teaches children something even better: every hero in the Old Testament is a sneak peek of the greatest Hero of all - Jesus!',
      'With 30 clean, exciting stories paired with character lessons on kindness, forgiveness, courage, and obedience, children learn to look to Jesus as their Savior and best Friend.'
    ],
    keyTakeaways: [
      'Connects 30 classic Old Testament stories directly to Jesus.',
      'Teaches practical Christian character: forgiving siblings (like Joseph) and trusting God (like David).',
      'Clean, parent-approved storytelling with daily drawing & coloring activities.'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: Joseph Forgives His Brothers',
    sampleScripture: 'Genesis 50:20 & Luke 23:34',
    sampleExcerpt: 'Joseph brothers were mean to him, yet God made Joseph second-in-command of all Egypt so he could save his family with food! Instead of getting even, Joseph hugged his brothers and forgave them. That points right to Jesus, who forgave us and shares His royal feast with us!',
    sampleReflectionOrActivity: 'FAMILY ACTIVITY: Draw Joseph colorful coat using your 5 favorite crayons! Who is someone you can show kindness and forgiveness to today?',
    directBuyUrl: '/contact/?book=The+Secret+Hero',
    amazonUrl: 'https://www.amazon.com/s?k=The+Secret+Hero+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Secret+Hero+Christine+A'
  },
  {
    slug: 'the-big-clue-hunt',
    title: 'The Big Clue Hunt',
    subtitle: '30 Amazing Puzzles & Object Lessons Through Scripture',
    audience: 'kids',
    audienceLabel: 'The Children Edition (Ages 4-8)',
    conceptTitle: 'Adventure 4: Hands-On Object Lessons & Puzzles',
    coverImage: '/images/covers/the-big-clue-hunt.svg',
    priceEbook: '7.99',
    pricePaperback: '13.99',
    isbn: '979-8-89000-014-9',
    featured: false,
    shortDescription: 'Turn family Bible time into the best part of the day with 30 simple object lessons, puzzles, and Scripture memory games.',
    fullDescription: [
      'Four-to-eight-year-olds learn best when they can touch, see, draw, and move! The Big Clue Hunt was created for busy parents and grandparents who want zero-prep, unforgettable family devotions.',
      'Each day pairs an Old Testament symbol of Jesus - like the Rainbow of Noah, the Rock in the wilderness, or the Good Shepherd staff - with a 2-minute kitchen-table object lesson and a fun puzzle.',
      'No screens, no worldly fluff - just joyful family memories anchored in God Word.'
    ],
    keyTakeaways: [
      'Zero-prep object lessons using items you already have at home.',
      'Includes kid-friendly word games, matching puzzles, and drawing prompts.',
      'Helps young children memorize 30 short, life-giving Bible verses.'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Rainbow Promise',
    sampleScripture: 'Genesis 9:13 - "I have set My rainbow in the clouds."',
    sampleExcerpt: 'After the big rain stopped, Noah and his family stepped out of the ark and saw a giant, glowing rainbow painted across the sky! God put it there to say: "I never forget My promises!" And God biggest promise was sending Jesus to save us.',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY: Count all the colors of the rainbow together and thank God for one blessing for each color!',
    directBuyUrl: '/contact/?book=The+Big+Clue+Hunt',
    amazonUrl: 'https://www.amazon.com/s?k=The+Big+Clue+Hunt+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Big+Clue+Hunt+Christine+A'
  },
  {
    slug: 'the-kings-rescue-plan',
    title: 'The Kings Rescue Plan',
    subtitle: '30 Bedtime Stories, Prayers & Coloring Pages About Jesus',
    audience: 'kids',
    audienceLabel: 'The Children Edition (Ages 4-8)',
    conceptTitle: 'Adventure 5: Bedtime Peace & Biblical Character',
    coverImage: '/images/covers/the-kings-rescue-plan.svg',
    priceEbook: '7.99',
    pricePaperback: '13.99',
    isbn: '979-8-89000-015-6',
    featured: false,
    shortDescription: 'End every evening with calm, truth-filled bedtime readings that show children how deeply Jesus loves and protects them.',
    fullDescription: [
      'Bedtime is when children hearts are softest and most open to truth. The Kings Rescue Plan traces the whole story of the Bible in 30 peaceful, reassuring chapters.',
      'From the Good King creating the stars in Genesis to the Good Shepherd watching over His sheep in Psalm 23, every night reminds your child or grandchild that they were made on purpose and are deeply loved by Jesus.',
      'Includes daytime coloring prompts and soothing evening prayers to help little ones drift to sleep in God peace.'
    ],
    keyTakeaways: [
      'Peaceful, comforting tone ideal for evening family reading.',
      'Reinforces honesty, gratitude, courage, and kindness rooted in Scripture.',
      'Completes the 5-book Children Collection (Ages 4-8).'
    ],
    sampleDayTitle: 'Sample Activity Page - Night 1: The Shepherd Who Never Sleeps',
    sampleScripture: 'Psalm 23:1 - "The LORD is my Shepherd; I have everything I need."',
    sampleExcerpt: 'Long ago, a young boy named David took care of fluffy white sheep on the hills of Bethlehem. Even at night, David stayed awake to keep his little lambs safe. David wrote a song to tell us that Jesus is our Good Shepherd - and He watches over you all night long!',
    sampleReflectionOrActivity: 'BEDTIME PRAYER: "Dear Jesus, thank You for being my Good Shepherd. Thank You for watching over our family tonight. We love You. Amen."',
    directBuyUrl: '/contact/?book=The+Kings+Rescue+Plan',
    amazonUrl: 'https://www.amazon.com/s?k=The+Kings+Rescue+Plan+Christine+A',
    googleBooksUrl: 'https://books.google.com/?q=The+Kings+Rescue+Plan+Christine+A'
  }
];

export function getBooksByAudience(audience: 'seeker' | 'believer' | 'kids'): Book[] {
  return BOOKS.filter((b) => b.audience === audience);
}

export function getFeaturedBooks(): Book[] {
  return BOOKS.filter((b) => b.featured);
}