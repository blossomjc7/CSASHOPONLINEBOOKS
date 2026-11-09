export interface Book {
  slug: string;
  title: string;
  subtitle: string;
  audience: 'seeker' | 'believer' | 'kids';
  audienceLabel: string;
  conceptNumber: number;
  conceptTitle: string;
  conceptFocus: string;
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

export interface ConceptGroup {
  conceptNumber: number;
  conceptTitle: string;
  conceptFocus: string;
  books: Book[];
}

export const AUTHOR_NAME = 'Christine A.';
export const CONTACT_EMAIL = 'contact@csaonlineshop.com';
export const PRESS_EMAIL = 'press@csaonlineshop.com';

export const BOOKS: Book[] = [
  {
    slug: 'the-ancient-shadows',
    title: 'The Ancient Shadows',
    subtitle: 'Decoding the Forgotten Rituals That Point to Christ',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/the-ancient-shadows.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-001-0',
    featured: false,
    shortDescription: 'Decoding the Forgotten Rituals That Point to Christ. An investigative 30-day journey in Concept 1: Shadows and Substance designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Ancient Shadows (Decoding the Forgotten Rituals That Point to Christ) is part of Concept 1: Shadows and Substance in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament laws, rituals, and festivals fulfilled in Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Ancient Shadows',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament laws, rituals, and festivals fulfilled in Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Ancient%20Shadows',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Ancient%20Shadows%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Ancient%20Shadows%20Christine%20A'
  },
  {
    slug: 'rituals-and-reality',
    title: 'Rituals and Reality',
    subtitle: 'Finding the Hidden Christ in the Old Testament Festivals',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/rituals-and-reality.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-002-0',
    featured: false,
    shortDescription: 'Finding the Hidden Christ in the Old Testament Festivals. An investigative 30-day journey in Concept 1: Shadows and Substance designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. Rituals and Reality (Finding the Hidden Christ in the Old Testament Festivals) is part of Concept 1: Shadows and Substance in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament laws, rituals, and festivals fulfilled in Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling Rituals and Reality',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament laws, rituals, and festivals fulfilled in Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=Rituals%20and%20Reality',
    amazonUrl: 'https://www.amazon.com/s?k=Rituals%20and%20Reality%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Rituals%20and%20Reality%20Christine%20A'
  },
  {
    slug: 'the-substance-behind-the-symbol',
    title: 'The Substance Behind the Symbol',
    subtitle: 'A 30-Day Journey Through Ancient Law and Living Grace',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/the-substance-behind-the-symbol.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-003-0',
    featured: false,
    shortDescription: 'A 30-Day Journey Through Ancient Law and Living Grace. An investigative 30-day journey in Concept 1: Shadows and Substance designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Substance Behind the Symbol (A 30-Day Journey Through Ancient Law and Living Grace) is part of Concept 1: Shadows and Substance in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament laws, rituals, and festivals fulfilled in Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Substance Behind the Symbol',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament laws, rituals, and festivals fulfilled in Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Substance%20Behind%20the%20Symbol',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Substance%20Behind%20the%20Symbol%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Substance%20Behind%20the%20Symbol%20Christine%20A'
  },
  {
    slug: 'festivals-of-the-divine',
    title: 'Festivals of the Divine',
    subtitle: 'How Ancient Israelite Celebrations Reveal the Ultimate Truth',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/festivals-of-the-divine.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-004-0',
    featured: false,
    shortDescription: 'How Ancient Israelite Celebrations Reveal the Ultimate Truth. An investigative 30-day journey in Concept 1: Shadows and Substance designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. Festivals of the Divine (How Ancient Israelite Celebrations Reveal the Ultimate Truth) is part of Concept 1: Shadows and Substance in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament laws, rituals, and festivals fulfilled in Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling Festivals of the Divine',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament laws, rituals, and festivals fulfilled in Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=Festivals%20of%20the%20Divine',
    amazonUrl: 'https://www.amazon.com/s?k=Festivals%20of%20the%20Divine%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Festivals%20of%20the%20Divine%20Christine%20A'
  },
  {
    slug: 'fading-shadows-eternal-light',
    title: 'Fading Shadows, Eternal Light',
    subtitle: 'Discovering the Spiritual Meaning of the Old Covenant',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/fading-shadows-eternal-light.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-005-0',
    featured: false,
    shortDescription: 'Discovering the Spiritual Meaning of the Old Covenant. An investigative 30-day journey in Concept 1: Shadows and Substance designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. Fading Shadows, Eternal Light (Discovering the Spiritual Meaning of the Old Covenant) is part of Concept 1: Shadows and Substance in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament laws, rituals, and festivals fulfilled in Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling Fading Shadows, Eternal Light',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament laws, rituals, and festivals fulfilled in Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=Fading%20Shadows%2C%20Eternal%20Light',
    amazonUrl: 'https://www.amazon.com/s?k=Fading%20Shadows%2C%20Eternal%20Light%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Fading%20Shadows%2C%20Eternal%20Light%20Christine%20A'
  },
  {
    slug: 'why-the-rules-changed',
    title: 'Why the Rules Changed',
    subtitle: 'Understanding How Jesus Fulfilled the Old Testament Law',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/why-the-rules-changed.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-006-0',
    featured: false,
    shortDescription: 'Understanding How Jesus Fulfilled the Old Testament Law. Warm, encouraging 5-minute daily readings in Concept 1: Shadows and Substance that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. Why the Rules Changed (Understanding How Jesus Fulfilled the Old Testament Law) is a warm, grace-filled 30-day companion in Concept 1: Shadows and Substance.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament laws, rituals, and festivals fulfilled in Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in Why the Rules Changed',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=Why%20the%20Rules%20Changed',
    amazonUrl: 'https://www.amazon.com/s?k=Why%20the%20Rules%20Changed%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Why%20the%20Rules%20Changed%20Christine%20A'
  },
  {
    slug: 'from-ritual-to-relationship',
    title: 'From Ritual to Relationship',
    subtitle: 'A 30-Day Guide to the Old Testament Festivals',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/from-ritual-to-relationship.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-007-0',
    featured: false,
    shortDescription: 'A 30-Day Guide to the Old Testament Festivals. Warm, encouraging 5-minute daily readings in Concept 1: Shadows and Substance that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. From Ritual to Relationship (A 30-Day Guide to the Old Testament Festivals) is a warm, grace-filled 30-day companion in Concept 1: Shadows and Substance.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament laws, rituals, and festivals fulfilled in Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in From Ritual to Relationship',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=From%20Ritual%20to%20Relationship',
    amazonUrl: 'https://www.amazon.com/s?k=From%20Ritual%20to%20Relationship%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=From%20Ritual%20to%20Relationship%20Christine%20A'
  },
  {
    slug: 'the-shadow-and-the-savior',
    title: 'The Shadow and the Savior',
    subtitle: 'Discovering How the Old Testament Points to Your New Life',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/the-shadow-and-the-savior.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-008-0',
    featured: false,
    shortDescription: 'Discovering How the Old Testament Points to Your New Life. Warm, encouraging 5-minute daily readings in Concept 1: Shadows and Substance that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Shadow and the Savior (Discovering How the Old Testament Points to Your New Life) is a warm, grace-filled 30-day companion in Concept 1: Shadows and Substance.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament laws, rituals, and festivals fulfilled in Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Shadow and the Savior',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Shadow%20and%20the%20Savior',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Shadow%20and%20the%20Savior%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Shadow%20and%20the%20Savior%20Christine%20A'
  },
  {
    slug: 'grace-over-rules',
    title: 'Grace Over Rules',
    subtitle: 'Finding Freedom in the Ancient Traditions',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/grace-over-rules.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-009-0',
    featured: false,
    shortDescription: 'Finding Freedom in the Ancient Traditions. Warm, encouraging 5-minute daily readings in Concept 1: Shadows and Substance that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. Grace Over Rules (Finding Freedom in the Ancient Traditions) is a warm, grace-filled 30-day companion in Concept 1: Shadows and Substance.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament laws, rituals, and festivals fulfilled in Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in Grace Over Rules',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=Grace%20Over%20Rules',
    amazonUrl: 'https://www.amazon.com/s?k=Grace%20Over%20Rules%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Grace%20Over%20Rules%20Christine%20A'
  },
  {
    slug: 'the-real-meaning-of-the-passover',
    title: 'The Real Meaning of the Passover',
    subtitle: 'How the Old Testament Ceremonies Point to Jesus',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/the-real-meaning-of-the-passover.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-010-0',
    featured: false,
    shortDescription: 'How the Old Testament Ceremonies Point to Jesus. Warm, encouraging 5-minute daily readings in Concept 1: Shadows and Substance that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Real Meaning of the Passover (How the Old Testament Ceremonies Point to Jesus) is a warm, grace-filled 30-day companion in Concept 1: Shadows and Substance.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament laws, rituals, and festivals fulfilled in Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Real Meaning of the Passover',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Real%20Meaning%20of%20the%20Passover',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Real%20Meaning%20of%20the%20Passover%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Real%20Meaning%20of%20the%20Passover%20Christine%20A'
  },
  {
    slug: 'the-big-tent-and-the-special-rules',
    title: 'The Big Tent and the Special Rules',
    subtitle: 'A 30-Day Adventure Through the Old Testament',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/the-big-tent-and-the-special-rules.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-011-0',
    featured: false,
    shortDescription: 'A 30-Day Adventure Through the Old Testament. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Big Tent and the Special Rules (A 30-Day Adventure Through the Old Testament) brings Concept 1: Shadows and Substance to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament laws, rituals, and festivals fulfilled in Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Big Tent and the Special Rules',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Big%20Tent%20and%20the%20Special%20Rules',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Big%20Tent%20and%20the%20Special%20Rules%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Big%20Tent%20and%20the%20Special%20Rules%20Christine%20A'
  },
  {
    slug: 'shadows-and-surprises',
    title: 'Shadows and Surprises',
    subtitle: 'Finding Jesus in the Weirdest Old Testament Rules',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/shadows-and-surprises.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-012-0',
    featured: false,
    shortDescription: 'Finding Jesus in the Weirdest Old Testament Rules. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! Shadows and Surprises (Finding Jesus in the Weirdest Old Testament Rules) brings Concept 1: Shadows and Substance to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament laws, rituals, and festivals fulfilled in Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: Shadows and Surprises',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=Shadows%20and%20Surprises',
    amazonUrl: 'https://www.amazon.com/s?k=Shadows%20and%20Surprises%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Shadows%20and%20Surprises%20Christine%20A'
  },
  {
    slug: 'the-greatest-festival-ever',
    title: 'The Greatest Festival Ever',
    subtitle: 'How the Old Testament Parties Point to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/the-greatest-festival-ever.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-013-0',
    featured: false,
    shortDescription: 'How the Old Testament Parties Point to Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Greatest Festival Ever (How the Old Testament Parties Point to Jesus) brings Concept 1: Shadows and Substance to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament laws, rituals, and festivals fulfilled in Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Greatest Festival Ever',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Greatest%20Festival%20Ever',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Greatest%20Festival%20Ever%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Greatest%20Festival%20Ever%20Christine%20A'
  },
  {
    slug: 'the-secret-code-of-the-old-law',
    title: 'The Secret Code of the Old Law',
    subtitle: '30 Days of Discovering Jesus in Leviticus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/the-secret-code-of-the-old-law.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-014-0',
    featured: false,
    shortDescription: '30 Days of Discovering Jesus in Leviticus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Secret Code of the Old Law (30 Days of Discovering Jesus in Leviticus) brings Concept 1: Shadows and Substance to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament laws, rituals, and festivals fulfilled in Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Secret Code of the Old Law',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Secret%20Code%20of%20the%20Old%20Law',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Secret%20Code%20of%20the%20Old%20Law%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Secret%20Code%20of%20the%20Old%20Law%20Christine%20A'
  },
  {
    slug: 'the-shadow-game',
    title: 'The Shadow Game',
    subtitle: 'Connecting the Dots from the Old Testament to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 1,
    conceptTitle: 'Concept 1: Shadows and Substance',
    conceptFocus: 'Old Testament laws, rituals, and festivals fulfilled in Jesus',
    coverImage: '/images/covers/the-shadow-game.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-015-0',
    featured: false,
    shortDescription: 'Connecting the Dots from the Old Testament to Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Shadow Game (Connecting the Dots from the Old Testament to Jesus) brings Concept 1: Shadows and Substance to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament laws, rituals, and festivals fulfilled in Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 1: Shadows and Substance (Old Testament laws, rituals, and festivals fulfilled in Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Shadow Game',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Shadow%20Game',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Shadow%20Game%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Shadow%20Game%20Christine%20A'
  },
  {
    slug: 'the-secret-visitor',
    title: 'The Secret Visitor',
    subtitle: 'Uncovering the Mysterious Appearances of God in the Old Testament',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-secret-visitor.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-016-0',
    featured: false,
    shortDescription: 'Uncovering the Mysterious Appearances of God in the Old Testament. An investigative 30-day journey in Concept 2: Theophanies - God in the Flesh designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Secret Visitor (Uncovering the Mysterious Appearances of God in the Old Testament) is part of Concept 2: Theophanies - God in the Flesh in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The Angel of the Lord, the burning bush, and Jacob wrestling - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Secret Visitor',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The Angel of the Lord, the burning bush, and Jacob wrestling, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Secret%20Visitor',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Secret%20Visitor%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Secret%20Visitor%20Christine%20A'
  },
  {
    slug: 'god-in-the-wilderness',
    title: 'God in the Wilderness',
    subtitle: '30 Ancient Encounters with the Divine That Point to Christ',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/god-in-the-wilderness.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-017-0',
    featured: false,
    shortDescription: '30 Ancient Encounters with the Divine That Point to Christ. An investigative 30-day journey in Concept 2: Theophanies - God in the Flesh designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. God in the Wilderness (30 Ancient Encounters with the Divine That Point to Christ) is part of Concept 2: Theophanies - God in the Flesh in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The Angel of the Lord, the burning bush, and Jacob wrestling - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling God in the Wilderness',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The Angel of the Lord, the burning bush, and Jacob wrestling, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=God%20in%20the%20Wilderness',
    amazonUrl: 'https://www.amazon.com/s?k=God%20in%20the%20Wilderness%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=God%20in%20the%20Wilderness%20Christine%20A'
  },
  {
    slug: 'the-burning-bush-and-the-wrestler',
    title: 'The Burning Bush and the Wrestler',
    subtitle: 'Finding the Hidden Christ in the Old Testament',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-burning-bush-and-the-wrestler.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-018-0',
    featured: false,
    shortDescription: 'Finding the Hidden Christ in the Old Testament. An investigative 30-day journey in Concept 2: Theophanies - God in the Flesh designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Burning Bush and the Wrestler (Finding the Hidden Christ in the Old Testament) is part of Concept 2: Theophanies - God in the Flesh in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The Angel of the Lord, the burning bush, and Jacob wrestling - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Burning Bush and the Wrestler',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The Angel of the Lord, the burning bush, and Jacob wrestling, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Burning%20Bush%20and%20the%20Wrestler',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Burning%20Bush%20and%20the%20Wrestler%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Burning%20Bush%20and%20the%20Wrestler%20Christine%20A'
  },
  {
    slug: 'divine-encounters',
    title: 'Divine Encounters',
    subtitle: 'Tracing the Pre-Incarnate Christ Through Ancient History',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/divine-encounters.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-019-0',
    featured: false,
    shortDescription: 'Tracing the Pre-Incarnate Christ Through Ancient History. An investigative 30-day journey in Concept 2: Theophanies - God in the Flesh designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. Divine Encounters (Tracing the Pre-Incarnate Christ Through Ancient History) is part of Concept 2: Theophanies - God in the Flesh in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The Angel of the Lord, the burning bush, and Jacob wrestling - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling Divine Encounters',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The Angel of the Lord, the burning bush, and Jacob wrestling, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=Divine%20Encounters',
    amazonUrl: 'https://www.amazon.com/s?k=Divine%20Encounters%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Divine%20Encounters%20Christine%20A'
  },
  {
    slug: 'the-ghost-in-the-old-testament',
    title: 'The Ghost in the Old Testament',
    subtitle: 'Discovering the Physical Presence of God Before Bethlehem',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-ghost-in-the-old-testament.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-020-0',
    featured: false,
    shortDescription: 'Discovering the Physical Presence of God Before Bethlehem. An investigative 30-day journey in Concept 2: Theophanies - God in the Flesh designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Ghost in the Old Testament (Discovering the Physical Presence of God Before Bethlehem) is part of Concept 2: Theophanies - God in the Flesh in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The Angel of the Lord, the burning bush, and Jacob wrestling - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Ghost in the Old Testament',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The Angel of the Lord, the burning bush, and Jacob wrestling, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Ghost%20in%20the%20Old%20Testament',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Ghost%20in%20the%20Old%20Testament%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Ghost%20in%20the%20Old%20Testament%20Christine%20A'
  },
  {
    slug: 'god-came-close',
    title: 'God Came Close',
    subtitle: 'Understanding the Mysterious Appearances of Jesus in the Old Testament',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/god-came-close.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-021-0',
    featured: false,
    shortDescription: 'Understanding the Mysterious Appearances of Jesus in the Old Testament. Warm, encouraging 5-minute daily readings in Concept 2: Theophanies - God in the Flesh that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. God Came Close (Understanding the Mysterious Appearances of Jesus in the Old Testament) is a warm, grace-filled 30-day companion in Concept 2: Theophanies - God in the Flesh.',
      'In just 5 minutes a day, Christine A. walks you through The Angel of the Lord, the burning bush, and Jacob wrestling - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in God Came Close',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=God%20Came%20Close',
    amazonUrl: 'https://www.amazon.com/s?k=God%20Came%20Close%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=God%20Came%20Close%20Christine%20A'
  },
  {
    slug: 'the-angel-of-the-lord',
    title: 'The Angel of the Lord',
    subtitle: 'A 30-Day Guide to the God Who Walks With Us',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-angel-of-the-lord.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-022-0',
    featured: false,
    shortDescription: 'A 30-Day Guide to the God Who Walks With Us. Warm, encouraging 5-minute daily readings in Concept 2: Theophanies - God in the Flesh that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Angel of the Lord (A 30-Day Guide to the God Who Walks With Us) is a warm, grace-filled 30-day companion in Concept 2: Theophanies - God in the Flesh.',
      'In just 5 minutes a day, Christine A. walks you through The Angel of the Lord, the burning bush, and Jacob wrestling - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Angel of the Lord',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Angel%20of%20the%20Lord',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Angel%20of%20the%20Lord%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Angel%20of%20the%20Lord%20Christine%20A'
  },
  {
    slug: 'before-the-manger',
    title: 'Before the Manger',
    subtitle: 'Discovering the Physical Presence of Jesus in the Old Testament',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/before-the-manger.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-023-0',
    featured: false,
    shortDescription: 'Discovering the Physical Presence of Jesus in the Old Testament. Warm, encouraging 5-minute daily readings in Concept 2: Theophanies - God in the Flesh that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. Before the Manger (Discovering the Physical Presence of Jesus in the Old Testament) is a warm, grace-filled 30-day companion in Concept 2: Theophanies - God in the Flesh.',
      'In just 5 minutes a day, Christine A. walks you through The Angel of the Lord, the burning bush, and Jacob wrestling - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in Before the Manger',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=Before%20the%20Manger',
    amazonUrl: 'https://www.amazon.com/s?k=Before%20the%20Manger%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Before%20the%20Manger%20Christine%20A'
  },
  {
    slug: 'the-god-who-shows-up',
    title: 'The God Who Shows Up',
    subtitle: 'Finding Comfort in the Ancient Appearances of Christ',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-god-who-shows-up.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-024-0',
    featured: false,
    shortDescription: 'Finding Comfort in the Ancient Appearances of Christ. Warm, encouraging 5-minute daily readings in Concept 2: Theophanies - God in the Flesh that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The God Who Shows Up (Finding Comfort in the Ancient Appearances of Christ) is a warm, grace-filled 30-day companion in Concept 2: Theophanies - God in the Flesh.',
      'In just 5 minutes a day, Christine A. walks you through The Angel of the Lord, the burning bush, and Jacob wrestling - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The God Who Shows Up',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20God%20Who%20Shows%20Up',
    amazonUrl: 'https://www.amazon.com/s?k=The%20God%20Who%20Shows%20Up%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20God%20Who%20Shows%20Up%20Christine%20A'
  },
  {
    slug: 'the-secret-visitor-believer',
    title: 'The Secret Visitor: Always With Us',
    subtitle: 'How God Was Always With His People (And Why That Matters to You)',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-secret-visitor-believer.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-025-0',
    featured: false,
    shortDescription: 'How God Was Always With His People (And Why That Matters to You). Warm, encouraging 5-minute daily readings in Concept 2: Theophanies - God in the Flesh that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Secret Visitor: Always With Us (How God Was Always With His People (And Why That Matters to You)) is a warm, grace-filled 30-day companion in Concept 2: Theophanies - God in the Flesh.',
      'In just 5 minutes a day, Christine A. walks you through The Angel of the Lord, the burning bush, and Jacob wrestling - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Secret Visitor: Always With Us',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Secret%20Visitor%3A%20Always%20With%20Us',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Secret%20Visitor%3A%20Always%20With%20Us%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Secret%20Visitor%3A%20Always%20With%20Us%20Christine%20A'
  },
  {
    slug: 'the-secret-visitor-kids',
    title: 'The Secret Visitor: Kids Edition',
    subtitle: '30 Days of Finding God in Strange and Awesome Old Testament Stories',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-secret-visitor-kids.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-026-0',
    featured: false,
    shortDescription: '30 Days of Finding God in Strange and Awesome Old Testament Stories. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Secret Visitor: Kids Edition (30 Days of Finding God in Strange and Awesome Old Testament Stories) brings Concept 2: Theophanies - God in the Flesh to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The Angel of the Lord, the burning bush, and Jacob wrestling through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Secret Visitor: Kids Edition',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Secret%20Visitor%3A%20Kids%20Edition',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Secret%20Visitor%3A%20Kids%20Edition%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Secret%20Visitor%3A%20Kids%20Edition%20Christine%20A'
  },
  {
    slug: 'the-burning-bush-and-the-big-wrestling-match',
    title: 'The Burning Bush and the Big Wrestling Match',
    subtitle: 'A Fun Look at God in the Old Testament',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-burning-bush-and-the-big-wrestling-match.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-027-0',
    featured: false,
    shortDescription: 'A Fun Look at God in the Old Testament. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Burning Bush and the Big Wrestling Match (A Fun Look at God in the Old Testament) brings Concept 2: Theophanies - God in the Flesh to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The Angel of the Lord, the burning bush, and Jacob wrestling through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Burning Bush and the Big Wrestling Match',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Burning%20Bush%20and%20the%20Big%20Wrestling%20Match',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Burning%20Bush%20and%20the%20Big%20Wrestling%20Match%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Burning%20Bush%20and%20the%20Big%20Wrestling%20Match%20Christine%20A'
  },
  {
    slug: 'god-in-disguise',
    title: 'God in Disguise',
    subtitle: 'Finding the Secret Visitor in the Old Testament',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/god-in-disguise.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-028-0',
    featured: false,
    shortDescription: 'Finding the Secret Visitor in the Old Testament. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! God in Disguise (Finding the Secret Visitor in the Old Testament) brings Concept 2: Theophanies - God in the Flesh to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The Angel of the Lord, the burning bush, and Jacob wrestling through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: God in Disguise',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=God%20in%20Disguise',
    amazonUrl: 'https://www.amazon.com/s?k=God%20in%20Disguise%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=God%20in%20Disguise%20Christine%20A'
  },
  {
    slug: 'the-big-surprise',
    title: 'The Big Surprise',
    subtitle: '30 Times God Showed Up in the Old Testament to Point to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-big-surprise.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-029-0',
    featured: false,
    shortDescription: '30 Times God Showed Up in the Old Testament to Point to Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Big Surprise (30 Times God Showed Up in the Old Testament to Point to Jesus) brings Concept 2: Theophanies - God in the Flesh to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The Angel of the Lord, the burning bush, and Jacob wrestling through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Big Surprise',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Big%20Surprise',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Big%20Surprise%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Big%20Surprise%20Christine%20A'
  },
  {
    slug: 'the-mystery-visitor',
    title: 'The Mystery Visitor',
    subtitle: 'A 30-Day Adventure Through the Old Testament',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 2,
    conceptTitle: 'Concept 2: Theophanies - God in the Flesh',
    conceptFocus: 'The Angel of the Lord, the burning bush, and Jacob wrestling',
    coverImage: '/images/covers/the-mystery-visitor.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-030-0',
    featured: false,
    shortDescription: 'A 30-Day Adventure Through the Old Testament. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Mystery Visitor (A 30-Day Adventure Through the Old Testament) brings Concept 2: Theophanies - God in the Flesh to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The Angel of the Lord, the burning bush, and Jacob wrestling through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 2: Theophanies - God in the Flesh (The Angel of the Lord, the burning bush, and Jacob wrestling).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Mystery Visitor',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Mystery%20Visitor',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Mystery%20Visitor%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Mystery%20Visitor%20Christine%20A'
  },
  {
    slug: 'the-prophecy-code',
    title: 'The Prophecy Code',
    subtitle: '30 Ancient Predictions That Prove the Bible is True',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-prophecy-code.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-031-0',
    featured: true,
    shortDescription: '30 Ancient Predictions That Prove the Bible is True. An investigative 30-day journey in Concept 3: Messianic Prophecies Fulfilled designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Prophecy Code (30 Ancient Predictions That Prove the Bible is True) is part of Concept 3: Messianic Prophecies Fulfilled in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Prophecy Code',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Prophecy%20Code',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Prophecy%20Code%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Prophecy%20Code%20Christine%20A'
  },
  {
    slug: 'written-in-the-stars',
    title: 'Written in the Stars',
    subtitle: 'The Impossible Prophecies That Point to Jesus',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/written-in-the-stars.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-032-0',
    featured: false,
    shortDescription: 'The Impossible Prophecies That Point to Jesus. An investigative 30-day journey in Concept 3: Messianic Prophecies Fulfilled designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. Written in the Stars (The Impossible Prophecies That Point to Jesus) is part of Concept 3: Messianic Prophecies Fulfilled in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling Written in the Stars',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=Written%20in%20the%20Stars',
    amazonUrl: 'https://www.amazon.com/s?k=Written%20in%20the%20Stars%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Written%20in%20the%20Stars%20Christine%20A'
  },
  {
    slug: 'the-1000-year-old-blueprint',
    title: 'The 1,000-Year-Old Blueprint',
    subtitle: 'Unlocking the Messianic Prophecies of the Old Testament',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-1000-year-old-blueprint.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-033-0',
    featured: false,
    shortDescription: 'Unlocking the Messianic Prophecies of the Old Testament. An investigative 30-day journey in Concept 3: Messianic Prophecies Fulfilled designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The 1,000-Year-Old Blueprint (Unlocking the Messianic Prophecies of the Old Testament) is part of Concept 3: Messianic Prophecies Fulfilled in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The 1,000-Year-Old Blueprint',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%201%2C000-Year-Old%20Blueprint',
    amazonUrl: 'https://www.amazon.com/s?k=The%201%2C000-Year-Old%20Blueprint%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%201%2C000-Year-Old%20Blueprint%20Christine%20A'
  },
  {
    slug: 'the-future-told',
    title: 'The Future Told',
    subtitle: 'How Ancient Voices Predicted the Life of Christ',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-future-told.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-034-0',
    featured: false,
    shortDescription: 'How Ancient Voices Predicted the Life of Christ. An investigative 30-day journey in Concept 3: Messianic Prophecies Fulfilled designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Future Told (How Ancient Voices Predicted the Life of Christ) is part of Concept 3: Messianic Prophecies Fulfilled in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Future Told',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Future%20Told',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Future%20Told%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Future%20Told%20Christine%20A'
  },
  {
    slug: 'the-ultimate-evidence',
    title: 'The Ultimate Evidence',
    subtitle: '30 Messianic Prophecies and Their Stunning Fulfillments',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-ultimate-evidence.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-035-0',
    featured: false,
    shortDescription: '30 Messianic Prophecies and Their Stunning Fulfillments. An investigative 30-day journey in Concept 3: Messianic Prophecies Fulfilled designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Ultimate Evidence (30 Messianic Prophecies and Their Stunning Fulfillments) is part of Concept 3: Messianic Prophecies Fulfilled in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Ultimate Evidence',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Ultimate%20Evidence',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Ultimate%20Evidence%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Ultimate%20Evidence%20Christine%20A'
  },
  {
    slug: 'you-can-trust-the-bible',
    title: 'You Can Trust the Bible',
    subtitle: '30 Prophecies That Prove Jesus is Who He Says He Is',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/you-can-trust-the-bible.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-036-0',
    featured: true,
    shortDescription: '30 Prophecies That Prove Jesus is Who He Says He Is. Warm, encouraging 5-minute daily readings in Concept 3: Messianic Prophecies Fulfilled that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. You Can Trust the Bible (30 Prophecies That Prove Jesus is Who He Says He Is) is a warm, grace-filled 30-day companion in Concept 3: Messianic Prophecies Fulfilled.',
      'In just 5 minutes a day, Christine A. walks you through Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in You Can Trust the Bible',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=You%20Can%20Trust%20the%20Bible',
    amazonUrl: 'https://www.amazon.com/s?k=You%20Can%20Trust%20the%20Bible%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=You%20Can%20Trust%20the%20Bible%20Christine%20A'
  },
  {
    slug: 'the-promised-king',
    title: 'The Promised King',
    subtitle: 'Understanding the Old Testament Prophecies About Jesus',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-promised-king.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-037-0',
    featured: false,
    shortDescription: 'Understanding the Old Testament Prophecies About Jesus. Warm, encouraging 5-minute daily readings in Concept 3: Messianic Prophecies Fulfilled that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Promised King (Understanding the Old Testament Prophecies About Jesus) is a warm, grace-filled 30-day companion in Concept 3: Messianic Prophecies Fulfilled.',
      'In just 5 minutes a day, Christine A. walks you through Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Promised King',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Promised%20King',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Promised%20King%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Promised%20King%20Christine%20A'
  },
  {
    slug: 'prophecy-fulfilled',
    title: 'Prophecy Fulfilled',
    subtitle: 'A 30-Day Guide to the Predictions That Changed the World',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/prophecy-fulfilled.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-038-0',
    featured: false,
    shortDescription: 'A 30-Day Guide to the Predictions That Changed the World. Warm, encouraging 5-minute daily readings in Concept 3: Messianic Prophecies Fulfilled that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. Prophecy Fulfilled (A 30-Day Guide to the Predictions That Changed the World) is a warm, grace-filled 30-day companion in Concept 3: Messianic Prophecies Fulfilled.',
      'In just 5 minutes a day, Christine A. walks you through Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in Prophecy Fulfilled',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=Prophecy%20Fulfilled',
    amazonUrl: 'https://www.amazon.com/s?k=Prophecy%20Fulfilled%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Prophecy%20Fulfilled%20Christine%20A'
  },
  {
    slug: 'the-certainty-of-christ',
    title: 'The Certainty of Christ',
    subtitle: 'Discovering the Prophecies That Pointed to Your Savior',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-certainty-of-christ.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-039-0',
    featured: false,
    shortDescription: 'Discovering the Prophecies That Pointed to Your Savior. Warm, encouraging 5-minute daily readings in Concept 3: Messianic Prophecies Fulfilled that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Certainty of Christ (Discovering the Prophecies That Pointed to Your Savior) is a warm, grace-filled 30-day companion in Concept 3: Messianic Prophecies Fulfilled.',
      'In just 5 minutes a day, Christine A. walks you through Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Certainty of Christ',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Certainty%20of%20Christ',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Certainty%20of%20Christ%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Certainty%20of%20Christ%20Christine%20A'
  },
  {
    slug: 'the-ancient-promise',
    title: 'The Ancient Promise',
    subtitle: 'How the Old Testament Prophets Predicted Your New Life',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-ancient-promise.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-040-0',
    featured: false,
    shortDescription: 'How the Old Testament Prophets Predicted Your New Life. Warm, encouraging 5-minute daily readings in Concept 3: Messianic Prophecies Fulfilled that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Ancient Promise (How the Old Testament Prophets Predicted Your New Life) is a warm, grace-filled 30-day companion in Concept 3: Messianic Prophecies Fulfilled.',
      'In just 5 minutes a day, Christine A. walks you through Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Ancient Promise',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Ancient%20Promise',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Ancient%20Promise%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Ancient%20Promise%20Christine%20A'
  },
  {
    slug: 'the-great-prophecy-hunt',
    title: 'The Great Prophecy Hunt',
    subtitle: '30 Secret Predictions That Point to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-great-prophecy-hunt.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-041-0',
    featured: true,
    shortDescription: '30 Secret Predictions That Point to Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Great Prophecy Hunt (30 Secret Predictions That Point to Jesus) brings Concept 3: Messianic Prophecies Fulfilled to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Great Prophecy Hunt',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Great%20Prophecy%20Hunt',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Great%20Prophecy%20Hunt%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Great%20Prophecy%20Hunt%20Christine%20A'
  },
  {
    slug: 'the-clues-before-the-king',
    title: 'The Clues Before the King',
    subtitle: 'A Fun Adventure Through Old Testament Prophecies',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-clues-before-the-king.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-042-0',
    featured: false,
    shortDescription: 'A Fun Adventure Through Old Testament Prophecies. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Clues Before the King (A Fun Adventure Through Old Testament Prophecies) brings Concept 3: Messianic Prophecies Fulfilled to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Clues Before the King',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Clues%20Before%20the%20King',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Clues%20Before%20the%20King%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Clues%20Before%20the%20King%20Christine%20A'
  },
  {
    slug: 'the-bibles-biggest-secrets',
    title: 'The Bible\'s Biggest Secrets',
    subtitle: '30 Times the Old Testament Predicted Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-bibles-biggest-secrets.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-043-0',
    featured: false,
    shortDescription: '30 Times the Old Testament Predicted Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Bible\'s Biggest Secrets (30 Times the Old Testament Predicted Jesus) brings Concept 3: Messianic Prophecies Fulfilled to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Bible\'s Biggest Secrets',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Bibles%20Biggest%20Secrets',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Bibles%20Biggest%20Secrets%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Bibles%20Biggest%20Secrets%20Christine%20A'
  },
  {
    slug: 'the-future-told-kids',
    title: 'The Future Told: Kids Edition',
    subtitle: 'How the Old Testament Prophets Knew Jesus Was Coming',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-future-told-kids.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-044-0',
    featured: false,
    shortDescription: 'How the Old Testament Prophets Knew Jesus Was Coming. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Future Told: Kids Edition (How the Old Testament Prophets Knew Jesus Was Coming) brings Concept 3: Messianic Prophecies Fulfilled to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Future Told: Kids Edition',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Future%20Told%3A%20Kids%20Edition',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Future%20Told%3A%20Kids%20Edition%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Future%20Told%3A%20Kids%20Edition%20Christine%20A'
  },
  {
    slug: 'the-promise-keeper',
    title: 'The Promise Keeper',
    subtitle: '30 Days of Ancient Prophecies and the Big Surprise of Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 3,
    conceptTitle: 'Concept 3: Messianic Prophecies Fulfilled',
    conceptFocus: 'Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet',
    coverImage: '/images/covers/the-promise-keeper.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-045-0',
    featured: false,
    shortDescription: '30 Days of Ancient Prophecies and the Big Surprise of Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Promise Keeper (30 Days of Ancient Prophecies and the Big Surprise of Jesus) brings Concept 3: Messianic Prophecies Fulfilled to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 3: Messianic Prophecies Fulfilled (Specific predictions like Bethlehem, the Virgin Birth, and pierced hands and feet).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Promise Keeper',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Promise%20Keeper',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Promise%20Keeper%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Promise%20Keeper%20Christine%20A'
  },
  {
    slug: 'the-first-blueprint',
    title: 'The First Blueprint',
    subtitle: 'Uncovering the Hidden Gospel in the Book of Genesis',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-first-blueprint.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-046-0',
    featured: false,
    shortDescription: 'Uncovering the Hidden Gospel in the Book of Genesis. An investigative 30-day journey in Concept 4: The Gospel in Genesis designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The First Blueprint (Uncovering the Hidden Gospel in the Book of Genesis) is part of Concept 4: The Gospel in Genesis in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The first book of the Bible, showing the need for a Savior from the very start - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The First Blueprint',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The first book of the Bible, showing the need for a Savior from the very start, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20First%20Blueprint',
    amazonUrl: 'https://www.amazon.com/s?k=The%20First%20Blueprint%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20First%20Blueprint%20Christine%20A'
  },
  {
    slug: 'the-beginning-of-the-rescue',
    title: 'The Beginning of the Rescue',
    subtitle: '30 Days in Genesis That Point to Jesus',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-beginning-of-the-rescue.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-047-0',
    featured: false,
    shortDescription: '30 Days in Genesis That Point to Jesus. An investigative 30-day journey in Concept 4: The Gospel in Genesis designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Beginning of the Rescue (30 Days in Genesis That Point to Jesus) is part of Concept 4: The Gospel in Genesis in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The first book of the Bible, showing the need for a Savior from the very start - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Beginning of the Rescue',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The first book of the Bible, showing the need for a Savior from the very start, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Beginning%20of%20the%20Rescue',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Beginning%20of%20the%20Rescue%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Beginning%20of%20the%20Rescue%20Christine%20A'
  },
  {
    slug: 'the-seed-of-the-woman',
    title: 'The Seed of the Woman',
    subtitle: 'Discovering the Ancient Prophecy Hidden in the Garden',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-seed-of-the-woman.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-048-0',
    featured: false,
    shortDescription: 'Discovering the Ancient Prophecy Hidden in the Garden. An investigative 30-day journey in Concept 4: The Gospel in Genesis designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Seed of the Woman (Discovering the Ancient Prophecy Hidden in the Garden) is part of Concept 4: The Gospel in Genesis in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The first book of the Bible, showing the need for a Savior from the very start - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Seed of the Woman',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The first book of the Bible, showing the need for a Savior from the very start, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Seed%20of%20the%20Woman',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Seed%20of%20the%20Woman%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Seed%20of%20the%20Woman%20Christine%20A'
  },
  {
    slug: 'the-original-story',
    title: 'The Original Story',
    subtitle: 'How the First Pages of the Bible Reveal the Ultimate Hero',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-original-story.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-049-0',
    featured: false,
    shortDescription: 'How the First Pages of the Bible Reveal the Ultimate Hero. An investigative 30-day journey in Concept 4: The Gospel in Genesis designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Original Story (How the First Pages of the Bible Reveal the Ultimate Hero) is part of Concept 4: The Gospel in Genesis in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The first book of the Bible, showing the need for a Savior from the very start - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Original Story',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The first book of the Bible, showing the need for a Savior from the very start, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Original%20Story',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Original%20Story%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Original%20Story%20Christine%20A'
  },
  {
    slug: 'genesis-decoded',
    title: 'Genesis Decoded',
    subtitle: 'Finding the Spiritual Truths of Christ in the Book of Beginnings',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/genesis-decoded.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-050-0',
    featured: false,
    shortDescription: 'Finding the Spiritual Truths of Christ in the Book of Beginnings. An investigative 30-day journey in Concept 4: The Gospel in Genesis designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. Genesis Decoded (Finding the Spiritual Truths of Christ in the Book of Beginnings) is part of Concept 4: The Gospel in Genesis in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks The first book of the Bible, showing the need for a Savior from the very start - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling Genesis Decoded',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on The first book of the Bible, showing the need for a Savior from the very start, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=Genesis%20Decoded',
    amazonUrl: 'https://www.amazon.com/s?k=Genesis%20Decoded%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Genesis%20Decoded%20Christine%20A'
  },
  {
    slug: 'in-the-beginning',
    title: 'In the Beginning',
    subtitle: 'A 30-Day Guide to Finding Jesus in the Book of Genesis',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/in-the-beginning.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-051-0',
    featured: false,
    shortDescription: 'A 30-Day Guide to Finding Jesus in the Book of Genesis. Warm, encouraging 5-minute daily readings in Concept 4: The Gospel in Genesis that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. In the Beginning (A 30-Day Guide to Finding Jesus in the Book of Genesis) is a warm, grace-filled 30-day companion in Concept 4: The Gospel in Genesis.',
      'In just 5 minutes a day, Christine A. walks you through The first book of the Bible, showing the need for a Savior from the very start - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in In the Beginning',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=In%20the%20Beginning',
    amazonUrl: 'https://www.amazon.com/s?k=In%20the%20Beginning%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=In%20the%20Beginning%20Christine%20A'
  },
  {
    slug: 'the-promise-in-the-garden',
    title: 'The Promise in the Garden',
    subtitle: 'Discovering the First Clues About Your Savior',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-promise-in-the-garden.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-052-0',
    featured: false,
    shortDescription: 'Discovering the First Clues About Your Savior. Warm, encouraging 5-minute daily readings in Concept 4: The Gospel in Genesis that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Promise in the Garden (Discovering the First Clues About Your Savior) is a warm, grace-filled 30-day companion in Concept 4: The Gospel in Genesis.',
      'In just 5 minutes a day, Christine A. walks you through The first book of the Bible, showing the need for a Savior from the very start - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Promise in the Garden',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Promise%20in%20the%20Garden',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Promise%20in%20the%20Garden%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Promise%20in%20the%20Garden%20Christine%20A'
  },
  {
    slug: 'from-creation-to-the-cross',
    title: 'From Creation to the Cross',
    subtitle: 'Understanding the Need for Jesus in Genesis',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/from-creation-to-the-cross.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-053-0',
    featured: false,
    shortDescription: 'Understanding the Need for Jesus in Genesis. Warm, encouraging 5-minute daily readings in Concept 4: The Gospel in Genesis that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. From Creation to the Cross (Understanding the Need for Jesus in Genesis) is a warm, grace-filled 30-day companion in Concept 4: The Gospel in Genesis.',
      'In just 5 minutes a day, Christine A. walks you through The first book of the Bible, showing the need for a Savior from the very start - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in From Creation to the Cross',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=From%20Creation%20to%20the%20Cross',
    amazonUrl: 'https://www.amazon.com/s?k=From%20Creation%20to%20the%20Cross%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=From%20Creation%20to%20the%20Cross%20Christine%20A'
  },
  {
    slug: 'the-first-foundation',
    title: 'The First Foundation',
    subtitle: '30 Days of Studying Genesis to Build Your New Faith',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-first-foundation.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-054-0',
    featured: false,
    shortDescription: '30 Days of Studying Genesis to Build Your New Faith. Warm, encouraging 5-minute daily readings in Concept 4: The Gospel in Genesis that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The First Foundation (30 Days of Studying Genesis to Build Your New Faith) is a warm, grace-filled 30-day companion in Concept 4: The Gospel in Genesis.',
      'In just 5 minutes a day, Christine A. walks you through The first book of the Bible, showing the need for a Savior from the very start - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The First Foundation',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20First%20Foundation',
    amazonUrl: 'https://www.amazon.com/s?k=The%20First%20Foundation%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20First%20Foundation%20Christine%20A'
  },
  {
    slug: 'the-gospel-in-genesis',
    title: 'The Gospel in Genesis',
    subtitle: 'How the First Book of the Bible Points to Your New Life',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-gospel-in-genesis.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-055-0',
    featured: false,
    shortDescription: 'How the First Book of the Bible Points to Your New Life. Warm, encouraging 5-minute daily readings in Concept 4: The Gospel in Genesis that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Gospel in Genesis (How the First Book of the Bible Points to Your New Life) is a warm, grace-filled 30-day companion in Concept 4: The Gospel in Genesis.',
      'In just 5 minutes a day, Christine A. walks you through The first book of the Bible, showing the need for a Savior from the very start - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Gospel in Genesis',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Gospel%20in%20Genesis',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Gospel%20in%20Genesis%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Gospel%20in%20Genesis%20Christine%20A'
  },
  {
    slug: 'the-very-first-stories',
    title: 'The Very First Stories',
    subtitle: '30 Days of Finding Jesus in the Book of Genesis',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-very-first-stories.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-056-0',
    featured: false,
    shortDescription: '30 Days of Finding Jesus in the Book of Genesis. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Very First Stories (30 Days of Finding Jesus in the Book of Genesis) brings Concept 4: The Gospel in Genesis to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The first book of the Bible, showing the need for a Savior from the very start through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Very First Stories',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Very%20First%20Stories',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Very%20First%20Stories%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Very%20First%20Stories%20Christine%20A'
  },
  {
    slug: 'the-clue-in-the-garden',
    title: 'The Clue in the Garden',
    subtitle: 'A Fun Adventure Through the First Book of the Bible',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-clue-in-the-garden.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-057-0',
    featured: false,
    shortDescription: 'A Fun Adventure Through the First Book of the Bible. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Clue in the Garden (A Fun Adventure Through the First Book of the Bible) brings Concept 4: The Gospel in Genesis to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The first book of the Bible, showing the need for a Savior from the very start through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Clue in the Garden',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Clue%20in%20the%20Garden',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Clue%20in%20the%20Garden%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Clue%20in%20the%20Garden%20Christine%20A'
  },
  {
    slug: 'the-big-beginning',
    title: 'The Big Beginning',
    subtitle: 'How the First Stories of the Bible Point to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-big-beginning.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-058-0',
    featured: false,
    shortDescription: 'How the First Stories of the Bible Point to Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Big Beginning (How the First Stories of the Bible Point to Jesus) brings Concept 4: The Gospel in Genesis to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The first book of the Bible, showing the need for a Savior from the very start through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Big Beginning',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Big%20Beginning',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Big%20Beginning%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Big%20Beginning%20Christine%20A'
  },
  {
    slug: 'genesis-for-kids',
    title: 'Genesis for Kids',
    subtitle: '30 Days of Creation, Animals, and the Coming King',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/genesis-for-kids.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-059-0',
    featured: false,
    shortDescription: '30 Days of Creation, Animals, and the Coming King. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! Genesis for Kids (30 Days of Creation, Animals, and the Coming King) brings Concept 4: The Gospel in Genesis to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The first book of the Bible, showing the need for a Savior from the very start through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: Genesis for Kids',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=Genesis%20for%20Kids',
    amazonUrl: 'https://www.amazon.com/s?k=Genesis%20for%20Kids%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Genesis%20for%20Kids%20Christine%20A'
  },
  {
    slug: 'the-first-secret-code',
    title: 'The First Secret Code',
    subtitle: 'How the Book of Genesis Tells Us About Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 4,
    conceptTitle: 'Concept 4: The Gospel in Genesis',
    conceptFocus: 'The first book of the Bible, showing the need for a Savior from the very start',
    coverImage: '/images/covers/the-first-secret-code.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-060-0',
    featured: false,
    shortDescription: 'How the Book of Genesis Tells Us About Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The First Secret Code (How the Book of Genesis Tells Us About Jesus) brings Concept 4: The Gospel in Genesis to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores The first book of the Bible, showing the need for a Savior from the very start through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 4: The Gospel in Genesis (The first book of the Bible, showing the need for a Savior from the very start).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The First Secret Code',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20First%20Secret%20Code',
    amazonUrl: 'https://www.amazon.com/s?k=The%20First%20Secret%20Code%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20First%20Secret%20Code%20Christine%20A'
  },
  {
    slug: 'the-ancient-heroes',
    title: 'The Ancient Heroes',
    subtitle: 'How the Lives of Old Testament Legends Point to Christ',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-ancient-heroes.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-061-0',
    featured: false,
    shortDescription: 'How the Lives of Old Testament Legends Point to Christ. An investigative 30-day journey in Concept 5: Types and Antitypes designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Ancient Heroes (How the Lives of Old Testament Legends Point to Christ) is part of Concept 5: Types and Antitypes in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Ancient Heroes',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Ancient%20Heroes',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Ancient%20Heroes%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Ancient%20Heroes%20Christine%20A'
  },
  {
    slug: 'echoes-of-the-savior',
    title: 'Echoes of the Savior',
    subtitle: 'Finding the Spiritual Pattern of Jesus in the Old Testament',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/echoes-of-the-savior.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-062-0',
    featured: false,
    shortDescription: 'Finding the Spiritual Pattern of Jesus in the Old Testament. An investigative 30-day journey in Concept 5: Types and Antitypes designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. Echoes of the Savior (Finding the Spiritual Pattern of Jesus in the Old Testament) is part of Concept 5: Types and Antitypes in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling Echoes of the Savior',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=Echoes%20of%20the%20Savior',
    amazonUrl: 'https://www.amazon.com/s?k=Echoes%20of%20the%20Savior%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Echoes%20of%20the%20Savior%20Christine%20A'
  },
  {
    slug: 'the-rejected-deliverer',
    title: 'The Rejected Deliverer',
    subtitle: 'How Moses and David Reveal the Hidden Christ',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-rejected-deliverer.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-063-0',
    featured: false,
    shortDescription: 'How Moses and David Reveal the Hidden Christ. An investigative 30-day journey in Concept 5: Types and Antitypes designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Rejected Deliverer (How Moses and David Reveal the Hidden Christ) is part of Concept 5: Types and Antitypes in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Rejected Deliverer',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Rejected%20Deliverer',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Rejected%20Deliverer%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Rejected%20Deliverer%20Christine%20A'
  },
  {
    slug: 'the-ultimate-hero',
    title: 'The Ultimate Hero',
    subtitle: '30 Old Testament Figures Who Point to the Rescue of Jesus',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-ultimate-hero.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-064-0',
    featured: false,
    shortDescription: '30 Old Testament Figures Who Point to the Rescue of Jesus. An investigative 30-day journey in Concept 5: Types and Antitypes designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. The Ultimate Hero (30 Old Testament Figures Who Point to the Rescue of Jesus) is part of Concept 5: Types and Antitypes in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling The Ultimate Hero',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=The%20Ultimate%20Hero',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Ultimate%20Hero%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Ultimate%20Hero%20Christine%20A'
  },
  {
    slug: 'parallel-lives',
    title: 'Parallel Lives',
    subtitle: 'Discovering the Ancient Types of Jesus in the Old Testament',
    audience: 'seeker',
    audienceLabel: 'The Spiritual Seeker',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/parallel-lives.svg',
    priceEbook: '14.99',
    pricePaperback: '19.99',
    isbn: '979-8-89000-065-0',
    featured: false,
    shortDescription: 'Discovering the Ancient Types of Jesus in the Old Testament. An investigative 30-day journey in Concept 5: Types and Antitypes designed for curious minds looking for historical and prophetic evidence.',
    fullDescription: [
      'If you are exploring spirituality, you do not need clichÃ©s or blind faith - you need compelling evidence. Parallel Lives (Discovering the Ancient Types of Jesus in the Old Testament) is part of Concept 5: Types and Antitypes in the Divine Blueprint Series.',
      'Across 30 investigative daily chapters, Christine A. unpacks Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - examining the original Hebrew context, ancient manuscripts, and astonishing historical fulfillment in Jesus of Nazareth.',
      'Written with zero religious jargon and complete respect for your intellect, this book invites you to weigh the ancient blueprint for yourself.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      '30 investigative daily chapters with historical and textual evidence.',
      'Available in Paperback, Ebook, and upcoming Multi-Language editions.'
    ],
    sampleDayTitle: 'Day 1 Investigation: Unveiling Parallel Lives',
    sampleScripture: 'Luke 24:27 - \'And beginning with Moses and all the Prophets, He explained to them what was said in all the Scriptures concerning Himself.\'',
    sampleExcerpt: 'When we open the ancient Hebrew texts not as a dry rulebook, but as an investigative dossier on Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus, a startling pattern emerges. Details recorded centuries apart lock together like gears in a timepiece...',
    sampleReflectionOrActivity: 'Investigative Prompt: As you read Day 1, ask yourself whether these converging patterns across centuries could happen by chance - or by design.',
    directBuyUrl: '/contact/?book=Parallel%20Lives',
    amazonUrl: 'https://www.amazon.com/s?k=Parallel%20Lives%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Parallel%20Lives%20Christine%20A'
  },
  {
    slug: 'more-than-just-stories',
    title: 'More Than Just Stories',
    subtitle: '30 Old Testament Heroes Who Point to Jesus',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/more-than-just-stories.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-066-0',
    featured: false,
    shortDescription: '30 Old Testament Heroes Who Point to Jesus. Warm, encouraging 5-minute daily readings in Concept 5: Types and Antitypes that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. More Than Just Stories (30 Old Testament Heroes Who Point to Jesus) is a warm, grace-filled 30-day companion in Concept 5: Types and Antitypes.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in More Than Just Stories',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=More%20Than%20Just%20Stories',
    amazonUrl: 'https://www.amazon.com/s?k=More%20Than%20Just%20Stories%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=More%20Than%20Just%20Stories%20Christine%20A'
  },
  {
    slug: 'the-real-hero',
    title: 'The Real Hero',
    subtitle: 'How the Lives of Joseph, Moses, and David Reveal Your Savior',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-real-hero.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-067-0',
    featured: false,
    shortDescription: 'How the Lives of Joseph, Moses, and David Reveal Your Savior. Warm, encouraging 5-minute daily readings in Concept 5: Types and Antitypes that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Real Hero (How the Lives of Joseph, Moses, and David Reveal Your Savior) is a warm, grace-filled 30-day companion in Concept 5: Types and Antitypes.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Real Hero',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Real%20Hero',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Real%20Hero%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Real%20Hero%20Christine%20A'
  },
  {
    slug: 'old-testament-shadows',
    title: 'Old Testament Shadows',
    subtitle: 'Understanding the Bible Figures Who Point to Christ',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/old-testament-shadows.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-068-0',
    featured: false,
    shortDescription: 'Understanding the Bible Figures Who Point to Christ. Warm, encouraging 5-minute daily readings in Concept 5: Types and Antitypes that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. Old Testament Shadows (Understanding the Bible Figures Who Point to Christ) is a warm, grace-filled 30-day companion in Concept 5: Types and Antitypes.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in Old Testament Shadows',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=Old%20Testament%20Shadows',
    amazonUrl: 'https://www.amazon.com/s?k=Old%20Testament%20Shadows%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=Old%20Testament%20Shadows%20Christine%20A'
  },
  {
    slug: 'the-rescue-plan',
    title: 'The Rescue Plan',
    subtitle: '30 Days of Learning How Old Testament Heroes Point to Your Freedom',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-rescue-plan.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-069-0',
    featured: false,
    shortDescription: '30 Days of Learning How Old Testament Heroes Point to Your Freedom. Warm, encouraging 5-minute daily readings in Concept 5: Types and Antitypes that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Rescue Plan (30 Days of Learning How Old Testament Heroes Point to Your Freedom) is a warm, grace-filled 30-day companion in Concept 5: Types and Antitypes.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Rescue Plan',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Rescue%20Plan',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Rescue%20Plan%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Rescue%20Plan%20Christine%20A'
  },
  {
    slug: 'the-great-parallel',
    title: 'The Great Parallel',
    subtitle: 'A 30-Day Guide to Meeting Jesus in the Old Testament',
    audience: 'believer',
    audienceLabel: 'The New Believer',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-great-parallel.svg',
    priceEbook: '9.99',
    pricePaperback: '14.99',
    isbn: '979-8-89000-070-0',
    featured: false,
    shortDescription: 'A 30-Day Guide to Meeting Jesus in the Old Testament. Warm, encouraging 5-minute daily readings in Concept 5: Types and Antitypes that build unshakeable trust in Jesus without confusing jargon.',
    fullDescription: [
      'Welcome to the family of God! Reading the Old Testament does not have to feel intimidating or overwhelming. The Great Parallel (A 30-Day Guide to Meeting Jesus in the Old Testament) is a warm, grace-filled 30-day companion in Concept 5: Types and Antitypes.',
      'In just 5 minutes a day, Christine A. walks you through Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus - showing you how the entire Bible is a single rescue story and how Jesus fulfilled every promise for you.',
      'Zero heavy theology jargon. Just clear, encouraging biblical truth that replaces doubt with peace and rules with relationship.'
    ],
    keyTakeaways: [
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).',
      'Bite-sized 5-minute daily readings with a daily grace prayer.',
      'Focuses on what Jesus has done for you, building rock-solid assurance.'
    ],
    sampleDayTitle: 'Day 1 Reading: Discovering Grace in The Great Parallel',
    sampleScripture: 'John 5:39 - \'These are the very Scriptures that testify about Me.\'',
    sampleExcerpt: 'Have you ever opened your Bible and wondered how the ancient stories connect to your life today? Here is the best news in the world: every page of the Old Testament is a love letter pointing straight to Jesus, your Rescuer...',
    sampleReflectionOrActivity: 'Today Grace Prayer: \'Lord Jesus, thank You for rescuing me by grace. Open my eyes today to see Your love on every page of Scripture. Amen.\'',
    directBuyUrl: '/contact/?book=The%20Great%20Parallel',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Great%20Parallel%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Great%20Parallel%20Christine%20A'
  },
  {
    slug: 'the-big-clue-hunt',
    title: 'The Big Clue Hunt',
    subtitle: '30 Old Testament Heroes Who Point to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-big-clue-hunt.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-071-0',
    featured: false,
    shortDescription: '30 Old Testament Heroes Who Point to Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Big Clue Hunt (30 Old Testament Heroes Who Point to Jesus) brings Concept 5: Types and Antitypes to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Big Clue Hunt',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Big%20Clue%20Hunt',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Big%20Clue%20Hunt%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Big%20Clue%20Hunt%20Christine%20A'
  },
  {
    slug: 'more-than-just-a-story',
    title: 'More Than Just a Story',
    subtitle: 'A Fun 30-Day Journey Through the Heroes of the Old Testament',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/more-than-just-a-story.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-072-0',
    featured: false,
    shortDescription: 'A Fun 30-Day Journey Through the Heroes of the Old Testament. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! More Than Just a Story (A Fun 30-Day Journey Through the Heroes of the Old Testament) brings Concept 5: Types and Antitypes to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: More Than Just a Story',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=More%20Than%20Just%20a%20Story',
    amazonUrl: 'https://www.amazon.com/s?k=More%20Than%20Just%20a%20Story%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=More%20Than%20Just%20a%20Story%20Christine%20A'
  },
  {
    slug: 'the-secret-hero',
    title: 'The Secret Hero',
    subtitle: 'How Joseph, David, and Jonah Point to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-secret-hero.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-073-0',
    featured: false,
    shortDescription: 'How Joseph, David, and Jonah Point to Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Secret Hero (How Joseph, David, and Jonah Point to Jesus) brings Concept 5: Types and Antitypes to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Secret Hero',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Secret%20Hero',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Secret%20Hero%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Secret%20Hero%20Christine%20A'
  },
  {
    slug: 'the-old-testament-detective',
    title: 'The Old Testament Detective',
    subtitle: '30 Days of Finding Clues About Jesus in the Heroes',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-old-testament-detective.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-074-0',
    featured: false,
    shortDescription: '30 Days of Finding Clues About Jesus in the Heroes. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Old Testament Detective (30 Days of Finding Clues About Jesus in the Heroes) brings Concept 5: Types and Antitypes to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Old Testament Detective',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Old%20Testament%20Detective',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Old%20Testament%20Detective%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Old%20Testament%20Detective%20Christine%20A'
  },
  {
    slug: 'the-great-adventure',
    title: 'The Great Adventure',
    subtitle: 'Connecting the Lives of Old Testament Heroes to Jesus',
    audience: 'kids',
    audienceLabel: 'The Children\'s Edition (Ages 4-8)',
    conceptNumber: 5,
    conceptTitle: 'Concept 5: Types and Antitypes',
    conceptFocus: 'Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus',
    coverImage: '/images/covers/the-great-adventure.svg',
    priceEbook: '6.99',
    pricePaperback: '12.99',
    isbn: '979-8-89000-075-0',
    featured: false,
    shortDescription: 'Connecting the Lives of Old Testament Heroes to Jesus. A 100% clean, interactive 30-day adventure for kids ages 4-8 with coloring prompts, object lessons, and simple prayers.',
    fullDescription: [
      'Introduce your little ones (ages 4-8) to the greatest Hero of all! The Great Adventure (Connecting the Lives of Old Testament Heroes to Jesus) brings Concept 5: Types and Antitypes to life in a way young children love and understand.',
      '100% clean, safe, and free from weird or worldly cartoon distractions, each of the 30 days explores Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus through an exciting story, a hands-on household object lesson, a coloring or drawing activity, and a short family prayer.',
      'Created by Christine A. for parents and grandparents who want pure biblical truth that builds strong character and joyful faith early.'
    ],
    keyTakeaways: [
      '100% Clean & Safe for Ages 4-8: Zero weird or worldly distractions.',
      'Includes 30 daily object lessons, coloring prompts, and family questions.',
      'Part of Concept 5: Types and Antitypes (Old Testament figures like Joseph, Moses, David, and Jonah whose lives parallel Jesus).'
    ],
    sampleDayTitle: 'Sample Activity Page - Day 1: The Great Adventure',
    sampleScripture: 'Psalm 119:105 - \'Your Word is a lamp to my feet and a light to my path!\'',
    sampleExcerpt: 'BIBLE DETECTIVE BRIEFING: Did you know God hid amazing clues all through the Old Testament so we could recognize Jesus? Today we are opening our detective notebook to discover how God planned to rescue us from the very beginning!',
    sampleReflectionOrActivity: 'HANDS-ON ACTIVITY & COLORING: Grab your favorite crayons and draw today\'s Bible clue! Then thank Jesus together in prayer for loving your family.',
    directBuyUrl: '/contact/?book=The%20Great%20Adventure',
    amazonUrl: 'https://www.amazon.com/s?k=The%20Great%20Adventure%20Christine%20A',
    googleBooksUrl: 'https://books.google.com/?q=The%20Great%20Adventure%20Christine%20A'
  }
];

export function getBooksByAudience(audience: 'seeker' | 'believer' | 'kids'): Book[] {
  return BOOKS.filter((b) => b.audience === audience);
}

export function getConceptsByAudience(audience: 'seeker' | 'believer' | 'kids'): ConceptGroup[] {
  const audienceBooks = getBooksByAudience(audience);
  const groups: ConceptGroup[] = [];
  for (let i = 1; i <= 5; i++) {
    const cBooks = audienceBooks.filter((b) => b.conceptNumber === i);
    if (cBooks.length > 0) {
      groups.push({
        conceptNumber: i,
        conceptTitle: cBooks[0].conceptTitle,
        conceptFocus: cBooks[0].conceptFocus,
        books: cBooks,
      });
    }
  }
  return groups;
}

export function getFeaturedBooks(): Book[] {
  return BOOKS.filter((b) => b.featured);
}