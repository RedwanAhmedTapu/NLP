const sections = [
    {
        title: 'Tokenization',
        description: 'Splitting a text into individual words or tokens.',
        code: `
function tokenize(text) {
return text.split(/\\s+/);
}

const text = "Natural Language Processing is fascinating.";
console.log(tokenize(text)); // Output: ["Natural", "Language", "Processing", "is", "fascinating."]
        `,
        output: `["Natural", "Language", "Processing", "is", "fascinating."]`
    },
    {
        title: 'Stop Words Removal',
        description: 'Removing common words that do not contribute much to the meaning of a sentence.',
        code: `
const stopWords = ["is", "a", "the", "in", "on", "and", "or"];

function removeStopWords(tokens) {
return tokens.filter(token => !stopWords.includes(token.toLowerCase()));
}

const tokens = ["Natural", "Language", "Processing", "is", "fascinating"];
console.log(removeStopWords(tokens)); // Output: ["Natural", "Language", "Processing", "fascinating"]
        `,
        output: `["Natural", "Language", "Processing", "fascinating"]`
    },
    {
        title: 'Stemming',
        description: 'Reducing words to their root form.',
        code: `
const stemmer = require('stemmer');

function stemTokens(tokens) {
return tokens.map(token => stemmer(token));
}

const tokens = ["running", "jumps", "easily"];
console.log(stemTokens(tokens)); // Output: ["run", "jump", "easili"]
        `,
        output: `["run", "jump", "easili"]`
    },
    {
        title: 'Lemmatization',
        description: 'Reducing words to their base or dictionary form.',
        code: `
const { Lemmatizer } = require('node-nlp');

const lemmatizer = new Lemmatizer();

function lemmatizeTokens(tokens) {
return tokens.map(token => lemmatizer.lemmatize(token));
}

const tokens = ["running", "jumps", "easily"];
console.log(lemmatizeTokens(tokens)); // Output: ["run", "jump", "easily"]
        `,
        output: `["run", "jump", "easily"]`
    },
    {
        title: 'Part-of-Speech Tagging',
        description: 'Assigning parts of speech to each word in a sentence.',
        code: `
const { NlpManager } = require('node-nlp');
const manager = new NlpManager();

async function posTagging(text) {
const result = await manager.process('en', text);
return result.entities;
}

const text = "Natural Language Processing is fascinating.";
posTagging(text).then(tags => console.log(tags)); // Output: POS tags for each word
        `,
        output: `POS tags for each word`
    },
    {
        title: 'Named Entity Recognition (NER)',
        description: 'Identifying and classifying named entities in text.',
        code: `
const { NlpManager } = require('node-nlp');
const manager = new NlpManager({ ner: { useDuckling: true } });

async function ner(text) {
const result = await manager.process('en', text);
return result.entities;
}

const text = "Barack Obama was born in Hawaii.";
ner(text).then(entities => console.log(entities)); // Output: NER results
        `,
        output: `NER results`
    },
    {
        title: 'Sentiment Analysis',
        description: 'Determining the sentiment or emotion expressed in a text.',
        code: `
const { SentimentAnalyzer } = require('node-nlp');
const sentiment = new SentimentAnalyzer({ language: 'en' });

async function analyzeSentiment(text) {
const result = await sentiment.getSentiment(text);
return result;
}

const text = "I love programming!";
analyzeSentiment(text).then(result => console.log(result)); // Output: Sentiment analysis result
        `,
        output: `Sentiment analysis result`
    },
    {
        title: 'Text Classification',
        description: 'Classifying text into predefined categories.',
        code: `
const { NlpManager } = require('node-nlp');
const manager = new NlpManager();

async function classify(text) {
const response = await manager.process('en', text);
return response.intent;
}

const text = "Book a flight for tomorrow.";
classify(text).then(intent => console.log(intent)); // Output: Classified intent
        `,
        output: `Classified intent`
    },
    {
        title: 'Language Detection',
        description: 'Detecting the language of a given text.',
        code: `
const franc = require('franc');

function detectLanguage(text) {
return franc(text);
}

const text = "Bonjour tout le monde";
console.log(detectLanguage(text)); // Output: ISO 639-3 code of detected language
        `,
        output: `ISO 639-3 code of detected language`
    },
    {
        title: 'Word Embeddings (using word2vec)',
        description: 'Representing words as vectors in a continuous vector space.',
        code: `
const word2vec = require('word2vec');

function loadModel(modelPath) {
return new Promise((resolve, reject) => {
word2vec.loadModel(modelPath, (error, model) => {
if (error) reject(error);
resolve(model);
});
});
}

async function getWordVector(word) {
const model = await loadModel('path/to/word2vec/model.bin');
return model.getVectors([word]);
}

getWordVector('king').then(vector => console.log(vector)); // Output: Vector representation of the word "king"
        `,
        output: `Vector representation of the word "king"`
    },
    {
        title: 'Text Similarity',
        description: 'Computing the similarity between two texts.',
        code: `
const { WordTokenizer, WordVectorModel } = require('natural');

const tokenizer = new WordTokenizer();
const wvModel = new WordVectorModel('path/to/word2vec/model.bin');

function textSimilarity(text1, text2) {
const tokens1 = tokenizer.tokenize(text1);
const tokens2 = tokenizer.tokenize(text2);
const vector1 = wvModel.getVector(tokens1);
const vector2 = wvModel.getVector(tokens2);
return wvModel.getSimilarity(vector1, vector2);
}

const text1 = "Machine learning is fascinating.";
const text2 = "Artificial intelligence is interesting.";
console.log(textSimilarity(text1, text2)); // Output: Similarity score between 0 and 1
        `,
        output: `Similarity score between 0 and 1`
    },
    {
        title: 'Text Summarization',
        description: 'Generating a concise summary of a longer text.',
        code: `
const { Summarizer } = require('node-nlp');
const summarizer = new Summarizer();

async function summarizeText(text) {
const summary = await summarizer.summarize(text);
return summary;
}

const text = "Natural Language Processing is a field of study focusing on the interaction between computers and human language.";
summarizeText(text).then(summary => console.log(summary)); // Output: Summarized text
        `,
        output: `Summarized text`
    },
    {
        title: 'Text Generation (using Markov Chains)',
        description: 'Generating new text based on the statistical properties of a corpus.',
        code: `
const { MarkovChain } = require('markovchain');

function generateText(corpus) {
const chain = new MarkovChain(corpus);
return chain.start().end(20).process();
}

const corpus = "Natural Language Processing is used in various applications including machine translation and sentiment analysis.";
console.log(generateText(corpus)); // Output: Generated text
        `,
        output: `Generated text`
    },
    {
        title: 'Dependency Parsing',
        description: 'Analyzing the grammatical structure of sentences to determine relationships between words.',
        code: `
const { Parser } = require('dependency-parser-js');
const parser = new Parser();

function parseDependency(text) {
return parser.parse(text);
}

const text = "The quick brown fox jumps over the lazy dog.";
console.log(parseDependency(text)); // Output: Dependency parse tree
        `,
        output: `Dependency parse tree`
    },
    {
        title: 'Text Correction (Spell Checking)',
        description: 'Correcting spelling errors in text.',
        code: `
const { SpellCheck } = require('spellcheck');

const spellchecker = new SpellCheck();
spellchecker.loadDictionary('en-US');

function correctSpelling(text) {
return spellchecker.checkSpelling(text);
}

const text = "This sentenc has a misspelled word.";
console.log(correctSpelling(text)); // Output: Corrected sentence
        `,
        output: `Corrected sentence`
    },
    {
        title: 'Topic Modeling',
        description: 'Identifying topics within a collection of texts.',
        code: `
const { TopicModel } = require('topic-model');

async function generateTopics(corpus) {
const model = new TopicModel();
await model.fit(corpus);
const topics = model.getTopics();
return topics;
}

const corpus = ["Text 1 about machine learning.", "Text 2 discussing natural language processing."];
generateTopics(corpus).then(topics => console.log(topics)); // Output: Identified topics
        `,
        output: `Identified topics`
    }
];
