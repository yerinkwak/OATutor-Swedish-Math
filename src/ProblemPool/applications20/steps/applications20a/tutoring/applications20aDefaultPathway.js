var hints = [{id: "applications20a-h1", type: "hint", dependencies: [], title: "Create Variables", text: "Let h represent the husband's earnings and w represent the wife's earning.", variabilization: {}}, {id: "applications20a-h2", type: "hint", dependencies: ["applications20a-h1"], title: "Translate Into System", text: "Together they earn $84,000 translating into $$h+w=84000$$. The husband earns $18,000 less than twice his wife translating into $$h=\\left(2\\right) h-\\left(18000\\right)$$.", variabilization: {}}, {id: "applications20a-h3", type: "hint", dependencies: ["applications20a-h2"], title: "Solve the System", text: "Using substitution we can substitute $$h=\\left(2\\right) w-\\left(18000\\right)$$ into $$h+w=84000$$ to solve for w, the wife's earnings. \\n $$h+w=84000$$ \\n $$\\left(2\\right) w-\\left(18000\\right)+w=84000$$ \\n $$\\left(3\\right) w-\\left(18000\\right)=84000$$ \\n $$\\left(3\\right) w=102000$$", variabilization: {}}, {id: "applications20a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["34000"], dependencies: ["applications20a-h3"], title: "Finding the Wife's Earnings", text: "How much does the wife earn?", variabilization: {}}, ]; export {hints};