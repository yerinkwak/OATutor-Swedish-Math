var hints = [{id: "Visualize4a-h1", type: "hint", dependencies: [], title: "Defining Simplified Fraction", text: "A fraction is considered simplified if there are no common factors in its numerator and denominator.", variabilization: {}}, {id: "Visualize4a-h2", type: "hint", dependencies: ["Visualize4a-h1"], title: "General Approach", text: "Since it is hard to find all the common factors between the numerator and the denominator by observation, we will rewrite 69 and 120 as the product of primes and divide out the common factors from there.", variabilization: {}}, {id: "Visualize4a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(3\\right) \\left(23\\right)$$"], dependencies: ["Visualize4a-h2"], title: "Rewriting 69", text: "What is 69 written as the product of primes?", choices: ["69 is a prime", "$$\\left(6\\right) \\left(9\\right)$$", "$$\\left(3\\right) \\left(23\\right)$$", "$$\\left(3\\right) \\left(13\\right)$$"], variabilization: {}}, {id: "Visualize4a-h4", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["$$\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(3\\right) \\left(5\\right)$$"], dependencies: ["Visualize4a-h2"], title: "Rewriting 120", text: "What is 120 written as the product of primes?", choices: ["$$\\left(2\\right) \\left(5\\right) \\left(12\\right)$$", "$$\\left(2\\right) \\left(3\\right) \\left(3\\right) \\left(4\\right) \\left(5\\right)$$", "$$\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(3\\right) \\left(5\\right)$$", "$$\\left(2\\right) \\left(2\\right) \\left(3\\right) \\left(3\\right) \\left(5\\right)$$"], variabilization: {}}, {id: "Visualize4a-h5", type: "hint", dependencies: ["Visualize4a-h3", "Visualize4a-h4"], title: "Rewriting Fraction", text: "Plug in the prime factoriazation of both the numerator and the denominator, we can rewrite the fraction as $$-\\left(\\left(3\\right) \\left(23\\right)+\\frac{rightt}{\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(3\\right) \\left(5\\right)}$$.", variabilization: {}}, {id: "Visualize4a-h6", type: "hint", dependencies: ["Visualize4a-h5"], title: "Dividing Common Factors", text: "We can now divide out the common factor 3 from both the top and the bottom, so we are left with the fraction $$-\\left(\\left(23\\right)+\\frac{rightt}{\\left(2\\right) \\left(2\\right) \\left(2\\right) \\left(5\\right)}$$.", variabilization: {}}, {id: "Visualize4a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["$$\\frac{-\\left(23\\right)}{40}$$"], dependencies: ["Visualize4a-h6"], title: "Final Answer", text: "Multiply the bottom. What simplified fraction do you get?", variabilization: {}}, ]; export {hints};