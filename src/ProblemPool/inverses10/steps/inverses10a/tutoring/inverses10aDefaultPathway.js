var hints = [{id: "inverses10a-h1", type: "hint", dependencies: [], title: "Finding the Inverse", text: "The general procedure for finding an inverse is to: \\n 1) Replace f(x) with y. \\n 2) Interchange x and y. \\n 3) Solve for y, and rename the function $$f^{-\\left(1\\right)} x$$", variabilization: {}}, {id: "inverses10a-h2", type: "hint", dependencies: ["inverses10a-h1"], title: "Replace f(x) with y", text: "What does the equation look like after replacing f(x) with y?", variabilization: {}}, {id: "inverses10a-h3", type: "hint", dependencies: ["inverses10a-h2"], title: "Interchange x and y", text: "What does the equation look like after interchanging x and y.", variabilization: {}}, {id: "inverses10a-h4", type: "hint", dependencies: ["inverses10a-h3"], title: "Solve for y", text: "Make y the subject.", variabilization: {}}, {id: "inverses10a-h5", type: "hint", dependencies: ["inverses10a-h4"], title: "Solve for y", text: "Multiply the denominator of the fraction to both sides.", variabilization: {}}, {id: "inverses10a-h6", type: "hint", dependencies: ["inverses10a-h5"], title: "Solve for y", text: "Expand out $$x \\left(y-\\left(2\\right)\\right)$$.", variabilization: {}}, {id: "inverses10a-h7", type: "hint", dependencies: ["inverses10a-h6"], title: "Solve for y", text: "Move the y terms to the same side of the equation so that we can isolate y.", variabilization: {}}, {id: "inverses10a-h8", type: "hint", dependencies: ["inverses10a-h7"], title: "Solve for y", text: "Factorize out y.", variabilization: {}}, {id: "inverses10a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{\\left(3\\right)+\\left(2\\right) x}{x-\\left(1\\right)}$$"], dependencies: ["inverses10a-h8"], title: "Solve for y", text: "Divide the coefficient of y from both sides to make y the subject. What is y?", variabilization: {}}, {id: "inverses10a-h10", type: "hint", dependencies: ["inverses10a-h9"], title: "Rename the function $$f^{-\\left(1\\right)} x$$", text: "Replace the y with $$f^{-\\left(1\\right)} x$$.", variabilization: {}}, ]; export {hints};