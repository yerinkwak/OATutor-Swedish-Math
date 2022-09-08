var hints = [{id: "a9ff35apoly5a-h1", type: "hint", dependencies: [], title: "Standard form", text: "The first step is to write the equation in standard form.", variabilization: {}}, {id: "a9ff35apoly5a-h2", type: "hint", dependencies: ["a9ff35apoly5a-h1"], title: "Factoring the quadratic", text: "The next step is to factor the quadratic equation.", variabilization: {}}, {id: "a9ff35apoly5a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["(x-2)(3x-4)"], dependencies: ["a9ff35apoly5a-h2"], title: "Factored form", text: "What is our equation factored?", variabilization: {}}, {id: "a9ff35apoly5a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["a9ff35apoly5a-h3"], title: "Solving for 0", text: "Solve: $$x-2=0$$", variabilization: {}}, {id: "a9ff35apoly5a-h5", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{4}{3}$$"], dependencies: ["a9ff35apoly5a-h4"], title: "Solving for 0", text: "Solve: $$3x-4=0$$", variabilization: {}}, ]; export {hints};