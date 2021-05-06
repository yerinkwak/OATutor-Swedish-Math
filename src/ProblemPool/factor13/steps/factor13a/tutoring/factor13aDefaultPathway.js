var hints = [{id: "factor13a-h1", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["49 $$=\\left(7\\right) \\left(7\\right)$$, 35 $$=$$ $$\\left(7\\right) \\left(5\\right)$$, 77 $$=$$ $$\\left(11\\right) \\left(7\\right)$$"], dependencies: [], title: "Factor the expression", text: "What are the factors of 49, 35, 77?", choices: ["49 $$=\\left(7\\right) \\left(7\\right)$$, 35 $$=$$ $$\\left(7\\right) \\left(5\\right)$$, 77 $$=$$ $$\\left(11\\right) \\left(7\\right)$$", "49 $$=\\left(8\\right) \\left(8\\right)$$, 35 $$=$$ $$\\left(7\\right) \\left(5\\right)$$, 77 $$=$$ $$\\left(12\\right) \\left(7\\right)$$"], variabilization: {}}, {id: "factor13a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["factor13a-h1"], title: "The greatest common factor", text: "What is the highest common numbers in each?", variabilization: {}}, {id: "factor13a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$${mb}^2$$ $$=$$ m *b *b, $$m^2 ba=m m b a$$, $${ma}^2$$ $$=$$ m * $$a a$$"], dependencies: ["factor13a-h2"], title: "Factor the expression", text: "What are the factors of $${mb}^2$$, $$m^2$$ ba, $${ma}^2$$", choices: ["$${mb}^2$$ $$=$$ m *b *b, $$m^2 ba=m m b a$$, $${ma}^2$$ $$=$$ m * $$a a$$", "$${mb}^2$$ $$=$$ m *b *2, $$m^2 ba=m m b a$$, $${ma}^2$$ $$=$$ m * $$a \\left(2\\right)$$"], variabilization: {}}, {id: "factor13a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["m"], dependencies: ["factor13a-h3"], title: "The greatest common factor", text: "What is the variable which is acommon factor of all three", variabilization: {}}, {id: "factor13a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7m"], dependencies: ["factor13a-h4"], title: "Final GCF", text: "Take the 2 GCFs and multiply them together", variabilization: {}}, ]; export {hints};