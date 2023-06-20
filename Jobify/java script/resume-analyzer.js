// import pdfjs library
const pdfjsLib = require("pdfjs-dist");

// define resume file path
const resumeFilePath = "/path/to/resume.pdf";

// load PDF file
pdfjsLib.getDocument(resumeFilePath)
  .promise.then((pdf) => {
    // extract text from all pages
    let resumeText = "";
    for (let i = 1; i <= pdf.numPages; i++) {
      pdf.getPage(i).then((page) => {
        page.getTextContent().then((content) => {
          for (let j = 0; j < content.items.length; j++) {
            resumeText += content.items[j].str;
          }
        });
      });
    }

    // wait for all text to be extracted before analyzing
    setTimeout(() => {
      // tokenize resume text
      const tokens = resumeText.toLowerCase().split(/\W+/);

      // remove stop words
      const stopWords = new Set(["i", "have", "in", "and", "also", "with", "such", "as", "the"]);
      const filteredTokens = tokens.filter(token => !stopWords.has(token));

      // extract skills
      const skills = [];
      for (let i = 0; i < filteredTokens.length; i++) {
        if (filteredTokens[i] === "experience") {
          const skill = filteredTokens[i+1];
          if (/^[a-zA-Z]+$/.test(skill) && !stopWords.has(skill)) {
            skills.push(skill);
          }
        }
      }

      console.log(skills); // ["python", "java", "c", "machine", "learning", "algorithms", "k", "nearest", "neighbors", "decision", "trees"]
    }, 5000); // wait 5 seconds for all text to be extracted
  });
