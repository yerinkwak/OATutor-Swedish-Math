var hints = [{id: "a0cc26bpoly31a-h1", type: "hint", dependencies: [], title: "Distributive Property Explanation", text: "The distributive property is defined as when you multiply a number by a sum or difference, you have to multiply each term of of the sum or difference by that number.", variabilization: {}}, {id: "a0cc26bpoly31a-h2", type: "hint", dependencies: ["a0cc26bpoly31a-h1"], title: "Splitting Sums", text: "Split the $$\\frac{sum}{difference}$$ that has the least amount of terms into its individual terms, to use the distributive property with.", variabilization: {}}, {id: "a0cc26bpoly31a-h3", type: "hint", dependencies: ["a0cc26bpoly31a-h2"], title: "Splitting Sums", text: "In this case, we will split the $$a^2-\\left(4\\right) c^2$$ into $$a^2$$ and $$-\\left(4\\right) c^2$$.", variabilization: {}}, {id: "a0cc26bpoly31a-h4", type: "hint", dependencies: ["a0cc26bpoly31a-h3"], title: "Multiplying Individual Terms", text: "Multiply each term from the split difference to the other $$\\frac{sum}{difference}$$.", variabilization: {}}, {id: "a0cc26bpoly31a-h5", type: "hint", dependencies: ["a0cc26bpoly31a-h4"], title: "Multiplying Individual Terms", text: "In this case, we will multiple $$a^2$$ by $$a^2+\\left(4\\right) ac+\\left(4\\right) c^2$$ and $$-\\left(4\\right) c^2$$ by $$a^2+\\left(4\\right) ac+\\left(4\\right) c^2$$", variabilization: {}}, {id: "a0cc26bpoly31a-h6", type: "hint", dependencies: ["a0cc26bpoly31a-h5"], title: "Adding Terms", text: "Add all the terms generated after both multiplications and simplify like terms", variabilization: {}}, {id: "a0cc26bpoly31a-h7", type: "hint", dependencies: ["a0cc26bpoly31a-h6"], title: "Adding Terms", text: "In this case, we will add $$a^4$$, $$\\left(4\\right) a^3 c$$, $$\\left(4\\right) a^2 c^2$$, $$-\\left(4\\right) a^2 c^2$$, $$-\\left(4\\right) {ac}^3$$, and $$-\\left(16\\right) c^4$$.", variabilization: {}}, {id: "a0cc26bpoly31a-h8", type: "hint", dependencies: ["a0cc26bpoly31a-h7"], title: "Simplification", text: "Simplify like terms in the sum. Like terms are terms of the same degree.", variabilization: {}}, {id: "a0cc26bpoly31a-h9", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$a^4+\\left(4\\right) a^3 c-\\left(16\\right) {ac}^3-\\left(16\\right) c^4$$"], dependencies: ["a0cc26bpoly31a-h8"], title: "Simplification", text: "After simplification, what is the final polynomial result?", variabilization: {}}, ]; export {hints};